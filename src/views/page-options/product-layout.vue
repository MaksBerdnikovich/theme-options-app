<template>
    <div>
        <to-panel id="panel.general">
            <to-panel-group :label-title="$t('panel.product_layout_settings')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_product_layout_settings')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1 col-tb-1">
                            <to-select :value="getOption('product_item_data.product_layout_settings')" @input="setOption('product_item_data.product_layout_settings',$event)" :options="productLayoutSettings"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel v-if="getOption('product_item_data.product_layout_settings') === 'custom'" id="panel.product_page_layout_style">
            <to-panel-group :label-title="$t('panel.product_layout_source')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_product_page_layout_source_po')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1 col-tb-1">
                            <to-select :value="getOption('product_item_data.product_layout_source')" @input="setOption('product_item_data.product_layout_source', $event)" :options="productLayoutSource"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div v-if="getOption('product_item_data.product_layout_source') === 'builder'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.product_builder_template')" :class="{'taxonomy-te-edit-link': isTaxonomy}">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.woocommerce_product_page_builder_template')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1 col-tb-1">
                                <to-label>{{$t('productPage.select_template')}}</to-label>
                                <to-select
                                    :value="getOption('product_item_data.product_builder_template')"
                                    @input="setOption('product_item_data.product_builder_template', $event)"
                                    :options="productBuilderTemplatesList"
                                    v-on:right-button-clicked="showPreview($event)"
                                    v-on:edit-button-clicked="showEditPage($event)"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1 col-tb-1">
                                <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                <to-link :href="productBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1 col-tb-1">
                                <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                <to-link :href="productBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="getOption('product_item_data.product_layout_source') === 'default'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.product_page_layout')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_page_layout_product_layout') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1 col-tb-1">
                                <to-select :value="getOption('product_item_data.product_page_layout')" @input="setOption('product_item_data.product_page_layout',$event)" :options="productPageLayout"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <div v-if="getOption('product_item_data.product_page_layout') !== 'legacy'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_page_layout_preset')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        {{ $t('info.woocommerce_product_page_layout_preset') }}
                                    </div>
                                </div>
                            </div>
                        </template>
                        <div class="to-block-product-preset">
                            <div class="to-changed-settings product-layout-type">
                                <div class="to-file-select-list">
                                    <to-radio-icon :value="getOption('product_item_data.product_page_layout_style')" @input="setOption('product_item_data.product_page_layout_style', $event)" :options="productPageLayoutStyle"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_page_layout_centered')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_page_layout_centered') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                    {name: 'Product_Page_Layout_Centered.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-auto">
                                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_layout_centered')" @input="setOption('product_item_data.product_page_layout_centered',$event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_item_data.product_page_layout_centered') == '1'" :label-title="$t('panel.product_page_layout_centered_top_margin')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_page_layout_centered_top_margin') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                    {name: 'Product_Page_Layout_Centered_Top_Margin.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="form-grid">
                            <div class="col-2 col-tb-1">
                                <to-block-label-slider-input :min="0" :max="300" unit="px" :value="getOption('product_item_data.product_page_layout_centered_top_margin')" @input="setOption('product_item_data.product_page_layout_centered_top_margin', $event)"/>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_item_data.product_page_layout_centered') == '1'" :label-title="$t('panel.product_page_layout_centered_boxed')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_page_layout_centered_boxed') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                    {name: 'Product_Page_Layout_Centered_Boxed.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-auto">
                                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_layout_centered_boxed')" @input="setOption('product_item_data.product_page_layout_centered_boxed',$event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_item_data.product_page_layout_centered') == '1' && getOption('product_item_data.product_page_layout_centered_boxed') == '1'" :label-title="$t('panel.product_page_layout_centered_boxed_color')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_page_layout_centered_boxed_color') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-auto">
                                    <to-color-picker :value="getOption('product_item_data.product_page_layout_centered_boxed_color')" @input="setOption('product_item_data.product_page_layout_centered_boxed_color',$event)" :label-title="$t('productPage.background')"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_page_layout_column_width')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_page_layout_columns_width_preset') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-auto">
                                    <to-radio-icon :value="getOption('product_item_data.product_page_layout_preset')" @input="setOption('product_item_data.product_page_layout_preset',$event)" :options="productPageLayoutPreset"></to-radio-icon>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_gallery_column_width')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_page_layout_gallery_columns_width') }}
                                </div>
                            </div>
                        </template>
                        <div class="form-grid">
                            <div class="col-2 col-tb-1">
                                <to-block-label-slider-input :min="0" :max="100" unit="%" :value="getOption('product_item_data.product_gallery_column_width')" @input="setOption('product_item_data.product_gallery_column_width', $event)"/>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_page_layout_fullwidth')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_page_layout_full_width_layout') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2 col-tb-1">
                                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_layout_fullwidth')" @input="setOption('product_item_data.product_page_layout_fullwidth',$event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_page_layout_sticky')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_page_layout_sticky_product') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-1 col-tb-1">
                                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_layout_sticky')" @input="setOption('product_item_data.product_page_layout_sticky',$event)"/>
                                </div>
                                <div class="col-2 col-tb-1" v-if="getOption('product_item_data.product_page_layout_sticky') == '1'">
                                    <to-label class="top-gap">{{$t('productPage.sticky_offset')}}</to-label>
                                    <to-block-label-slider-input :min="0" :max="1000" unit="px" :value="getOption('product_item_data.product_page_layout_sticky_offset')" @input="setOption('product_item_data.product_page_layout_sticky_offset', $event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_page_skeleton_loader')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_page_skeleton_loader') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2 col-tb-1">
                                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_skeleton_loader')" @input="setOption('product_item_data.product_page_skeleton_loader',$event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_page_layout_background')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_page_layout_background') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                    {name: 'Product_Page_Layout_Background_Color.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-auto">
                                    <to-color-picker :value="getOption('product_item_data.product_page_layout_background')" @input="setOption('product_item_data.product_page_layout_background',$event)" :label-title="$t('productPage.background')"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>
        </to-panel>

        <to-panel v-if="getOption('product_item_data.product_layout_settings') === 'custom' && getOption('product_item_data.product_layout_source') === 'default'" id="panel.product_gallery">
            <to-panel-group :label-title="$t('panel.product_gallery')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_gallery') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-1">
                            <to-select :value="getOption('product_item_data.product_gallery')" @input="setOption('product_item_data.product_gallery',$event)" :options="productGallery"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div v-if="getOption('product_item_data.product_gallery') === 'enabled'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.product_gallery_type')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_gallery_type') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-radio-icon class="width-70" :value="getOption('product_item_data.product_gallery_type')" @input="setOption('product_item_data.product_gallery_type',$event)" :options="productGalleryType"></to-radio-icon>
                    </div>
                </to-panel-group>

                <div v-if="getOption('product_item_data.product_page_layout') !== 'legacy' && getOption('product_item_data.product_gallery_type') === 'grid'" class="to-panel-separator next-of-type">
                    <to-panel-group :label-title="$t('panel.product_gallery_grid_columns')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_gallery_grid_columns') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2 col-tb-1">
                                    <to-select :value="getOption('product_item_data.product_gallery_grid_columns')" @input="setOption('product_item_data.product_gallery_grid_columns',$event)" :options="productGalleryGridColumns"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_gallery_grid_gaps')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_gallery_grid_gaps') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2 col-tb-1">
                                    <to-block-label-slider-input :min="0" :max="150" unit="px" :value="getOption('product_item_data.product_gallery_grid_gaps')" @input="setOption('product_item_data.product_gallery_grid_gaps', $event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_item_data.product_page_layout_fullwidth') == '1'" :label-title="$t('panel.product_gallery_grid_gaps_hide')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_gallery_grid_gaps_hide') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                        {name: 'Product_Gallery_Grid_Gaps_Hide.png'},
                                    ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_gallery_grid_gaps_hide')" @input="setOption('product_item_data.product_gallery_grid_gaps_hide',$event)"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_item_data.product_page_layout_fullwidth') == '1' && getOption('product_item_data.product_gallery_grid_gaps_hide') == '1'" :label-title="$t('panel.product_gallery_grid_top_margin')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_gallery_grid_top_margin') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2 col-tb-1">
                                    <to-block-label-slider-input :min="0" :max="150" unit="px" :value="getOption('product_item_data.product_gallery_grid_top_margin')" @input="setOption('product_item_data.product_gallery_grid_top_margin', $event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_gallery_video_autoplay')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_gallery_video_autoplay') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_gallery_video_autoplay')" @input="setOption('product_item_data.product_gallery_video_autoplay',$event)"/>
                        </div>
                    </to-panel-group>
                </div>

                <to-panel-group v-if="getOption('product_item_data.product_page_layout') !== 'legacy'" :label-title="$t('panel.product_gallery_column_position')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_gallery_column_position') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-auto">
                                <to-radio-toggle :value="getOption('product_item_data.product_gallery_column_position')" @input="setOption('product_item_data.product_gallery_column_position', $event)" :options="productGalleryColumnPosition"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_item_data.product_gallery_type') === 'horizontal' || getOption('product_item_data.product_gallery_type') === 'vertical'" :label-title="$t('panel.product_gallery_show_image')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_gallery_show_image') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2 col-tb-1">
                                <to-select :value="getOption('product_item_data.product_gallery_show_image')" @input="setOption('product_item_data.product_gallery_show_image',$event)" :options="productGalleryShowImage"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.product_gallery_zoom')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_gallery_zoom') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_gallery_zoom')" @input="setOption('product_item_data.product_gallery_zoom',$event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.product_gallery_lightbox')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_gallery_lightbox') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_gallery_lightbox')" @input="setOption('product_item_data.product_gallery_lightbox',$event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_item_data.product_gallery_type') !== 'grid'" :label-title="$t('panel.product_gallery_auto_height')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_gallery_auto_height') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_gallery_auto_height')" @input="setOption('product_item_data.product_gallery_auto_height',$event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.product_gallery_labels')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_gallery_labels') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_gallery_labels')" @input="setOption('product_item_data.product_gallery_labels',$event)"/>
                    </div>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-auto" v-if="getOption('product_item_data.product_gallery_labels') == '1'">
                                <to-label>{{ $t('productPage.label_sale') }}</to-label>
                                <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_gallery_label_sale')" @input="setOption('product_item_data.product_gallery_label_sale',$event)"/>
                            </div>
                            <div class="col-auto" v-if="getOption('product_item_data.product_gallery_labels') == '1'">
                                <to-label>{{ $t('productPage.label_new') }}</to-label>
                                <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_gallery_label_new')" @input="setOption('product_item_data.product_gallery_label_new',$event)"/>
                            </div>
                            <div class="col-auto" v-if="getOption('product_item_data.product_gallery_labels') == '1'">
                                <to-label>{{ $t('productPage.label_out_stock') }}</to-label>
                                <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_gallery_label_out_stock')" @input="setOption('product_item_data.product_gallery_label_out_stock',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.product_gallery_colors')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_gallery_colors') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-color-picker :value="getOption('product_item_data.product_gallery_elements_color')" @input="setOption('product_item_data.product_gallery_elements_color',$event)" :label-title="$t('colors.product_gallery_elements_color')"/>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel v-if="getOption('product_item_data.product_layout_settings') === 'custom' && getOption('product_item_data.product_layout_source') === 'default' && getOption('product_item_data.product_page_layout') !== 'legacy'" id="panel.product_page_desc_review">
            <to-panel-group :label-title="$t('panel.product_page_desc_review_source')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_product_description_reviews_tab_source')"/>
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product-Extra-Description.png'},
                                {name: 'Page-Builder.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-1">
                            <to-select :value="getOption('product_item_data.product_page_desc_review_source')" @input="setOption('product_item_data.product_page_desc_review_source',$event)" :options="productPageDescReviewSource"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_page_desc_review_layout')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_description_reviews_layout') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Tabs.png'},
                                {name: 'Accordion.png'},
                                {name: 'One-By-One.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-1">
                            <to-select :value="getOption('product_item_data.product_page_desc_review_layout')" @input="setOption('product_item_data.product_page_desc_review_layout',$event)" :options="productPageDescReviewLayout"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.product_page_desc_review_layout') === 'tabs'" :label-title="$t('panel.product_page_desc_review_layout_tabs_style')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_description_reviews_style') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-1">
                            <to-select :value="getOption('product_item_data.product_page_desc_review_layout_tabs_style')" @input="setOption('product_item_data.product_page_desc_review_layout_tabs_style',$event)" :options="productPageDescReviewLayoutTabsStyle"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="(getOption('product_item_data.product_page_desc_review_layout') === 'tabs' && getOption('product_item_data.product_page_desc_review_layout_tabs_style') === 'horizontal' && getOption('product_item_data.product_page_layout_fullwidth') == '0') || (getOption('product_item_data.product_page_desc_review_layout') === 'tabs' && getOption('product_item_data.product_page_desc_review_layout_tabs_style') === 'vertical')" :label-title="$t('panel.product_page_desc_review_layout_tabs_alignment')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_description_reviews_alignment') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-radio-toggle :value="getOption('product_item_data.product_page_desc_review_layout_tabs_alignment')" @input="setOption('product_item_data.product_page_desc_review_layout_tabs_alignment', $event)" :options="tabsAlignment"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.product_page_desc_review_layout') === 'accordion'" :label-title="$t('panel.product_page_desc_review_layout_acc_position')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_description_reviews_position') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-1">
                            <to-select :value="getOption('product_item_data.product_page_desc_review_layout_acc_position')" @input="setOption('product_item_data.product_page_desc_review_layout_acc_position',$event)" :options="productPageDescReviewLayoutAccPosition"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_page_desc_review_description')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_description_reviews_description') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_desc_review_description')" @input="setOption('product_item_data.product_page_desc_review_description',$event)"/>
                        </div>
                        <div v-if="getOption('product_item_data.product_page_desc_review_description') == '1'" class="col-2 col-tb-1">
                            <to-input :value="getOption('product_item_data.product_page_desc_review_description_title')" @input="setOption('product_item_data.product_page_desc_review_description_title',$event)" :label="true" :labelTitle="$t('productPage.description_title')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_page_desc_review_additional_info')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_description_reviews_additional_info') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_desc_review_additional_info')" @input="setOption('product_item_data.product_page_desc_review_additional_info',$event)"/>
                        </div>
                        <div v-if="getOption('product_item_data.product_page_desc_review_additional_info') == '1'" class="col-2 col-tb-1">
                            <to-input :value="getOption('product_item_data.product_page_desc_review_additional_info_title')" @input="setOption('product_item_data.product_page_desc_review_additional_info_title',$event)" :label="true" :labelTitle="$t('productPage.additional_title')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_page_desc_review_reviews')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_description_reviews') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_desc_review_reviews')" @input="setOption('product_item_data.product_page_desc_review_reviews',$event)"/>
                        </div>
                        <div v-if="getOption('product_item_data.product_page_desc_review_reviews') == '1'" class="col-2 col-tb-1">
                            <to-input :value="getOption('product_item_data.product_page_desc_review_reviews_title')" @input="setOption('product_item_data.product_page_desc_review_reviews_title',$event)" :label="true" :labelTitle="$t('productPage.reviews_title')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.product_page_desc_review_layout') === 'one_by_one'" :label-title="$t('panel.product_page_desc_review_layout_one_by_one_backgrounds')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_description_reviews_one_by_one_backgrounds') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker :value="getOption('product_item_data.product_page_desc_review_layout_one_by_one_description_background')" @input="setOption('product_item_data.product_page_desc_review_layout_one_by_one_description_background',$event)" :label-title="$t('productPage.description_back')"/>
                        </div>
                        <div class="col-auto">
                            <to-color-picker :value="getOption('product_item_data.product_page_desc_review_layout_one_by_one_additional_info_background')" @input="setOption('product_item_data.product_page_desc_review_layout_one_by_one_additional_info_background',$event)" :label-title="$t('productPage.additional_back')"/>
                        </div>
                        <div class="col-auto">
                            <to-color-picker :value="getOption('product_item_data.product_page_desc_review_layout_one_by_one_reviews_background')" @input="setOption('product_item_data.product_page_desc_review_layout_one_by_one_reviews_background',$event)" :label-title="$t('productPage.reviews_back')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel v-if="getOption('product_item_data.product_layout_settings') === 'custom' && getOption('product_item_data.product_layout_source') === 'default' && getOption('product_item_data.product_page_layout') !== 'legacy'" id="panel.product_page_elements">
            <to-panel-subtitle v-slot:label>{{ $t('panel.product_page_prev_next_navigation') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_page_elements_prev_next')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_prev_next_product') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Prev-Next-Navigation.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_prev_next')" @input="setOption('product_item_data.product_page_elements_prev_next',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.product_page_elements_prev_next') == '1'" :label-title="$t('panel.product_page_elements_preview_on_hover')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_product_preview_on_hover') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_preview_on_hover')" @input="setOption('product_item_data.product_page_elements_preview_on_hover',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_page_elements_back_to_shop')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_back_to_shop') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Back-to-Shop.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_back_to_shop')" @input="setOption('product_item_data.product_page_elements_back_to_shop',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.product_page_elements_back_to_shop') == '1'" :label-title="$t('panel.product_page_elements_back_to_shop_link')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_back_to_shop_link') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-1">
                            <to-select :value="getOption('product_item_data.product_page_elements_back_to_shop_link')" @input="setOption('product_item_data.product_page_elements_back_to_shop_link',$event)" :options="productPageElementsBackToShopLink"/>
                        </div>
                        <div class="col-2 col-tb-1" v-if="getOption('product_item_data.product_page_elements_back_to_shop_link') === 'custom_url'">
                            <to-input placeholder="https://" :value="getOption('product_item_data.product_page_elements_back_to_shop_link_custom_url')" @input="setOption('product_item_data.product_page_elements_back_to_shop_link_custom_url',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_page_title_price_description') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_page_elements_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_product_title') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_title')" @input="setOption('product_item_data.product_page_elements_title',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_page_elements_attributes')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_attribute_eg_brand') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product-Attribute.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_attributes')" @input="setOption('product_item_data.product_page_elements_attributes',$event)"/>
                        </div>
                        <div class="col-2 col-tb-1" v-if="getOption('product_item_data.product_page_elements_attributes') == '1'">
                            <to-label>{{$t('productPage.attr_select')}}</to-label>
                            <to-select :value="getOption('product_item_data.product_page_elements_attributes_data')" @input="setOption('product_item_data.product_page_elements_attributes_data',$event)" :options="productPageElementsAttributeData"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_page_elements_reviews')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_reviews_link') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Reviews-Link.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_reviews')" @input="setOption('product_item_data.product_page_elements_reviews',$event)"/>
                        </div>
                        <div class="col-2 col-tb-1" v-if="getOption('product_item_data.product_page_elements_reviews') == '1'">
                            <to-label>{{$t('productPage.reviews_link_text')}}</to-label>
                            <to-input :value="getOption('product_item_data.product_page_elements_reviews_text')" @input="setOption('product_item_data.product_page_elements_reviews_text',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_page_elements_price')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_price') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_price')" @input="setOption('product_item_data.product_page_elements_price',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.product_page_elements_price') == '1'" :label-title="$t('panel.product_page_elements_price_strikethrough')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_strikethrough_price') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_price_strikethrough')" @input="setOption('product_item_data.product_page_elements_price_strikethrough',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_page_elements_description')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_product_description') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product-Description.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_description')" @input="setOption('product_item_data.product_page_elements_description',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_page_size_guide') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.size_guide')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_product_size_guide_image') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Size_Guide_Image.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <to-select :value="getOption('product_item_data.size_guide')" @input="setOption('product_item_data.size_guide', $event)" :options="productElementsSizeGuide"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.size_guide') === 'custom'" :label-title="$t('panel.size_guide_image')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_size_guide_image') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Size-Guide.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-image-select :value="getOption('product_item_data.size_guide_image')" @input="setOption('product_item_data.size_guide_image',$event)" :labelTitle="$t('general.choose_image')"/>
                        </div>
                        <div class="col-1" v-if="getOption('product_item_data.size_guide_image')">
                            <to-label>{{ $t('productPage.size_guide_text') }}</to-label>
                            <to-input :value="getOption('product_item_data.size_guide_text')" @input="setOption('product_item_data.size_guide_text',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_page_meta_elements') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_page_elements_sku')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_sku') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'SKU.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_sku')" @input="setOption('product_item_data.product_page_elements_sku',$event)"/>
                        </div>
                        <div class="col-2 col-tb-1" v-if="getOption('product_item_data.product_page_elements_sku') == '1'">
                            <to-label>{{$t('productPage.sku_title')}}</to-label>
                            <to-input :value="getOption('product_item_data.product_page_elements_sku_title')" @input="setOption('product_item_data.product_page_elements_sku_title',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_page_elements_categories')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_categories') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product-Categories.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_categories')" @input="setOption('product_item_data.product_page_elements_categories',$event)"/>
                        </div>
                        <div class="col-2 col-tb-1" v-if="getOption('product_item_data.product_page_elements_categories') == '1'">
                            <to-label>{{$t('productPage.cat_title')}}</to-label>
                            <to-input :value="getOption('product_item_data.product_page_elements_categories_title')" @input="setOption('product_item_data.product_page_elements_categories_title',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_page_elements_tags')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_tags') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product-Tags.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_tags')" @input="setOption('product_item_data.product_page_elements_tags',$event)"/>
                        </div>
                        <div class="col-2 col-tb-1" v-if="getOption('product_item_data.product_page_elements_tags') == '1'">
                            <to-label>{{$t('productPage.tags_title')}}</to-label>
                            <to-input :value="getOption('product_item_data.product_page_elements_tags_title')" @input="setOption('product_item_data.product_page_elements_tags_title',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_page_elements_share')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_share_icons') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Social-Sharing.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_share')" @input="setOption('product_item_data.product_page_elements_share',$event)"/>
                        </div>
                        <div class="col-2 col-tb-1" v-if="getOption('product_item_data.product_page_elements_share') == '1'">
                            <to-label>{{$t('productPage.share_title')}}</to-label>
                            <to-input :value="getOption('product_item_data.product_page_elements_share_title')" @input="setOption('product_item_data.product_page_elements_share_title',$event)"/>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings" v-if="getOption('product_item_data.product_page_elements_share') == '1'">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-label>{{$t('productPage.share_facebook')}}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_share_facebook')" @input="setOption('product_item_data.product_page_elements_share_facebook',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{$t('productPage.share_twitter')}}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_share_twitter')" @input="setOption('product_item_data.product_page_elements_share_twitter',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{$t('productPage.share_pinterest')}}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_share_pinterest')" @input="setOption('product_item_data.product_page_elements_share_pinterest',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{$t('productPage.share_tumblr')}}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_share_tumblr')" @input="setOption('product_item_data.product_page_elements_share_tumblr',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{$t('productPage.share_linkedin')}}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_share_linkedin')" @input="setOption('product_item_data.product_page_elements_share_linkedin',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{$t('productPage.share_reddit')}}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_share_reddit')" @input="setOption('product_item_data.product_page_elements_share_reddit',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_page_upsells_related_products') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_page_elements_upsell')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_product_elements_upsell_products')"/>
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Upsell-Products.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_upsell')" @input="setOption('product_item_data.product_page_elements_upsell',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.product_page_elements_upsell') == '1'" :label-title="$t('panel.product_page_elements_upsell_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_upsell_products_title') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Upsell-Products-Title.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-1">
                            <to-label>{{ $t('productPage.elements_title') }}</to-label>
                            <to-input :value="getOption('product_item_data.product_page_elements_upsell_title')" @input="setOption('product_item_data.product_page_elements_upsell_title',$event)"/>
                        </div>
                        <div class="col-2 col-tb-1">
                            <to-label>{{ $t('productPage.elements_title_align') }}</to-label>
                            <to-radio-toggle :value="getOption('product_item_data.product_page_elements_upsell_title_alignment')" @input="setOption('product_item_data.product_page_elements_upsell_title_alignment', $event)" :options="productPageElementsUpsellTitleAlignment"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.product_page_elements_upsell') == '1'" :label-title="$t('panel.product_page_elements_upsell_items')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_upsell_number_of_items') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-1">
                            <to-input :value="getOption('product_item_data.product_page_elements_upsell_items')" @input="setOption('product_item_data.product_page_elements_upsell_items',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.product_page_elements_upsell') == '1'" :label-title="$t('panel.product_page_elements_upsell_columns')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_upsell_columns') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2 col-tb-1">
                                <to-select v-if="isDesktop" :value="getOption('product_item_data.product_page_elements_upsell_columns_desktop')" @input="setOption('product_item_data.product_page_elements_upsell_columns_desktop',$event)" :options="productPageElementsUpsellColumnsDesktop"></to-select>
                                <to-select v-if="isTablet" :value="getOption('product_item_data.product_page_elements_upsell_columns_tablet')" @input="setOption('product_item_data.product_page_elements_upsell_columns_tablet',$event)" :options="productPageElementsUpsellColumnsTablet"></to-select>
                                <to-select v-if="isMobile" :value="getOption('product_item_data.product_page_elements_upsell_columns_mobile')" @input="setOption('product_item_data.product_page_elements_upsell_columns_mobile',$event)" :options="productPageElementsUpsellColumnsMobile"></to-select>
                            </div>
                        </div>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.product_page_elements_upsell') == '1' && getOption('product_item_data.product_page_elements_upsell_columns_desktop') === '100%'" :label-title="$t('panel.product_page_elements_upsell_columns_100')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_columns_100') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-1">
                            <to-select :value="getOption('product_item_data.product_page_elements_upsell_columns_100')" @input="setOption('product_item_data.product_page_elements_upsell_columns_100',$event)" :options="productPageElementsUpsellColumns100"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_page_elements_related')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_product_elements_related_products')"/>
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Related-Products.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.product_page_elements_related')" @input="setOption('product_item_data.product_page_elements_related',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.product_page_elements_related') == '1'" :label-title="$t('panel.product_page_elements_related_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_related_products_title') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Related-Products-Title.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-1">
                            <to-label>{{ $t('productPage.elements_title') }}</to-label>
                            <to-input :value="getOption('product_item_data.product_page_elements_related_title')" @input="setOption('product_item_data.product_page_elements_related_title',$event)"/>
                        </div>
                        <div class="col-2 col-tb-1">
                            <to-label>{{ $t('productPage.elements_title_align') }}</to-label>
                            <to-radio-toggle :value="getOption('product_item_data.product_page_elements_related_title_alignment')" @input="setOption('product_item_data.product_page_elements_related_title_alignment', $event)" :options="productPageElementsRelatedTitleAlignment"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.product_page_elements_related') == '1'" :label-title="$t('panel.product_page_elements_related_items')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_related_number_of_items') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-1">
                            <to-input :value="getOption('product_item_data.product_page_elements_related_items')" @input="setOption('product_item_data.product_page_elements_related_items',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.product_page_elements_related') == '1'" :label-title="$t('panel.product_page_elements_related_columns')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_elements_related_columns') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2 col-tb-1">
                                <to-select v-if="isDesktop" :value="getOption('product_item_data.product_page_elements_related_columns_desktop')" @input="setOption('product_item_data.product_page_elements_related_columns_desktop',$event)" :options="productPageElementsRelatedColumnsDesktop"></to-select>
                                <to-select v-if="isTablet" :value="getOption('product_item_data.product_page_elements_related_columns_tablet')" @input="setOption('product_item_data.product_page_elements_related_columns_tablet',$event)" :options="productPageElementsRelatedColumnsTablet"></to-select>
                                <to-select v-if="isMobile" :value="getOption('product_item_data.product_page_elements_related_columns_mobile')" @input="setOption('product_item_data.product_page_elements_related_columns_mobile',$event)" :options="productPageElementsRelatedColumnsMobile"></to-select>
                            </div>
                        </div>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.product_page_elements_related') == '1' && getOption('product_item_data.product_page_elements_related_columns_desktop') === '100%'" :label-title="$t('panel.product_page_elements_related_columns_100')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_columns_100') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-1">
                            <to-select :value="getOption('product_item_data.product_page_elements_related_columns_100')" @input="setOption('product_item_data.product_page_elements_related_columns_100',$event)" :options="productPageElementsRelatedColumns100"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel v-if="getOption('product_item_data.product_layout_settings') === 'custom' && getOption('product_item_data.product_layout_source') === 'default' && getOption('product_item_data.product_page_layout') === 'legacy'" id="panel.size_guide">
            <to-panel-group :label-title="$t('panel.size_guide')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_product_size_guide_image') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Size_Guide_Image.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <to-select :value="getOption('product_item_data.size_guide')" @input="setOption('product_item_data.size_guide', $event)" :options="productElementsSizeGuide"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.size_guide') === 'custom'" :label-title="$t('panel.size_guide_image')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_general_size_guide_image') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-image-select :value="getOption('product_item_data.size_guide_image')" @input="setOption('product_item_data.size_guide_image',$event)" :labelTitle="$t('general.choose_image')"/>
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
            let productBuilderTemplatesList = JSON.parse(JSON.stringify(config.productBuilderTemplates));
            for(let item of productBuilderTemplatesList) {
                if (item.preview) {
                    item.rightButton = {icon: 'eye'};
                }

                if (item.edit) {
                    item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
                }
            }

            let presetLayouts = [],
                presetLayoutsTypes = [
                    {img: 'horizontal_tabs', title: i18n.t('productPage.horizontal_tabs')},
                    {img: 'vertical_tabs', title: i18n.t('productPage.vertical_tabs')},
                    {img: 'accordion', title: i18n.t('productPage.accordion')},
                    {img: 'one_by_one', title: i18n.t('productPage.one_by_one')},
                    {img: 'fullwidth', title: i18n.t('productPage.fullwidth')},
                    {img: 'swapped_columns', title: i18n.t('productPage.swapped_columns')},
                    {img: 'no_gallery_margins', title: i18n.t('productPage.no_gallery_margins')},
                    {img: 'centered', title: i18n.t('productPage.centered')},
                    {img: 'centered_boxed', title: i18n.t('productPage.centered_boxed')},
                ];

            for (let type of presetLayoutsTypes) {
                let urlHover = config.presetsUrl + 'product-layout/' + type.img + '.jpg';
                presetLayouts.push({image: urlHover, imageType: '', value: type.img, title: type.title});
            }

            return {
                productLayoutSettings: [
                    {label: i18n.t('productGallery.default_settings_po'), value: 'default'},
                    {label: i18n.t('productGallery.custom_settings'), value: 'custom'},
                ],
                productBuilderTemplatesList: productBuilderTemplatesList,
                productLayoutSource: [
                    {label: i18n.t('productPage.layout_source_default'), value: 'default'},
                    {label: i18n.t('productPage.layout_source_builder'), value: 'builder'},
                ],
                productPageLayoutStyle: presetLayouts,
                productPageLayout: [
                    {label: i18n.t('productPage.layout_default'), value: 'default'},
                    {label: i18n.t('productPage.layout_legacy'), value: 'legacy'},
                ],
                productPageLayoutPreset: [
                    {icon: 'Schemes-47', title: i18n.t('productPage.col-40-60'), value: 'col-40-60'},
                    {icon: 'Schemes-48', title: i18n.t('productPage.col-50-50'), value: 'col-50-50'},
                    {icon: 'Schemes-49', title: i18n.t('productPage.col-60-40'), value: 'col-60-40'},
                ],
                productPageDescReviewSource: [
                    {label: i18n.t('productPage.extra_description'), value: 'extra_description'},
                    {label: i18n.t('productPage.page_builder'), value: 'page_builder'},
                ],
                productPageDescReviewLayout: [
                    {label: i18n.t('productPage.desc_style_tabs'), value: 'tabs'},
                    {label: i18n.t('productPage.desc_style_acc'), value: 'accordion'},
                    {label: i18n.t('productPage.desc_style_one_by_one'), value: 'one_by_one'},
                ],
                productPageDescReviewLayoutTabsStyle: [
                    {label: i18n.t('productPage.desc_tab_style_horizontal'), value: 'horizontal'},
                    {label: i18n.t('productPage.desc_tab_style_vertical'), value: 'vertical'},
                    {label: i18n.t('productPage.desc_tab_style_legacy'), value: 'legacy'},
                ],
                productPageDescReviewLayoutAccPosition: [
                    {label: i18n.t('productPage.desc_acc_next_to_gallery'), value: 'next_to_gallery'},
                    {label: i18n.t('productPage.desc_tab_below_gallery'), value: 'below_gallery'},
                ],
                productGallery: [
                    {label: i18n.t('productGallery.enabled'), value: 'enabled'},
                    {label: i18n.t('productGallery.disabled'), value: 'disabled'},
                    {label: i18n.t('productGallery.legacy'), value: 'legacy'},
                    {label: i18n.t('productGallery.native'), value: 'native'},
                ],
                productGalleryType: [
                    {icon: 'Schemes-37', title: i18n.t('productGallery.horizontal'), value: 'horizontal'},
                    {icon: 'Schemes-38', title: i18n.t('productGallery.vertical'), value: 'vertical'},
                    {icon: 'Schemes-39', title: i18n.t('productGallery.dots'), value: 'dots'},
                    {icon: 'Schemes-40', title: i18n.t('productGallery.single'), value: 'none'},
                    {icon: 'Schemes-51', title: i18n.t('productGallery.grid'), value: 'grid'},
                ],
                productGalleryColumnPosition: [
                    {icon:'align-objects-left', value:'left', tooltip:i18n.t('general.left')},
                    {icon:'align-objects-right', value:'right', tooltip:i18n.t('general.right')},
                ],
                productGalleryShowImage: [
                    {label: i18n.t('productGallery.click'), value: 'click'},
                    {label: i18n.t('productGallery.hover'), value: 'hover'},
                ],
                productGalleryThumbPosition: [
                    {icon: 'services', title: i18n.t('productGallery.horizontal'), value: 'horizontal'},
                    {icon: 'add-row', title: i18n.t('productGallery.vertical'), value: 'vertical'},
                ],
                productPageElementsBackToShopLink: [
                    {label: i18n.t('productPage.back_to_shop_main_shop'), value: 'main_shop'},
                    {label: i18n.t('productPage.back_to_shop_category'), value: 'category'},
                    {label: i18n.t('productPage.back_to_shop_custom_url'), value: 'custom_url'},
                ],
                productPageElementsAttributeData: config.WCAttributes,
                productElementsSizeGuide: [
                    {label:i18n.t('general.default_settings_po'),value:'default'},
                    {label:i18n.t('general.custom_settings'),value:'custom'},
                    {label:i18n.t('general.disabled'),value:'disabled'},
                ],
                productPageElementsUpsellTitleAlignment: [
                    {icon:'align-objects-left', value:'left', tooltip:i18n.t('general.left')},
                    {icon:'align-objects-center', value:'center', tooltip:i18n.t('general.center')},
                    {icon:'align-objects-right', value:'right', tooltip:i18n.t('general.right')},
                ],
                productPageElementsUpsellColumnsDesktop: [
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                    {label: i18n.t('productArchive.col-3x'), value: '3x'},
                    {label: i18n.t('productArchive.col-4x'), value: '4x'},
                    {label: i18n.t('productArchive.col-5x'), value: '5x'},
                    {label: i18n.t('productArchive.col-6x'), value: '6x'},
                    {label: i18n.t('productArchive.col-100%'), value: '100%'},
                ],
                productPageElementsUpsellColumnsTablet: [
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                    {label: i18n.t('productArchive.col-3x'), value: '3x'},
                    {label: i18n.t('productArchive.col-4x'), value: '4x'},
                ],
                productPageElementsUpsellColumnsMobile: [
                    {label: i18n.t('productArchive.col-1x'), value: '1x'},
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                ],
                productPageElementsUpsellColumns100: [
                    {label: i18n.t('productArchive.col-4'), value: '4'},
                    {label: i18n.t('productArchive.col-5'), value: '5'},
                    {label: i18n.t('productArchive.col-6'), value: '6'},
                ],
                productPageElementsRelatedTitleAlignment: [
                    {icon:'align-objects-left', value:'left', tooltip:i18n.t('general.left')},
                    {icon:'align-objects-center', value:'center', tooltip:i18n.t('general.center')},
                    {icon:'align-objects-right', value:'right', tooltip:i18n.t('general.right')},
                ],
                productPageElementsRelatedColumnsDesktop: [
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                    {label: i18n.t('productArchive.col-3x'), value: '3x'},
                    {label: i18n.t('productArchive.col-4x'), value: '4x'},
                    {label: i18n.t('productArchive.col-5x'), value: '5x'},
                    {label: i18n.t('productArchive.col-6x'), value: '6x'},
                    {label: i18n.t('productArchive.col-100%'), value: '100%'},
                ],
                productPageElementsRelatedColumnsTablet: [
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                    {label: i18n.t('productArchive.col-3x'), value: '3x'},
                    {label: i18n.t('productArchive.col-4x'), value: '4x'},
                ],
                productPageElementsRelatedColumnsMobile: [
                    {label: i18n.t('productArchive.col-1x'), value: '1x'},
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                ],
                productPageElementsRelatedColumns100: [
                    {label: i18n.t('productArchive.col-4'), value: '4'},
                    {label: i18n.t('productArchive.col-5'), value: '5'},
                    {label: i18n.t('productArchive.col-6'), value: '6'},
                ],
                productGalleryGridColumns: [
                    {label: i18n.t('productArchive.col-1x'), value: '1x'},
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                    {label: i18n.t('productArchive.col-3x'), value: '3x'},
                ],
            }
        },

        computed: {
            tabsAlignment() {
                const layout = this.getOption('product_item_data.product_page_desc_review_layout_tabs_style');
                return [
                    {
                        icon: 'align-objects-left',
                        value: 'left',
                        tooltip: i18n.t('general.left')
                    },
                    {
                        disabled: ['vertical'].indexOf(layout)>=0,
                        icon: 'align-objects-center',
                        value: 'center',
                        tooltip: i18n.t('general.center')
                    },
                    {
                        icon: 'align-objects-right',
                        value: 'right',
                        tooltip: i18n.t('general.right')
                    },
                ];
            },

            productBuilderCreateUrl(){
                return config.productBuilderCreateUrl
            },

            productBuilderImportUrl(){
                return config.productBuilderImportUrl
            },

            isTaxonomy() {
                return config.isTaxonomy;
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
