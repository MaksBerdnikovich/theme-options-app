<template>
    <div>
        <to-panel id="panel.global_settings">
            <to-panel-group :label-title="$t('panel.apply_all_existing_product_archives')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_apply_all_existing') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-3">
                            <to-button
                                icon="static-views" type="systems"
                                :processing="getExtra('page_settings_applying')"
                                v-on:click="$store.dispatch('extra/applyPageSettings',{'pt': 'product_categories', 'gr': 'layout'})">
                                {{$t('apply.apply_now')}}
                            </to-button>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.layout">
            <to-panel-group :label-title="$t('panel.product_archive_layout_source')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_product_archive_layout_source')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('product_archive_layout_source')" @input="setOption('product_archive_layout_source', $event)" :options="productArchiveLayoutSource"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div v-if="getOption('product_archive_layout_source') === 'builder'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.product_archive_builder_template')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.woocommerce_product_archive_builder_template')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label>{{$t('productArchive.select_template')}}</to-label>
                                <to-select
                                    :value="getOption('product_archive_builder_template')"
                                    @input="setOption('product_archive_builder_template', $event)"
                                    :options="productArchiveBuilderTemplatesList"
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
                                <to-link :href="productArchiveBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                <to-link :href="productArchiveBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="getOption('product_archive_layout_source') === 'default'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.layout_type')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_type') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Product_Archive_Layout_Type-1-1.png'},
                                {name: 'Product_Archive_Layout_Type-1-3.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('product_archive_type')" @input="setOption('product_archive_type',$event)" :options="productArchiveType"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <div v-if="getOption('product_archive_type') !== 'legacy'" class="to-panel-separator">
                    <to-panel-group v-if="getOption('product_archive_type') === 'grid'" :label-title="$t('panel.product_archive_content_width')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    <div v-html="$t('info.woocommerce_product_archive_content')"/>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_content_width')" @input="setOption('product_archive_content_width',$event)" :options="productArchiveContentWidth"></to-select>
                                </div>
                                <div class="col-2 hidden-option">
                                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_used_in_fullwidth_section')" @input="setOption('product_archive_used_in_fullwidth_section', $event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_archive_type') === 'grid'" :label-title="$t('panel.product_archive_layout')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_layout') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                    {name: 'Product_Archive_Grid_Layout-1-1.png'},
                                    {name: 'Product_Archive_Grid_Layout-1-2.png'},
                                    {name: 'Product_Archive_Grid_Layout-1-3.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-radio-icon :value="getOption('product_archive_layout')" @input="setOption('product_archive_layout',$event)" :options="productArchiveLayout"></to-radio-icon>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_archive_type') === 'grid'" :label-title="$t('panel.product_archive_columns')" :responsive="true" :tablet="true">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_columns') }}
                                </div>
                            </div>
                        </template>
                        <template v-slot:default="{isDesktop,isTablet,isMobile}">
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-2">
                                        <to-select v-if="isDesktop" :value="getOption('product_archive_columns_desktop')" @input="setOption('product_archive_columns_desktop',$event)" :options="productArchiveColumnsDesktop"></to-select>
                                        <to-select v-if="isTablet" :value="getOption('product_archive_columns_tablet')" @input="setOption('product_archive_columns_tablet',$event)" :options="productArchiveColumnsTablet"></to-select>
                                        <to-select v-if="isMobile" :value="getOption('product_archive_columns_mobile')" @input="setOption('product_archive_columns_mobile',$event)" :options="productArchiveColumnsMobile"></to-select>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_archive_type') === 'list'" :label-title="$t('panel.product_archive_columns')" :responsive="true" :tablet="true" :mobile="false">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_columns') }}
                                </div>
                            </div>
                        </template>
                        <template v-slot:default="{isDesktop,isTablet}">
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-2">
                                        <to-select v-if="isDesktop" :value="getOption('product_archive_columns_desktop_list')" @input="setOption('product_archive_columns_desktop_list',$event)" :options="productArchiveColumnsDesktopList"></to-select>
                                        <to-select v-if="isTablet" :value="getOption('product_archive_columns_tablet_list')" @input="setOption('product_archive_columns_tablet_list',$event)" :options="productArchiveColumnsTabletList"></to-select>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_archive_columns_desktop') === '100%'" :label-title="$t('panel.product_archive_columns_100')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_columns_100') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_columns_100')" @input="setOption('product_archive_columns_100',$event)" :options="productArchiveColumns100"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_size')" :responsive="true" :tablet="true">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_size') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                    {name: 'Product_Archive_Gaps.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <template v-slot:default="{isDesktop,isTablet,isMobile}">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-block-label-slider-input v-if="isDesktop" :min="0" :max="150" unit="px" :value="getOption('product_archive_size_desktop')" @input="setOption('product_archive_size_desktop', $event)"/>
                                    <to-block-label-slider-input v-if="isTablet" :min="0" :max="150" unit="px" :value="getOption('product_archive_size_tablet')" @input="setOption('product_archive_size_tablet', $event)"/>
                                    <to-block-label-slider-input v-if="isMobile" :min="0" :max="150" unit="px" :value="getOption('product_archive_size_mobile')" @input="setOption('product_archive_size_mobile', $event)"/>
                                </div>
                            </div>
                        </template>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_image_aspect_ratio')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_image_aspect_ratio') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_image_aspect_ratio')" @input="setOption('product_archive_image_aspect_ratio',$event)" :options="productArchiveImageAspectRatio"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_archive_type') === 'list'" :label-title="$t('panel.product_archive_image_column_width')" :responsive="true" :tablet="true">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                </div>
                            </div>
                        </template>
                        <template v-slot:default="{isDesktop,isTablet,isMobile}">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-block-label-slider-input v-if="isDesktop" :min="0" :max="100" unit="%" :value="getOption('product_archive_image_column_width_desktop')" @input="setOption('product_archive_image_column_width_desktop', $event)"/>
                                    <to-block-label-slider-input v-if="isTablet" :min="0" :max="100" unit="%" :value="getOption('product_archive_image_column_width_tablet')" @input="setOption('product_archive_image_column_width_tablet', $event)"/>
                                    <to-block-label-slider-input v-if="isMobile" :min="0" :max="100" unit="%" :value="getOption('product_archive_image_column_width_mobile')" @input="setOption('product_archive_image_column_width_mobile', $event)"/>
                                </div>
                            </div>
                        </template>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_archive_type') === 'grid'" :label-title="$t('panel.product_archive_preset')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_preset') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-block-product-preset optionPrefix="product_archive_preset"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_quick_view')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_quick_view') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_quick_view')" @input="setOption('product_archive_quick_view', $event)"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_archive_quick_view') === '1'" :label-title="$t('panel.product_archive_quick_view_text')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    <div class="info">
                                        {{ $t('info.woocommerce_product_archive_quick_view_text') }}
                                    </div>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-input :value="getOption('product_archive_quick_view_text')" @input="setOption('product_archive_quick_view_text', $event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_sorting')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    <div class="info">
                                        {{ $t('info.woocommerce_product_archive_sorting') }}
                                    </div>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-label>{{ $t('productArchive.orderby') }}</to-label>
                                    <to-select :value="getOption('product_archive_orderby')" @input="setOption('product_archive_orderby',$event)" :options="productArchiveOrderby"></to-select>
                                </div>
                                <div class="col-2">
                                    <to-label>{{ $t('productArchive.order') }}</to-label>
                                    <to-select :value="getOption('product_archive_order')" @input="setOption('product_archive_order',$event)" :options="productArchiveOrder"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_show_sorting')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_show_sorting') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                    {name: 'Product_Archive_Sorting_Control.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_show_sorting')" @input="setOption('product_archive_show_sorting', $event)"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_category_description_position')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_category_description_position') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                    {name: 'Product_Style_Categories_Grid_Category_Description.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_category_description_position')" @input="setOption('product_archive_category_description_position',$event)" :options="productArchiveCategoryDescriptionPosition"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_archive_type') === 'list'" :label-title="$t('panel.product_archive_show_divider')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_show_divider')" @input="setOption('product_archive_show_divider', $event)"/>
                        </div>
                    </to-panel-group>
                </div>

                <div v-if="getOption('product_archive_type') === 'legacy'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.quick_view')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_general_quick_view') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch :value="getOption('product_quick_view')" @input="setOption('product_quick_view',$event)"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_list_pagination')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_general_product_list_pagination') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-radio-icon :value="getOption('products_pagination')" @input="setOption('products_pagination',$event)" :options="productPagination"></to-radio-icon>
                        </div>
                    </to-panel-group>
                </div>
            </div>
        </to-panel>

        <to-panel v-if="getOption('product_archive_layout_source') === 'default' && getOption('product_archive_type') !== 'legacy'" id="panel.product_caption">
            <to-panel-group v-if="getOption('product_archive_type') === 'list'" :label-title="$t('panel.product_archive_caption_position')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('product_archive_caption_position')" @input="setOption('product_archive_caption_position',$event)" :options="productArchiveCaptionPosition"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'list'" :label-title="$t('panel.product_archive_caption_layout')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('product_archive_caption_layout')" @input="setOption('product_archive_caption_layout',$event)" :options="productArchiveCaptionLayout"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_caption_elements') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_archive_show_categories')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_show_categories') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="to-changed-settings">
                        <to-switch v-if="isDesktop" trueValue="1" falseValue="0" :value="getOption('product_archive_show_categories_desktop')" @input="setOption('product_archive_show_categories_desktop', $event)"/>
                        <to-switch v-if="isTablet" trueValue="1" falseValue="0" :value="getOption('product_archive_show_categories_tablet')" @input="setOption('product_archive_show_categories_tablet', $event)"/>
                        <to-switch v-if="isMobile" trueValue="1" falseValue="0" :value="getOption('product_archive_show_categories_mobile')" @input="setOption('product_archive_show_categories_mobile', $event)"/>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_show_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_show_title') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_show_title')" @input="setOption('product_archive_show_title', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'list'" :label-title="$t('panel.product_archive_show_description')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_show_description')" @input="setOption('product_archive_show_description', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_show_price')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_show_price') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_show_price')" @input="setOption('product_archive_show_price', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_show_reviews')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_show_reviews') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="to-changed-settings">
                        <to-switch v-if="isDesktop" trueValue="1" falseValue="0" :value="getOption('product_archive_show_reviews_desktop')" @input="setOption('product_archive_show_reviews_desktop', $event)"/>
                        <to-switch v-if="isTablet" trueValue="1" falseValue="0" :value="getOption('product_archive_show_reviews_tablet')" @input="setOption('product_archive_show_reviews_tablet', $event)"/>
                        <to-switch v-if="isMobile" trueValue="1" falseValue="0" :value="getOption('product_archive_show_reviews_mobile')" @input="setOption('product_archive_show_reviews_mobile', $event)"/>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_show_swatches')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_show_swatches') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="to-changed-settings">
                        <to-switch v-if="isDesktop" trueValue="1" falseValue="0" :value="getOption('product_archive_show_swatches_desktop')" @input="setOption('product_archive_show_swatches_desktop', $event)"/>
                        <to-switch v-if="isTablet" trueValue="1" falseValue="0" :value="getOption('product_archive_show_swatches_tablet')" @input="setOption('product_archive_show_swatches_tablet', $event)"/>
                        <to-switch v-if="isMobile" trueValue="1" falseValue="0" :value="getOption('product_archive_show_swatches_mobile')" @input="setOption('product_archive_show_swatches_mobile', $event)"/>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_show_swatches_desktop') === '1' || getOption('product_archive_show_swatches_tablet') === '1' || getOption('product_archive_show_swatches_mobile') === '1'" :label-title="$t('panel.product_archive_show_swatches_select')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_show_swatches_select') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-attributes-filter :isSwatches="true" :value="getOption('product_archive_show_swatches_data')" @input="setOption('product_archive_show_swatches_data', $event)"></to-block-attributes-filter>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_add_to_cart') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_archive_show_add_to_cart')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_show_add_to_cart') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_show_add_to_cart')" @input="setOption('product_archive_show_add_to_cart', $event)"/>
                </div>
            </to-panel-group>

            <div v-if="getOption('product_archive_show_add_to_cart') === '1'" class="to-panel-separator">
                <to-panel-group v-if="getOption('product_archive_type') === 'grid'" :label-title="$t('panel.product_archive_add_to_cart_type')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_add_to_cart_type') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('product_archive_add_to_cart_type')" @input="setOption('product_archive_add_to_cart_type',$event)" :options="productArchiveAddToCartType"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_archive_add_to_cart_type') === 'button'" :label-title="$t('panel.product_archive_cart_button_text')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_cart_button_text') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('product_archive_cart_button_text')" @input="setOption('product_archive_cart_button_text', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_archive_add_to_cart_type') === 'button'" :label-title="$t('panel.product_archive_select_options_button_text')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_select_options_button_text') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('product_archive_select_options_button_text')" @input="setOption('product_archive_select_options_button_text', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_archive_add_to_cart_type') === 'button'" :label-title="$t('panel.product_archive_cart_button_show_icon')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_cart_button_show_icon') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_cart_button_show_icon')" @input="setOption('product_archive_cart_button_show_icon', $event)"/>
                            </div>
                            <div class="col-3 col-tb-2" v-if="getOption('product_archive_cart_button_show_icon') === '1'">
                                <to-block-icon option-prefix="product_archive_cart_icon" :label-title="$t('panel.product_archive_cart_icon')"/>
                            </div>
                            <div class="col-3 col-tb-2" v-if="getOption('product_archive_cart_button_show_icon') === '1'">
                                <to-block-icon option-prefix="product_archive_select_options_icon" :label-title="$t('panel.product_archive_select_options_icon')"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_archive_add_to_cart_type') === 'icon'" :label-title="$t('panel.product_archive_cart_button_show_icon')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_cart_button_show_icon') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-3 col-tb-2">
                                <to-block-icon option-prefix="product_archive_cart_icon" :label-title="$t('panel.product_archive_cart_icon')"/>
                            </div>
                            <div class="col-3 col-tb-2">
                                <to-block-icon option-prefix="product_archive_select_options_icon" :label-title="$t('panel.product_archive_select_options_icon')"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="isWishlist" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_add_to_wishlist') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.product_archive_show_wishlist')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_show_wishlist') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_show_wishlist')" @input="setOption('product_archive_show_wishlist', $event)"/>
                            </div>
                            <div class="col-3 col-tb-2" v-if="getOption('product_archive_show_wishlist') === '1'">
                                <to-block-icon option-prefix="product_archive_add_wishlist_icon" :label-title="$t('panel.product_archive_add_wishlist_icon')"/>
                            </div>
                            <div class="col-3 col-tb-2" v-if="getOption('product_archive_show_wishlist') === '1'">
                                <to-block-icon option-prefix="product_archive_added_wishlist_icon" :label-title="$t('panel.product_archive_added_wishlist_icon')"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel v-if="getOption('product_archive_layout_source') === 'default' && getOption('product_archive_type') !== 'legacy'" id="panel.pagination">
            <to-panel-group :label-title="$t('panel.product_archive_items_per_page')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_items_per_page') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input v-if="isDesktop" type="number" :value="getOption('product_archive_items_per_page_desktop')" @input="setOption('product_archive_items_per_page_desktop', $event)"/>
                                <to-input v-if="isTablet" type="number" :value="getOption('product_archive_items_per_page_tablet')" @input="setOption('product_archive_items_per_page_tablet', $event)"/>
                                <to-input v-if="isMobile" type="number" :value="getOption('product_archive_items_per_page_mobile')" @input="setOption('product_archive_items_per_page_mobile', $event)"/>
                            </div>
                        </div>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_show_pagination')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_show_pagination') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_show_pagination')" @input="setOption('product_archive_show_pagination', $event)"/>
                </div>
            </to-panel-group>

            <div v-if="getOption('product_archive_show_pagination') === '1'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.product_archive_pagination_type')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.woocommerce_product_archive_pagination_type')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('product_archive_pagination_type')" @input="setOption('product_archive_pagination_type',$event)" :options="productArchivePaginationType"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.archive_pagination_reduce_html')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pagination_reduce_html') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_pagination_reduce_html')" @input="setOption('product_archive_pagination_reduce_html', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_archive_pagination_reduce_html') === '1'" :label-title="$t('panel.archive_pagination_reduce_html_items_count')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pagination_reduce_html_items_count') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('product_archive_pagination_reduce_html_items_count')" @input="setOption('product_archive_pagination_reduce_html_items_count',$event)" />
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_archive_pagination_type') === 'more'" :label-title="$t('panel.product_archive_more_button_text')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_more_button_text') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('product_archive_more_button_text')" @input="setOption('product_archive_more_button_text',$event)" />
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_archive_pagination_type') === 'more'" :label-title="$t('panel.product_archive_more_icon')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_more_icon') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-3">
                                <to-block-icon option-prefix="product_archive_more_icon"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_archive_pagination_type') === 'more'" :label-title="$t('panel.product_archive_more_stretch_full_width')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_more_stretch_full_width') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_more_stretch_full_width')" @input="setOption('product_archive_more_stretch_full_width', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_archive_pagination_type') === 'more' && getOption('product_archive_more_stretch_full_width') !== '1'" :label-title="$t('panel.product_archive_more_show_separator')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_more_show_separator') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                    {name: 'Product_Archive_Load_More_Button_Separator.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_more_show_separator')" @input="setOption('product_archive_more_show_separator', $event)"/>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel v-if="getOption('product_archive_layout_source') === 'default' && getOption('product_archive_type') !== 'legacy'" id="panel.labels">
            <to-panel-group :label-title="$t('panel.product_gallery_labels')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_gallery_labels') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Archive_Show_Labels.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_labels')" @input="setOption('product_archive_labels',$event)"/>
                </div>
                <div class="to-changed-settings" v-if="getOption('product_archive_labels') == '1'">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-label>{{ $t('productPage.label_sale') }}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_label_sale')" @input="setOption('product_archive_label_sale',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('productPage.label_new') }}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_label_new')" @input="setOption('product_archive_label_new',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('productPage.label_out_stock') }}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_label_out_stock')" @input="setOption('product_archive_label_out_stock',$event)"/>
                        </div>
                        <div class="col-1">
                            <to-alert :title="$t('alert.product_archive_customize_labels')" :titleLink="$t('alert.product_archive_customize_link')" route="/woocommerce/product-styles/panel.product_labels_styles"></to-alert>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel v-if="getOption('product_archive_layout_source') === 'default' && getOption('product_archive_type') !== 'legacy' && getOption('product_archive_columns_desktop') !== '100%'" id="panel.sidebar">
            <to-panel-group :label-title="$t('panel.sidebar')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_categories_sidebar') }}
                        </div>
                    </div>
                </template>
                <to-switch trueValue="1" falseValue="0" :value="getOption('product_categories.sidebar_show')" @input="setOption('product_categories.sidebar_show', $event)"/>
            </to-panel-group>

            <to-panel-group v-bind:class="{'development-mob': isFutureMode}" v-if="(getOption('product_categories.sidebar_show') === '1' && getOption('product_archive_filters_type') !== 'native') || (getOption('product_categories.sidebar_show') === '1' && getOption('product_archive_filters_type') === 'native' && getOption('product_archive_filters_style_native') !== 'hidden')" :label-title="$t('panel.sidebar_style')" :responsive="isFutureMode">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_categories_sidebar_style') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop }">
                    <to-radio-icon v-if="isDesktop" :value="getOption('product_categories.sidebar_position')" @input="setOption('product_categories.sidebar_position',$event)" :options="sidebarPosition"></to-radio-icon>
                    <to-radio-icon v-if="!isDesktop" :value="getOption('')" @input="setOption('',$event)" :options="sidebarPosition"></to-radio-icon>
                </template>
            </to-panel-group>

            <to-panel-group v-if="(getOption('product_categories.sidebar_show') === '1' && getOption('product_archive_filters_type') !== 'native') || (getOption('product_categories.sidebar_show') === '1' && getOption('product_archive_filters_type') === 'native' && getOption('product_archive_filters_style_native') !== 'hidden')" :label-title="$t('panel.sidebar_sticky')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_categories_sticky_sidebar') }}
                        </div>
                    </div>
                </template>
                <to-switch trueValue="1" falseValue="0" :value="getOption('product_categories.sidebar_sticky')" @input="setOption('product_categories.sidebar_sticky', $event)"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_categories.sidebar_show') === '1'">
                <div class="to-changed-settings">
                    <to-alert :title="$t('alert.add_widgets_sidebar_filter')" :titleLink="$t('alert.add_widgets_footer_link')" target="_blank" :href="adminUrl('widgets.php')"></to-alert>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel v-if="getOption('product_archive_layout_source') === 'default' && getOption('product_archive_type') !== 'legacy'" id="panel.filters">
            <to-panel-group :label-title="$t('panel.product_archive_filters_type')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_filters_type') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2" v-if="getOption('product_categories.sidebar_show') === '0'">
                            <to-select :value="getOption('product_archive_filters_type')" @input="setOption('product_archive_filters_type',$event)" :options="productArchiveFiltersType1"></to-select>
                        </div>
                        <div class="col-2" v-if="getOption('product_categories.sidebar_show') === '1'">
                            <to-select :value="getOption('product_archive_filters_type')" @input="setOption('product_archive_filters_type',$event)" :options="productArchiveFiltersType2"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_filters_type') === 'native'">
                <div class="to-changed-settings">
                    <to-alert :title="$t('alert.add_widgets_sidebar_filter_native')" :titleLink="$t('alert.add_widgets_footer_link')" target="_blank" :href="adminUrl('widgets.php')"></to-alert>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_filters_type') === 'native'" :label-title="$t('panel.product_archive_filters_style')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_product_archive_filters_style')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-radio-icon :value="getOption('product_archive_filters_style_native')" @input="setOption('product_archive_filters_style_native',$event)" :options="productArchiveFiltersStyleNative"></to-radio-icon>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_filters_type') === 'native' && getOption('product_archive_filters_style_native') === 'hidden'" :label-title="$t('panel.product_archive_filter_buttons_hidden_show_text')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_filter_buttons_hidden_show_text') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Archive_Show_Filters_Text.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-input :value="getOption('product_archive_filter_buttons_hidden_show_text')" @input="setOption('product_archive_filter_buttons_hidden_show_text', $event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_filters_type') === 'native'" :label-title="$t('panel.product_archive_filters_ajax')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_filters_ajax') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_filters_ajax')" @input="setOption('product_archive_filters_ajax', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_filters_type') === 'normal'" :label-title="$t('panel.product_archive_filters_style')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_product_archive_filters_style')"/>
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Archive_Filters_Style-1.1.png'},
                                {name: 'Product_Archive_Filters_Style-1.2.png'},
                                {name: 'Product_Archive_Filters_Style-1.3.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-radio-icon :value="getOption('product_archive_filters_style')" @input="setOption('product_archive_filters_style',$event)" :options="productArchiveFiltersStyle"></to-radio-icon>
                </div>
            </to-panel-group>

            <to-panel-group v-if="(getOption('product_archive_filters_type') === 'normal' && getOption('product_archive_filters_style') !== 'standard') || (getOption('product_archive_filters_type') === 'native' && getOption('product_archive_filters_ajax') === '1')" :label-title="$t('panel.product_archive_scroll_to_top')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_scroll_to_top') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_scroll_to_top')" @input="setOption('product_archive_scroll_to_top', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_filters_type') === 'native'" :label-title="$t('panel.product_archive_remove_attr_counts')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_remove_attr_counts') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Archive_Counts_in_Filter.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_remove_attr_counts')" @input="setOption('product_archive_remove_attr_counts', $event)"/>
                </div>
            </to-panel-group>

            <div v-if="getOption('product_archive_filters_type') === 'normal'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_filter_by_categories') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.product_archive_filter_by_categories')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_filter_by_categories') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_filter_by_categories')" @input="setOption('product_archive_filter_by_categories', $event)"/>
                    </div>
                </to-panel-group>

                <div v-if="getOption('product_archive_filter_by_categories') === '1'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_archive_filter_by_categories_hierarchy')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_categories_hierarchy') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_filter_by_categories_hierarchy')" @input="setOption('product_archive_filter_by_categories_hierarchy', $event)"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_filter_by_categories_count')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_categories_count') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_filter_by_categories_count')" @input="setOption('product_archive_filter_by_categories_count', $event)"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_filter_by_categories_title')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_categories_title') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-input :value="getOption('product_archive_filter_by_categories_title')" @input="setOption('product_archive_filter_by_categories_title', $event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_filter_by_categories_order_by')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_categories_order_by') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_filter_by_categories_order_by')" @input="setOption('product_archive_filter_by_categories_order_by',$event)" :options="productArchiveFilterByCategoriesOrderBy"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_filter_by_categories_order')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_categories_order') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-input type="number" :min="1" :max="5" :step="1"  :value="getOption('product_archive_filter_by_categories_order')" @input="setOption('product_archive_filter_by_categories_order', $event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>

            <div v-if="getOption('product_archive_filters_type') === 'normal'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_filter_by_attributes') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.product_archive_filter_by_attribute')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_filter_by_attribute') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_filter_by_attribute')" @input="setOption('product_archive_filter_by_attribute', $event)"/>
                    </div>
                </to-panel-group>

                <div v-if="getOption('product_archive_filter_by_attribute') === '1'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_archive_filter_by_attributes_select')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_attribute_data') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-block-attributes-filter :value="getOption('product_archive_filter_by_attribute_data')" @input="setOption('product_archive_filter_by_attribute_data', $event)"></to-block-attributes-filter>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_filter_by_attribute_count')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_attribute_count') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_filter_by_attribute_count')" @input="setOption('product_archive_filter_by_attribute_count', $event)"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_filter_by_attribute_hide_empty')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_attribute_hide_empty') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_filter_by_attribute_hide_empty')" @input="setOption('product_archive_filter_by_attribute_hide_empty', $event)"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_filter_by_attribute_order')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_attribute_order') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-input type="number" :min="1" :max="5" :step="1"  :value="getOption('product_archive_filter_by_attribute_order')" @input="setOption('product_archive_filter_by_attribute_order', $event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>

            <div v-if="getOption('product_archive_filters_type') === 'normal'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_filter_by_price') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.product_archive_filter_by_price')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_filter_by_price') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_filter_by_price')" @input="setOption('product_archive_filter_by_price', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_archive_filter_by_price') === '1'" :label-title="$t('panel.product_archive_filter_by_price_title')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_filter_by_price_title') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('product_archive_filter_by_price_title')" @input="setOption('product_archive_filter_by_price_title', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_archive_filter_by_price') === '1'" :label-title="$t('panel.product_archive_filter_by_price_order')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_filter_by_price_order') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input type="number" :min="1" :max="5" :step="1"  :value="getOption('product_archive_filter_by_price_order')" @input="setOption('product_archive_filter_by_price_order', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="getOption('product_archive_filters_type') === 'normal'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_filter_by_product_status') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.product_archive_filter_by_status')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_filter_by_status') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_filter_by_status')" @input="setOption('product_archive_filter_by_status', $event)"/>
                    </div>
                </to-panel-group>

                <div v-if="getOption('product_archive_filter_by_status') === '1'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_archive_filter_by_status_title')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_status_title') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-input :value="getOption('product_archive_filter_by_status_title')" @input="setOption('product_archive_filter_by_status_title', $event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_filter_by_status_sale')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_status_sale') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_filter_by_status_sale')" @input="setOption('product_archive_filter_by_status_sale', $event)"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_archive_filter_by_status_sale') === '1'" :label-title="$t('panel.product_archive_filter_by_status_sale_text')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_status_sale_text') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-input :value="getOption('product_archive_filter_by_status_sale_text')" @input="setOption('product_archive_filter_by_status_sale_text', $event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_filter_by_status_stock')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_status_stock') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_filter_by_status_stock')" @input="setOption('product_archive_filter_by_status_stock', $event)"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_archive_filter_by_status_stock') === '1'" :label-title="$t('panel.product_archive_filter_by_status_stock_text')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_status_stock_text') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-input :value="getOption('product_archive_filter_by_status_stock_text')" @input="setOption('product_archive_filter_by_status_stock_text', $event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_filter_by_status_count')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_status_count') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_filter_by_status_count')" @input="setOption('product_archive_filter_by_status_count', $event)"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_filter_by_status_order')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_filter_by_status_order') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-input type="number" :min="1" :max="5" :step="1" :value="getOption('product_archive_filter_by_status_order')" @input="setOption('product_archive_filter_by_status_order', $event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>

            <div v-if="getOption('product_archive_filters_type') === 'normal'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_product_search') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.product_archive_filter_by_search')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_filter_by_search') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_filter_by_search')" @input="setOption('product_archive_filter_by_search', $event)"/>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="getOption('product_archive_filters_type') === 'normal'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_text_labels') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.product_archive_filters_text_labels_all_text')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_filters_text_labels_all_text') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('product_archive_filters_text_labels_all_text')" @input="setOption('product_archive_filters_text_labels_all_text', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.product_archive_filters_text_labels_clear_text')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_filters_text_labels_clear_text') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('product_archive_filters_text_labels_clear_text')" @input="setOption('product_archive_filters_text_labels_clear_text', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.product_archive_filters_text_labels_search_text')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_filters_text_labels_search_text') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('product_archive_filters_text_labels_search_text')" @input="setOption('product_archive_filters_text_labels_search_text', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.product_archive_filter_buttons_hidden_show_text')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_filter_buttons_sidebar_hidden_show_text') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                    {name: 'Product_Archive_Show_Filters_Text.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('product_archive_filter_buttons_hidden_show_text')" @input="setOption('product_archive_filter_buttons_hidden_show_text', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.product_archive_filter_buttons_hidden_sidebar_title')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_filter_buttons_hidden_sidebar_title') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('product_archive_filter_buttons_hidden_sidebar_title')" @input="setOption('product_archive_filter_buttons_hidden_sidebar_title', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.product_archive_filter_buttons_hidden_filter_by_text')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_filter_buttons_hidden_filter_by_text') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('product_archive_filter_buttons_hidden_filter_by_text')" @input="setOption('product_archive_filter_buttons_hidden_filter_by_text', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel v-if="getOption('product_archive_layout_source') === 'default' && getOption('product_archive_type') !== 'legacy'" id="panel.additional_options">
            <to-panel-group :label-title="$t('panel.product_archive_loading_animation')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_loading_animation') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_loading_animation')" @input="setOption('product_archive_loading_animation', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_loading_animation') === '1'" :label-title="$t('panel.product_archive_animation_effect')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_animation_effect') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('product_archive_animation_effect')" @input="setOption('product_archive_animation_effect',$event)" :options="productArchiveAnimationEffect"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'grid'" :label-title="$t('panel.product_archive_ignore_highlights')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_ignore_highlights') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Archive_Ignore_Highlighted_Products-1-1.png'},
                                {name: 'Product_Archive_Ignore_Highlighted_Products-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_ignore_highlights')" @input="setOption('product_archive_ignore_highlights', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'grid' && getOption('product_archive_columns_desktop') !== '100%'" :label-title="$t('panel.product_archive_skeleton_loader')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_skeleton_loader') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Archive_Skeleton_Preloader.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_skeleton_loader')" @input="setOption('product_archive_skeleton_loader', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_featured_only')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_featured_only') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Archive_Set_Featured_Product.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_featured_only')" @input="setOption('product_archive_featured_only', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_sale_only')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_sale_only') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_sale_only')" @input="setOption('product_archive_sale_only', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_social_sharing')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_social_sharing') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_social_sharing')" @input="setOption('product_archive_social_sharing', $event)"/>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel v-if="getOption('product_archive_layout_source') === 'default' && getOption('product_archive_type') !== 'legacy'" id="panel.style">
            <to-panel-group :label-title="$t('panel.product_archive_customize_styles')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_customize_styles') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_customize_styles')" @input="setOption('product_archive_customize_styles', $event)"/>
                </div>
            </to-panel-group>

            <div v-if="getOption('product_archive_customize_styles') === '1'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_hover_effect') }}</to-panel-subtitle>

                <div v-if="getOption('product_archive_preset_type') === 'on_image'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_archive_hover_effect')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_image_hover_effect') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[

                                    ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_image_hover_effect_image')" @input="setOption('product_archive_image_hover_effect_image',$event)" :options="productArchiveImageHoverEffectImage"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>

                <div v-if="getOption('product_archive_preset_type') === 'below'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_archive_hover_effect')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_image_hover_effect') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                    {name: 'Product_Archive_Image_Hover_Effect_Page.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_image_hover_effect_page')" @input="setOption('product_archive_image_hover_effect_page',$event)" :options="productArchiveImageHoverEffectPage"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>

                <div v-if="getOption('product_archive_preset_type') === 'on_hover'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_archive_hover_effect')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_image_hover_effect') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_image_hover_effect_hover')" @input="setOption('product_archive_image_hover_effect_hover',$event)" :options="productArchiveImageHoverEffectHover"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>

                <div class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_archive_image_hover_effect_fallback')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_image_hover_effect_fallback') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_image_hover_effect_fallback')" @input="setOption('product_archive_image_hover_effect_fallback',$event)" :options="productArchiveImageHoverEffectFallback"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>

            <div v-if="getOption('product_archive_customize_styles') === '1' && getOption('product_archive_preset_on_hover') !== 'shadow-hover' && getOption('product_archive_preset_on_hover') !== 'gradient-hover'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_caption_container') }}</to-panel-subtitle>

                <div v-if="getOption('product_archive_preset_type') === 'below'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_archive_caption_container_preset')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_preset') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                        {name: 'Product_Archive_Preset_Caption_Container.png'},
                                    ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_caption_container_preset')" @input="setOption('product_archive_caption_container_preset',$event)" :options="productArchiveCaptionContainerPreset"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_caption_container_alignment')" :responsive="true" :tablet="true">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_alignment') }}
                                </div>
                            </div>
                        </template>
                        <template v-slot:default="{isDesktop,isTablet,isMobile}">
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-radio-toggle v-if="isDesktop" :value="getOption('product_archive_caption_container_alignment_desktop')" @input="setOption('product_archive_caption_container_alignment_desktop', $event)" :options="productArchiveCaptionContainerAlignment"/>
                                        <to-radio-toggle v-if="isTablet" :value="getOption('product_archive_caption_container_alignment_tablet')" @input="setOption('product_archive_caption_container_alignment_tablet', $event)" :options="productArchiveCaptionContainerAlignment"/>
                                        <to-radio-toggle v-if="isMobile" :value="getOption('product_archive_caption_container_alignment_mobile')" @input="setOption('product_archive_caption_container_alignment_mobile', $event)" :options="productArchiveCaptionContainerAlignment"/>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_caption_container_background_color')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_background_color') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-4">
                                    <to-color-picker :value="getOption('product_archive_caption_container_background_color')" @input="setOption('product_archive_caption_container_background_color',$event)" :label-title="$t('colors.color_normal')"/>
                                </div>
                                <div class="col-4">
                                    <to-color-picker :value="getOption('product_archive_caption_container_background_color_hover')" @input="setOption('product_archive_caption_container_background_color_hover',$event)" :label-title="$t('colors.color_hover')"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_caption_container_separator')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_separator') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                        {name: 'Product_Archive_Separator_in_Caption_Container.png'},
                                    ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_caption_container_separator')" @input="setOption('product_archive_caption_container_separator', $event)"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_archive_caption_container_separator') === '1'" :label-title="$t('panel.product_archive_caption_container_separator_width')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_separator_width') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-block-label-slider-input :min="0" :max="50" unit="px" :value="getOption('product_archive_caption_container_separator_width')" @input="setOption('product_archive_caption_container_separator_width', $event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_archive_caption_container_separator') === '1'" :label-title="$t('panel.product_archive_caption_container_separator_color')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_separator_color') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-auto">
                                    <to-color-picker :value="getOption('product_archive_caption_container_separator_color')" @input="setOption('product_archive_caption_container_separator_color',$event)" :label-title="$t('colors.color_normal')"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>

                <div v-if="getOption('product_archive_preset_type') !== 'below'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_archive_caption_container_preset')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_preset') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                        {name: 'Product_Archive_Preset_Caption_Container.png'},
                                    ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_caption_container_preset_hover')" @input="setOption('product_archive_caption_container_preset_hover',$event)" :options="productArchiveCaptionContainerPresetHover"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_caption_container_background')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_background_color') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-auto">
                                    <to-color-picker :value="getOption('product_archive_caption_container_preset_hover_background_color')" @input="setOption('product_archive_caption_container_preset_hover_background_color',$event)" />
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_caption_container_alignment')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_alignment') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-auto">
                                    <to-radio-toggle :value="getOption('product_archive_caption_container_alignment_hover')" @input="setOption('product_archive_caption_container_alignment_hover', $event)" :options="productArchiveCaptionContainerAlignment"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>

            <div v-if="getOption('product_archive_customize_styles') === '1'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_typography') }}</to-panel-subtitle>

                <to-panel-group>
                    <div class="to-changed-settings">
                        <to-alert :title="$t('alert.product_archive_customize_typography')" :titleLink="$t('alert.product_archive_customize_link')" route="/woocommerce/product-styles"></to-alert>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="getOption('product_archive_customize_styles') === '1'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_icons') }}</to-panel-subtitle>

                <to-panel-group>
                    <div class="to-changed-settings">
                        <to-alert :title="$t('alert.product_archive_customize_icons')" :titleLink="$t('alert.product_archive_customize_link')" route="/woocommerce/product-styles/panel.product_icons_styles"></to-alert>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="getOption('product_archive_customize_styles') === '1'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_buttons') }}</to-panel-subtitle>

                <to-panel-group>
                    <div class="to-changed-settings">
                        <to-alert :title="$t('alert.product_archive_customize_buttons')" :titleLink="$t('alert.product_archive_customize_link')" route="/woocommerce/product-styles/panel.product_buttons_styles"></to-alert>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="getOption('product_archive_customize_styles') === '1' && getOption('product_archive_quick_view') === '1'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_quick_view') }}</to-panel-subtitle>

                <to-panel-group>
                    <div class="to-changed-settings">
                        <to-alert :title="$t('alert.product_archive_customize_quick_view')" :titleLink="$t('alert.product_archive_customize_link')" route="/woocommerce/product-styles/panel.product_additional_colors"></to-alert>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.product_archive_builder">
            <to-panel-group :label-title="$t('panel.product_archive_builder_preview')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_product_archive_builder_preview')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select
                                :value="getOption('product_archive_builder_preview')"
                                @input="setOption('product_archive_builder_preview', $event)"
                                :options="productArchiveBuilderPreviewList"
                                v-on:right-button-clicked="showPreview($event)"
                            />
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel v-if="getOption('product_archive_layout_source') === 'builder'" id="panel.product_page_upsells_related_products">
            <to-panel-group :label-title="$t('panel.layout_type')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_type') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Archive_Layout_Type-1-1.png'},
                                {name: 'Product_Archive_Layout_Type-1-3.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('product_archive_type')" @input="setOption('product_archive_type',$event)" :options="productArchiveType"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'grid'" :label-title="$t('panel.product_archive_content_width')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_product_archive_content')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('product_archive_content_width')" @input="setOption('product_archive_content_width',$event)" :options="productArchiveContentWidth"></to-select>
                        </div>
                        <div class="col-2 hidden-option">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_used_in_fullwidth_section')" @input="setOption('product_archive_used_in_fullwidth_section', $event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'grid'" :label-title="$t('panel.product_archive_layout')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_layout') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                    {name: 'Product_Archive_Grid_Layout-1-1.png'},
                                    {name: 'Product_Archive_Grid_Layout-1-2.png'},
                                    {name: 'Product_Archive_Grid_Layout-1-3.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-radio-icon :value="getOption('product_archive_layout')" @input="setOption('product_archive_layout',$event)" :options="productArchiveLayout"></to-radio-icon>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'grid'" :label-title="$t('panel.product_archive_columns')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_columns') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select v-if="isDesktop" :value="getOption('product_archive_columns_desktop')" @input="setOption('product_archive_columns_desktop',$event)" :options="productArchiveColumnsDesktop"></to-select>
                                <to-select v-if="isTablet" :value="getOption('product_archive_columns_tablet')" @input="setOption('product_archive_columns_tablet',$event)" :options="productArchiveColumnsTablet"></to-select>
                                <to-select v-if="isMobile" :value="getOption('product_archive_columns_mobile')" @input="setOption('product_archive_columns_mobile',$event)" :options="productArchiveColumnsMobile"></to-select>
                            </div>
                        </div>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'list'" :label-title="$t('panel.product_archive_columns')" :responsive="true" :tablet="true" :mobile="false">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_columns') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet}">
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select v-if="isDesktop" :value="getOption('product_archive_columns_desktop_list')" @input="setOption('product_archive_columns_desktop_list',$event)" :options="productArchiveColumnsDesktopList"></to-select>
                                <to-select v-if="isTablet" :value="getOption('product_archive_columns_tablet_list')" @input="setOption('product_archive_columns_tablet_list',$event)" :options="productArchiveColumnsTabletList"></to-select>
                            </div>
                        </div>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_columns_desktop') === '100%'" :label-title="$t('panel.product_archive_columns_100')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_columns_100') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('product_archive_columns_100')" @input="setOption('product_archive_columns_100',$event)" :options="productArchiveColumns100"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_size')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_size') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                    {name: 'Product_Archive_Gaps.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input v-if="isDesktop" :min="0" :max="150" unit="px" :value="getOption('product_archive_size_desktop')" @input="setOption('product_archive_size_desktop', $event)"/>
                            <to-block-label-slider-input v-if="isTablet" :min="0" :max="150" unit="px" :value="getOption('product_archive_size_tablet')" @input="setOption('product_archive_size_tablet', $event)"/>
                            <to-block-label-slider-input v-if="isMobile" :min="0" :max="150" unit="px" :value="getOption('product_archive_size_mobile')" @input="setOption('product_archive_size_mobile', $event)"/>
                        </div>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_image_aspect_ratio')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_image_aspect_ratio') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('product_archive_image_aspect_ratio')" @input="setOption('product_archive_image_aspect_ratio',$event)" :options="productArchiveImageAspectRatio"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'list'" :label-title="$t('panel.product_archive_image_column_width')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input v-if="isDesktop" :min="0" :max="100" unit="%" :value="getOption('product_archive_image_column_width_desktop')" @input="setOption('product_archive_image_column_width_desktop', $event)"/>
                            <to-block-label-slider-input v-if="isTablet" :min="0" :max="100" unit="%" :value="getOption('product_archive_image_column_width_tablet')" @input="setOption('product_archive_image_column_width_tablet', $event)"/>
                            <to-block-label-slider-input v-if="isMobile" :min="0" :max="100" unit="%" :value="getOption('product_archive_image_column_width_mobile')" @input="setOption('product_archive_image_column_width_mobile', $event)"/>
                        </div>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'grid'" :label-title="$t('panel.product_archive_preset')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_preset') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-product-preset optionPrefix="product_archive_preset"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_sorting')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_sorting') }}
                            </div>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label>{{ $t('productArchive.orderby') }}</to-label>
                            <to-select :value="getOption('product_archive_orderby')" @input="setOption('product_archive_orderby',$event)" :options="productArchiveOrderby"></to-select>
                        </div>
                        <div class="col-2">
                            <to-label>{{ $t('productArchive.order') }}</to-label>
                            <to-select :value="getOption('product_archive_order')" @input="setOption('product_archive_order',$event)" :options="productArchiveOrder"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'list'" :label-title="$t('panel.product_archive_show_divider')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_show_divider')" @input="setOption('product_archive_show_divider', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'list'" :label-title="$t('panel.product_archive_caption_position')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('product_archive_caption_position')" @input="setOption('product_archive_caption_position',$event)" :options="productArchiveCaptionPosition"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'list'" :label-title="$t('panel.product_archive_caption_layout')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('product_archive_caption_layout')" @input="setOption('product_archive_caption_layout',$event)" :options="productArchiveCaptionLayout"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_caption_elements') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_archive_show_categories')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_show_categories') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="to-changed-settings">
                        <to-switch v-if="isDesktop" trueValue="1" falseValue="0" :value="getOption('product_archive_show_categories_desktop')" @input="setOption('product_archive_show_categories_desktop', $event)"/>
                        <to-switch v-if="isTablet" trueValue="1" falseValue="0" :value="getOption('product_archive_show_categories_tablet')" @input="setOption('product_archive_show_categories_tablet', $event)"/>
                        <to-switch v-if="isMobile" trueValue="1" falseValue="0" :value="getOption('product_archive_show_categories_mobile')" @input="setOption('product_archive_show_categories_mobile', $event)"/>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_show_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_show_title') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_show_title')" @input="setOption('product_archive_show_title', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'list'" :label-title="$t('panel.product_archive_show_description')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_show_description')" @input="setOption('product_archive_show_description', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_show_price')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_show_price') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_show_price')" @input="setOption('product_archive_show_price', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_show_reviews')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_show_reviews') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="to-changed-settings">
                        <to-switch v-if="isDesktop" trueValue="1" falseValue="0" :value="getOption('product_archive_show_reviews_desktop')" @input="setOption('product_archive_show_reviews_desktop', $event)"/>
                        <to-switch v-if="isTablet" trueValue="1" falseValue="0" :value="getOption('product_archive_show_reviews_tablet')" @input="setOption('product_archive_show_reviews_tablet', $event)"/>
                        <to-switch v-if="isMobile" trueValue="1" falseValue="0" :value="getOption('product_archive_show_reviews_mobile')" @input="setOption('product_archive_show_reviews_mobile', $event)"/>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_show_swatches')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_show_swatches') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <div class="to-changed-settings">
                        <to-switch v-if="isDesktop" trueValue="1" falseValue="0" :value="getOption('product_archive_show_swatches_desktop')" @input="setOption('product_archive_show_swatches_desktop', $event)"/>
                        <to-switch v-if="isTablet" trueValue="1" falseValue="0" :value="getOption('product_archive_show_swatches_tablet')" @input="setOption('product_archive_show_swatches_tablet', $event)"/>
                        <to-switch v-if="isMobile" trueValue="1" falseValue="0" :value="getOption('product_archive_show_swatches_mobile')" @input="setOption('product_archive_show_swatches_mobile', $event)"/>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_show_swatches_desktop') === '1' || getOption('product_archive_show_swatches_tablet') === '1' || getOption('product_archive_show_swatches_mobile') === '1'" :label-title="$t('panel.product_archive_show_swatches_select')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_show_swatches_select') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-attributes-filter :isSwatches="true" :value="getOption('product_archive_show_swatches_data')" @input="setOption('product_archive_show_swatches_data', $event)"></to-block-attributes-filter>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_add_to_cart') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_archive_show_add_to_cart')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_show_add_to_cart') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_show_add_to_cart')" @input="setOption('product_archive_show_add_to_cart', $event)"/>
                </div>
            </to-panel-group>

            <div v-if="getOption('product_archive_show_add_to_cart') === '1'" class="to-panel-separator">
                <to-panel-group v-if="getOption('product_archive_type') === 'grid'" :label-title="$t('panel.product_archive_add_to_cart_type')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_add_to_cart_type') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('product_archive_add_to_cart_type')" @input="setOption('product_archive_add_to_cart_type',$event)" :options="productArchiveAddToCartType"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_archive_add_to_cart_type') === 'button'" :label-title="$t('panel.product_archive_cart_button_text')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_cart_button_text') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('product_archive_cart_button_text')" @input="setOption('product_archive_cart_button_text', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_archive_add_to_cart_type') === 'button'" :label-title="$t('panel.product_archive_select_options_button_text')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_select_options_button_text') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('product_archive_select_options_button_text')" @input="setOption('product_archive_select_options_button_text', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_archive_add_to_cart_type') === 'button'" :label-title="$t('panel.product_archive_cart_button_show_icon')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_cart_button_show_icon') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_cart_button_show_icon')" @input="setOption('product_archive_cart_button_show_icon', $event)"/>
                            </div>
                            <div class="col-3 col-tb-2" v-if="getOption('product_archive_cart_button_show_icon') === '1'">
                                <to-block-icon option-prefix="product_archive_cart_icon" :label-title="$t('panel.product_archive_cart_icon')"/>
                            </div>
                            <div class="col-3 col-tb-2" v-if="getOption('product_archive_cart_button_show_icon') === '1'">
                                <to-block-icon option-prefix="product_archive_select_options_icon" :label-title="$t('panel.product_archive_select_options_icon')"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('product_archive_add_to_cart_type') === 'icon'" :label-title="$t('panel.product_archive_cart_button_show_icon')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_cart_button_show_icon') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-3 col-tb-2">
                                <to-block-icon option-prefix="product_archive_cart_icon" :label-title="$t('panel.product_archive_cart_icon')"/>
                            </div>
                            <div class="col-3 col-tb-2">
                                <to-block-icon option-prefix="product_archive_select_options_icon" :label-title="$t('panel.product_archive_select_options_icon')"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="isWishlist" class="to-panel-separator next-of-type">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_add_to_wishlist') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.product_archive_show_wishlist')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.woocommerce_product_archive_show_wishlist') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_show_wishlist')" @input="setOption('product_archive_show_wishlist', $event)"/>
                            </div>
                            <div class="col-3 col-tb-2" v-if="getOption('product_archive_show_wishlist') === '1'">
                                <to-block-icon option-prefix="product_archive_add_wishlist_icon" :label-title="$t('panel.product_archive_add_wishlist_icon')"/>
                            </div>
                            <div class="col-3 col-tb-2" v-if="getOption('product_archive_show_wishlist') === '1'">
                                <to-block-icon option-prefix="product_archive_added_wishlist_icon" :label-title="$t('panel.product_archive_added_wishlist_icon')"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>

            <to-panel-subtitle v-slot:label>{{ $t('panel.labels') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_gallery_labels')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_gallery_labels') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Archive_Show_Labels.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_labels')" @input="setOption('product_archive_labels',$event)"/>
                </div>
                <div class="to-changed-settings" v-if="getOption('product_archive_labels') == '1'">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-label>{{ $t('productPage.label_sale') }}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_label_sale')" @input="setOption('product_archive_label_sale',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('productPage.label_new') }}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_label_new')" @input="setOption('product_archive_label_new',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('productPage.label_out_stock') }}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_label_out_stock')" @input="setOption('product_archive_label_out_stock',$event)"/>
                        </div>
                        <div class="col-1">
                            <to-alert :title="$t('alert.product_archive_customize_labels')" :titleLink="$t('alert.product_archive_customize_link')" route="/woocommerce/product-styles/panel.product_labels_styles"></to-alert>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.additional_options') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_archive_loading_animation')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_loading_animation') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_loading_animation')" @input="setOption('product_archive_loading_animation', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_loading_animation') === '1'" :label-title="$t('panel.product_archive_animation_effect')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_animation_effect') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('product_archive_animation_effect')" @input="setOption('product_archive_animation_effect',$event)" :options="productArchiveAnimationEffect"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'grid'" :label-title="$t('panel.product_archive_ignore_highlights')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_ignore_highlights') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Archive_Ignore_Highlighted_Products-1-1.png'},
                                {name: 'Product_Archive_Ignore_Highlighted_Products-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_ignore_highlights')" @input="setOption('product_archive_ignore_highlights', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_archive_type') === 'grid' && getOption('product_archive_columns_desktop') !== '100%'" :label-title="$t('panel.product_archive_skeleton_loader')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_skeleton_loader') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Archive_Skeleton_Preloader.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_skeleton_loader')" @input="setOption('product_archive_skeleton_loader', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_featured_only')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_featured_only') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Product_Archive_Set_Featured_Product.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_featured_only')" @input="setOption('product_archive_featured_only', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_sale_only')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_sale_only') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_sale_only')" @input="setOption('product_archive_sale_only', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.product_archive_social_sharing')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_social_sharing') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_social_sharing')" @input="setOption('product_archive_social_sharing', $event)"/>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.style') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.product_archive_customize_styles')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.woocommerce_product_archive_customize_styles') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_customize_styles')" @input="setOption('product_archive_customize_styles', $event)"/>
                </div>
            </to-panel-group>

            <div v-if="getOption('product_archive_customize_styles') === '1'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_hover_effect') }}</to-panel-subtitle>

                <div v-if="getOption('product_archive_preset_type') === 'on_image'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_archive_hover_effect')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_image_hover_effect') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[

                                    ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_image_hover_effect_image')" @input="setOption('product_archive_image_hover_effect_image',$event)" :options="productArchiveImageHoverEffectImage"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>

                <div v-if="getOption('product_archive_preset_type') === 'below'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_archive_hover_effect')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_image_hover_effect') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                    {name: 'Product_Archive_Image_Hover_Effect_Page.png'},
                                ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_image_hover_effect_page')" @input="setOption('product_archive_image_hover_effect_page',$event)" :options="productArchiveImageHoverEffectPage"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>

                <div v-if="getOption('product_archive_preset_type') === 'on_hover'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_archive_hover_effect')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_image_hover_effect') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_image_hover_effect_hover')" @input="setOption('product_archive_image_hover_effect_hover',$event)" :options="productArchiveImageHoverEffectHover"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>

                <div class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_archive_image_hover_effect_fallback')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_image_hover_effect_fallback') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_image_hover_effect_fallback')" @input="setOption('product_archive_image_hover_effect_fallback',$event)" :options="productArchiveImageHoverEffectFallback"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>

            <div v-if="getOption('product_archive_customize_styles') === '1' && getOption('product_archive_preset_on_hover') !== 'shadow-hover' && getOption('product_archive_preset_on_hover') !== 'gradient-hover'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_caption_container') }}</to-panel-subtitle>

                <div v-if="getOption('product_archive_preset_type') === 'below'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_archive_caption_container_preset')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_preset') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                        {name: 'Product_Archive_Preset_Caption_Container.png'},
                                    ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_caption_container_preset')" @input="setOption('product_archive_caption_container_preset',$event)" :options="productArchiveCaptionContainerPreset"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_caption_container_alignment')" :responsive="true" :tablet="true">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_alignment') }}
                                </div>
                            </div>
                        </template>
                        <template v-slot:default="{isDesktop,isTablet,isMobile}">
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-radio-toggle v-if="isDesktop" :value="getOption('product_archive_caption_container_alignment_desktop')" @input="setOption('product_archive_caption_container_alignment_desktop', $event)" :options="productArchiveCaptionContainerAlignment"/>
                                        <to-radio-toggle v-if="isTablet" :value="getOption('product_archive_caption_container_alignment_tablet')" @input="setOption('product_archive_caption_container_alignment_tablet', $event)" :options="productArchiveCaptionContainerAlignment"/>
                                        <to-radio-toggle v-if="isMobile" :value="getOption('product_archive_caption_container_alignment_mobile')" @input="setOption('product_archive_caption_container_alignment_mobile', $event)" :options="productArchiveCaptionContainerAlignment"/>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_caption_container_background_color')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_background_color') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-4">
                                    <to-color-picker :value="getOption('product_archive_caption_container_background_color')" @input="setOption('product_archive_caption_container_background_color',$event)" :label-title="$t('colors.color_normal')"/>
                                </div>
                                <div class="col-4">
                                    <to-color-picker :value="getOption('product_archive_caption_container_background_color_hover')" @input="setOption('product_archive_caption_container_background_color_hover',$event)" :label-title="$t('colors.color_hover')"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_caption_container_separator')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_separator') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                        {name: 'Product_Archive_Separator_in_Caption_Container.png'},
                                    ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_archive_caption_container_separator')" @input="setOption('product_archive_caption_container_separator', $event)"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_archive_caption_container_separator') === '1'" :label-title="$t('panel.product_archive_caption_container_separator_width')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_separator_width') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-block-label-slider-input :min="0" :max="50" unit="px" :value="getOption('product_archive_caption_container_separator_width')" @input="setOption('product_archive_caption_container_separator_width', $event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('product_archive_caption_container_separator') === '1'" :label-title="$t('panel.product_archive_caption_container_separator_color')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_separator_color') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-auto">
                                    <to-color-picker :value="getOption('product_archive_caption_container_separator_color')" @input="setOption('product_archive_caption_container_separator_color',$event)" :label-title="$t('colors.color_normal')"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>

                <div v-if="getOption('product_archive_preset_type') !== 'below'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.product_archive_caption_container_preset')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_preset') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                        {name: 'Product_Archive_Preset_Caption_Container.png'},
                                    ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('product_archive_caption_container_preset_hover')" @input="setOption('product_archive_caption_container_preset_hover',$event)" :options="productArchiveCaptionContainerPresetHover"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_caption_container_background')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_background_color') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-auto">
                                    <to-color-picker :value="getOption('product_archive_caption_container_preset_hover_background_color')" @input="setOption('product_archive_caption_container_preset_hover_background_color',$event)" />
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.product_archive_caption_container_alignment')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.woocommerce_product_archive_caption_container_alignment') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-auto">
                                    <to-radio-toggle :value="getOption('product_archive_caption_container_alignment_hover')" @input="setOption('product_archive_caption_container_alignment_hover', $event)" :options="productArchiveCaptionContainerAlignment"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>

            <div v-if="getOption('product_archive_customize_styles') === '1'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_typography') }}</to-panel-subtitle>

                <to-panel-group>
                    <div class="to-changed-settings">
                        <to-alert :title="$t('alert.product_archive_customize_typography')" :titleLink="$t('alert.product_archive_customize_link')" route="/woocommerce/product-styles"></to-alert>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="getOption('product_archive_customize_styles') === '1'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_icons') }}</to-panel-subtitle>

                <to-panel-group>
                    <div class="to-changed-settings">
                        <to-alert :title="$t('alert.product_archive_customize_icons')" :titleLink="$t('alert.product_archive_customize_link')" route="/woocommerce/product-styles/panel.product_icons_styles"></to-alert>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="getOption('product_archive_customize_styles') === '1'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_buttons') }}</to-panel-subtitle>

                <to-panel-group>
                    <div class="to-changed-settings">
                        <to-alert :title="$t('alert.product_archive_customize_buttons')" :titleLink="$t('alert.product_archive_customize_link')" route="/woocommerce/product-styles/panel.product_buttons_styles"></to-alert>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="getOption('product_archive_customize_styles') === '1' && getOption('product_archive_quick_view') === '1'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.product_archive_quick_view') }}</to-panel-subtitle>

                <to-panel-group>
                    <div class="to-changed-settings">
                        <to-alert :title="$t('alert.product_archive_customize_quick_view')" :titleLink="$t('alert.product_archive_customize_link')" route="/woocommerce/product-styles/panel.product_additional_colors"></to-alert>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>
    </div>
