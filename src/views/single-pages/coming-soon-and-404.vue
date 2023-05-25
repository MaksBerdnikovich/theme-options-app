<template>
    <div>
        <to-panel id="panel.404_page">
            <to-panel-group :label-title="$t('panel.404_page_custom')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.single_pages_404_page') }}
                        </div>
                    </div>
                </template>

                <div class="to-changed-settings">
                    <to-switch :value="getOption('page_404_custom')" @input="setOption('page_404_custom',$event)"/>
                </div>

                <div class="to-changed-settings" v-if="getOption('page_404_custom')">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label>{{ $t('settings.404_page_select') }}</to-label>
                            <to-select :value="getOption('404_page')" @input="setOption('404_page', $event)" :options="custom404" v-on:right-button-clicked="showPreview($event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>
    </div>
</template>


<script>
import {addHelpers} from '@/services/helper';
import config from '@/services/config';


export default addHelpers({
    data() {
        let pages = JSON.parse(JSON.stringify(config.pages));
        for(let item of pages) {
            if (item.preview) {
                item.rightButton = {icon: 'eye'};
            }
        }

        return {
            custom404: pages
        }
    },

    methods: {
        showPreview(item) {
            window.open(item.preview,'_blank');
        }
    }

})
</script>
