<template>
    <div>
        <to-panel id="panel.product_title_styles">
            <to-panel-subtitle v-slot:label>{{ $t('panel.product_grid_styles') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_grids_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_styles_title_font_listings_grids') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Style_Product_Titles-1-1.png'},
                                {name: 'Product_Style_Product_Titles-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="product_grid_title"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_title_color')"  @input="setOption('product_grid_title_color',$event)" :label-title="$t('colors.color_normal')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_title_color_hover')"  @input="setOption('product_grid_title_color_hover',$event)" :label-title="$t('colors.color_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_title_color_on_image')"  @input="setOption('product_grid_title_color_on_image',$event)" :label-title="$t('colors.caption_on_image')"/>
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_grids_legacy')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_grid_title_legacy') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Titles-1-1.png'},
                                {name: 'Product_Titles-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <to-switch trueValue="1" falseValue="0"  :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')" :value="getOption('product_grid_title_legacy')" @input="setOption('product_grid_title_legacy', $event)"/>

                <to-separator v-if="getOption('product_grid_title_legacy') === '1'"></to-separator>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_grid_title_legacy') === '1'">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_styles_title_font_listings_grids') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Titles-1-1.png'},
                                {name: 'Product_Titles-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="product_title_listing"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_grid_title_legacy') === '1'">
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker :value="getOption('product_title_listing_color')"  @input="setOption('product_title_listing_color',$event)" :label-title="$t('colors.font_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_page') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_page_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_styles_title_font_product_page') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Titles_in_Product_Pages.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="product_title_page"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker :value="getOption('product_title_page_color')" @input="setOption('product_title_page_color',$event)" :label-title="$t('colors.font_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_sidebar') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_sidebar_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_styles_title_font_widget') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Titles_in_Sidebar.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="product_title_widget"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker :value="getOption('product_title_widget_color')" @input="setOption('product_title_widget_color',$event)" :label-title="$t('colors.font_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_cart_checkout') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_cart_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_styles_title_font_cart') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Titles_in_Cart.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="product_title_cart"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker :value="getOption('product_title_cart_color')" @input="setOption('product_title_cart_color',$event)" :label-title="$t('colors.font_color_cart')"/>
                        </div>
                        <div class="col-auto">
                            <to-color-picker :value="getOption('product_title_checkout_color')" @input="setOption('product_title_checkout_color',$event)" :label-title="$t('colors.font_color_checkout')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.product_categories_styles">
            <to-panel-subtitle v-slot:label>{{ $t('panel.product_grid_styles') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_categories_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_categories_title') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Style_Categories_in_Products_Grid-1-1.png'},
                                {name: 'Product_Style_Categories_in_Products_Grid-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="product_grid_category"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_category_color')" @input="setOption('product_grid_category_color',$event)" :label-title="$t('colors.color_normal')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_category_color_hover')" @input="setOption('product_grid_category_color_hover',$event)" :label-title="$t('colors.color_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_category_color_on_image')"  @input="setOption('product_grid_category_color_on_image',$event)" :label-title="$t('colors.caption_on_image')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_grid_category_styles') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_grid_category_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_grid_category_title') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Style_Categories_Grid_Category_Title.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="product_grid_category_title"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_category_title_color_dark')" @input="setOption('product_grid_category_title_color_dark',$event)" :label-title="$t('colors.caption_on_image_dark')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_category_title_color_light')" @input="setOption('product_grid_category_title_color_light',$event)" :label-title="$t('colors.caption_on_image_light')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_category_title_color_below_image')"  @input="setOption('product_grid_category_title_color_below_image',$event)" :label-title="$t('colors.caption_below_image')"/>
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_grid_category_counts')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_grid_category_counts') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Style_Categories_Grid_Product_Counts.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="product_grid_category_counts"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_category_counts_color_dark')" @input="setOption('product_grid_category_counts_color_dark',$event)" :label-title="$t('colors.caption_on_image_dark')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_category_counts_color_light')" @input="setOption('product_grid_category_counts_color_light',$event)" :label-title="$t('colors.caption_on_image_light')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_category_counts_color_below_image')"  @input="setOption('product_grid_category_counts_color_below_image',$event)" :label-title="$t('colors.caption_below_image')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.product_price_styles">
            <to-panel-subtitle v-slot:label>{{ $t('panel.product_grid_styles') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_grids_price_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_styles_price_font_listings_grids') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Price-1-1.png'},
                                {name: 'Product_Price-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="product_price_listing"></to-block-font>
                </div>

                <to-separator></to-separator>

            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_price_color')" @input="setOption('product_grid_price_color',$event)" :label-title="$t('colors.caption_below_image')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_price_color_on_image')" @input="setOption('product_grid_price_color_on_image',$event)" :label-title="$t('colors.caption_on_image')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_price_listing_color')" @input="setOption('product_price_listing_color',$event)" :label-title="$t('colors.product_grids_legacy_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_page') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_page_price_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_styles_price_font_product_page') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Price_in_Product_Pages.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="product_price_page"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker :value="getOption('product_price_page_color')" @input="setOption('product_price_page_color',$event)" :label-title="$t('colors.font_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_sidebar') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_sidebar_price_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_styles_price_font_widget') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Price_in_Sidebar.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="product_price_widget"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker :value="getOption('product_price_widget_color')" @input="setOption('product_price_widget_color',$event)" :label-title="$t('colors.font_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_cart_checkout') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_cart_price_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_styles_price_font_cart') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Price_in_Cart.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="product_price_cart"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker :value="getOption('product_price_cart_color')" @input="setOption('product_price_cart_color',$event)" :label-title="$t('colors.font_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.product_buttons_styles">
            <to-panel-subtitle v-slot:label>{{ $t('panel.product_grid_styles') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_grid_button_general')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_grid_button_general') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Style_Buttons_in_Products_Grid-1-1.png'},
                                {name: 'Product_Style_Buttons_in_Products_Grid-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="20" unit="px" :value="getOption('product_grid_button_border_width')" @input="setOption('product_grid_button_border_width', $event)" :labelTitle="$t('general.border_width')"/>
                        </div>
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="150" unit="px" :value="getOption('product_grid_button_border_radius')" @input="setOption('product_grid_button_border_radius', $event)" :labelTitle="$t('general.border_radius')"/>
                        </div>
                    </div>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_grid_button_add_to_cart')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_grid_button_add_to_cart') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Style_Add_to_Cart_Button-1-1.png'},
                                {name: 'Product_Style_Add_to_Cart_Button-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_add_to_cart_color')" @input="setOption('product_grid_button_add_to_cart_color',$event)" :label-title="$t('colors.text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_add_to_cart_color_hover')" @input="setOption('product_grid_button_add_to_cart_color_hover',$event)" :label-title="$t('colors.text_color_on_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_add_to_cart_background')" @input="setOption('product_grid_button_add_to_cart_background',$event)" :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_add_to_cart_background_hover')" @input="setOption('product_grid_button_add_to_cart_background_hover',$event)" :label-title="$t('colors.background_color_on_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_add_to_cart_border_color')" @input="setOption('product_grid_button_add_to_cart_border_color',$event)" :label-title="$t('colors.border_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_add_to_cart_border_color_hover')" @input="setOption('product_grid_button_add_to_cart_border_color_hover',$event)" :label-title="$t('colors.border_color_on_hover')"/>
                        </div>
                    </div>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_grid_button_select_options')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_grid_button_select_options') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Style_Select_Options_View_Cart_Buttons-1-1.png'},
                                {name: 'Product_Style_Select_Options_View_Cart_Buttons-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_select_options_color')" @input="setOption('product_grid_button_select_options_color',$event)" :label-title="$t('colors.text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_select_options_color_hover')" @input="setOption('product_grid_button_select_options_color_hover',$event)" :label-title="$t('colors.text_color_on_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_select_options_background')" @input="setOption('product_grid_button_select_options_background',$event)" :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_select_options_background_hover')" @input="setOption('product_grid_button_select_options_background_hover',$event)" :label-title="$t('colors.background_color_on_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_select_options_border_color')" @input="setOption('product_grid_button_select_options_border_color',$event)" :label-title="$t('colors.border_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_select_options_border_color_hover')" @input="setOption('product_grid_button_select_options_border_color_hover',$event)" :label-title="$t('colors.border_color_on_hover')"/>
                        </div>
                    </div>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_grid_button_load_more')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_grid_button_load_more') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="6" unit="px" :value="getOption('product_grid_button_load_more_border_width')" @input="setOption('product_grid_button_load_more_border_width', $event)" :labelTitle="$t('general.border_width')"/>
                        </div>
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="50" unit="px" :value="getOption('product_grid_button_load_more_border_radius')" @input="setOption('product_grid_button_load_more_border_radius', $event)" :labelTitle="$t('general.border_radius')"/>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings">
                    <to-separator></to-separator>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_load_more_color')" @input="setOption('product_grid_button_load_more_color',$event)" :label-title="$t('colors.text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_load_more_color_hover')" @input="setOption('product_grid_button_load_more_color_hover',$event)" :label-title="$t('colors.text_color_on_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_load_more_background')" @input="setOption('product_grid_button_load_more_background',$event)" :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_load_more_background_hover')" @input="setOption('product_grid_button_load_more_background_hover',$event)" :label-title="$t('colors.background_color_on_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_load_more_border_color')" @input="setOption('product_grid_button_load_more_border_color',$event)" :label-title="$t('colors.border_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_button_load_more_border_color_hover')" @input="setOption('product_grid_button_load_more_border_color_hover',$event)" :label-title="$t('colors.border_color_on_hover')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_page_styles') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_page_styles_button_add_to_cart')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">

                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="6" unit="px" :value="getOption('product_page_button_add_to_cart_border_width')" @input="setOption('product_page_button_add_to_cart_border_width', $event)" :labelTitle="$t('general.border_width')"/>
                        </div>
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="50" unit="px" :value="getOption('product_page_button_add_to_cart_border_radius')" @input="setOption('product_page_button_add_to_cart_border_radius', $event)" :labelTitle="$t('general.border_radius')"/>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings">
                    <to-separator></to-separator>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_page_button_add_to_cart_color')" @input="setOption('product_page_button_add_to_cart_color',$event)" :label-title="$t('colors.text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_page_button_add_to_cart_color_hover')" @input="setOption('product_page_button_add_to_cart_color_hover',$event)" :label-title="$t('colors.text_color_on_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_page_button_add_to_cart_background')" @input="setOption('product_page_button_add_to_cart_background',$event)" :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_page_button_add_to_cart_background_hover')" @input="setOption('product_page_button_add_to_cart_background_hover',$event)" :label-title="$t('colors.background_color_on_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_page_button_add_to_cart_border_color')" @input="setOption('product_page_button_add_to_cart_border_color',$event)" :label-title="$t('colors.border_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_page_button_add_to_cart_border_color_hover')" @input="setOption('product_page_button_add_to_cart_border_color_hover',$event)" :label-title="$t('colors.border_color_on_hover')"/>
                        </div>
                    </div>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_page_styles_button_add_to_wishlist')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">

                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_page_button_add_to_wishlist_color')" @input="setOption('product_page_button_add_to_wishlist_color',$event)" :label-title="$t('colors.color_normal')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_page_button_add_to_wishlist_color_hover')" @input="setOption('product_page_button_add_to_wishlist_color_hover',$event)" :label-title="$t('colors.color_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_page_button_add_to_wishlist_color_filled')" @input="setOption('product_page_button_add_to_wishlist_color_filled',$event)" :label-title="$t('colors.color_filled')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.product_icons_styles">
            <to-panel-subtitle v-slot:label>{{ $t('panel.product_grid_styles') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_grid_icon_style')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_grid_icon_style') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Style_Icons_in_Products_Grid-1-1.png'},
                                {name: 'Product_Style_Icons_in_Products_Grid-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="20" unit="px" :value="getOption('product_grid_icons_border_width')" @input="setOption('product_grid_icons_border_width', $event)" :labelTitle="$t('general.border_width')"/>
                        </div>
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="150" unit="px" :value="getOption('product_grid_icons_border_radius')" @input="setOption('product_grid_icons_border_radius', $event)" :labelTitle="$t('general.border_radius')"/>
                        </div>
                    </div>
                    <to-separator></to-separator>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_icons_color')" @input="setOption('product_grid_icons_color',$event)" :label-title="$t('colors.icon')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_icons_color_hover')" @input="setOption('product_grid_icons_color_hover',$event)" :label-title="$t('colors.icon_on_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_icons_caption_image_color')" @input="setOption('product_grid_icons_caption_image_color',$event)" :label-title="$t('colors.icon_caption_image')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_icons_caption_image_color_hover')" @input="setOption('product_grid_icons_caption_image_color_hover',$event)" :label-title="$t('colors.icon_caption_image_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_icons_background')" @input="setOption('product_grid_icons_background',$event)" :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_icons_background_hover')" @input="setOption('product_grid_icons_background_hover',$event)" :label-title="$t('colors.background_color_on_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_icons_border_color')" @input="setOption('product_grid_icons_border_color',$event)" :label-title="$t('colors.border_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_icons_border_color_hover')" @input="setOption('product_grid_icons_border_color_hover',$event)" :label-title="$t('colors.border_color_on_hover')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_rating') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_rating_stars')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_styles_rating_stars') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker :value="getOption('product_rating_stars_base_color')" @input="setOption('product_rating_stars_base_color',$event)" :label-title="$t('colors.rating_stars_base')"/>
                        </div>
                        <div class="col-auto">
                            <to-color-picker :value="getOption('product_rating_stars_rated_color')" @input="setOption('product_rating_stars_rated_color',$event)" :label-title="$t('colors.rating_stars_rated')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.product_labels_styles">
            <div v-if="getOption('product_archive_type') === 'grid'" class="to-panel-separator first-of-type">
                <to-panel-group :label-title="$t('panel.product_labels_style')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_styles_labels') }}
                                </div>
                            </div>
                        </div>
                    </template>
                    <div class="to-block-product-preset">
                        <div class="to-changed-settings labels-type">
                            <div class="to-file-select-list">
                                <to-radio-icon :value="getOption('product_labels_style')" @input="setOption('product_labels_style', $event)" :options="productLabelsStyle"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.product_label_new')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_styles_label_new') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label>{{$t('productPage.label_text')}}</to-label>
                                <to-input :value="getOption('product_label_new_text')" @input="setOption('product_label_new_text', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.product_label_sale')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_styles_label_sale') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label>{{$t('productPage.label_sale_type')}}</to-label>
                                <to-select :value="getOption('product_label_sale_type')" @input="setOption('product_label_sale_type',$event)" :options="productLabelSaleType"></to-select>
                            </div>
                            <div class="col-4" v-if="getOption('product_label_sale_type') === 'percentage'">
                                <to-label>{{$t('productPage.label_sale_prefix')}}</to-label>
                                <to-input :value="getOption('product_label_sale_prefix')" @input="setOption('product_label_sale_prefix', $event)"/>
                            </div>
                            <div class="col-4" v-if="getOption('product_label_sale_type') === 'percentage'">
                                <to-label>{{$t('productPage.label_sale_suffix')}}</to-label>
                                <to-input :value="getOption('product_label_sale_suffix')" @input="setOption('product_label_sale_suffix', $event)"/>
                            </div>
                            <div class="col-2" v-if="getOption('product_label_sale_type') === 'text'">
                                <to-label>{{$t('productPage.label_text')}}</to-label>
                                <to-input :value="getOption('product_label_sale_text')" @input="setOption('product_label_sale_text', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.product_label_out_of_stock')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_styles_label_out_of_stock') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label>{{$t('productPage.label_text')}}</to-label>
                                <to-input :value="getOption('product_label_out_of_stock_text')" @input="setOption('product_label_out_of_stock_text', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>

            <to-panel-group :label-title="$t('panel.product_labels_font_default')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_labels_font_default') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Style_Product_Labels-1-1.png'},
                                {name: 'Product_Style_Product_Labels-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="product_labels"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_labels_text_color')" @input="setOption('product_labels_text_color',$event)" :label-title="$t('colors.product_labels_text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_labels_sale_background')" @input="setOption('product_labels_sale_background',$event)" :label-title="$t('colors.product_labels_sale_background')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_labels_new_background')" @input="setOption('product_labels_new_background',$event)" :label-title="$t('colors.product_labels_new_background')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_labels_out_of_stock_background')" @input="setOption('product_labels_out_of_stock_background',$event)" :label-title="$t('colors.product_labels_out_of_stock_background')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.product_additional_colors">
            <to-panel-subtitle v-slot:label>{{ $t('panel.product_grid_styles') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_grid_separator')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_styles_listings_and_grids') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[{name:'Product_Separator_Color.png'}]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_separator_listing_color')" @input="setOption('product_separator_listing_color',$event)" :label-title="$t('colors.color_normal')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_grid_quick_view_colors')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_grid_quick_view_colors') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Style_Quick_View_in_Products_Grid.png'}
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_quick_view_color')" @input="setOption('product_grid_quick_view_color',$event)" :label-title="$t('colors.text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('product_grid_quick_view_background')" @input="setOption('product_grid_quick_view_background',$event)" :label-title="$t('colors.background_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_wishlist_styles') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_wishlist_styles_table')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_cart_checkout_checkout_table') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Cart_&_Checkout_Table.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('cart_table_header_color')" @input="setOption('cart_table_header_color',$event)" :label-title="$t('colors.titles_text')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('cart_table_header_background_color')" @input="setOption('cart_table_header_background_color',$event)" :label-title="$t('colors.header_background')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>
    </div>
</template>

<script>
    import {addHelpers} from '@/services/helper';
    import config from '@/services/config';
    import i18n from '@/services/i18n';

    export default addHelpers({
        data: () => {
            let presetLabels = [],
                presetLabelsTypes = [
                    {img: '1', title: i18n.t('productPage.label_style') + ' 1'},
                    {img: '2', title: i18n.t('productPage.label_style') + ' 2'},
                    {img: '3', title: i18n.t('productPage.label_style') + ' 3'},
                    {img: '4', title: i18n.t('productPage.label_style') + ' 4'},
                    {img: '5', title: i18n.t('productPage.label_style') + ' 5'},
                    {img: '6', title: i18n.t('productPage.label_style') + ' 6'},
                ];

            for (let type of presetLabelsTypes) {
                let urlHover = config.presetsUrl + 'labels/' + type.img + '.jpg';
                presetLabels.push({image: urlHover, imageType: '', value: type.img, title: type.title});
            }

            return {
                productLabelsStyle: presetLabels,
                productLabelSaleType: [
                    {label: i18n.t('productPage.show_percentage'), value: 'percentage'},
                    {label: i18n.t('productPage.show_text'), value: 'text'},
                ],

            }
        }
    })
</script>
