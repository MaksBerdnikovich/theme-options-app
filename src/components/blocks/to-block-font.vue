<template>
    <div class="to-block-font">
        <div v-if="!showOnlyResponsiveSettings" class="form-line">
            <to-label>{{ $t('font.family') }}</to-label>
            <to-select :value="getPrefixedOption('font_family')" @input="setPrefixedOption('font_family',$event)" :options="fontFamilyOptions">
                <template v-slot:option="option">
                    <to-font-family-picker-option :font="option.label">{{ option.label }}</to-font-family-picker-option>
                </template>
            </to-select>
        </div>

        <div v-if="showSizes" class="form-line">
            <to-block-label-slider-input
                :min="0" :max="200" unit="px"
                :value="getPrefixedOption('font_size'+responsiveSuffix)"
                @input="setResponsiveOption('font_size',$event)"
                v-bind:label-title="$t('font.size')"
            />
        </div>

        <div v-if="!showOnlyResponsiveSettings" class="form-line col-2 col-auto">
            <to-label>{{ $t('font.weight') }}</to-label>
            <to-select :value="fontWeight" @input="setFontWeight" :options="fontWeightOptions"/>
        </div>

        <div v-if="!showOnlyResponsiveSettings" class="form-line col-2 col-auto">
            <to-label>{{ $t('font.sets') }}<a href="#" v-on:click="getFontSetsFromFont($event)">{{$t('font.get_from_font')}}</a></to-label>
            <to-input :value="getPrefixedOption('font_sets')" @input="setPrefixedOption('font_sets',$event)"></to-input>
        </div>

        <div v-if="showSizes" class="form-line">
            <to-block-label-slider-input
                :min="0" :max="200" unit="px"
                :value="getPrefixedOption('line_height'+responsiveSuffix)"
                @input="setResponsiveOption('line_height',$event)"
                v-bind:label-title="$t('font.line_height')"
            />
        </div>

        <div v-if="!showOnlyResponsiveSettings" class="form-line col-2 col-auto">
            <to-label>{{ $t('font.style') }}</to-label>
            <to-radio-toggle :value="fontStyle" @input="setFontStyle" :options="fontStyleOptions"/>
        </div>

        <div v-if="showTransform && !showOnlyResponsiveSettings" class="form-line col-2 col-auto">
            <to-label>{{ $t('font.transform') }}</to-label>
            <to-radio-toggle :options="textTransformOptions" :value="getPrefixedOption('text_transform')" @input="setPrefixedOption('text_transform',$event)"/>
        </div>

        <div v-if="(showSizes && !showOnlyResponsiveSettings) || showLetterSpacing" class="form-line">
            <to-block-label-slider-input
                :min="0" :max="10" :step="0.1" unit="px"
                :value="getPrefixedOption('letter_spacing')"
                @input="setPrefixedOption('letter_spacing',$event)"
                v-bind:label-title="$t('font.letter_spacing')"
            />
        </div>

        <div class="form-line preview" v-if="exCollapsed">
            <to-button :icon="!collapsed ? 'eye-closed':'eye'" :class="'toggle-button'" v-on:click="toggleCollapsing()">
                {{ $t('font.preview') }}
            </to-button>
            <div v-if="collapsed" v-bind:class="{'toggle-preview':true, '': !collapsed, 'open': collapsed}">
                <div class="to-block-font-preview" v-bind:style="textStyles">{{ testText }}</div>
                <div class="to-block-font-example">
                    <to-label>{{ $t('font.example') }}</to-label>
                    <to-input v-model="testText"></to-input>
                </div>
            </div>
        </div>

        <div class="form-line preview" v-if="!exCollapsed">
            <to-button :icon="collapsed ? 'eye-closed':'eye'" :class="'toggle-button'" v-on:click="toggleCollapsing()">
                {{ $t('font.preview') }}
            </to-button>
            <div v-if="!collapsed" v-bind:class="{'toggle-preview':true, '': collapsed, 'open': !collapsed}">
                <div class="to-block-font-preview" v-bind:style="textStyles">{{ testText }}</div>
                <div class="to-block-font-example">
                    <to-label>{{ $t('font.example') }}</to-label>
                    <to-input v-model="testText"></to-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {addHelpers} from '@/services/helper';
    import config from '@/services/config';
    import i18n from '@/services/i18n';
    import fontLoader from '@/services/font-loader';

    export default addHelpers({
        data: () => {
            return {
                fontWeightOptions: [
                    {value: '100', label: '100'},
                    {value: '200', label: '200'},
                    {value: '300', label: '300'},
                    {value: '400', label: '400 ' + i18n.t('font.weight_normal')},
                    {value: '500', label: '500'},
                    {value: '600', label: '600'},
                    {value: '700', label: '700 ' + i18n.t('font.weight_bold')},
                    {value: '800', label: '800'},
                    {value: '900', label: '900'},
                    //{value: 'normal',label: i18n.t('font.weight_normal')},
                    //{value: 'bold',label: i18n.t('font.weight_bold')},
                ],

                fontStyleOptions: [
                    {value: 'normal', icon: 'text', tooltip: i18n.t('font.style_normal')},
                    {value: 'italic', icon: 'italic', tooltip: i18n.t('font.style_italic')},
                    {value: 'oblique', icon: 'oblique-custom', tooltip: i18n.t('font.style_oblique')},
                ],

                textTransformOptions: [
                    {value: 'none', icon: 'text', tooltip: i18n.t('font.transform_none')},
                    {value: 'lowercase', icon: 'lowercase-2', tooltip: i18n.t('font.transform_lowercase')},
                    {value: 'uppercase', icon: 'uppercase', tooltip: i18n.t('font.transform_uppercase')},
                    {value: 'capitalize', icon: 'lowercase', tooltip: i18n.t('font.transform_capitalize')},
                ],

                testText: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',

                collapsed: true
            };
        },

        props: {
            optionPrefix: {
                type: String,
                required: true
            },
            responsiveType: {
                type: String,
                required: false
            },
            showSizes: {
                type: Boolean,
                required: false,
                default: true
            },
            showTransform: {
                type: Boolean,
                required: false,
                default: true
            },
            showLetterSpacing: {
                type: Boolean,
                required: false,
                default: false
            },
            exCollapsed: {
                type: Boolean,
                required: false,
                default: false
            }
        },

        computed: {
            showOnlyResponsiveSettings() {
                return this.responsiveType && this.responsiveType != 'desktop';
            },

            responsiveSuffix() {
                if (this.responsiveType) {
                    if (this.responsiveType == 'tablet') {
                        return '_tablet';
                    }
                    if (this.responsiveType == 'mobile') {
                        return '_mobile';
                    }
                }
                return '';
            },


            fontWeight() {
                var matches = this.parseFontWeightStyle();
                return matches ? matches[1] : 'normal';
            },

            fontStyle() {
                var matches = this.parseFontWeightStyle();
                return matches ? matches[2] : 'normal';
            },

            fontFamilyOptions() {
                const gdprFontsType = config.gdpr_extras_google_fonts;

                let fonts = config.fonts
                if (gdprFontsType === 'thegem_fonts') {
                    fonts = config.fonts.slice(0, 13)
                }
                if (gdprFontsType === 'default_fonts') {
                    fonts = config.fonts.slice(4, 13)
                }

                var options = fonts.map((font) => {
                    return {
                        value: font.family,
                        label: font.family
                    };
                });

                return options;
            },

            textStyles() {
                var matches = this.parseFontWeightStyle();

                var styles = {
                    'font-family': this.getPrefixedOption('font_family'),
                    'font-weight': matches[1],
                    'font-style': matches[2] ? matches[2] : 'normal',
                    'font-size': this.getPrefixedOption('font_size' + this.responsiveSuffix) + 'px',
                    'line-height': this.getPrefixedOption('line_height' + this.responsiveSuffix) + 'px',
                    'letter-spacing': this.getPrefixedOption('letter_spacing') + 'px',
                    'text-transform': this.getPrefixedOption('text_transform')
                };

                fontLoader.load(styles['font-family'], false);

                return styles;
            }
        },

        methods: {
            visibilityChanged() {
                window.console.log('got it!');
            },

            setResponsiveOption(name, $event) {
                const fullName = name + this.responsiveSuffix;

                if (this.responsiveType && this.responsiveType != 'desktop' &&
                    this.getPrefixedOption('custom_responsive_fonts') != 1 && $event != this.getPrefixedOption(fullName)) {
                    this.setPrefixedOption('custom_responsive_fonts',"1");
                }

                this.setPrefixedOption(fullName, $event);
            },

            parseFontWeightStyle() {
                var result = this.getPrefixedOption('font_style').match(/^(\d+|regular|normal|bold)(|normal|italic|oblique)$/);
                if (!result) {
                    window.console.error('failed to parse font style ' + this.getPrefixedOption('font_style'));
                }

                if (result[2] == '') {
                    result[2] = 'normal';
                }
                if (result[1] == 'regular') {
                    result[1] = 'normal';
                }

                return result;
            },

            setFontStyle(value) {
                this.setPrefixedOption('font_style', this.fontWeight + value);
            },

            setFontWeight(value) {
                this.setPrefixedOption('font_style', value + this.fontStyle);
            },

            getFontData(family) {
                for (let font of config.fonts) {
                    if (font.family == family) {
                        return font;
                    }
                }
            },

            getFontSetsFromFont($event) {
                $event.preventDefault();

                var font = this.getFontData(this.getPrefixedOption('font_family'));

                if (font) {
                    this.setPrefixedOption('font_sets', font.subsets ? font.subsets.join(',') : '');
                }
            },

            toggleCollapsing() {
                this.collapsed = !this.collapsed;
            },
        },

        created() {
            /*
            var allFonts=config.fonts.map((font)=>font.family+':400:latin');
            window.console.log(allFonts);
            WebFontLoader.load({
                google: {
                    families: allFonts
                },
            });
            */
        }
    })
