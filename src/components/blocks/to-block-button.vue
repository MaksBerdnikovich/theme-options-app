<template>
    <div class="to-block-button">
        <div class="to-changed-settings">
            <div class="form-grid">
                <div class="col-2">
                    <to-label>{{ $t('button.style') }}</to-label>
                    <to-select
                        :value="getPrefixedOption('button_style')"
                        @input="setPrefixedOption('button_style',$event)"
                        :options="buttonStyle"
                    />
                </div>
                <div class="col-2">
                    <to-label>{{ $t('button.text_weight') }}</to-label>
                    <to-select
                        :value="getPrefixedOption('button_text_weight')"
                        @input="setPrefixedOption('button_text_weight',$event)"
                        :options="buttonTextWeight"
                    />
                </div>
            </div>
        </div>

        <div class="to-changed-settings">
            <div class="form-grid">
                <div class="col-auto">
                    <to-label>{{ $t('button.size') }}</to-label>
                    <to-radio-toggle
                        :value="getPrefixedOption('button_size')"
                        @input="setPrefixedOption('button_size',$event)"
                        :options="buttonSize">
                    </to-radio-toggle>
                </div>
                <div class="col-auto">
                    <to-label>{{ $t('button.position') }}</to-label>
                    <to-radio-toggle
                        :value="getPrefixedOption('button_position')"
                        @input="setPrefixedOption('button_position',$event)"
                        :options="buttonPosition">
                    </to-radio-toggle>
                </div>
            </div>
        </div>

        <div class="to-changed-settings">
            <div class="form-grid">
                <div class="col-2">
                    <to-block-label-slider-input
                        label-icon="line-width"
                        v-bind:label-title="$t('button.border_width')"
                        :min="0" :max="6" unit="px"
                        :value="getPrefixedOption('button_border')"
                        @input="setPrefixedOption('button_border',$event)"
                    />
                </div>
                <div class="col-2">
                    <to-block-label-slider-input
                        label-icon="rounded-corner"
                        v-bind:label-title="$t('button.border_radius')"
                        :min="0" :max="50" unit="px"
                        :value="getPrefixedOption('button_corner')"
                        @input="setPrefixedOption('button_corner',$event)"
                    />
                </div>
            </div>
        </div>

        <div class="to-changed-settings">
            <div class="form-grid">
                <div class="col-4">
                    <to-color-picker
                        :value="getPrefixedOption('button_background_color')"
                        @input="setPrefixedOption('button_background_color',$event)"
                        :label-title="$t('colors.background_color')"/>
                </div>
                <div class="col-4">
                    <to-color-picker
                        :value="getPrefixedOption('button_hover_background_color')"
                        @input="setPrefixedOption('button_hover_background_color',$event)"
                        :label-title="$t('colors.background_hover')"/>
                </div>
                <div class="col-4">
                    <to-color-picker
                        :value="getPrefixedOption('button_border_color')"
                        @input="setPrefixedOption('button_border_color',$event)"
                        :label-title="$t('colors.border_color')"/>
                </div>
                <div class="col-4">
                    <to-color-picker
                        :value="getPrefixedOption('button_hover_border_color')"
                        @input="setPrefixedOption('button_hover_border_color',$event)"
                        :label-title="$t('colors.border_hover')"/>
                </div>
            </div>
        </div>

        <div class="to-changed-settings">
            <div class="form-grid">
                <div class="col-4 col-tb-auto">
                    <to-label>{{ $t('button.text_weight') }}</to-label>
                    <to-select
                        :value="getPrefixedOption('button_text_weight')"
                        @input="setPrefixedOption('button_text_weight',$event)"
                        :options="buttonTextWeight"
                    />
                </div>
                <div class="col-auto col-tb-auto">
                    <to-label>{{ $t('button.text_style') }}</to-label>
                    <to-radio-toggle
                        :value="getPrefixedOption('button_text_style')"
                        @input="setPrefixedOption('button_text_style',$event)"
                        :options="buttonTextStyle">
                    </to-radio-toggle>
                </div>
                <div class="col-auto col-tb-auto">
                    <to-label>{{ $t('button.text_transform') }}</to-label>
                    <to-radio-toggle
                        :value="getPrefixedOption('button_text_transform')"
                        @input="setPrefixedOption('button_text_transform',$event)"
                        :options="buttonTextTransform">
                    </to-radio-toggle>
                </div>
            </div>
        </div>

        <div class="to-changed-settings">
            <div class="form-grid">
                <div class="col-4">
                    <to-color-picker
                        :value="getPrefixedOption('button_text_color')"
                        @input="setPrefixedOption('button_text_color',$event)"
                        :label-title="$t('colors.text_color')"/>
                </div>
                <div class="col-4">
                    <to-color-picker
                        :value="getPrefixedOption('button_hover_text_color')"
                        @input="setPrefixedOption('button_hover_text_color',$event)"
                        :label-title="$t('colors.text_color_hover')"/>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import {addHelpers} from '@/services/helper';
    import i18n from '@/services/i18n';

    export default addHelpers({
        data: () => {
            return {
                buttonStyle: [
                    {label: i18n.t('general.flat'), value: 'flat'},
                    {label: i18n.t('general.outline'), value: 'outline'},
                ],
                buttonSize: [
                    {icon: 'size-5', title: i18n.t('general.tiny'), value: 'tiny'},
                    {icon: 'size-4', title: i18n.t('general.small'), value: 'small'},
                    {icon: 'size-3', title: i18n.t('general.medium'), value: 'medium'},
                    {icon: 'size-2', title: i18n.t('general.large'), value: 'large'},
                    {icon: 'size-1', title: i18n.t('general.giant'), value: 'giant'},
                ],
                buttonPosition: [
                    {icon: 'align-left', value: 'left'},
                    {icon: 'align-center', value: 'center'},
                    {icon: 'align-right', value: 'right'},
                    {icon: 'align-justify', value: 'fullwidth'},
                ],
                buttonTextWeight: [
                    {label: i18n.t('general.normal'), value: 'normal'},
                    {label: i18n.t('general.thin'), value: 'thin'},
                ],
                buttonTextStyle: [
                    {value: '', icon: 'text', tooltip: i18n.t('font.style_normal')},
                    {value: 'italic', icon: 'italic', tooltip: i18n.t('font.style_italic')},
                    {value: 'oblique', icon: 'oblique-custom', tooltip: i18n.t('font.style_oblique')},
                ],
                buttonTextTransform: [
                    {value: 'none', icon: 'text', tooltip: i18n.t('font.transform_none')},
                    {value: 'lowercase', icon: 'lowercase-2', tooltip: i18n.t('font.transform_lowercase')},
                    {value: 'uppercase', icon: 'uppercase', tooltip: i18n.t('font.transform_uppercase')},
                    {value: 'capitalize', icon: 'lowercase', tooltip: i18n.t('font.transform_capitalize')},
                ],
            }
        },

        props: {
            optionPrefix: {
                type: String,
                required: true
            },
        }
    });
</script>
