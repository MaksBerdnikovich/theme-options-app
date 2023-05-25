<template>
    <div>
        <to-panel id="panel.custom_js_editor">
            <to-panel-group :label-title="$t('panel.custom_js_header')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.custom_css_and_js_custom_js_in_website_header') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-codemirror :value="getOption('custom_js_header')" @input="setOption('custom_js_header',$event)" lang="js"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.custom_js_footer')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.custom_css_and_js_custom_js_in_website_footer') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-codemirror :value="getOption('custom_js')" @input="setOption('custom_js',$event)" lang="js"/>
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