</script>


<style lang="scss">
#thegem-options {
    .to-block-font {
        display: flex;
        flex-wrap: wrap;
        margin: -20px -15px 0 -15px;

        .form-line {
            width: 50%;
            padding: 0 15px;
            margin-top: 20px;

            &.col-2 {
                width: 25%;
            }

            &.preview {
                width: 100%;

                .toggle-button {
                    flex-direction: row-reverse;
                    min-height: auto;
                    max-width: none;

                    line-height: 1.3;
                    text-transform: capitalize;
                    font-size: 12px;

                    span {
                        padding-right: 5px;
                    }

                    i {
                        min-width: auto;
                        margin-top: -1px;
                    }
                }
            }

            .to-radio-toggle {
                button.only-icon {
                    min-width: 36px;
                }
            }

            .form-line-label {
                label{
                    white-space: nowrap;
                    overflow: hidden;
                }
                a {
                    padding-left: 5px;
                    color: $cyan-color;
                    text-decoration: underline;

                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }

        .toggle-preview {
            opacity: 0;
            height: 0;
            margin-top: 10px;

            &.open {
                height: auto;
                opacity: 1;
                transition: $element-transition;
            }

            .to-block-font-preview {
                width: 100%;
                padding: 20px;
                overflow: hidden;

                background-image: url("../../assets/img/pattern.jpg");
                background-repeat: repeat;
                border: 1px solid $light-border-color;
                border-radius: $element-border-radius;

                word-wrap: break-word;
            }

            .to-block-font-example {
                display: flex;
                align-items: center;
                margin-top: 25px;

                .form-line-label {
                    width: auto;
                    padding-bottom: 0;
                }

                .to-input-group {
                    margin-left: auto;
                    width: calc(100% - 90px);
                }
            }
        }
    }

    @media (max-width: 1279px) {
        .to-block-font {
            .form-line {
                width: 50%;

                &.col-auto {
                    width: 50%;
                }
            }
        }
    }
}

#thegem-options.theme-dark {
    .to-block-font .toggle-preview .to-block-font-preview{
        color: $light-body-color;
    }
}
</style>
