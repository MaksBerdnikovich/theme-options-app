<template>
    <div>
        <to-panel id="panel.main_content_area">
            <to-panel-group :label-title="$t('panel.content_area_options')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_sidebar_content_area_options')"/>
                        </div>
                    </div>
                </template>
                <to-select :value="getOption('content_area_options')" @input="setOption('content_area_options', $event)" :options="contentAreaOptions"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('content_area_options') == 'custom'" :label-title="$t('panel.body_background_type')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_sidebar_content_background_type') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Content_Background_Type.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-background optionPrefix="main_background" :tab-video="false"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('content_area_options') == 'custom'" :label-title="$t('panel.top_padding')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_sidebar_content_top_padding') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Top_Padding.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption('content_padding_top')" @input="setOption('content_padding_top', $event)"/>
                            <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption('content_padding_top_tablet')" @input="setOption('content_padding_top_tablet', $event)"/>
                            <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption('content_padding_top_mobile')" @input="setOption('content_padding_top_mobile', $event)"/>
                        </div>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group v-if="getOption('content_area_options') == 'custom'" :label-title="$t('panel.bottom_padding')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_sidebar_content_bottom_padding') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Bottom_Padding.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption('content_padding_bottom')" @input="setOption('content_padding_bottom', $event)"/>
                            <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption('content_padding_bottom_tablet')" @input="setOption('content_padding_bottom_tablet', $event)"/>
                            <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption('content_padding_bottom_mobile')" @input="setOption('content_padding_bottom_mobile', $event)"/>
                        </div>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group v-if="pageBreadcrumbsVisible" :label-title="$t('panel.breadcrumbs')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text" v-if="postType === 'product'">
                        <div class="info">{{ $t('info.woocommerce_product_page_layout_breadcrumbs') }}</div>
                        <div class="gallery"><to-button-gallery :images="[ {name:'Product_Page_Layout_Breadcrumbs-1-1.png'}]">{{ $t('general.screenshot') }}</to-button-gallery></div>
                    </div>
                    <div class="help-tooltip-text" v-if="isTaxonomy">
                        <div class="info">{{ $t('info.woocommerce_product_categories_layout_breadcrumbs') }}</div>
                        <div class="gallery"><to-button-gallery :images="[ {name:'Product_Page_Layout_Breadcrumbs-1-2.png'}]">{{ $t('general.screenshot') }}</to-button-gallery></div>
                    </div>
                </template>
                <to-select :value="getOption('page_layout_breadcrumbs')" @input="setOption('page_layout_breadcrumbs',$event)" :options="pageLayoutBreadcrumbs"></to-select>
            </to-panel-group>

            <to-panel-group v-if="pageBreadcrumbsVisible && getOption('page_layout_breadcrumbs') === 'enabled'" :label-title="$t('panel.breadcrumbs_settings')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
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
                        <div :class="isTaxonomy ? 'col-1' : 'col-2'">
                            <to-block-label-slider-input :min="0" :max="100" unit="px" :step="1" :value="getOption('page_layout_breadcrumbs_bottom_spacing')" @input="setOption('page_layout_breadcrumbs_bottom_spacing', $event)" :label-title="$t('productPage.bottom_spacing')"/>
                        </div>
                        <div :class="isTaxonomy ? 'col-1' : 'col-2'">
                            <to-label>{{ $t('settings.breadcrumbs_shop_category') }}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('page_layout_breadcrumbs_shop_category')" @input="setOption('page_layout_breadcrumbs_shop_category', $event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel v-if="pageSidebarVisible" id="panel.page_sidebar">
            <to-panel-group :label-title="$t('panel.sidebar')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_sidebar_page_sidebar') }}
                        </div>
                    </div>
                </template>
                <to-select :value="getOption('sidebar_show')" @input="setOption('sidebar_show', $event)" :options="sidebarShow"/>
            </to-panel-group>

            <to-panel-group v-bind:class="{'development-mob': isFutureMode}" v-if="getOption('sidebar_show') == 'enabled'" :label-title="$t('panel.sidebar_style')" :responsive="isFutureMode">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_sidebar_page_sidebar_style') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop }">
                    <to-radio-icon v-if="isDesktop" :value="getOption('sidebar_position')" @input="setOption('sidebar_position',$event)" :options="positionList"></to-radio-icon>
                    <to-radio-icon v-if="!isDesktop" :value="getOption('')" @input="setOption('',$event)" :options="positionList"></to-radio-icon>
                </template>
            </to-panel-group>

            <to-panel-group v-if="getOption('sidebar_show') == 'enabled'" :label-title="$t('panel.sidebar_sticky')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_sidebar_page_sticky_sidebar') }}
                        </div>
                    </div>
                </template>
                <to-switch trueValue="1" falseValue="0" :value="getOption('sidebar_sticky')" @input="setOption('sidebar_sticky', $event)"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('sidebar_show') == 'enabled'">
                <to-alert :title="$t('alert.sidebar_widgets')"></to-alert>
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
                contentAreaOptions: [
                    {label:i18n.t('general.default_settings_po'),value:'default'},
                    {label:i18n.t('general.custom_settings'),value:'custom'},
                ],
                sidebarShow: [
                    {label:i18n.t('general.default_settings_po'),value:'default'},
                    {label:i18n.t('general.enabled'),value:'enabled'},
                    {label:i18n.t('general.disabled'),value:'disabled'}
                ],
                positionList: [
                    {icon:'Schemes-23',title:i18n.t('settings.sidebar_left'),value:'left'},
                    {icon:'Schemes-22',title:i18n.t('settings.sidebar_right'),value:'right'}
                ],
                pageLayoutBreadcrumbs: [
                    {label: i18n.t('general.default_settings_po'), value: 'default'},
                    {label: i18n.t('general.enabled'), value: 'enabled'},
                    {label: i18n.t('general.disabled'), value: 'disabled'},
                ],
                pageLayoutBreadcrumbsAlignment: [
                    {icon:'align-objects-left', value:'left', tooltip:i18n.t('general.left')},
                    {icon:'align-objects-center', value:'center', tooltip:i18n.t('general.center')},
                    {icon:'align-objects-right', value:'right', tooltip:i18n.t('general.right')},
                ],
            }
        },

        computed: {
            postType() {
                return config.postType;
            },

            isTaxonomy() {
                return config.isTaxonomy;
            },

            pageBreadcrumbsVisible() {
                if (
                    (config.postType === 'product' && this.getOption('product_item_data.product_layout_source') === 'default') ||
                    (config.isTaxonomy && (config.taxonomy === 'product_cat' || config.taxonomy === 'product_tag') && this.getOption('product_archive_item_data.product_archive_layout_source') === 'default')
                ) {
                    return true
                }

                return false
            },

            // https://app.asana.com/0/1199540649412175/1202658420717029/f - last note
            // https://app.asana.com/0/1199540649412175/1202719939015052/f - last note
            pageSidebarVisible() {
                if (
                    (config.postType === 'product' && this.getOption('product_item_data.product_layout_source') === 'builder') ||
                    (config.isTaxonomy && this.getOption('product_archive_item_data.product_archive_layout_source') === 'builder') ||
                    (config.isTaxonomy && this.getOption('blog_archive_item_data.blog_archive_layout_source') === 'builder')
                ) {
                    return false
                }

                return true
            }
        },
    })
</script>
