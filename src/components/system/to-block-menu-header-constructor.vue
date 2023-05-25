<template>
    <div>
        <div v-if="isDesktop">
            <div class="to-changed-settings">
                <to-radio-icon
                    :value="getOption('header_layout')"
                    @input="setOption('header_layout',$event)"
                    :class="getOption('page_layout_style') == 'body-frame' ? 'hide-header-layout--vertical' : ''"
                    :options="headerLayout">
                </to-radio-icon>
            </div>

            <div class="to-changed-settings">
                <div class="form-grid">
                    <div class="col-auto">
                        <to-label>{{ $t('headerLayout.width_menu') }}</to-label>
                        <to-radio-toggle
                            :value="headerWidthDisabled ? '#' : getOption('header_width')"
                            @input="setOption('header_width',$event)"
                            :options="headerWidth"
                            :disabled="headerWidthDisabled"
                        />
                    </div>
                    <div class="col-auto">
                        <to-label>{{ $t('headerLayout.hamburger') }}</to-label>
                        <to-radio-toggle
                            :value="hamburgerMenuIconSizeDisabled ? '#' : getOption('hamburger_menu_icon_size')"
                            @input="setOption('hamburger_menu_icon_size',$event)"
                            :options="hamburgerMenuIconSize"
                            :disabled="hamburgerMenuIconSizeDisabled"
                        />
                    </div>
                    <div class="col-auto">
                        <to-label>{{ $t('headerLayout.logo_align') }}</to-label>
                        <to-radio-toggle
                            :value="logoPositionDisabled ? '#' : getOption('logo_position')"
                            @input="setOption('logo_position',$event)"
                            :options="logoPosition"
                            :disabled="logoPositionDisabled"
                        />
                    </div>
                    <div class="col-auto">
                        <to-label>{{ $t('headerLayout.top_area') }}</to-label>
                        <to-switch :value="getOption('top_area_show')" @input="setOption('top_area_show',$event)"/>
                    </div>
                    <div class="col-auto" v-if="getOption('top_area_show') == 1">
                        <to-label>{{ $t('headerLayout.width_top_area') }}</to-label>
                        <to-radio-toggle
                            :value="getOption('top_area_width')"
                            @input="setOption('top_area_width',$event)"
                            :options="topAreaWidth"
                        />
                    </div>
                </div>
            </div>

            <div class="to-changed-settings">
                <div class="form-grid">
                    <div class="col-2">
                        <to-label>{{ $t('headerLayout.menu_and_header_style') }}</to-label>
                        <to-select
                            :value="getOption('header_style')"
                            @input="setOption('header_style',$event)"
                            :options="headerStyle">
                        </to-select>
                    </div>
                    <div class="col-2" v-if="getOption('top_area_show')">
                        <to-label>{{ $t('headerLayout.top_area_style') }}</to-label>
                        <to-select
                            :value="getOption('top_area_style')"
                            @input="setOption('top_area_style',$event)"
                            :options="topAreaStyle">
                        </to-select>
                    </div>
                </div>
            </div>

            <div class="to-changed-settings">
                <div class="form-grid">
                    <div class="col-1">
                        <to-label>{{ $t('general.preview') }}</to-label>
                        <div class="iframe-preview">
                            <iframe :src="previewUrl" scrolling="no" @load="iframeOnLoad('f1',previewUrl)"></iframe>
                            <div class="iframe-preview-loading" v-if="!isIframeLoaded('f1', previewUrl)"> {{$t('headerLayout.preview_is_loading')}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isTablet">
            <div class="to-changed-settings">
                <div class="form-grid">
                    <div class="col-auto">
                        <to-label>{{ $t('headerLayout.top_area_tablets') }}</to-label>
                        <to-switch
                            true-value=""
                            false-value="1"
                            :value="getOption('top_area_disable_tablet')"
                            @input="setOption('top_area_disable_tablet',$event)"
                        />
                    </div>
                </div>
            </div>

            <div class="to-changed-settings">
                <div class="form-grid">
                    <div class="col-2">
                        <to-label>{{ $t('headerLayout.menu_layout_tablets_portrait') }}</to-label>
                        <to-select
                            :value="getOption('menu_appearance_tablet_portrait')"
                            @input="setOption('menu_appearance_tablet_portrait',$event)"
                            :options="menuAppearanceTabletPortrait">
                        </to-select>
                    </div>
                </div>
            </div>

            <div class="to-changed-settings">
                <div class="form-grid">
                    <div class="col-1">
                        <to-label>{{ $t('general.preview') }}</to-label>
                        <div class="iframe-preview tablet" style="width:485px;">
                            <iframe :src="previewUrlTabletPortrait" scrolling="no" @load="iframeOnLoad('f2',previewUrlTabletPortrait)"></iframe>
                            <div class="iframe-preview-loading" v-if="!isIframeLoaded('f2', previewUrlTabletPortrait)"> {{$t('headerLayout.preview_is_loading')}}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="to-changed-settings">
                <div class="form-grid">
                    <div class="col-2">
                        <to-label>{{ $t('headerLayout.menu_layout_tablets_landscape') }}</to-label>
                        <to-select
                            :value="getOption('menu_appearance_tablet_landscape')"
                            @input="setOption('menu_appearance_tablet_landscape',$event)"
                            :options="menuAppearanceTabletLandscape">
                        </to-select>
                    </div>
                </div>
            </div>

            <div class="to-changed-settings">
                <div class="form-grid">
                    <div class="col-1">
                        <to-label>{{ $t('general.preview') }}</to-label>
                        <div class="iframe-preview tablet" style="width:600px;">
                            <iframe :src="previewUrlTabletLandscape" scrolling="no" @load="iframeOnLoad('f3',previewUrlTabletLandscape)"></iframe>
                            <div class="iframe-preview-loading" v-if="!isIframeLoaded('f3', previewUrlTabletLandscape)"> {{$t('headerLayout.preview_is_loading')}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="isMobile">
            <div class="to-changed-settings">
                <to-radio-icon class="width-70" :value="getOption('mobile_menu_layout')" @input="setOption('mobile_menu_layout',$event)" :options="mobileMenuLayout"></to-radio-icon>
            </div>

            <div class="to-changed-settings">
                <div class="form-grid">
                    <div class="col-2">
                        <to-label>{{ $t('headerLayout.mobile_menu_layout_style') }}</to-label>
                        <to-select :value="getOption('mobile_menu_layout_style')" @input="setOption('mobile_menu_layout_style',$event)" :options="mobileMenuLayoutStyle"></to-select>
                    </div>
                    <div class="col-auto">
                        <to-label>{{ $t('headerLayout.top_area_mobile') }}</to-label>
                        <to-switch true-value="" false-value="1" :value="getOption('top_area_disable_mobile')" @input="setOption('top_area_disable_mobile',$event)"/>
                    </div>
                    <div class="col-auto" v-if="getOption('mobile_menu_layout') == 'slide-horizontal' || getOption('mobile_menu_layout') == 'slide-vertical'">
                        <to-label>{{ $t('headerLayout.menu_socials_mobile') }}</to-label>
                        <to-switch :value="getOption('show_menu_socials_mobile')" @input="setOption('show_menu_socials_mobile',$event)"/>
                    </div>
                </div>
            </div>

            <div class="to-changed-settings">
                <div class="form-grid">
                    <div class="col-1">
                        <to-label>{{ $t('general.preview') }}</to-label>
                        <div class="iframe-preview mobile">
                            <iframe :src="previewUrl" scrolling="no" @load="iframeOnLoad('f4',previewUrl)"></iframe>
                            <div class="iframe-preview-loading" v-if="!isIframeLoaded('f4', previewUrl)"> {{$t('headerLayout.preview_is_loading')}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {addHelpers} from '@/services/helper';
import i18n from '@/services/i18n';
import config from '@/services/config';


export default addHelpers({
    data() {
        return {
            headerLayout: [
                {
                    icon: 'Schemes-08',
                    title: i18n.t('headerLayout.horizontal'),
                    value: 'default'
                },
                {
                    icon: 'Schemes-09',
                    title: i18n.t('headerLayout.hamburger'),
                    value: 'fullwidth_hamburger'
                },
                {
                    icon: 'Schemes-10',
                    title: i18n.t('headerLayout.overlay'),
                    value: 'overlay'
                },
                {
                    icon: 'Schemes-11',
                    title: i18n.t('headerLayout.perspective'),
                    value: 'perspective'
                },
                {
                    icon: 'Schemes-36',
                    title: i18n.t('headerLayout.vertical'),
                    value: 'vertical'
                },
            ],
            topAreaStyle: [
                {
                    label: i18n.t('headerLayout.top_area_style_light'),
                    value: '1'
                },
                {
                    label: i18n.t('headerLayout.top_area_style_dark'),
                    value: '2'
                },
                {
                    label: i18n.t('headerLayout.top_area_style_anthracite'),
                    value: '3'
                },
            ],
            menuAppearanceTabletPortrait: [
                {
                    label: i18n.t('headerLayout.as_set_for_mobile'),
                    value: 'responsive'
                },
                {
                    label: i18n.t('headerLayout.centered'),
                    value: 'centered'
                },
                {
                    label: i18n.t('headerLayout.default'),
                    value: 'default'
                },
            ],
            menuAppearanceTabletLandscape: [
                {
                    label: i18n.t('headerLayout.as_set_for_mobile'),
                    value: 'responsive'
                },
                {
                    label: i18n.t('headerLayout.centered'),
                    value: 'centered'
                },
                {
                    label: i18n.t('headerLayout.default'),
                    value: 'default'
                },
            ],
            mobileMenuLayout:  [
                {
                    icon: 'Schemes-28',
                    title: i18n.t('headerLayout.default'),
                    value: 'default'
                },
                {
                    icon: 'Schemes-31',
                    title: i18n.t('headerLayout.overlay'),
                    value: 'overlay'
                },
                {
                    icon: 'Schemes-29',
                    title: i18n.t('headerLayout.slide_left'),
                    value: 'slide-horizontal'
                },
                {
                    icon: 'Schemes-30',
                    title: i18n.t('headerLayout.slide_top'),
                    value: 'slide-vertical'
                },
            ],
            mobileMenuLayoutStyle: [
                {
                    label: i18n.t('headerLayout.light_menu'),
                    value: 'light'
                },
                {
                    label: i18n.t('headerLayout.dark_menu'),
                    value: 'dark'
                },
            ],
            hamburgerMenuIconSize: [
                {
                    icon: 'menu',
                    tooltip: i18n.t('general.default'),
                    value:''
                },
                {
                    icon: 'activity-feed',
                    tooltip: i18n.t('general.small'),
                    value:'1'
                }
            ],
            iframeLoadedSrc: {}
        }
    },

    props: {
        isDesktop: {
            type: Boolean,
            required: true
        },
        isTablet: {
            type: Boolean,
            required: true
        },
        isMobile: {
            type: Boolean,
            required: true
        }
    },

    computed: {
        layout() {
            return this.getOption('header_layout');
        },

        headerWidthDisabled() {
            return ['vertical'].indexOf(this.getOption('header_layout')) >= 0;
        },

        headerWidth() {
            const layout = this.getOption('header_layout');
            return [
                {
                    disabled: ['overlay', 'fullwidth_hamburger'].indexOf(layout)>=0,
                    icon: 'view-array',
                    tooltip:i18n.t('headerLayout.width_normal'),
                    value:'normal'
                },
                {
                    icon: 'resize-horizontal',
                    tooltip:i18n.t('headerLayout.width_full'),
                    value:'full'
                }
            ];
        },

        topAreaWidth() {
            return [
                {
                    icon: 'view-array',
                    tooltip:i18n.t('headerLayout.width_normal'),
                    value:'normal'
                },
                {
                    icon: 'resize-horizontal',
                    tooltip:i18n.t('headerLayout.width_full'),
                    value:'full'
                }
            ];
        },

        hamburgerMenuIconSizeDisabled() {
            return ['vertical', 'default'].indexOf(this.getOption('header_layout')) >= 0;
        },

        logoPositionDisabled() {
            return ['vertical'].indexOf(this.getOption('header_layout')) >= 0;
        },

        logoPosition() {
            const layout = this.getOption('header_layout');

            return [
                {
                    icon: 'align-left',
                    tooltip: i18n.t('general.left'),
                    value: 'left'},
                {
                    icon: 'align-right',
                    tooltip: i18n.t('general.right'),
                    value: 'right'
                },
                {
                    disabled: ['perspective', 'overlay', 'fullwidth_hamburger'].indexOf(layout)>=0,
                    icon: 'align-center',
                    tooltip: i18n.t('general.center'),
                    value: 'center'
                },
                {
                    disabled: ['perspective', 'overlay', 'fullwidth_hamburger'].indexOf(layout)>=0,
                    icon: 'divider',
                    tooltip: i18n.t('general.split'),
                    value: 'menu_center'
                },
            ];
        },

        headerStyle() {
            const layout = this.getOption('header_layout');

            return [
                {
                    label: i18n.t('headerLayout.light_menu_dark_submenu'),
                    value: '1'
                },
                {
                    disabled: layout == 'overlay',
                    label: i18n.t('headerLayout.elegant_menu'),
                    value: '2'
                },
                {
                    label: i18n.t('headerLayout.light_menu_light_submenu'),
                    value: '3'
                },
                {
                    label: i18n.t('headerLayout.dark_menu_dark_submenu'),
                    value: '4'
                },
            ];
        },

        previewUrl() {
            return this.calculatePreviewUrl([]);
        },

        previewUrlTabletLandscape() {
            return this.calculatePreviewUrl(['menu_appearance_tablet_portrait']);
        },

        previewUrlTabletPortrait() {
            return this.calculatePreviewUrl(['menu_appearance_tablet_landscape']);
        },
    },

    methods: {
        isIframeLoaded(name, url) {
            return this.iframeLoadedSrc[name] == url;
        },

        iframeOnLoad(name, url) {
            this.iframeLoadedSrc = Object.assign({}, this.iframeLoadedSrc);
            this.iframeLoadedSrc[name] = url;
        },

        calculatePreviewUrl(ignoreSettings) {
            const options=[
                'header_layout', 'header_style', 'logo_position', 'hamburger_menu_icon_size',
                'top_area_style', 'header_show', 'header_width', 'top_area_width', 'top_area_show', 'mobile_menu_layout', 'mobile_menu_layout_style',
                'top_area_disable_mobile', 'top_area_disable_tablet', 'menu_appearance_tablet_portrait', 'menu_appearance_tablet_landscape'
            ];

            for(let ignoreSetting of ignoreSettings) {
                let idx = options.indexOf(ignoreSetting);
                if (idx>=0) {
                    options.splice(idx,1);
                }
            }

            const optionsWithVals=[];

            for(let optionName of options) {
                optionsWithVals.push(encodeURIComponent('options['+optionName+']') + '=' + encodeURIComponent(this.getOption(optionName)));
            }

            let previewUrl = config.homeUrl + "?thegem_header_test=1&" + optionsWithVals.join('&');

            return previewUrl;
        },

        findOptionByValue(options,value) {
            for(const option of options) {
                if (option.value == value) {
                    return option;
                }
            }
        },

        fixSelectedValue(optionName,options,defaultValues) {
            const value = this.getOption(optionName);

            const curValueOption = this.findOptionByValue(options, value);

            if (!curValueOption || !curValueOption.disabled) {
                return;
            }

            for(const newValue of defaultValues) {
                let option = this.findOptionByValue(options, newValue);
                if (!option.disabled) {
                    this.setOption(optionName, option.value);
                    return;
                }
            }
        }
    },

    watch: {
        layout() {
            this.fixSelectedValue('header_width', this.headerWidth, ['normal','full']);
            this.fixSelectedValue('top_area_width', this.topAreaWidth, ['normal','full']);
            this.fixSelectedValue('logo_position', this.logoPosition, ['left']);
            this.fixSelectedValue('header_style', this.headerStyle, ['1']);
        },

        isDesktop() {
            this.iframeLoadedSrc = {};
        },

        isTablet() {
            this.iframeLoadedSrc = {};
        },

        isMobile() {
            this.iframeLoadedSrc = {};
        },
    }
});

</script>
