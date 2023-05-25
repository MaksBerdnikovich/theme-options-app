<template>
    <div>
        <to-panel id="panel.custom_css_editor">

            <to-panel-group :label-title="$t('panel.custom_css')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.custom_css_and_js_custom_css') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-codemirror
                        :value="getOption('custom_css')"
                        @input="setOption('custom_css',$event)"
                        lang="css"
                    />
                </div>

            </to-panel-group>

        </to-panel>
    </div>
</template>

<script>
import {addHelpers} from '@/services/helper';

export default addHelpers({
    data() {
        return {
        }
    }
})
</script>
