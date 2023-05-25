<template>
    <div>
        <to-panel id="panel.extra_options">
            <to-panel-group :label-title="$t('panel.catalog_mode')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_general_catalog_mode') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption('catalog_view')" @input="setOption('catalog_view',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.custom_image_settings')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_general_use_custom_image_settings') }}
                            <router-link :to="'/extras'">{{$t('panel.extra_options')}} -> {{$t('panel.thumbnails_cache')}} -> {{$t('button.purge_all')}}</router-link>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption('woocommerce_activate_images_sizes')" @input="setOption('woocommerce_activate_images_sizes',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('woocommerce_activate_images_sizes') && getOption('product_archive_type') === 'legacy'" :label-title="$t('settings.image_size_catalog')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_general_catalog_image_sizes') }}
                            <router-link :to="'/woocommerce/product-layout-archive'">{{$t('menu.woocommerce_product-layout-archive')}}</router-link>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="1000" unit="px" :labelTitle="$t('general.width')" :value="getOption('woocommerce_catalog_image_width')" @input="setOption('woocommerce_catalog_image_width',$event)"/>
                        </div>
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="1000" unit="px" :labelTitle="$t('general.height')" :value="getOption('woocommerce_catalog_image_height')" @input="setOption('woocommerce_catalog_image_height',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="(getOption('woocommerce_activate_images_sizes') && getOption('product_gallery') === 'legacy') || (getOption('woocommerce_activate_images_sizes') && getOption('product_gallery') === 'enabled' && getOption('product_gallery_type') === 'grid')" :label-title="$t('settings.image_size_product')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_general_product_image_sizes') }}
                            <router-link :to="'/extras'">{{$t('panel.extra_options')}} -> {{$t('panel.thumbnails_cache')}} -> {{$t('button.purge_all')}}</router-link>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="1000" unit="px" :labelTitle="$t('general.width')" :value="getOption('woocommerce_product_image_width')" @input="setOption('woocommerce_product_image_width',$event)"/>
                        </div>
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="1000" unit="px" :labelTitle="$t('general.height')" :value="getOption('woocommerce_product_image_height')" @input="setOption('woocommerce_product_image_height',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('woocommerce_activate_images_sizes')" :label-title="$t('settings.image_size_thumb')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_general_thumbnail_image_sizes1') }}
                            <router-link :to="'/woocommerce/product-layout/panel.product_gallery'">{{$t('menu.woocommerce_product')}} -> {{$t('menu.woocommerce_product-gallery')}}</router-link>
                            {{ $t('info.woocommerce_general_thumbnail_image_sizes2') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="1000" unit="px" :labelTitle="$t('general.width')" :value="getOption('woocommerce_thumbnail_image_width')" @input="setOption('woocommerce_thumbnail_image_width',$event)"/>
                        </div>
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="1000" unit="px" :labelTitle="$t('general.height')" :value="getOption('woocommerce_thumbnail_image_height')" @input="setOption('woocommerce_thumbnail_image_height',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.ajax_notifications">
            <to-panel-group :label-title="$t('panel.product_archive_notice_stay_visible')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_stay_visible') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Archive_Stay_Visible-1-1.png'},
                                {name: 'Product_Archive_Stay_Visible-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-input :value="getOption('product_archive_stay_visible')" @input="setOption('product_archive_stay_visible', $event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_added_cart_text')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_added_cart_text') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-input :value="getOption('product_archive_added_cart_text')" @input="setOption('product_archive_added_cart_text', $event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_added_wishlist_text')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_added_wishlist_text') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-input :value="getOption('product_archive_added_wishlist_text')" @input="setOption('product_archive_added_wishlist_text', $event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_removed_wishlist_text')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_removed_wishlist_text') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-input :value="getOption('product_archive_removed_wishlist_text')" @input="setOption('product_archive_removed_wishlist_text', $event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_view_cart_button_text')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_view_cart_button_text') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-input :value="getOption('product_archive_view_cart_button_text')" @input="setOption('product_archive_view_cart_button_text', $event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_checkout_button_text')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_checkout_button_text') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-input :value="getOption('product_archive_checkout_button_text')" @input="setOption('product_archive_checkout_button_text', $event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_view_wishlist_button_text')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_view_wishlist_button_text') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-input :value="getOption('product_archive_view_wishlist_button_text')" @input="setOption('product_archive_view_wishlist_button_text', $event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_not_found_text')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_not_found_text') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-input :value="getOption('product_archive_not_found_text')" @input="setOption('product_archive_not_found_text', $event)"/>
                        </div>
                    </div>
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
                responsive: 'desktop'
            }
        }
    })
</script>
