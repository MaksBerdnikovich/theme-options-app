<template>
    <div>
        <to-panel id="panel.default_hover">

            <to-panel-group :label-title="$t('panel.default_hover_color')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_hover_colors') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Hover_Colors_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('hover_effect_default_color')"
                                @input="setOption('hover_effect_default_color',$event)"
                                :label-title="$t('colors.cyan_breeze_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('hover_effect_zooming_blur_color')"
                                @input="setOption('hover_effect_zooming_blur_color',$event)"
                                :label-title="$t('colors.zooming_white_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('hover_effect_horizontal_sliding_color')"
                                @input="setOption('hover_effect_horizontal_sliding_color',$event)"
                                :label-title="$t('colors.horizontal_sliding_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('hover_effect_vertical_sliding_color')"
                                @input="setOption('hover_effect_vertical_sliding_color',$event)"
                                :label-title="$t('colors.vertical_sliding_hover')"/>
                        </div>
                    </div>
                    <to-separator></to-separator>
                </div>

                <div class="to-changed-settings">
                    <to-label>{{ $t('colors.gradient_hover') }}</to-label>
                    <to-block-gradient option-prefix="gradient_hover"></to-block-gradient>
                    <to-separator></to-separator>
                </div>

                <div class="to-changed-settings">
                    <to-label>{{ $t('colors.circular_overlay_hover') }}</to-label>
                    <to-block-gradient option-prefix="circular_overlay_hover"></to-block-gradient>
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
