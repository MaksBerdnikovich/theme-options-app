<template>
    <div>
        <to-panel id="panel.cart_layout">
            <to-panel-group :label-title="$t('panel.cart_layout_source')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_cart_layout_source')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('cart_layout_source')" @input="setOption('cart_layout_source', $event)" :options="cartLayoutSource"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('cart_layout_source') === 'builder'" :label-title="$t('panel.cart_builder_template')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_cart_builder_template')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label>{{$t('cartCheckout.select_template')}}</to-label>
                            <to-select
                                :value="getOption('cart_builder_template')"
                                @input="setOption('cart_builder_template', $event)"
                                :options="cartBuilderTemplatesList"
                                v-on:right-button-clicked="showPreview($event)"
                                v-on:edit-button-clicked="showEditPage($event)"
                            />
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                            <to-link :href="cartBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                            <to-link :href="cartBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('cart_layout_source') === 'default'" :label-title="$t('panel.cart_layout_select')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_cart_checkout_select_cart_layout') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Classic-Layout.png'},
                                {name: 'Modern-Layout.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('cart_layout')" @input="setOption('cart_layout',$event)" :options="cartLayout"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.cart_empty_layout_source')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_cart_empty_layout_source')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('cart_empty_layout_source')" @input="setOption('cart_empty_layout_source', $event)" :options="cartEmptyLayoutSource"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('cart_empty_layout_source') === 'builder'" :label-title="$t('panel.cart_empty_builder_template')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_cart_empty_builder_template')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label>{{$t('cartCheckout.select_template')}}</to-label>
                            <to-select
                                :value="getOption('cart_empty_builder_template')"
                                @input="setOption('cart_empty_builder_template', $event)"
                                :options="cartEmptyBuilderTemplatesList"
                                v-on:right-button-clicked="showPreview($event)"
                                v-on:edit-button-clicked="showEditPage($event)"
                            />
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                            <to-link :href="cartEmptyBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div v-if="getOption('cart_layout') === 'modern'" class="to-panel-separator">
                <to-panel-group v-if="getOption('cart_layout_source') === 'default'" :label-title="$t('panel.cart_checkout_steps')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_cart_checkout_cart_checkout_steps') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                    {name: 'Checkout-steps-1-1.png'},
                                    {name: 'Checkout-steps-1-2.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('modern_cart_steps')" @input="setOption('modern_cart_steps',$event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('modern_cart_steps') === '1'" :label-title="$t('panel.cart_checkout_steps_position')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_cart_checkout_steps_position') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                    {name: 'In-Title-Area.png'},
                                    {name: 'In-Content.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('modern_cart_steps_position')" @input="setOption('modern_cart_steps_position',$event)" :options="cartStepsPosition"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.cart_empty_title')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_cart_checkout_empty_cart_title') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('cart_empty_title')" @input="setOption('cart_empty_title',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.cart_empty_text')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_cart_checkout_empty_cart_text') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-textarea :height="'60px'" :value="getOption('cart_empty_text')" @input="setOption('cart_empty_text',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('cart_layout_source') === 'default'" :label-title="$t('panel.cart_cross_sell')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.woocommerce_cart_checkout_cross_sell_products')"/>
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                    {name: 'Cross-Sell-Products.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('cart_elements_cross_sells')" @input="setOption('cart_elements_cross_sells',$event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('cart_elements_cross_sells') === '1'" :label-title="$t('panel.cart_cross_sell_title')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_cart_checkout_cross_sells_title') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('cart_elements_cross_sells_title')" @input="setOption('cart_elements_cross_sells_title',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('cart_elements_cross_sells') === '1'" :label-title="$t('panel.cart_cross_sell_items')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_cart_checkout_number_of_cross_sells') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('cart_elements_cross_sells_items')" @input="setOption('cart_elements_cross_sells_items',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('cart_elements_cross_sells') === '1'" :label-title="$t('panel.cart_cross_sell_columns')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_cart_checkout_cross_sells_columns') }}
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{isDesktop,isTablet,isMobile}">
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select v-if="isDesktop" :value="getOption('cart_elements_cross_sells_columns_desktop')" @input="setOption('cart_elements_cross_sells_columns_desktop',$event)" :options="cartElementsCrossSellsColumnsDesktop"></to-select>
                                    <to-select v-if="isTablet" :value="getOption('cart_elements_cross_sells_columns_tablet')" @input="setOption('cart_elements_cross_sells_columns_tablet',$event)" :options="cartElementsCrossSellsColumnsTablet"></to-select>
                                    <to-select v-if="isMobile" :value="getOption('cart_elements_cross_sells_columns_mobile')" @input="setOption('cart_elements_cross_sells_columns_mobile',$event)" :options="cartElementsCrossSellsColumnsMobile"></to-select>
                                </div>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group v-if="getOption('cart_elements_cross_sells') === '1' && getOption('cart_elements_cross_sells_columns_desktop') === '100%'" :label-title="$t('panel.cart_cross_sell_columns_100')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">

                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('cart_elements_cross_sells_columns_100')" @input="setOption('cart_elements_cross_sells_columns_100',$event)" :options="cartElementsCrossSellsColumns100"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.checkout_layout">
            <to-panel-group :label-title="$t('panel.checkout_layout_source')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_checkout_layout_source')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('checkout_layout_source')" @input="setOption('checkout_layout_source', $event)" :options="checkoutLayoutSource"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('checkout_layout_source') === 'builder'" :label-title="$t('panel.checkout_builder_template')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_checkout_builder_template')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label>{{$t('cartCheckout.select_template')}}</to-label>
                            <to-select
                                :value="getOption('checkout_builder_template')"
                                @input="setOption('checkout_builder_template', $event)"
                                :options="checkoutBuilderTemplatesList"
                                v-on:right-button-clicked="showPreview($event)"
                                v-on:edit-button-clicked="showEditPage($event)"
                            />
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                            <to-link :href="checkoutBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                            <to-link :href="checkoutBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.checkout_thanks_layout_source')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_checkout_thanks_layout_source')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('checkout_thanks_layout_source')" @input="setOption('checkout_thanks_layout_source', $event)" :options="checkoutThanksLayoutSource"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('checkout_thanks_layout_source') === 'builder'" :label-title="$t('panel.checkout_thanks_builder_template')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_checkout_thanks_builder_template')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label>{{$t('cartCheckout.select_template')}}</to-label>
                            <to-select
                                :value="getOption('checkout_thanks_builder_template')"
                                @input="setOption('checkout_thanks_builder_template', $event)"
                                :options="checkoutThanksBuilderTemplatesList"
                                v-on:right-button-clicked="showPreview($event)"
                                v-on:edit-button-clicked="showEditPage($event)"
                            />
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                            <to-link :href="checkoutThanksBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                            <to-link :href="checkoutThanksBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('cart_layout') === 'classic'" :label-title="$t('panel.checkout_layout_select')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_cart_checkout_select_checkout_layout') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('checkout_type')" @input="setOption('checkout_type',$event)" :options="checkoutType"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div v-if="getOption('checkout_thanks_layout_source') === 'default'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.checkout_thank_you_extra')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_cart_checkout_extra_content') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-wysiwyg :height="'120px'" :value="getOption('checkout_thank_you_extra')" @input="setOption('checkout_thank_you_extra', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.checkout_thank_you_default')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_cart_checkout_default_content') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('checkout_thank_you_default')" @input="setOption('checkout_thank_you_default',$event)"/>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.cart_icon">
            <to-panel-group :label-title="$t('panel.cart_icon')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_cart_checkout_cart_icon') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-switch trueValue="0" falseValue="1" :value="getOption('hide_card_icon')" @input="setOption('hide_card_icon',$event)"/>
                        </div>
                        <div class="col-1" v-if="getOption('hide_card_icon') === '0'">
                            <to-radio-icon class="width-48" :value="getOption('cart_icon_default')" @input="setOption('cart_icon_default',$event)" :options="cartIconDefault" />
                        </div>
                        <div class="col-3 col-tb-2" v-if="getOption('hide_card_icon') === '0' && getOption('cart_icon_default') === 'custom'">
                            <to-block-icon option-prefix="cart_icon" :label-title="$t('panel.icon')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.hamburger_position')" :responsive="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_cart_checkout_position_in_hamburger') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Position_Cart_Icon_in_Hamburger_Menu-1-1.png'},
                                {name: 'Position_Cart_Icon_in_Hamburger_Menu-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop,isMobile }">
                    <div class="to-changed-settings" v-if="isDesktop">
                        <to-radio-icon :value="getOption('hamburger_menu_cart_position')" @input="setOption('hamburger_menu_cart_position',$event)" :options="hamburgerPosition" />
                    </div>
                    <div class="to-changed-settings" v-if="isMobile">
                        <to-radio-icon class="width-70" :value="getOption('mobile_cart_position')" @input="setOption('mobile_cart_position',$event)" :options="hamburgerPositionMobile" />
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.amount_label')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_cart_checkout_amount_label') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Amount_Label.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('cart_label_count')" @input="setOption('cart_label_count',$event)" :options="cartLabelCount" />
                        </div>
                        <div class="col-1">
                            <to-radio-icon class="width-48 light" :value="getOption('cart_label_type')" @input="setOption('cart_label_type',$event)" :options="cartLabelType" />
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.amount_label_color')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_cart_checkout_amount_label_color') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Amount_Color.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('minicart_amount_label_color')" @input="setOption('minicart_amount_label_color',$event)" :label-title="$t('colors.label_background_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.mini_cart')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_cart_checkout_mini_cart') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('minicart_main_background_color')" @input="setOption('minicart_main_background_color',$event)" :label-title="$t('colors.main_background_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.mini_cart_type')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_cart_checkout_mini_cart_type')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-radio-icon :value="getOption('mini_cart_type')" @input="setOption('mini_cart_type',$event)" :options="miniCartType" />
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption('mini_cart_type') === 'sidebar'">
                <to-panel-group :label-title="$t('panel.mini_cart_sidebar_title')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.woocommerce_cart_checkout_mini_cart_sidebar_title')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('mini_cart_sidebar_title')" @input="setOption('mini_cart_sidebar_title',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.mini_cart_sidebar_view_cart_btn')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.woocommerce_cart_checkout_mini_cart_sidebar_view_cart_btn')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch :value="getOption('mini_cart_sidebar_view_cart_btn')" @input="setOption('mini_cart_sidebar_view_cart_btn',$event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.mini_cart_sidebar_infotext')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.woocommerce_cart_checkout_mini_cart_sidebar_infotext')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-textarea :height="'60px'" :value="getOption('mini_cart_sidebar_infotext')" @input="setOption('mini_cart_sidebar_infotext',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.wishlist_icon" v-if="isFutureMode">
            <to-panel-group :label-title="$t('panel.wishlist_icon')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_cart_checkout_wishlist_icon') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop,isTablet,isMobile }">
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-switch v-if="isDesktop" :value="getOption('wishlist_icon_desktop')" @input="setOption('wishlist_icon_desktop',$event)"/>
                                <to-switch v-if="isTablet" :value="getOption('wishlist_icon_tablet')" @input="setOption('wishlist_icon_tablet',$event)"/>
                                <to-switch v-if="isMobile" :value="getOption('wishlist_icon_mobile')" @input="setOption('wishlist_icon_mobile',$event)"/>
                            </div>
                            <div class="col-1" v-if="(isDesktop && getOption('wishlist_icon_desktop')) || (isTablet && getOption('wishlist_icon_tablet')) || (isMobile && getOption('wishlist_icon_mobile'))">
                                <to-radio-icon class="width-48" :value="getOption('wishlist_icon_default')" @input="setOption('wishlist_icon_default',$event)" :options="whishlistIconDefault" />
                            </div>
                            <div class="col-3 col-tb-2" v-if="(isDesktop && getOption('wishlist_icon_desktop') && getOption('wishlist_icon_default') === 'custom') || (isTablet && getOption('wishlist_icon_tablet') && getOption('wishlist_icon_default') === 'custom') || (isMobile && getOption('wishlist_icon_mobile') && getOption('wishlist_icon_default') === 'custom')">
                                <to-block-icon option-prefix="wishlist_icon" :label-title="$t('panel.icon')"/>
                            </div>
                        </div>
                    </div>
                </template>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.colors" v-if="getOption('cart_layout') === 'classic'">
            <to-panel-group :label-title="$t('panel.cart_checkout_table')">
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
                            <to-color-picker
                                :value="getOption('cart_table_header_color')"
                                @input="setOption('cart_table_header_color',$event)"
                                :label-title="$t('colors.titles_text')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('cart_table_header_background_color')"
                                @input="setOption('cart_table_header_background_color',$event)"
                                :label-title="$t('colors.header_background')"/>
                        </div>
                    </div>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.cart_checkout_forms')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_cart_checkout_checkout_forms') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Cart_&_Checkout_Forms-1-1.png'},
                                {name: 'Cart_&_Checkout_Forms-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('cart_form_labels_color')"
                                @input="setOption('cart_form_labels_color',$event)"
                                :label-title="$t('colors.labels_text')"/>
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>

            </to-panel-group>

            <to-panel-group :label-title="$t('panel.cart_checkout_steps')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_cart_checkout_checkout_steps') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Checkout_Steps.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('checkout_step_title_color')"
                                @input="setOption('checkout_step_title_color',$event)"
                                :label-title="$t('colors.inactive_step')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('checkout_step_background_color')"
                                @input="setOption('checkout_step_background_color',$event)"
                                :label-title="$t('colors.inactive_step_background')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('checkout_step_title_active_color')"
                                @input="setOption('checkout_step_title_active_color',$event)"
                                :label-title="$t('colors.active_step')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('checkout_step_background_active_color')"
                                @input="setOption('checkout_step_background_active_color',$event)"
                                :label-title="$t('colors.active_step_background')"/>
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
        data() {
            const cartBuilderTemplatesList = JSON.parse(JSON.stringify(config.cartBuilderTemplates));
            for(let item of cartBuilderTemplatesList) {
                if (item.preview) {
                    item.rightButton = {icon: 'eye'};
                }

                if (item.edit) {
                    item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
                }
            }

            const cartEmptyBuilderTemplatesList = JSON.parse(JSON.stringify(config.sectionBuilderTemplates));
            for(let item of cartEmptyBuilderTemplatesList) {
                if (item.preview) {
                    item.rightButton = {icon: 'eye'};
                }

                if (item.edit) {
                    item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
                }
            }

            const checkoutBuilderTemplatesList = JSON.parse(JSON.stringify(config.checkoutBuilderTemplates));
            for(let item of checkoutBuilderTemplatesList) {
                if (item.preview) {
                    item.rightButton = {icon: 'eye'};
                }

                if (item.edit) {
                    item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
                }
            }

            const checkoutThanksBuilderTemplatesList = JSON.parse(JSON.stringify(config.checkoutThanksBuilderTemplates));
            for(let item of checkoutThanksBuilderTemplatesList) {
                if (item.preview) {
                    item.rightButton = {icon: 'eye'};
                }

                if (item.edit) {
                    item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
                }
            }

            return {
                cartBuilderTemplatesList,
                cartEmptyBuilderTemplatesList,
                checkoutBuilderTemplatesList,
                checkoutThanksBuilderTemplatesList,
                cartLayoutSource: [
                    {label: i18n.t('cartCheckout.layout_source_default'), value: 'default'},
                    {label: i18n.t('cartCheckout.layout_source_builder'), value: 'builder'},
                ],
                cartEmptyLayoutSource: [
                    {label: i18n.t('cartCheckout.layout_source_default'), value: 'default'},
                    {label: i18n.t('cartCheckout.layout_source_builder'), value: 'builder'},
                ],
                checkoutLayoutSource: [
                    {label: i18n.t('cartCheckout.layout_source_default'), value: 'default'},
                    {label: i18n.t('cartCheckout.layout_source_builder'), value: 'builder'},
                ],
                checkoutThanksLayoutSource: [
                    {label: i18n.t('cartCheckout.layout_source_default'), value: 'default'},
                    {label: i18n.t('cartCheckout.layout_source_builder'), value: 'builder'},
                ],
                cartLayout: [
                    {label: i18n.t('cartCheckout.cart_modern'), value: 'modern'},
                    {label: i18n.t('cartCheckout.cart_classic'), value: 'classic'},
                ],
                cartStepsPosition: [
                    {label: i18n.t('cartCheckout.content_area'), value: 'content_area'},
                    {label: i18n.t('cartCheckout.title_area'), value: 'title_area'},
                ],
                cartElementsCrossSellsColumnsDesktop: [
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                    {label: i18n.t('productArchive.col-3x'), value: '3x'},
                    {label: i18n.t('productArchive.col-4x'), value: '4x'},
                    {label: i18n.t('productArchive.col-5x'), value: '5x'},
                    {label: i18n.t('productArchive.col-6x'), value: '6x'},
                    {label: i18n.t('productArchive.col-100%'), value: '100%'},
                ],
                cartElementsCrossSellsColumnsTablet: [
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                    {label: i18n.t('productArchive.col-3x'), value: '3x'},
                    {label: i18n.t('productArchive.col-4x'), value: '4x'},
                ],
                cartElementsCrossSellsColumnsMobile: [
                    {label: i18n.t('productArchive.col-1x'), value: '1x'},
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                ],
                cartElementsCrossSellsColumns100: [
                    {label: i18n.t('productArchive.col-4'), value: '4'},
                    {label: i18n.t('productArchive.col-5'), value: '5'},
                    {label: i18n.t('productArchive.col-6'), value: '6'},
                ],
                checkoutType: [
                    {label: i18n.t('cartCheckout.checkout_onepage'), value: 'one-page'},
                    {label: i18n.t('cartCheckout.checkout_multistep'), value: 'multi-step'},
                ],
                hamburgerPosition: [
                    {icon: 'Schemes-20', title: i18n.t('settings.hamburger_position_header'), value: '1'},
                    {icon: 'Schemes-21', title: i18n.t('settings.hamburger_position_menu'), value: ''},
                ],
                hamburgerPositionMobile: [
                    {icon: 'Schemes-35', title: i18n.t('settings.hamburger_position_header'), value: 'top'},
                    {icon: 'Schemes-34', title: i18n.t('settings.hamburger_position_menu'), value: 'menu'},
                ],
                cartLabelCount: [
                    {label: i18n.t('settings.show_positions_amount'), value: '0'},
                    {label: i18n.t('settings.show_total_product_amount'), value: '1'},
                ],
                cartIconDefault: [
                    {icon: 'shopping-cart', title: i18n.t('cartCheckout.icon_cart'), value: 'cart'},
                    {icon: 'shopping-bag', title: i18n.t('cartCheckout.icon_bag'), value: 'bag'},
                    {icon: 'add', title: i18n.t('cartCheckout.icon_custom'), value: 'custom'},
                ],
                cartLabelType: [
                    {icon: 'cart-label-1', title: i18n.t('cartCheckout.label') + '1', value: '1'},
                    {icon: 'cart-label-3', title: i18n.t('cartCheckout.label') + '2', value: '2'},
                ],
                whishlistIconDefault: [
                    {icon: 'heart', title: i18n.t('cartCheckout.icon_heart'), value: 'heart'},
                    {icon: 'add', title: i18n.t('cartCheckout.icon_custom'), value: 'custom'},
                ],
                miniCartType: [
                    {icon: 'Schemes-53', title: i18n.t('cartCheckout.mini_cart_dropdown'), value: 'dropdown'},
                    {icon: 'Schemes-52', title: i18n.t('cartCheckout.mini_cart_sidebar'), value: 'sidebar'},
                ],
            }
        },

        computed: {
            cartBuilderCreateUrl(){
                return config.cartBuilderCreateUrl
            },

            cartBuilderImportUrl(){
                return config.cartBuilderImportUrl
            },

            cartEmptyBuilderCreateUrl(){
                return config.sectionBuilderCreateUrl
            },

            cartEmptyBuilderImportUrl(){
                return config.sectionBuilderImportUrl
            },

            checkoutBuilderCreateUrl(){
                return config.checkoutBuilderCreateUrl
            },

            checkoutBuilderImportUrl(){
                return config.checkoutBuilderImportUrl
            },

            checkoutThanksBuilderCreateUrl(){
                return config.checkoutThanksBuilderCreateUrl
            },

            checkoutThanksBuilderImportUrl(){
                return config.checkoutThanksBuilderImportUrl
            },
        },

        methods: {
            showPreview(item) {
                window.open(item.preview,'_blank');
            },

            showEditPage(item) {
                window.open(item.edit,'_blank');
            }
        },
    })
</script>
