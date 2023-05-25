<template>
    <div>
        <to-panel id="panel.layout_style">
            <to-panel-group :label-title="$t('panel.layout_style_layout')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.layout_style_layout')"/>
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop }">
                    <div class="to-changed-settings" v-if="isDesktop">
                        <to-radio-icon
                            :value="getOption('page_layout_style')"
                            @input="setOption('page_layout_style',$event)"
                            :options="pageLayoutStyle">
                        </to-radio-icon>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group v-if="getOption('page_layout_style')==='body-frame'" :label-title="$t('panel.frame')">
               <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.layout_style_body_frame') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-padding option-prefix="page_padding"/>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.layout_backgrounds" v-if="getOption('page_layout_style')!=='fullwidth'">
            <to-panel-group :label-title="$t('panel.layout_backgrounds_body_frame')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.layout_background_style') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-background optionPrefix="basic_outer_background" :tab-video="false"/>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.main_content_area">
            <to-panel-group :label-title="$t('panel.body_background_type')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.content_background_type') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name:'Content_Background_Type.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-background optionPrefix="main_background" :tab-video="false"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.top_padding')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.content_top_padding') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name:'Top_Padding.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption('global.content_padding_top')" @input="setOption('global.content_padding_top', $event)"/>
                            <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption('global.content_padding_top_tablet')" @input="setOption('global.content_padding_top_tablet', $event)"/>
                            <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption('global.content_padding_top_mobile')" @input="setOption('global.content_padding_top_mobile', $event)"/>
                        </div>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group v-if="isWooCommerce" :label-title="$t('panel.top_padding_woo')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.content_top_padding_woo') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name:'Product_Top_Padding-1-1.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption('product_content_padding_top')" @input="setOption('product_content_padding_top', $event)"/>
                            <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption('product_content_padding_top_tablet')" @input="setOption('product_content_padding_top_tablet', $event)"/>
                            <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption('product_content_padding_top_mobile')" @input="setOption('product_content_padding_top_mobile', $event)"/>
                        </div>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.bottom_padding')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.content_bottom_padding') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name:'Bottom_Padding.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption('global.content_padding_bottom')" @input="setOption('global.content_padding_bottom', $event)"/>
                            <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption('global.content_padding_bottom_tablet')" @input="setOption('global.content_padding_bottom_tablet', $event)"/>
                            <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption('global.content_padding_bottom_mobile')" @input="setOption('global.content_padding_bottom_mobile', $event)"/>
                        </div>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group v-if="isWooCommerce" :label-title="$t('panel.product_page_layout_breadcrumbs')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.page_layout_breadcrumbs') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name:'Product_Page_Layout_Breadcrumbs-1-1.png'},
                                {name:'Product_Page_Layout_Breadcrumbs-1-2.png'}
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('page_layout_breadcrumbs')" @input="setOption('page_layout_breadcrumbs',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="isWooCommerce && getOption('page_layout_breadcrumbs') === '1'" :label-title="$t('panel.breadcrumbs_settings')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.page_layout_breadcrumbs_settings') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker :value="getOption('page_layout_breadcrumbs_default_color')" @input="setOption('page_layout_breadcrumbs_default_color',$event)" :label-title="$t('colors.color_normal')"/>
                        </div>
                        <div class="col-auto">
                            <to-color-picker :value="getOption('page_layout_breadcrumbs_active_color')" @input="setOption('page_layout_breadcrumbs_active_color',$event)" :label-title="$t('colors.color_active')"/>
                        </div>
                        <div class="col-auto">
                            <to-color-picker :value="getOption('page_layout_breadcrumbs_hover_color')" @input="setOption('page_layout_breadcrumbs_hover_color',$event)" :label-title="$t('colors.color_hover')"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('settings.breadcrumbs_alignment') }}</to-label>
                            <to-radio-toggle :value="getOption('page_layout_breadcrumbs_alignment')" @input="setOption('page_layout_breadcrumbs_alignment', $event)" :options="pageLayoutBreadcrumbsAlignment"/>
                        </div>
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="100" unit="px" :step="1" :value="getOption('page_layout_breadcrumbs_bottom_spacing')" @input="setOption('page_layout_breadcrumbs_bottom_spacing', $event)" :label-title="$t('productPage.bottom_spacing')"/>
                        </div>
                        <div class="col-2">
                            <to-label>{{ $t('settings.breadcrumbs_shop_category') }}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('page_layout_breadcrumbs_shop_category')" @input="setOption('page_layout_breadcrumbs_shop_category', $event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.page_sidebar">
            <to-panel-group :label-title="$t('panel.sidebar')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.sidebar') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption('global.sidebar_show')" @input="setOption('global.sidebar_show',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-bind:class="{'development-mob': isFutureMode}" v-if="getOption('global.sidebar_show') == 1" :label-title="$t('panel.sidebar_style')" :responsive="isFutureMode">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.sidebar_style') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop }">
                    <to-radio-icon v-if="isDesktop" :value="getOption('global.sidebar_position')" @input="setOption('global.sidebar_position',$event)" :options="positionList"></to-radio-icon>
                    <to-radio-icon v-if="!isDesktop" :value="getOption('')" @input="setOption('',$event)" :options="positionList"></to-radio-icon>
                </template>
            </to-panel-group>

            <to-panel-group v-if="getOption('global.sidebar_show') == 1" :label-title="$t('panel.sidebar_sticky')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.sidebar_sticky') }}
                        </div>
                    </div>
                </template>
                <to-switch trueValue="1" falseValue="0" :value="getOption('global.sidebar_sticky')" @input="setOption('global.sidebar_sticky', $event)"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('global.sidebar_show') == 1">
                <to-alert
                    :title="$t('alert.sidebar_widgets_part1')"
                    :titleAfterLink="$t('alert.sidebar_widgets_part2')"
                    :titleLink="$t('alert.add_widgets_footer_link')"
                    target="_blank"
                    :href="adminUrl('widgets.php')">
                </to-alert>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.smooth_scroll">
            <to-panel-group :label-title="$t('panel.smooth_scroll')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.smooth_scroll') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="0" falseValue="1" :value="getOption('disable_smooth_scroll')" @input="setOption('disable_smooth_scroll',$event)"/>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.scroll_to_top">
            <to-panel-group :label-title="$t('panel.scroll_to_top')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.scroll_to_top_button') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="0" falseValue="1" :value="getOption('disable_scroll_top_button')" @input="setOption('disable_scroll_top_button',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('disable_scroll_top_button') && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.scroll_to_top_button_style')">
                <div class="to-changed-settings">
                    <to-radio-icon
                       class="width-50"
                       :value="getOption('')"
                       @input="setOption('',$event)"
                       :options="scrollButtonStyle">
                    </to-radio-icon>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('disable_scroll_top_button') && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.scroll_to_top_button_colors')">
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :label-title="$t('general.color') + ' 1'"
                                :value="getOption('')"
                                @input="setOption('',$event)"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :label-title="$t('general.color') + ' 2'"
                                :value="getOption('')"
                                @input="setOption('',$event)"
                            />
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.preloader">
            <to-panel-group :label-title="$t('panel.preloader_page')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.preloader') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption('preloader')" @input="setOption('preloader',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('preloader')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                              {{ $t('info.preloader_style') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-radio-icon class="no-hover" :options="pagePreloaderStyle"></to-radio-icon>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('preloader')" :label-title="$t('panel.preloader_page_color')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.preloader_colors') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :label-title="$t('colors.background_color')" :value="getOption('preloader_page_background')" @input="setOption('preloader_page_background',$event)"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :label-title="$t('colors.line') + ' 1'" :value="getOption('preloader_line_1')" @input="setOption('preloader_line_1',$event)"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :label-title="$t('colors.line') + ' 2'" :value="getOption('preloader_line_2')" @input="setOption('preloader_line_2',$event)"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :label-title="$t('colors.line') + ' 3'" :value="getOption('preloader_line_3')" @input="setOption('preloader_line_3',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('preloader')" :label-title="$t('panel.preloader_content')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.preloader_style') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-select :value="getOption('content_preloader_select_style')" @input="setOption('content_preloader_select_style', $event)" :options="contentPreloaderSelectStyle"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="!getOption('preloader')" :label-title="$t('panel.preloader_content')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                              {{ $t('info.preloader_style') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-radio-icon class="pattern small" :value="getOption('content_preloader_style')" @input="setOption('content_preloader_style',$event)" :options="contentPreloaderStyle"></to-radio-icon>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('preloader') && getOption('content_preloader_select_style') === 'custom'">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                              {{ $t('info.preloader_style') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-radio-icon class="pattern small" :value="getOption('content_preloader_style')" @input="setOption('content_preloader_style',$event)" :options="contentPreloaderStyle"></to-radio-icon>
                </div>
            </to-panel-group>

            <to-panel-group v-if="(!getOption('preloader') && getOption('content_preloader_style') === 'preloader-4') || (getOption('preloader') && getOption('content_preloader_select_style') === 'custom' && getOption('content_preloader_style') === 'preloader-4')" :label-title="$t('panel.preloader_content_color')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.preloader_colors') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :label-title="$t('colors.line') + ' 1'" :value="getOption('content_preloader_line_1')" @input="setOption('content_preloader_line_1',$event)"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :label-title="$t('colors.line') + ' 2'" :value="getOption('content_preloader_line_2')" @input="setOption('content_preloader_line_2',$event)"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :label-title="$t('colors.line') + ' 3'" :value="getOption('content_preloader_line_3')" @input="setOption('content_preloader_line_3',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <!--custom Preloader-->
            <to-panel-group v-if="getOption('preloader_style') === 'preloader-5' && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.preloader_format')">
                <div class="to-changed-settings">
                    <to-radio-toggle :value="getOption('preloader_type')" @input="setOption('preloader_type',$event)" :options="preloaderType"></to-radio-toggle>
                </div>
                <div class="to-changed-settings" v-if="getOption('preloader_type') === 'gif'">
                    <to-file-select :labelTitle="$t('general.choose_preloader')" :value="getOption('')" @input="setOption('',$event)"/>
                </div>
                <div class="to-changed-settings" v-if="getOption('preloader_type') === 'svg'">
                    <to-file-select :labelTitle="$t('general.choose_preloader')" :value="getOption('')" @input="setOption('',$event)"/>
                </div>
                <div class="to-changed-settings" v-if="getOption('preloader_type') === 'css'">
                    <to-codemirror lang="css" :value="getOption('')" @input="setOption('',$event)"/>
                </div>
            </to-panel-group>
        </to-panel>
    </div>
</template>

<script>
    import {addHelpers} from '@/services/helper';
    import i18n from '@/services/i18n';
    import config from '@/services/config';

    export default addHelpers({
        data() {
            return {
                pageLayoutStyle: [
                    {icon:'Schemes-01',title:i18n.t('general.fullwidth'),value:'fullwidth'},
                    {icon:'Schemes-02',title:i18n.t('general.boxed'),value:'boxed'},
                    {icon:'Schemes-03',title:i18n.t('general.body_Frame'),value:'body-frame'}
                ],
                positionList: [
                    {icon:'Schemes-23',title:i18n.t('settings.sidebar_left'),value:'left'},
                    {icon:'Schemes-22',title:i18n.t('settings.sidebar_right'),value:'right'}
                ],
                pageLayoutBreadcrumbsAlignment: [
                    {icon:'align-objects-left', value:'left', tooltip:i18n.t('general.left')},
                    {icon:'align-objects-center', value:'center', tooltip:i18n.t('general.center')},
                    {icon:'align-objects-right', value:'right', tooltip:i18n.t('general.right')},
                ],
                scrollButtonStyle: [
                    {icon:'Scroll-To-Top-Button-01',title:i18n.t('general.style') + ' 1',value:1},
                    {icon:'Scroll-To-Top-Button-02',title:i18n.t('general.style') + ' 2',value:2},
                    {icon:'Scroll-To-Top-Button-03',title:i18n.t('general.style') + ' 3',value:3},
                    {icon:'Scroll-To-Top-Button-04',title:i18n.t('general.style') + ' 4',value:4},
                    {icon:'Scroll-To-Top-Button-05',title:i18n.t('general.style') + ' 5',value:5},
                    {icon:'Scroll-To-Top-Button-06',title:i18n.t('general.style') + ' 6',value:6}
                ],
                pagePreloaderStyle: [
                    {image: require('@/assets/img/preloader-4.gif'), imageSize:'90', value: 'preloader-4'},
                ],
                contentPreloaderStyle: [
                    {image: require('@/assets/img/preloader-1.gif'), imageSize:'45', title:i18n.t('general.style') + ' 1', value: 'preloader-1'},
                    {image: require('@/assets/img/preloader-2.gif'), imageSize:'45', title:i18n.t('general.style') + ' 2', value: 'preloader-2'},
                    {image: require('@/assets/img/preloader-3.gif'), imageSize:'45', title:i18n.t('general.style') + ' 3', value: 'preloader-3'},
                    {image: require('@/assets/img/preloader-4.gif'), imageSize:'90', title:i18n.t('general.style') + ' 4', value: 'preloader-4'},
                ],
                contentPreloaderSelectStyle: [
                    {label:i18n.t('general.same_as_page_preloader'), value:'normal'},
                    {label:i18n.t('general.select_style_preloader'), value:'custom'},
                ],
                preloaderType: [
                    {icon:'aspect-ratio',title:i18n.t('general.gif'),value:'gif'},
                    {icon:'pen',title:i18n.t('general.svg'),value:'svg'},
                    {icon:'source-code',title:i18n.t('general.css'),value:'css'}
                ]
            }
        },

        computed: {
            isWooCommerce() {
                return config.isWooCommerce;
            }
        },
    })
</script>
