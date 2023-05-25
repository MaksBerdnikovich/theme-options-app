<template>
    <div>
        <to-panel id="panel.tracking_code">

            <to-panel-group :label-title="$t('panel.tracking_code_socials')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.custom_css_and_js_tracking_code') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-codemirror
                        :value="getOption('tracking_js')"
                        @input="setOption('tracking_js',$event)"
                        lang="js"
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
