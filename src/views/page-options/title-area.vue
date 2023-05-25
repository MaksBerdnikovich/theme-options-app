<template>
    <div class="order-column">
        <to-panel id="panel.general">
            <to-panel-group :label-title="$t('panel.title_area')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ postType === 'product' || isProductTaxonomy ? $t('info.p_options_title_area_general_title_area_product') : $t('info.p_options_title_area_general_title_area') }}
                        </div>
                        <div class="gallery" v-if="postType !== 'product' && !isProductTaxonomy">
                            <to-button-gallery :images="[
                                {name: 'Title_Area-1-1.png'},
                                {name: 'Title_Area-1-2.png'}
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                        <div class="gallery" v-if="postType === 'product' || isProductTaxonomy">
                            <to-button-gallery :images="[
                                {name: 'Product_Title_Area-1-1.png'},
                                {name: 'Menu_&_Header_Separator.png'}
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1 col-tb-1">
                            <to-select :value="getOption('title_show')" @input="setOption('title_show', $event)" :options="titleShow"/>
                        </div>
                        <div class="col-1" v-if="(postType == 'product' && getOption('title_show') == 'disabled') || (isProductTaxonomy && getOption('title_show') == 'disabled')">
                            <to-label>{{ $t('productPage.header_separator') }}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_header_separator')" @input="setOption('product_header_separator', $event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('title_show') == 'enabled'" :label-title="$t('panel.title_area_type')" :class="{'taxonomy-te-edit-link': isTaxonomy}">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_title_area_general_type_title_area')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-radio-toggle :value="getOption('title_style')" @input="setOption('title_style', $event)" :options="titleStyleList"></to-radio-toggle>
                        </div>
                    </div>
                    <div class="form-grid to-condition-box" v-if="getOption('title_style') == 2">
                        <div class="col-1">
                            <to-label>{{ $t('settings.custom_title') }}</to-label>
                            <to-select
                                :value="getOption('title_template')"
                                @input="setOption('title_template',$event)"
                                :options="customTitleList"
                                v-on:right-button-clicked="showPreview($event)"
                                v-on:edit-button-clicked="showEditPage($event)"
                            />
                        </div>
                        <div class="col-1">
                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                            <to-link :href="titleTemplateCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                        </div>
                        <div class="col-1">
                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                            <to-link :href="titleTemplateImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                        </div>
                    </div>
                    <div class="form-grid to-condition-box" v-if="getOption('title_style') == 3">
                        <div class="col-1">
                            <to-label>{{ $t('settings.slider_type') }}</to-label>
                            <to-select :value="getOption('slideshow_type')" @input="setOption('slideshow_type',$event)" :options="sliderTypeList"></to-select>
                        </div>
                        <div class="col-1" v-if="getOption('slideshow_type') === 'revslider'">
                            <to-label>{{ $t('settings.select_slider') }}</to-label>
                            <to-select :value="getOption('slideshow_revslider')" @input="setOption('slideshow_revslider',$event)" :options="revSliders"></to-select>
                        </div>
                        <div class="col-1" v-if="getOption('slideshow_type') === 'revslider'">
                            <to-label>{{ $t('settings.slider_preloader') }}</to-label>
                            <to-switch :value="getOption('slideshow_preloader')" @input="setOption('slideshow_preloader',$event)"/>
                        </div>
                        <div class="col-1" v-if="getOption('slideshow_type') === 'NivoSlider'">
                            <to-label>{{ $t('settings.select_slider') }}</to-label>
                            <to-select :value="getOption('slideshow_nivoslider')" @input="setOption('slideshow_nivoslider',$event)" :options="nivoSliders"></to-select>
                        </div>
                        <div class="col-1" v-if="getOption('slideshow_type') === 'LayerSlider'">
                            <to-label>{{ $t('settings.select_slider') }}</to-label>
                            <to-select :value="getOption('slideshow_layerslider')" @input="setOption('slideshow_layerslider',$event)" :options="layerSliders"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('title_show') == 'enabled' && getOption('title_style') != 3" :label-title="$t('panel.breadcrumbs')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_title_area_general_breadcrumbs') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop }">
                    <to-switch v-if="isDesktop" trueValue="0" falseValue="1" :value="getOption('title_breadcrumbs')" @input="setOption('title_breadcrumbs', $event)"/>
                </template>
            </to-panel-group>

            <to-panel-group v-if="getOption('title_show') == 'enabled' && getOption('title_style') != 3 && getOption('title_breadcrumbs') == 0" :label-title="$t('panel.breadcrumbs_settings')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.title_area_general_breadcrumbs_settings') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker :value="getOption('breadcrumbs_default_color')" @input="setOption('breadcrumbs_default_color',$event)" :label-title="$t('colors.color_normal')"/>
                        </div>
                        <div class="col-auto">
                            <to-color-picker :value="getOption('breadcrumbs_active_color')" @input="setOption('breadcrumbs_active_color',$event)" :label-title="$t('colors.color_active')"/>
                        </div>
                        <div class="col-auto">
                            <to-color-picker :value="getOption('breadcrumbs_hover_color')" @input="setOption('breadcrumbs_hover_color',$event)" :label-title="$t('colors.color_hover')"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('settings.breadcrumbs_alignment') }}</to-label>
                            <to-radio-toggle :value="getOption('title_breadcrumbs_alignment')" @input="setOption('title_breadcrumbs_alignment', $event)" :options="breadcrumbsAlignment"/>
                        </div>
                        <div class="col-1" v-if="postType === 'product' || isProductTaxonomy">
                            <to-label>{{ $t('settings.breadcrumbs_shop_category') }}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('title_breadcrumbs_shop_category')" @input="setOption('title_breadcrumbs_shop_category', $event)"/>
                        </div>
                        <div class="col-auto" v-if="isFutureMode">
                            <to-label>{{ $t('settings.breadcrumbs_delimiter') }}</to-label>
                            <to-radio-toggle :value="getOption('')" @input="setOption('',$event)" :options="breadcrumbsDelimiter"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('title_show') == 'enabled' && getOption('title_style') == 2" :label-title="$t('panel.use_page_settings')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_title_area_general_settings') }}
                        </div>
                    </div>
                </template>
                <to-switch trueValue="1" falseValue="0" :value="getOption('title_use_page_settings')" @input="setOption('title_use_page_settings', $event)"/>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.title_and_excerpt" v-bind:style="getOption('title_use_page_settings') == 1 ? 'order: 4' : ''" v-if="getOption('title_show') != 'disabled' && getOption('title_style') != 3 || getOption('title_show') == 'default'">
            <to-panel-group v-bind:class="{'development': isFutureMode}" v-if="isFutureMode" :label-title="$t('panel.use_page_native_title')">
                <to-switch trueValue="1" falseValue="0" :value="getOption('title_native')" @input="setOption('title_native', $event)"/>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.use_rich_content_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_title_area_title_excerpt_use_rich_content') }}
                        </div>
                    </div>
                </template>
                <to-switch trueValue="1" falseValue="0" :value="getOption('title_rich_content')" @input="setOption('title_rich_content', $event)"/>
            </to-panel-group>

            <to-panel-group v-bind:class="'tmce-full'" v-if="getOption('title_rich_content') == 1">
                <to-wysiwyg :value="getOption('title_content')" @input="setOption('title_content', $event)" :height="'120px'" ></to-wysiwyg>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.excerpt')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_title_area_title_excerpt_excerpt') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Excerpt.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="form-grid">
                    <div class="col-1">
                        <to-textarea :value="getOption('title_excerpt')" @input="setOption('title_excerpt', $event)" :height="'91px'"/>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.style_and_alignment" v-if="getOption('title_show') == 'enabled' && getOption('title_style') == 1">
            <div v-if="isFutureMode" class="to-panel-separator">
                <to-panel-group v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.style_alignment_fullheight')">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('')" @input="setOption('', $event)"/>
                </to-panel-group>

                <to-panel-group v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.style_alignment_fullwidth')">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('')" @input="setOption('', $event)"/>
                </to-panel-group>
            </div>

            <div v-if="getOption('title_style') != 2" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.style_alignment_content_alignment')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_title_area_style_alignment_content_alignment') }}
                            </div>
                        </div>
                    </template>
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-label>{{ $t('settings.horizontal') }}</to-label>
                            <to-radio-toggle :value="getOption('title_alignment')" @input="setOption('title_alignment', $event)" :options="horizontalAlignList"/>
                        </div>
                        <div v-if="isFutureMode" class="col-auto">
                            <to-label>{{ $t('settings.vertical') }}</to-label>
                            <to-radio-toggle :value="getOption('')" @input="setOption('', $event)" :options="verticalAlignList"/>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.style_alignment_padding')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_title_area_style_alignment_paddings') }}
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{isDesktop,isTablet,isMobile}">
                        <div class="to-changed-settings" v-if="isDesktop">
                            <to-block-padding option-prefix="title_padding"/>
                        </div>
                        <div class="to-changed-settings" v-if="isTablet">
                            <to-block-padding option-prefix="title_padding_tablet"/>
                        </div>
                        <div class="to-changed-settings" v-if="isMobile">
                            <to-block-padding option-prefix="title_padding_mobile"/>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.title_top_margin')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_title_area_style_alignment_title_top_margin') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Title_Top_Margin.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{isDesktop,isTablet,isMobile}">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption('title_top_margin')" @input="setOption('title_top_margin', $event)"/>
                                <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption('title_top_margin_tablet')" @input="setOption('title_top_margin_tablet', $event)"/>
                                <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption('title_top_margin_mobile')" @input="setOption('title_top_margin_mobile', $event)"/>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.title_max_width')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_title_area_style_alignment_title_max_width') }}
                            </div>
                        </div>
                    </template>
                    <div class="form-grid">
                        <div class="col-1">
                            <to-block-label-slider-input :min="0" :max="1200" unit="px" :value="getOption('title_title_width')" @input="setOption('title_title_width', $event)"/>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.title_font_presets')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.title_area_style_alignment_title_font_preset')"/>
                            </div>
                        </div>
                    </template>

                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2 col-tb-1">
                                <to-label>{{$t('font.html_tag')}}</to-label>
                                <to-select :value="getOption('title_font_preset_html')" @input="setOption('title_font_preset_html',$event)" :options="presetFontHtml"/>
                            </div>
                            <div class="col-2 col-tb-1">
                                <to-label>{{$t('font.style')}}</to-label>
                                <to-select :value="getOption('title_font_preset_style')" @input="setOption('title_font_preset_style',$event)" :options="presetFontStyle"/>
                            </div>
                            <div class="col-2 col-tb-1">
                                <to-label>{{$t('font.weight')}}</to-label>
                                <to-select :value="getOption('title_font_preset_weight')" @input="setOption('title_font_preset_weight',$event)" :options="presetFontWeight"/>
                            </div>
                            <div class="col-2 col-tb-1">
                                <to-label>{{$t('font.transform')}}</to-label>
                                <to-select :value="getOption('title_font_preset_transform')" @input="setOption('title_font_preset_transform',$event)" :options="presetFontTransform"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.excerpt_top_margin')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_title_area_style_alignment_excerpt_top_margin') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Excerpt_Top_Margin.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{isDesktop,isTablet,isMobile}">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption('title_excerpt_top_margin')" @input="setOption('title_excerpt_top_margin', $event)"/>
                                <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption('title_excerpt_top_margin_tablet')" @input="setOption('title_excerpt_top_margin_tablet', $event)"/>
                                <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption('title_excerpt_top_margin_mobile')" @input="setOption('title_excerpt_top_margin_mobile', $event)"/>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.excerpt_max_width')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_title_area_style_alignment_excerpt_max_width') }}
                            </div>
                        </div>
                    </template>
                    <div class="form-grid">
                        <div class="col-1">
                            <to-block-label-slider-input :min="0" :max="1200" unit="px" :value="getOption('title_excerpt_width')" @input="setOption('title_excerpt_width', $event)"/>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.excerpt_font_presets')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.title_area_style_alignment_excerpt_font_preset')"/>
                            </div>
                        </div>
                    </template>

                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2 col-tb-1">
                                <to-label>{{$t('font.html_tag')}}</to-label>
                                <to-select :value="getOption('title_excerpt_font_preset_html')" @input="setOption('title_excerpt_font_preset_html',$event)" :options="presetFontHtml"/>
                            </div>
                            <div class="col-2 col-tb-1">
                                <to-label>{{$t('font.style')}}</to-label>
                                <to-select :value="getOption('title_excerpt_font_preset_style')" @input="setOption('title_excerpt_font_preset_style',$event)" :options="presetFontStyle"/>
                            </div>
                            <div class="col-2 col-tb-1">
                                <to-label>{{$t('font.weight')}}</to-label>
                                <to-select :value="getOption('title_excerpt_font_preset_weight')" @input="setOption('title_excerpt_font_preset_weight',$event)" :options="presetFontWeight"/>
                            </div>
                            <div class="col-2 col-tb-1">
                                <to-label>{{$t('font.transform')}}</to-label>
                                <to-select :value="getOption('title_excerpt_font_preset_transform')" @input="setOption('title_excerpt_font_preset_transform',$event)" :options="presetFontTransform"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>

            <div class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.style_alignment_title_color')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_title_area_style_alignment_title_color') }}
                            </div>
                        </div>
                    </template>
                    <to-color-picker :value="getOption('title_text_color')" @input="setOption('title_text_color',$event)"/>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.style_alignment_excerpt_color')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_title_area_style_alignment_excerpt_color') }}
                            </div>
                        </div>
                    </template>
                    <to-color-picker :value="getOption('title_excerpt_text_color')" @input="setOption('title_excerpt_text_color',$event)"/>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.style" v-bind:style="getOption('title_use_page_settings') == 1 ? 'order: 1' : ''" v-if="getOption('title_show') == 'enabled' && getOption('title_style') == 2 && getOption('title_use_page_settings') == 1">
            <to-panel-group :label-title="$t('panel.style_alignment_title_color')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_title_area_style_alignment_title_color') }}
                        </div>
                    </div>
                </template>
                <to-color-picker :value="getOption('title_text_color')" @input="setOption('title_text_color',$event)"/>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.style_alignment_excerpt_color')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_title_area_style_alignment_excerpt_color') }}
                        </div>
                    </div>
                </template>
                <to-color-picker :value="getOption('title_excerpt_text_color')" @input="setOption('title_excerpt_text_color',$event)"/>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.background" v-bind:style="getOption('title_use_page_settings') == 1 ? 'order: 2' : ''" v-if="(getOption('title_show') == 'enabled' && getOption('title_style') == 1) || (getOption('title_show') == 'enabled' && getOption('title_style') == 2 && getOption('title_use_page_settings') == 1)">
            <to-panel-group :label-title="$t('panel.background_type')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_title_area_background_type') }}
                        </div>
                    </div>
                </template>
                <to-block-background optionPrefix="title_background" :tab-pattern="false" :showOverlay="true"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('title_background_type') === 'image'" :label-title="$t('panel.background_effect')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_title_area_background_parallax') }}
                        </div>
                    </div>
                </template>

                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-select :value="getOption('title_background_effect')" @input="setOption('title_background_effect',$event)" :options="titleBackgroundEffect"></to-select>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings" v-if="getOption('title_background_effect') === 'ken_burns'">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-label>{{ $t('settings.kenburns_direction') }}</to-label>
                            <to-select :value="getOption('title_background_ken_burns_direction')" @input="setOption('title_background_ken_burns_direction',$event)" :options="titleBackgroundKenBurnsDirection"></to-select>
                        </div>
                        <div class="col-1">
                            <to-label>{{ $t('settings.kenburns_speed') }}</to-label>
                            <to-input :value="getOption('title_background_ken_burns_transition_speed')" @input="setOption('title_background_ken_burns_transition_speed',$event)"></to-input>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.icon" v-bind:style="getOption('title_use_page_settings') == 1 ? 'order: 3' : ''" v-if="(getOption('title_show') != 'disabled' && getOption('title_style') == 1) || (getOption('title_show') == 'enabled' && getOption('title_style') == 2 && getOption('title_use_page_settings') == 1) || getOption('title_show') == 'default'">
            <to-panel-group :label-title="$t('panel.icon')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_title_area_icon') }}
                        </div>
                    </div>
                </template>
                <div class="to-block-contact">
                    <div class="form-line">
                        <div class="col">
                            <to-block-icon option-prefix="title_icon"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.icon_size')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_title_area_icon_size') }}
                        </div>
                    </div>
                </template>
                <to-radio-toggle :value="getOption('title_icon_size')" @input="setOption('title_icon_size', $event)" :options="iconSizeList"></to-radio-toggle>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.icon_shape')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_title_area_icon_shape') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('title_icon_shape_show')" @input="setOption('title_icon_shape_show', $event)" />
                </div>
                <div class="to-changed-settings" v-if="getOption('title_icon_shape_show') == 1">
                    <to-radio-toggle :value="getOption('title_icon_shape')" @input="setOption('title_icon_shape', $event)" :options="iconShapeList"></to-radio-toggle>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.color_split')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_title_area_icon_color_split') }}
                        </div>
                    </div>
                </template>
                <to-radio-toggle :value="getOption('title_icon_style')" @input="setOption('title_icon_style', $event)" :options="colorSplitList"></to-radio-toggle>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.colors')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_title_area_icon_colors') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto col-tb-2">
                            <to-color-picker :value="getOption('title_icon_color')" @input="setOption('title_icon_color',$event)" :label-title="$t('colors.icon_color')+' 1'" />
                        </div>
                        <div class="col-auto col-tb-2" v-if="getOption('title_icon_style') != ''">
                            <to-color-picker :value="getOption('title_icon_color_2')" @input="setOption('title_icon_color_2',$event)" :label-title="$t('colors.icon_color')+' 2'" />
                        </div>
                        <div class="col-auto col-tb-2" v-if="getOption('title_icon_shape_show') == 1">
                            <to-color-picker :value="getOption('title_icon_background_color')" @input="setOption('title_icon_background_color',$event)" :label-title="$t('colors.icon_background_color')"/>
                        </div>
                        <div class="col-auto col-tb-2" v-if="getOption('title_icon_shape_show') == 1">
                            <to-color-picker :value="getOption('title_icon_border_color')" @input="setOption('title_icon_border_color',$event)" :label-title="$t('colors.icon_border_color')"/>
                        </div>
                    </div>
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
            let customTitleList = JSON.parse(JSON.stringify(config.customTitles));
            for(let item of customTitleList) {
                if (item.preview) {
                    item.rightButton = {icon: 'eye'};
                }

                if (item.edit) {
                    item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
                }
            }

            return {
                titleShow: [
                    {label:i18n.t('general.default_settings_po'),value:'default'},
                    {label:i18n.t('general.enabled'),value:'enabled'},
                    {label:i18n.t('general.disabled'),value:'disabled'}
                ],
                productHeaderSeparator: [
                    {label:i18n.t('general.default_settings_po'),value:'default'},
                    {label:i18n.t('general.enabled'),value:'enabled'},
                    {label:i18n.t('general.disabled'),value:'disabled'}
                ],
                revSliders: config.sliders.revsliders,
                nivoSliders: config.sliders.slideshows,
                layerSliders: config.sliders.layersliders,
                titleStyleList: [
                    {icon:'services', title:i18n.t('general.default_title'), value:'1'},
                    {icon:'add-row', title:i18n.t('general.custom_title'), value:'2'},
                    {icon:'add-row', title:i18n.t('general.slider'), value:'3'},
                ],
                breadcrumbsAlignment: [
                    {icon:'align-objects-left', value:'left', tooltip:i18n.t('general.left')},
                    {icon:'align-objects-center', value:'center', tooltip:i18n.t('general.center')},
                    {icon:'align-objects-right', value:'right', tooltip:i18n.t('general.right')},
                ],
                customTitleList: customTitleList,
                sliderTypeList: config.sliders.types,
                sliderList: [],
                horizontalAlignList: [
                    {icon:'align-objects-left', value:'left', tooltip:i18n.t('general.left')},
                    {icon:'align-objects-center', value:'center', tooltip:i18n.t('general.center')},
                    {icon:'align-objects-right', value:'right', tooltip:i18n.t('general.right')}
                ],
                verticalAlignList: [
                    {icon:'align-objects-top',value:'1',tooltip:i18n.t('general.left')},
                    {icon:'align-objects-centerY',value:'2',tooltip:i18n.t('general.center')},
                    {icon:'align-objects-bottom',value:'3',tooltip:i18n.t('general.right')},
                ],
                iconShapeList: [
                    {icon:'circle', title:i18n.t('general.circle'), value:'circle'},
                    {icon:'square', title:i18n.t('general.square'), value:'square'},
                    {icon:'rhombus', title:i18n.t('general.rhombus'), value:'romb'},
                    {icon:'hexagon', title:i18n.t('general.hexagon'), value:'hexagon'},
                ],
                iconSizeList: [
                    {icon:'size-5', title:i18n.t('general.small'), value:'small'},
                    {icon:'size-4', title:i18n.t('general.medium'), value:'medium'},
                    {icon:'size-3', title:i18n.t('general.large'), value:'large'},
                    {icon:'size-2', title:i18n.t('general.x_large'), value:'xlarge'},
                ],
                colorSplitList: [
                    {icon:'', title:i18n.t('general.none'), value:''},
                    {icon:'up-left', title:'45°', value:'angle-45deg-l'},
                    {icon:'up', title:'90°', value:'angle-90deg'},
                    {icon:'up-right', title:'135°', value:'angle-45deg-r'},
                ],
                titleBackgroundEffect: [
                    {label:i18n.t('general.normal'), value:'normal'},
                    {label:i18n.t('general.parallax'), value:'parallax'},
                    {label:i18n.t('general.kenburns'), value:'ken_burns'}
                ],
                titleBackgroundKenBurnsDirection: [
                    {label:i18n.t('general.zoom_in'), value:'zoom_in'},
                    {label:i18n.t('general.zoom_out'), value:'zoom_out'}
                ],
                presetFontHtml: [
                    {label: i18n.t('general.default'), value: ''},
                    {label: i18n.t('font.h1'), value: 'h1'},
                    {label: i18n.t('font.h2'), value: 'h2'},
                    {label: i18n.t('font.h3'), value: 'h3'},
                    {label: i18n.t('font.h4'), value: 'h4'},
                    {label: i18n.t('font.h5'), value: 'h5'},
                    {label: i18n.t('font.h6'), value: 'h6'},
                    {label: i18n.t('font.paragraph'), value: 'p'},
                    {label: i18n.t('font.div'), value: 'div'},
                ],
                presetFontStyle: [
                    {label: i18n.t('general.default'), value: ''},
                    {label: i18n.t('font.title_h1'), value: 'title-h1'},
                    {label: i18n.t('font.title_h2'), value: 'title-h2'},
                    {label: i18n.t('font.title_h3'), value: 'title-h3'},
                    {label: i18n.t('font.title_h4'), value: 'title-h4'},
                    {label: i18n.t('font.title_h5'), value: 'title-h5'},
                    {label: i18n.t('font.title_h6'), value: 'title-h6'},
                    {label: i18n.t('font.title_xlarge'), value: 'title-xlarge'},
                    {label: i18n.t('font.styled_subtitle'), value: 'styled-subtitle'},
                    {label: i18n.t('font.main_menu'), value: 'title-main-menu'},
                    {label: i18n.t('font.body'), value: 'title-body'},
                    {label: i18n.t('font.tiny_body'), value: 'title-tiny-body'},
                ],
                presetFontWeight: [
                    {label: i18n.t('general.default'), value: ''},
                    {label: i18n.t('font.thin'), value: 'light'},
                ],
                presetFontTransform: [
                    {label: i18n.t('general.default'), value: ''},
                    {label: i18n.t('font.transform_none'), value: 'none'},
                    {label: i18n.t('font.transform_capitalize'), value: 'capitalize'},
                    {label: i18n.t('font.transform_lowercase'), value: 'lowercase'},
                    {label: i18n.t('font.transform_uppercase'), value: 'uppercase'},
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

            isProductTaxonomy() {
                return config.isTaxonomy && config.taxonomy === 'product_cat';
            },

            titleTemplateCreateUrl(){
                return config.titleTemplateCreateUrl
            },

            titleTemplateImportUrl(){
                return config.titleTemplateImportUrl
            },
        },

        methods: {
            showPreview(item) {
                window.open(item.preview,'_blank');
            },

            showEditPage(item) {
                window.open(item.edit,'_blank');
            }
        }
    })
</script>