</template>

<script>
    import {addHelpers} from '@/services/helper';
    import i18n from '@/services/i18n';
    import config from '@/services/config';

    export default addHelpers({
        data() {
            const productArchiveBuilderTemplatesList = JSON.parse(JSON.stringify(config.productArchiveBuilderTemplates));
            for(let item of productArchiveBuilderTemplatesList) {
                if (item.preview) {
                    item.rightButton = {icon: 'eye'};
                }

                if (item.edit) {
                    item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
                }
            }

            const productArchiveBuilderPreviewList = JSON.parse(JSON.stringify(config.productArchiveBuilderPreviewList));
            for(let item of productArchiveBuilderPreviewList) {
                if (item.preview && item.preview !== '') {
                    item.rightButton = {icon: 'eye'};
                }
            }

            return {
                productArchiveBuilderTemplatesList,
                productArchiveBuilderPreviewList,
                productArchiveLayoutSource: [
                    {label: i18n.t('productArchive.layout_default'), value: 'default'},
                    {label: i18n.t('productArchive.layout_builder'), value: 'builder'},
                ],
                productArchiveType: [
                    {label: i18n.t('productArchive.layout_grid'), value: 'grid'},
                    {label: i18n.t('productArchive.layout_legacy'), value: 'legacy'},
                    {label: i18n.t('productArchive.layout_list'), value: 'list'},
                ],
                productArchiveContentWidth: [
                    {label: i18n.t('productArchive.content_width_boxed'), value: 'boxed'},
                    {label: i18n.t('productArchive.content_width_full'), value: 'fullwidth'},
                    {label: i18n.t('productArchive.content_width_full_no_gaps'), value: 'fullwidth-nogaps'},
                ],
                productArchiveLayout: [
                    {icon: 'Schemes-41', title: i18n.t('productArchive.justified'), value: 'justified'},
                    {icon: 'Schemes-42', title: i18n.t('productArchive.masonry'), value: 'masonry'},
                    {icon: 'Schemes-43', title: i18n.t('productArchive.metro'), value: 'metro'},
                ],
                /*
                productArchiveColumnsDesktop: [
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                    {label: i18n.t('productArchive.col-3x'), value: '3x'},
                    {label: i18n.t('productArchive.col-4x'), value: '4x'},
                    {label: i18n.t('productArchive.col-5x'), value: '5x'},
                    {label: i18n.t('productArchive.col-6x'), value: '6x'},
                    {label: i18n.t('productArchive.col-100%'), value: '100%'},
                ],
                 */
                productArchiveColumnsDesktopList: [
                    {label: i18n.t('productArchive.col-1x'), value: '1x'},
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                    {label: i18n.t('productArchive.col-3x'), value: '3x'},
                    {label: i18n.t('productArchive.col-4x'), value: '4x'},
                ],
                productArchiveColumnsTablet: [
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                    {label: i18n.t('productArchive.col-3x'), value: '3x'},
                    {label: i18n.t('productArchive.col-4x'), value: '4x'},
                ],
                productArchiveColumnsTabletList: [
                    {label: i18n.t('productArchive.col-1x'), value: '1x'},
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                ],
                productArchiveColumnsMobile: [
                    {label: i18n.t('productArchive.col-1x'), value: '1x'},
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                ],
                productArchiveColumns100: [
                    {label: i18n.t('productArchive.col-4'), value: '4'},
                    {label: i18n.t('productArchive.col-5'), value: '5'},
                    {label: i18n.t('productArchive.col-6'), value: '6'},
                ],
                productArchiveImageAspectRatio: [
                    {label: i18n.t('productArchive.portrait'), value: 'portrait'},
                    {label: i18n.t('productArchive.square'), value: 'square'},
                ],
                productArchiveOrderby: [
					{label: i18n.t('sorting.woo_default'), value: 'default'},
                    {label: i18n.t('sorting.date'), value: 'date'},
                    {label: i18n.t('sorting.popularity'), value: 'popularity'},
                    {label: i18n.t('sorting.rating'), value: 'rating'},
                    {label: i18n.t('sorting.title'), value: 'title'},
                    {label: i18n.t('sorting.price'), value: 'price'},
                    {label: i18n.t('sorting.rand'), value: 'rand'},
                ],
                productArchiveOrder: [
                    {label: i18n.t('sorting.asc'), value: 'asc'},
                    {label: i18n.t('sorting.desc'), value: 'desc'},
                ],
                productArchiveCategoryDescriptionPosition: [
                    {label: i18n.t('productArchive.above_shop_grid'), value: 'above'},
                    {label: i18n.t('productArchive.below_shop_grid'), value: 'below'},
                ],
                productArchiveAddToCartType: [
                    {label: i18n.t('productArchive.icon'), value: 'icon'},
                    {label: i18n.t('productArchive.button'), value: 'button'},
                ],
                productArchivePaginationType: [
                    {label: i18n.t('productArchive.pagination_numbers'), value: 'normal'},
                    {label: i18n.t('productArchive.pagination_more'), value: 'more'},
                    {label: i18n.t('productArchive.pagination_scroll'), value: 'scroll'},
                ],
                productArchiveFiltersType1: [
                    {label: i18n.t('productArchive.filter_thegem'), value: 'normal'},
                    {label: i18n.t('productArchive.filter_disabled'), value: 'disabled'},
                ],
                productArchiveFiltersType2: [
                    {label: i18n.t('productArchive.filter_woo'), value: 'native'},
                    {label: i18n.t('productArchive.filter_thegem'), value: 'normal'},
                ],
                productArchiveFiltersStyle: [
                    {icon: 'Schemes-44', title: i18n.t('productArchive.filter_standard'), value: 'standard'},
                    {icon: 'Schemes-45', title: i18n.t('productArchive.filter_sidebar'), value: 'sidebar'},
                    {icon: 'Schemes-46', title: i18n.t('productArchive.filter_hidden'), value: 'hidden'},
                ],
                productArchiveFiltersStyleNative: [
                    {icon: 'Schemes-45', title: i18n.t('productArchive.filter_sidebar'), value: 'sidebar'},
                    {icon: 'Schemes-46', title: i18n.t('productArchive.filter_hidden'), value: 'hidden'},
                ],
                productArchiveFilterByCategoriesOrderBy: [
                    {label: i18n.t('productArchive.filter_name'), value: 'name'},
                    {label: i18n.t('productArchive.filter_term_order'), value: 'term_order'},
                ],
                productArchiveAnimationEffect: [
                    {label: i18n.t('productArchive.bounce'), value: 'bounce'},
                    {label: i18n.t('productArchive.move_up'), value: 'move-up'},
                    {label: i18n.t('productArchive.fade_in'), value: 'fade-in'},
                    {label: i18n.t('productArchive.fall_perspective'), value: 'fall-perspective'},
                    {label: i18n.t('productArchive.scale'), value: 'scale'},
                    {label: i18n.t('productArchive.flip'), value: 'flip'},
                ],
                productArchiveImageHoverEffectImage: [
                    {label: i18n.t('productArchive.effect_slide'), value: 'slide'},
                    {label: i18n.t('productArchive.effect_fade'), value: 'fade'},
                    {label: i18n.t('productArchive.effect_gradient'), value: 'gradient'},
                    {label: i18n.t('productArchive.effect_circular'), value: 'circular'},
                    {label: i18n.t('productArchive.effect_disabled'), value: 'disabled'},
                ],
                productArchiveImageHoverEffectPage: [
                    {label: i18n.t('productArchive.effect_slide'), value: 'slide'},
                    {label: i18n.t('productArchive.effect_fade'), value: 'fade'},
                    {label: i18n.t('productArchive.effect_disabled'), value: 'disabled'},
                ],
                productArchiveImageHoverEffectHover: [
                    {label: i18n.t('productArchive.effect_slide'), value: 'slide'},
                    {label: i18n.t('productArchive.effect_fade'), value: 'fade'},
                    {label: i18n.t('productArchive.effect_default'), value: 'default'},
                    {label: i18n.t('productArchive.effect_zooming_blur'), value: 'zooming-blur'},
                    {label: i18n.t('productArchive.effect_horizontal_sliding'), value: 'horizontal-sliding'},
                    {label: i18n.t('productArchive.effect_vertical_sliding'), value: 'vertical-sliding'},
                    {label: i18n.t('productArchive.effect_gradient'), value: 'gradient'},
                    {label: i18n.t('productArchive.effect_circular'), value: 'circular'},
                    {label: i18n.t('productArchive.effect_disabled'), value: 'disabled'},
                ],
                productArchiveImageHoverEffectFallback: [
                    {label: i18n.t('productArchive.effect_disabled'), value: 'disabled'},
                    {label: i18n.t('productArchive.effect_zooming'), value: 'zooming'},
                ],
                productArchiveCaptionPosition: [
                    {label: i18n.t('productArchive.right'), value: 'right'},
                    {label: i18n.t('productArchive.left'), value: 'left'},
                    {label: i18n.t('productArchive.zigzag'), value: 'zigzag'},
                ],
                productArchiveCaptionLayout: [
                    {label: i18n.t('productArchive.vertical'), value: 'vertical'},
                    {label: i18n.t('productArchive.inline'), value: 'inline'},
                ],
                productArchiveCaptionContainerPreset: [
                    {label: i18n.t('productArchive.transparent'), value: 'transparent'},
                    {label: i18n.t('productArchive.white'), value: 'white'},
                    {label: i18n.t('productArchive.gray'), value: 'gray'},
                    {label: i18n.t('productArchive.dark'), value: 'dark'},
                ],
                productArchiveCaptionContainerPresetHover: [
                    {label: i18n.t('productArchive.light_gradient'), value: 'light'},
                    {label: i18n.t('productArchive.dark_gradient'), value: 'dark'},
                    {label: i18n.t('productArchive.solid_transparent'), value: 'solid'},
                    {label: i18n.t('productArchive.transparent'), value: 'transparent'},
                ],
                productArchiveCaptionContainerAlignment: [
                    {icon:'align-objects-left', value:'left', tooltip:i18n.t('general.left')},
                    {icon:'align-objects-center', value:'center', tooltip:i18n.t('general.center')},
                    {icon:'align-objects-right', value:'right', tooltip:i18n.t('general.right')},
                ],
                sidebarPosition: [
                    {icon:'Schemes-23',title:i18n.t('settings.sidebar_left'),value:'left'},
                    {icon:'Schemes-22',title:i18n.t('settings.sidebar_right'),value:'right'}
                ],
                productPagination: [
                    {icon:'Schemes-13',title:i18n.t('settings.page_numbers'),value:'normal'},
                    {icon:'Schemes-14',title:i18n.t('settings.load_more'),value:'more'},
                    {icon:'Schemes-15',title:i18n.t('settings.infinite_scroll'),value:'scroll'}
                ]
            }
        },

        computed: {
            isWishlist() {
                return config.isWishlist;
            },

            productArchiveColumnsDesktop() {
                let layout = this.getOption('product_archive_content_width');
                let dataOptions = [
                    {label: i18n.t('productArchive.col-2x'), value: '2x'},
                    {label: i18n.t('productArchive.col-3x'), value: '3x'},
                    {label: i18n.t('productArchive.col-4x'), value: '4x'},
                    {label: i18n.t('productArchive.col-5x'), value: '5x'},
                    {label: i18n.t('productArchive.col-6x'), value: '6x'},
                    {label: i18n.t('productArchive.col-100%'), value: '100%'}
                ];

                if (layout === 'fullwidth') dataOptions.splice(-1,1);

                return dataOptions;
            },

            productArchiveBuilderCreateUrl(){
                return config.productArchiveBuilderCreateUrl
            },

            productArchiveBuilderImportUrl(){
                return config.productArchiveBuilderImportUrl
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
