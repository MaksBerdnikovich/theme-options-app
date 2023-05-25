<template>
    <div>
        <to-panel id="panel.lazy_loading">

            <to-panel-group :label-title="$t('panel.lazy_loading_mobile')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.performance_animation_lazy_loading_animations') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch
                        :value="getOption('enable_mobile_lazy_loading')"
                        @input="setOption('enable_mobile_lazy_loading',$event)"
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
