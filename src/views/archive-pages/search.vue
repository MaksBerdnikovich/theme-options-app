<template>
    <div>
        <to-panel id="panel.layout">
            <to-panel-group :label-title="$t('panel.website_search_post_types')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.website_search_post_types') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-label>{{$t('search.post_type_products')}}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('website_search_post_type_products')" @input="setOption('website_search_post_type_products',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{$t('search.post_type_posts')}}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('website_search_post_type_posts')" @input="setOption('website_search_post_type_posts',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{$t('search.post_type_pages')}}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('website_search_post_type_pages')" @input="setOption('website_search_post_type_pages',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{$t('search.post_type_portfolio')}}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('website_search_post_type_portfolio')" @input="setOption('website_search_post_type_portfolio',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.search_layout') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.search_layout_type')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.archive_pages_search_layout_type') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('search_layout_type')" @input="setOption('search_layout_type',$event)" :options="searchLayoutType"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div v-if="getOption('search_layout_type') === 'grid'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.search_layout_type_grid')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_type_grid') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Blog_Layout_Type_Grid_Justified.png'},
                                {name: 'Blog_Layout_Type_Grid_Masonry.png'},
                                {name: 'Blog_Layout_Type_Grid_Metro.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-radio-icon :value="getOption('search_layout_type_grid')" @input="setOption('search_layout_type_grid',$event)" :options="searchLayoutTypeGrid"></to-radio-icon>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_skin')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_skin') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Blog_Layout_Skin_Classic.png'},
                                {name: 'Blog_Layout_Skin_Alternative.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('search_layout_skin')" @input="setOption('search_layout_skin',$event)" :options="searchLayoutSkin"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_columns')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_columns') }}
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{isDesktop,isTablet,isMobile}">
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('search_layout_columns_desktop')" @input="setOption('search_layout_columns_desktop',$event)" :options="searchLayoutColumnsDesktop"></to-select>
                                </div>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group v-if="getOption('search_layout_columns_desktop') === '100%'" :label-title="$t('panel.search_layout_columns_100')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_columns') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('search_layout_columns_100')" @input="setOption('search_layout_columns_100',$event)" :options="searchLayoutColumns100"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_gaps')" :responsive="true" :tablet="true" :mobile="false">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_gaps') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Blog_Layout_Gaps.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{isDesktop,isTablet}">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-block-label-slider-input v-if="isDesktop" :min="0" :max="150" unit="px" :value="getOption('search_layout_gaps_desktop')" @input="setOption('search_layout_gaps_desktop', $event)"/>
                                <to-block-label-slider-input v-if="isTablet" :min="0" :max="150" unit="px" :value="getOption('search_layout_gaps_tablet')" @input="setOption('search_layout_gaps_tablet', $event)"/>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_sorting')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_sorting') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Blog_Layout_Sorting_Control.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_sorting')" @input="setOption('search_layout_sorting', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_hover_effect')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_hover_effect') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('search_layout_hover_effect')" @input="setOption('search_layout_hover_effect',$event)" :options="searchLayoutHover"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('search_layout_skin') === 'alternative'" :label-title="$t('panel.search_layout_icon_on_hover')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_icon_on_hover') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_icon_on_hover')" @input="setOption('search_layout_icon_on_hover', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_post_type_indication')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_post_type_indication') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_post_type_indication')" @input="setOption('search_layout_post_type_indication', $event)"/>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="getOption('search_layout_type') === 'grid'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.search_layout_caption') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.search_layout_caption_position')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_position') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Blog_Layout_Caption_On_Image.png'},
                                {name: 'Blog_Layout_Caption_Below_Image.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('search_layout_caption_position')" @input="setOption('search_layout_caption_position',$event)" :options="searchLayoutCaptionPosition"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('search_layout_caption_position') === 'bellow'" :label-title="$t('panel.search_layout_caption_featured_image')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_featured_image') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_caption_featured_image')" @input="setOption('search_layout_caption_featured_image', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_caption_title')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_title') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_caption_title')" @input="setOption('search_layout_caption_title', $event)"/>
                            </div>
                            <div class="col-4" v-if="getOption('search_layout_caption_title') === '1'">
                                <to-label class="top-gap">{{$t('panel.search_layout_caption_title_preset')}}</to-label>
                                <to-select :value="getOption('search_layout_caption_title_preset')" @input="setOption('search_layout_caption_title_preset',$event)" :options="searchLayoutCaptionTitlePreset"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_caption_description')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_description') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_caption_description')" @input="setOption('search_layout_caption_description', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_caption_date')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_date') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_caption_date')" @input="setOption('search_layout_caption_date', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_caption_categories')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_categories') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_caption_categories')" @input="setOption('search_layout_caption_categories', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_caption_author')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_author') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_caption_author')" @input="setOption('search_layout_caption_author', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_caption_author_avatar')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_author_avatar') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_caption_author_avatar')" @input="setOption('search_layout_caption_author_avatar', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_caption_content_alignment')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_content_alignment') }}
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{isDesktop,isTablet,isMobile}">
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-auto">
                                    <to-radio-toggle v-if="isDesktop" :value="getOption('search_layout_caption_content_alignment_desktop')" @input="setOption('search_layout_caption_content_alignment_desktop', $event)" :options="searchLayoutCaptionContentAlignment"/>
                                    <to-radio-toggle v-if="isTablet" :value="getOption('search_layout_caption_content_alignment_tablet')" @input="setOption('search_layout_caption_content_alignment_tablet', $event)" :options="searchLayoutCaptionContentAlignment"/>
                                    <to-radio-toggle v-if="isMobile" :value="getOption('search_layout_caption_content_alignment_mobile')" @input="setOption('search_layout_caption_content_alignment_mobile', $event)" :options="searchLayoutCaptionContentAlignment"/>
                                </div>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group v-if="getOption('search_layout_caption_position') === 'bellow'" :label-title="$t('panel.search_layout_caption_container_preset')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_container_preset') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Blog_Layout_Caption_Container_Preset.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('search_layout_caption_container_preset')" @input="setOption('search_layout_caption_container_preset',$event)" :options="searchLayoutCaptionContainerPreset"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('search_layout_caption_position') === 'bellow' && getOption('search_layout_caption_container_preset') === 'transparent'" :label-title="$t('panel.search_layout_caption_container_bottom_border')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_container_bottom_border') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_caption_bottom_border')" @input="setOption('search_layout_caption_bottom_border', $event)"/>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="getOption('search_layout_type') === 'grid'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.search_layout_pagination') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.search_layout_pagination_items_per_page')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_pagination_items_per_page') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input type="number" :value="getOption('search_layout_pagination_items_per_page')" @input="setOption('search_layout_pagination_items_per_page', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_pagination')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_pagination') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_pagination')" @input="setOption('search_layout_pagination', $event)"/>
                    </div>
                </to-panel-group>

                <div v-if="getOption('search_layout_pagination') === '1'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.search_layout_pagination_type')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    <div v-html="$t('info.archive_pages_search_layout_pagination_type')"/>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('search_layout_pagination_type')" @input="setOption('search_layout_pagination_type',$event)" :options="searchLayoutPaginationType"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('search_layout_pagination_type') === 'loadmore'" :label-title="$t('panel.search_layout_load_more_text')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.archive_pages_search_layout_load_more_text') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-input :value="getOption('search_layout_load_more_text')" @input="setOption('search_layout_load_more_text',$event)" />
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('search_layout_pagination_type') === 'loadmore'" :label-title="$t('panel.search_layout_load_more_icon')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.archive_pages_search_layout_load_more_icon') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-3">
                                    <to-block-icon option-prefix="search_layout_load_more_icon"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('search_layout_pagination_type') === 'loadmore'" :label-title="$t('panel.search_layout_load_more_stretch')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.archive_pages_search_layout_load_more_stretch') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_load_more_stretch')" @input="setOption('search_layout_load_more_stretch', $event)"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('search_layout_pagination_type') === 'loadmore' && getOption('search_layout_load_more_stretch') !== '1'" :label-title="$t('panel.search_layout_load_more_separator')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.archive_pages_search_layout_load_more_separator') }}
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[
                                        {name: 'Blog_Layout_Load_More_Separator.png'},
                                    ]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_load_more_separator')" @input="setOption('search_layout_load_more_separator', $event)"/>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('search_layout_pagination_type') === 'loadmore'" :label-title="$t('panel.search_layout_load_more_spacing')" :responsive="true" :tablet="true">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.archive_pages_search_layout_load_more_spacing') }}
                                </div>
                            </div>
                        </template>
                        <template v-slot:default="{isDesktop,isTablet,isMobile}">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-block-label-slider-input v-if="isDesktop" :min="0" :max="300" unit="px" :value="getOption('search_layout_load_more_spacing_desktop')" @input="setOption('search_layout_load_more_spacing_desktop', $event)"/>
                                    <to-block-label-slider-input v-if="isTablet" :min="0" :max="300" unit="px" :value="getOption('search_layout_load_more_spacing_tablet')" @input="setOption('search_layout_load_more_spacing_tablet', $event)"/>
                                    <to-block-label-slider-input v-if="isMobile" :min="0" :max="300" unit="px" :value="getOption('search_layout_load_more_spacing_mobile')" @input="setOption('search_layout_load_more_spacing_mobile', $event)"/>
                                </div>
                            </div>
                        </template>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('search_layout_pagination_type') === 'loadmore'" :label-title="$t('panel.search_layout_load_more_btn_type')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.archive_pages_search_layout_load_more_btn_type') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('search_layout_load_more_btn_type')" @input="setOption('search_layout_load_more_btn_type',$event)" :options="searchLayoutLoadMoreBtnType"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('search_layout_pagination_type') === 'loadmore'" :label-title="$t('panel.search_layout_load_more_btn_size')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.archive_pages_search_layout_load_more_btn_size') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('search_layout_load_more_btn_size')" @input="setOption('search_layout_load_more_btn_size',$event)" :options="searchLayoutLoadMoreBtnSize"></to-select>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>

            <div v-if="getOption('search_layout_type') === 'grid' && isWooCommerce" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.search_layout_mixed_grids') }}</to-panel-subtitle>

                <to-panel-group>
                    <div class="to-changed-settings">
                        <to-alert
                            :title="$t('alert.search_layout_mixed_grids_part1')"
                            :titleLink="$t('alert.search_layout_mixed_grids_link')"
                            :titleAfterLink="$t('alert.search_layout_mixed_grids_part2')"
                            route="/woocommerce/product-layout-archive">
                        </to-alert>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_mixed_grids_items')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_mixed_grids_items') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input type="number" :value="getOption('search_layout_mixed_grids_items')" @input="setOption('search_layout_mixed_grids_items', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_mixed_grids_title')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_mixed_grids_title') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('search_layout_mixed_grids_title')" @input="setOption('search_layout_mixed_grids_title',$event)" />
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_mixed_grids_show_all')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_mixed_grids_show_all') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('search_layout_mixed_grids_show_all')" @input="setOption('search_layout_mixed_grids_show_all',$event)" />
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_mixed_grids_show_all_icon')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_mixed_grids_show_all_icon') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-3">
                                <to-block-icon option-prefix="search_layout_mixed_grids_show_all_icon"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_mixed_grids_show_all_stretch')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_mixed_grids_show_all_stretch') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_mixed_grids_show_all_stretch')" @input="setOption('search_layout_mixed_grids_show_all_stretch', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('search_layout_mixed_grids_show_all_stretch') !== '1'" :label-title="$t('panel.search_layout_mixed_grids_show_all_separator')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_mixed_grids_show_all_separator') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                        {name: 'Blog_Layout_Load_More_Separator.png'},
                                    ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_mixed_grids_show_all_separator')" @input="setOption('search_layout_mixed_grids_show_all_separator', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_mixed_grids_show_all_spacing')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_mixed_grids_show_all_spacing') }}
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{isDesktop,isTablet,isMobile}">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-block-label-slider-input v-if="isDesktop" :min="0" :max="300" unit="px" :value="getOption('search_layout_mixed_grids_show_all_spacing_desktop')" @input="setOption('search_layout_mixed_grids_show_all_spacing_desktop', $event)"/>
                                <to-block-label-slider-input v-if="isTablet" :min="0" :max="300" unit="px" :value="getOption('search_layout_mixed_grids_show_all_spacing_tablet')" @input="setOption('search_layout_mixed_grids_show_all_spacing_tablet', $event)"/>
                                <to-block-label-slider-input v-if="isMobile" :min="0" :max="300" unit="px" :value="getOption('search_layout_mixed_grids_show_all_spacing_mobile')" @input="setOption('search_layout_mixed_grids_show_all_spacing_mobile', $event)"/>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_mixed_grids_show_all_btn_type')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_mixed_grids_show_all_btn_type') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('search_layout_mixed_grids_show_all_btn_type')" @input="setOption('search_layout_mixed_grids_show_all_btn_type',$event)" :options="searchLayoutLoadMoreBtnType"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_mixed_grids_show_all_btn_size')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_mixed_grids_show_all_btn_size') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('search_layout_mixed_grids_show_all_btn_size')" @input="setOption('search_layout_mixed_grids_show_all_btn_size',$event)" :options="searchLayoutLoadMoreBtnSize"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="getOption('search_layout_type') === 'grid'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.search_layout_additional_options') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.search_layout_loading_animation')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_loading_animation') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_loading_animation')" @input="setOption('search_layout_loading_animation', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('search_layout_loading_animation') === '1'" :label-title="$t('panel.search_layout_animation_effect')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_animation_effect') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('search_layout_animation_effect')" @input="setOption('search_layout_animation_effect',$event)" :options="searchLayoutAnimationEffect"></to-select>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('search_layout_columns_desktop') !== '100%'" :label-title="$t('panel.search_layout_skeleton_loader')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_skeleton_loader') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_skeleton_loader')" @input="setOption('search_layout_skeleton_loader', $event)"/>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="getOption('search_layout_type') === 'list_01' || getOption('search_layout_type') === 'list_02'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.search_layout_columns')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_columns') }}
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{isDesktop,isTablet,isMobile}">
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('search_layout_list_columns')" @input="setOption('search_layout_list_columns',$event)" :options="searchLayoutListColumns"></to-select>
                                </div>
                            </div>
                        </div>
                    </template>
                </to-panel-group>
            </div>

            <div v-if="getOption('search_layout_type') === 'list_01' || getOption('search_layout_type') === 'list_02'" class="to-panel-separator">
                <to-panel-subtitle v-slot:label>{{ $t('panel.search_layout_caption') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.search_layout_caption_title')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_title') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_caption_title')" @input="setOption('search_layout_caption_title', $event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_caption_description')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_description') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_caption_description')" @input="setOption('search_layout_caption_description', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_caption_date')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_date') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_caption_date')" @input="setOption('search_layout_caption_date', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_caption_categories')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_categories') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_caption_categories')" @input="setOption('search_layout_caption_categories', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_caption_author')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_author') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_caption_author')" @input="setOption('search_layout_caption_author', $event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.search_layout_caption_author_avatar')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_layout_caption_author_avatar') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search_layout_caption_author_avatar')" @input="setOption('search_layout_caption_author_avatar', $event)"/>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.menu_and_header">
            <to-panel-group :label-title="$t('panel.global_settings_apply_search_header')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.archive_pages_search_custom_settings_for_header') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption('global_settings_apply_search_header')" @input="setOption('global_settings_apply_search_header',$event)"/>
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption('global_settings_apply_search_header') === '1'">
                <to-panel-subtitle v-slot:label>{{ $t('panel.general') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.header')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_header') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-auto">
                                <to-switch trueValue="0" falseValue="1" :value="getOption('search.effects_hide_header')" @input="setOption('search.effects_hide_header',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <div class="to-panel-separator" v-if="getOption('search.effects_hide_header') === '0'">
                    <to-panel-group :label-title="$t('panel.header_source')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    <div v-html="$t('info.archive_pages_search_header_source')"/>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption('search.header_source')" @input="setOption('search.header_source', $event)" :options="headerSource" v-on:right-button-clicked="showPreview($event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <div class="to-panel-separator" v-if="getOption('search.header_source') === 'default'">
                        <to-panel-subtitle v-slot:label>{{ $t('panel.menu') }}</to-panel-subtitle>

                        <to-panel-group :label-title="$t('panel.menu')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        <div v-html="$t('info.archive_pages_search_menu')"/>
                                    </div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-switch :value="getOption('search.menu_show')" @input="setOption('search.menu_show',$event)"/>
                                    </div>
                                </div>
                            </div>
                            <div v-if="getOption('search.menu_show') == 1" class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-3">
                                        <to-label>{{ $t('settings.menu_transparency') }}</to-label>
                                        <to-switch :value="getOption('search.header_transparent')" @input="setOption('search.header_transparent',$event)"/>
                                    </div>
                                    <div class="col-offset-3" v-if="getOption('search.header_transparent') == 1">
                                        <to-block-label-slider-input
                                            :label-title="$t('settings.menu_opacity')" :min="0" :max="100" unit="%"
                                            :value="getOption('search.header_opacity')"
                                            @input="setOption('search.header_opacity',$event)"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="to-changed-settings" v-if="getOption('search.header_transparent') == 1">
                                <div class="form-grid">
                                    <div class="col-1">
                                        <div class="to-alert">
                                            <div class="icon"><to-svg-icon name="info"/></div>
                                            <div class="text">
                                                <span>{{ $t('alert.menu_transparency_part1') }}</span>
                                                <router-link :to="'/single-pages/page/panel.style_alignment'">{{ $t('panel.title_area') }}</router-link>
                                                <span>{{ $t('general.or') }}</span>
                                                <router-link :to="'/single-pages/page/panel.main_content_area'">{{ $t('panel.content_area') }}</router-link>
                                                <span>{{ $t('alert.menu_transparency_part2') }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="getOption('search.menu_show') == 1" class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-label>{{ $t('settings.use_light_menu_logo') }}</to-label>
                                        <to-switch :value="getOption('search.header_menu_logo_light')" @input="setOption('search.header_menu_logo_light',$event)"/>
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group v-if="getOption('search.menu_show') == 0" :label-title="$t('panel.use_light_logo')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        {{ $t('info.archive_pages_search_use_ligth_logo') }}
                                    </div>
                                </div>
                            </template>
                            <to-switch :value="getOption('search.header_menu_logo_light')" @input="setOption('search.header_menu_logo_light',$event)"/>
                        </to-panel-group>

                        <to-panel-subtitle v-slot:label>{{ $t('panel.top_area') }}</to-panel-subtitle>

                        <to-panel-group :label-title="$t('panel.top_area')" :responsive="true" :tablet="true">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        {{ $t('info.archive_pages_search_top_area') }}
                                    </div>
                                </div>
                            </template>
                            <template v-slot:default="{isDesktop,isTablet,isMobile}">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-switch v-if="isDesktop" trueValue="0" falseValue="1" :value="getOption('search.header_hide_top_area')" @input="setOption('search.header_hide_top_area', $event)"/>
                                        <to-switch v-if="isTablet" trueValue="0" falseValue="1" :value="getOption('search.header_hide_top_area_tablet')" @input="setOption('search.header_hide_top_area_tablet', $event)"/>
                                        <to-switch v-if="isMobile" trueValue="0" falseValue="1" :value="getOption('search.header_hide_top_area_mobile')" @input="setOption('search.header_hide_top_area_mobile', $event)"/>
                                    </div>
                                </div>
                            </template>
                        </to-panel-group>

                        <to-panel-group v-if="getOption('search.header_hide_top_area') == 0 || getOption('search.header_hide_top_area_tablet') == 0 || getOption('search.header_hide_top_area_mobile') == 0" :label-title="$t('panel.top_area_options')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        {{ $t('info.archive_pages_search_top_area') }}
                                    </div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-3">
                                        <to-label>{{ $t('settings.top_area_transparency') }}</to-label>
                                        <to-switch trueValue="1" falseValue="0" :value="getOption('search.header_top_area_transparent')" @input="setOption('search.header_top_area_transparent', $event)"/>
                                    </div>
                                    <div class="col-offset-3" v-if="getOption('search.header_top_area_transparent') == 1">
                                        <to-label>{{ $t('settings.top_area_opacity') }}</to-label>
                                        <to-block-label-slider-input :min="0" :max="100" unit="%" :value="getOption('search.header_top_area_opacity')" @input="setOption('search.header_top_area_opacity', $event)"/>
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>
                    </div>

                    <div class="to-panel-separator" v-if="getOption('search.header_source') === 'builder'">
                        <to-panel-group :label-title="$t('panel.header_builder_template')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        <div v-html="$t('info.layout_header_builder_template')"/>
                                    </div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-2">
                                        <to-label>{{$t('headerBuilder.default_template')}}</to-label>
                                        <to-select
                                            :value="getOption('search.header_builder')"
                                            @input="setOption('search.header_builder', $event)"
                                            :options="headerBuilderTemplatesList"
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
                                        <to-link :href="headerBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                                    </div>
                                </div>
                            </div>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-2">
                                        <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                        <to-link :href="headerBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group :label-title="$t('panel.header_builder_sticky')" :responsive="true">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        <div v-html="$t('info.layout_header_sticky')"/>
                                    </div>
                                </div>
                            </template>
                            <template v-slot:default="{ isDesktop, isMobile }">
                                <div class="to-changed-settings">
                                    <div class="form-grid">
                                        <div class="col-4">
                                            <to-switch v-if="isDesktop" trueValue="1" falseValue="0" :value="getOption('search.header_builder_sticky_desktop')" @input="setOption('search.header_builder_sticky_desktop',$event)"/>
                                            <to-switch v-if="isMobile" trueValue="1" falseValue="0" :value="getOption('search.header_builder_sticky_mobile')" @input="setOption('search.header_builder_sticky_mobile',$event)"/>
                                        </div>
                                        <div class="col-4" v-if="isDesktop && getOption('search.header_builder_sticky_desktop') === '1'">
                                            <to-switch trueValue="1" falseValue="0" :trueValueTitle="$t('headerBuilder.hide_on_scroll')" :falseValueTitle="$t('headerBuilder.hide_on_scroll')" :value="getOption('search.header_builder_sticky_hide_desktop')" @input="setOption('search.header_builder_sticky_hide_desktop',$event)"/>
                                        </div>
                                        <div class="col-4" v-if="isMobile && getOption('search.header_builder_sticky_mobile') === '1'">
                                            <to-switch trueValue="1" falseValue="0" :trueValueTitle="$t('headerBuilder.hide_on_scroll')" :falseValueTitle="$t('headerBuilder.hide_on_scroll')" :value="getOption('search.header_builder_sticky_hide_mobile')" @input="setOption('search.header_builder_sticky_hide_mobile',$event)"/>
                                        </div>
                                    </div>
                                    <to-separator v-if="(isDesktop && getOption('search.header_builder_sticky_desktop') === '1') || (isMobile && getOption('search.header_builder_sticky_mobile') === '1')"></to-separator>
                                </div>
                                <div class="to-panel-separator" v-if="getOption('search.header_builder_sticky_desktop') === '1' || getOption('search.header_builder_sticky_mobile') === '1'">
                                    <div class="to-changed-settings">
                                        <div class="form-grid">
                                            <div class="col-2">
                                                <to-label>{{$t('headerBuilder.sticky_template')}}</to-label>
                                                <to-select
                                                    :value="getOption('search.header_builder_sticky')"
                                                    @input="setOption('search.header_builder_sticky', $event)"
                                                    :options="headerBuilderTemplatesList"
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
                                                <to-link :href="headerBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="to-changed-settings">
                                        <div class="form-grid">
                                            <div class="col-2">
                                                <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                                <to-link :href="headerBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="to-changed-settings">
                                        <div class="form-grid">
                                            <div class="col-2">
                                                <to-block-label-slider-input :value="getOption('search.header_builder_sticky_opacity')" @input="setOption('search.header_builder_sticky_opacity',$event)" :label-title="$t('headerBuilder.sticky_template_opacity')" :min="0" :max="100" unit="%"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </to-panel-group>

                        <to-panel-group :label-title="$t('panel.header_builder_overlap')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        <div v-html="$t('info.layout_header_overlap')"/>
                                    </div>
                                    <div class="gallery">
                                        <to-button-gallery :images="[{name:'Header_Builder_Overlap.png'}]">{{ $t('general.screenshot') }}</to-button-gallery>
                                    </div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-3">
                                        <to-switch :value="getOption('search.header_transparent')" @input="setOption('search.header_transparent',$event)"/>
                                    </div>
                                    <div class="col-2" v-if="getOption('search.header_transparent') === '1'">
                                        <to-block-label-slider-input :value="getOption('search.header_opacity')" @input="setOption('search.header_opacity',$event)" :label-title="$t('headerBuilder.header_opacity')" :min="0" :max="100" unit="%"/>
                                    </div>
                                </div>
                            </div>
                            <div class="to-changed-settings" v-if="getOption('search.header_transparent') === '1'">
                                <div class="form-grid">
                                    <div class="col-3">
                                        <to-label>{{ $t('headerBuilder.light_scheme') }}</to-label>
                                        <to-switch :value="getOption('search.header_menu_logo_light')" @input="setOption('search.header_menu_logo_light',$event)"/>
                                    </div>
                                    <div class="col-auto" v-if="getOption('search.header_menu_logo_light') === '1'">
                                        <to-color-picker :value="getOption('search.header_builder_light_color')" @input="setOption('search.header_builder_light_color',$event)" :label-title="$t('headerBuilder.light_scheme_color')"/>
                                    </div>
                                    <div class="col-auto" v-if="getOption('search.header_menu_logo_light') === '1'">
                                        <to-color-picker :value="getOption('search.header_builder_light_color_hover')" @input="setOption('search.header_builder_light_color_hover',$event)" :label-title="$t('headerBuilder.light_scheme_color_hover')"/>
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>
                    </div>
                </div>
            </div>
        </to-panel>

        <to-panel id="panel.title_area">
            <to-panel-group :label-title="$t('panel.global_settings_apply_search_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.archive_pages_search_custom_settings_for_title') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption('global_settings_apply_search_title')" @input="setOption('global_settings_apply_search_title',$event)"/>
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption('global_settings_apply_search_title') === '1'">
                <to-panel-subtitle v-slot:label>{{ $t('panel.general') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.title_area')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_title_area') }}
                            </div>
                        </div>
                    </template>

                    <to-switch :value="getOption('search.title_show')" @input="setOption('search.title_show', $event)"/>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.title_show') == 1" :label-title="$t('panel.title_area_type')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.archive_pages_search_type_of_title_area')"/>
                            </div>
                        </div>
                    </template>

                    <div class="to-changed-settings">
                        <to-radio-toggle :value="getOption('search.title_style')" @input="setOption('search.title_style', $event)" :options="titleStyleList"></to-radio-toggle>
                    </div>

                    <div class="to-panel-separator" v-if="getOption('search.title_style') == 2">
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-label>{{ $t('settings.custom_title') }}</to-label>
                                    <to-select
                                        :value="getOption('search.title_template')"
                                        @input="setOption('search.title_template',$event)"
                                        :options="customTitleList"
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
                                    <to-link :href="titleTemplateCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                                </div>
                            </div>
                        </div>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                    <to-link :href="titleTemplateImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.title_show') == 1" :label-title="$t('panel.breadcrumbs')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_breadcrumbs') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="0" falseValue="1" :value="getOption('search.title_breadcrumbs')" @input="setOption('search.title_breadcrumbs', $event)"/>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.title_show') == 1 && getOption('search.title_breadcrumbs') == 0" :label-title="$t('panel.breadcrumbs_settings')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_breadcrumbs_settings') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-auto">
                                <to-color-picker :value="getOption('search.breadcrumbs_default_color')" @input="setOption('search.breadcrumbs_default_color',$event)" :label-title="$t('colors.color_normal')"/>
                            </div>
                            <div class="col-auto">
                                <to-color-picker :value="getOption('search.breadcrumbs_active_color')" @input="setOption('search.breadcrumbs_active_color',$event)" :label-title="$t('colors.color_active')"/>
                            </div>
                            <div class="col-auto">
                                <to-color-picker :value="getOption('search.breadcrumbs_hover_color')" @input="setOption('search.breadcrumbs_hover_color',$event)" :label-title="$t('colors.color_hover')"/>
                            </div>
                            <div class="col-auto">
                                <to-label>{{ $t('settings.breadcrumbs_alignment') }}</to-label>
                                <to-radio-toggle :value="getOption('search.title_breadcrumbs_alignment')" @input="setOption('search.title_breadcrumbs_alignment', $event)" :options="breadcrumbsAlignment"/>
                            </div>
                            <div class="col-auto" v-if="isFutureMode">
                                <to-label>{{ $t('settings.breadcrumbs_delimiter') }}</to-label>
                                <to-radio-toggle :value="getOption('')" @input="setOption('',$event)" :options="breadcrumbsDelimiter"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.title_show') == 1 && getOption('search.title_style') == 2" :label-title="$t('panel.use_page_settings')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_title_area_general_settings') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="1" falseValue="0" :value="getOption('search.title_use_page_settings')" @input="setOption('search.title_use_page_settings', $event)"/>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.use_rich_content_title')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_title_area_title_excerpt_use_rich_content') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="1" falseValue="0" :value="getOption('search.title_rich_content')" @input="setOption('search.title_rich_content', $event)"/>
                </to-panel-group>

                <to-panel-group v-bind:class="'tmce-full'" v-if="getOption('search.title_rich_content') == 1">
                    <to-wysiwyg :value="getOption('search.title_content')" @input="setOption('search.title_content', $event)" :height="'120px'" ></to-wysiwyg>
                </to-panel-group>

                <to-panel-subtitle id="panel.style_alignment" v-if="getOption('search.title_show') == 1 && getOption('search.title_style') == 1" v-slot:label>{{ $t('panel.style_alignment') }}</to-panel-subtitle>
                <to-panel-subtitle v-if="getOption('search.title_show') == 1 && getOption('search.title_style') == 2 && getOption('search.title_use_page_settings') == 1" v-slot:label>{{ $t('panel.style') }}</to-panel-subtitle>

                <to-panel-group v-if="getOption('search.title_show') == 1 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.style_alignment_fullheight')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_fullheight') }}
                            </div>
                        </div>
                    </template>
                    <to-switch v-model="styleAlignmentFullheight"/>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.title_show') == 1 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.style_alignment_fullwidth')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_fullwidth') }}
                            </div>
                        </div>
                    </template>
                    <to-switch v-model="styleAlignmentFullwidth"/>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.title_show') == 1 && getOption('search.title_style') != 2" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.style_alignment_content_alignment')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_content_alignment') }}
                            </div>
                        </div>
                    </template>
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-label>{{ $t('settings.horizontal') }}</to-label>
                            <to-radio-toggle :value="getOption('search.title_alignment')" @input="setOption('search.title_alignment', $event)" :options="horizontalAlignList"/>
                        </div>
                        <div  v-if="isFutureMode" class="col-auto">
                            <to-label>{{ $t('settings.vertical') }}</to-label>
                            <to-radio-toggle :value="getOption('')" @input="setOption('', $event)" :options="verticalAlignList"/>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.title_show') == 1 && getOption('search.title_style') != 2" :label-title="$t('panel.style_alignment_padding')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_paddings') }}
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{isDesktop,isTablet,isMobile}">
                        <div class="to-changed-settings" v-if="isDesktop">
                            <to-block-padding option-prefix="search.title_padding"/>
                        </div>
                        <div class="to-changed-settings" v-if="isTablet">
                            <to-block-padding option-prefix="search.title_padding_tablet"/>
                        </div>
                        <div class="to-changed-settings" v-if="isMobile">
                            <to-block-padding option-prefix="search.title_padding_mobile"/>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.title_show') == 1 && getOption('search.title_style') != 2" :label-title="$t('panel.title_top_margin')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_title_top_margin') }}
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
                            <div class="col-2">
                                <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption('search.title_top_margin')" @input="setOption('search.title_top_margin', $event)"/>
                                <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption('search.title_top_margin_tablet')" @input="setOption('search.title_top_margin_tablet', $event)"/>
                                <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption('search.title_top_margin_mobile')" @input="setOption('search.title_top_margin_mobile', $event)"/>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.title_show') == 1 && getOption('search.title_style') != 2" :label-title="$t('panel.title_max_width')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_title_max_width') }}
                            </div>
                        </div>
                    </template>
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="1200" unit="px" :value="getOption('search.title_title_width')" @input="setOption('search.title_title_width', $event)"/>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.title_show') == 1 && getOption('search.title_style') != 2" :label-title="$t('panel.title_font_presets')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.title_area_style_alignment_title_font_preset')"/>
                            </div>
                        </div>
                    </template>

                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label>{{$t('font.html_tag')}}</to-label>
                                <to-select :value="getOption('search.title_font_preset_html')" @input="setOption('search.title_font_preset_html',$event)" :options="presetFontHtml"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.style')}}</to-label>
                                <to-select :value="getOption('search.title_font_preset_style')" @input="setOption('search.title_font_preset_style',$event)" :options="presetFontStyle"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.weight')}}</to-label>
                                <to-select :value="getOption('search.title_font_preset_weight')" @input="setOption('search.title_font_preset_weight',$event)" :options="presetFontWeight"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.transform')}}</to-label>
                                <to-select :value="getOption('search.title_font_preset_transform')" @input="setOption('search.title_font_preset_transform',$event)" :options="presetFontTransform"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.title_show') == 1 && getOption('search.title_style') != 2" :label-title="$t('panel.excerpt_top_margin')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_excerpt_top_margin') }}
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
                            <div class="col-2">
                                <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption('search.title_excerpt_top_margin')" @input="setOption('search.title_excerpt_top_margin', $event)"/>
                                <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption('search.title_excerpt_top_margin_tablet')" @input="setOption('search.title_excerpt_top_margin_tablet', $event)"/>
                                <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption('search.title_excerpt_top_margin_mobile')" @input="setOption('search.title_excerpt_top_margin_mobile', $event)"/>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.title_show') == 1 && getOption('search.title_style') != 2" :label-title="$t('panel.excerpt_max_width')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_excerpt_max_width') }}
                            </div>
                        </div>
                    </template>
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="1200" unit="px" :value="getOption('search.title_excerpt_width')" @input="setOption('search.title_excerpt_width', $event)"/>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.title_show') == 1 && getOption('search.title_style') != 2" :label-title="$t('panel.excerpt_font_presets')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.title_area_style_alignment_excerpt_font_preset')"/>
                            </div>
                        </div>
                    </template>

                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label>{{$t('font.html_tag')}}</to-label>
                                <to-select :value="getOption('search.title_excerpt_font_preset_html')" @input="setOption('search.title_excerpt_font_preset_html',$event)" :options="presetFontHtml"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.style')}}</to-label>
                                <to-select :value="getOption('search.title_excerpt_font_preset_style')" @input="setOption('search.title_excerpt_font_preset_style',$event)" :options="presetFontStyle"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.weight')}}</to-label>
                                <to-select :value="getOption('search.title_excerpt_font_preset_weight')" @input="setOption('search.title_excerpt_font_preset_weight',$event)" :options="presetFontWeight"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.transform')}}</to-label>
                                <to-select :value="getOption('search.title_excerpt_font_preset_transform')" @input="setOption('search.title_excerpt_font_preset_transform',$event)" :options="presetFontTransform"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="(getOption('search.title_show') == 1 && getOption('search.title_style') == 1) || (getOption('search.title_show') == 1 && getOption('search.title_style') == 2 && getOption('search.title_use_page_settings') == 1)" :label-title="$t('panel.style_alignment_title_color')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_title_color') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('search.title_text_color')" @input="setOption('search.title_text_color',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-subtitle v-if="(getOption('search.title_show') == 1 && getOption('search.title_style') == 1) || (getOption('search.title_show') == 1 && getOption('search.title_style') == 2 && getOption('search.title_use_page_settings') == 1)" v-slot:label>{{ $t('panel.background') }}</to-panel-subtitle>

                <to-panel-group v-if="(getOption('search.title_show') == 1 && getOption('search.title_style') == 1) || (getOption('search.title_show') == 1 && getOption('search.title_style') == 2 && getOption('search.title_use_page_settings') == 1)" :label-title="$t('panel.background_type')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_background_type') }}
                            </div>
                        </div>
                    </template>
                    <to-block-background optionPrefix="search.title_background" :tab-pattern="false" :showOverlay="true"/>
                </to-panel-group>

                <to-panel-group v-if="(getOption('search.title_show') == 1 && getOption('search.title_style') == 1 && getOption('search.title_background_type') === 'image') || (getOption('search.title_show') == 1 && getOption('search.title_style') == 2 && getOption('search.title_use_page_settings') == 1) && getOption('search.title_background_type') === 'image'" :label-title="$t('panel.background_effect')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_parallax_background') }}
                            </div>
                        </div>
                    </template>

                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-select :value="getOption('search.title_background_effect')" @input="setOption('search.title_background_effect',$event)" :options="titleBackgroundEffect"></to-select>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings" v-if="getOption('search.title_background_effect') === 'ken_burns'">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label>{{ $t('settings.kenburns_direction') }}</to-label>
                                <to-select :value="getOption('search.title_background_ken_burns_direction')" @input="setOption('search.title_background_ken_burns_direction',$event)" :options="titleBackgroundKenBurnsDirection"></to-select>
                            </div>
                            <div class="col-2">
                                <to-label>{{ $t('settings.kenburns_speed') }}</to-label>
                                <to-input :value="getOption('search.title_background_ken_burns_transition_speed')" @input="setOption('search.title_background_ken_burns_transition_speed',$event)"></to-input>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.content_and_sidebar">
            <to-panel-group :label-title="$t('panel.global_settings_apply_search_content')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.archive_pages_search_custom_settings_for_content') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption('global_settings_apply_search_content')" @input="setOption('global_settings_apply_search_content',$event)"/>
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption('global_settings_apply_search_content') === '1'">
                <to-panel-subtitle id="panel.main_content_area" v-slot:label>{{ $t('panel.main_content_area') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.body_background_type')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_content_background_type') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Content_Background_Type.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-block-background optionPrefix="search.main_background" :tab-video="false"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.top_padding')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_top_padding') }}
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
                            <div class="col-2">
                                <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption('search.content_padding_top')" @input="setOption('search.content_padding_top', $event)"/>
                                <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption('search.content_padding_top_tablet')" @input="setOption('search.content_padding_top_tablet', $event)"/>
                                <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption('search.content_padding_top_mobile')" @input="setOption('search.content_padding_top_mobile', $event)"/>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.bottom_padding')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_bottom_padding') }}
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
                            <div class="col-2">
                                <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption('search.content_padding_bottom')" @input="setOption('search.content_padding_bottom', $event)"/>
                                <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption('search.content_padding_bottom_tablet')" @input="setOption('search.content_padding_bottom_tablet', $event)"/>
                                <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption('search.content_padding_bottom_mobile')" @input="setOption('search.content_padding_bottom_mobile', $event)"/>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-subtitle v-slot:label>{{ $t('panel.sidebar') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.sidebar')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_sidebar') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="1" falseValue="0" :value="getOption('search.sidebar_show')" @input="setOption('search.sidebar_show', $event)"/>
                </to-panel-group>

                <to-panel-group v-bind:class="{'development-mob': isFutureMode}" v-if="getOption('search.sidebar_show') === '1'" :label-title="$t('panel.sidebar_style')" :responsive="isFutureMode">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_sidebar_style') }}
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{ isDesktop }">
                        <to-radio-icon v-if="isDesktop" :value="getOption('search.sidebar_position')" @input="setOption('search.sidebar_position',$event)" :options="sidebarPosition"></to-radio-icon>
                        <to-radio-icon v-if="!isDesktop" :value="getOption('')" @input="setOption('',$event)" :options="sidebarPosition"></to-radio-icon>
                    </template>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.sidebar_show') === '1'" :label-title="$t('panel.sidebar_sticky')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_sticky_sidebar') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="1" falseValue="0" :value="getOption('search.sidebar_sticky')" @input="setOption('search.sidebar_sticky', $event)"/>
                </to-panel-group>

                <to-panel-group v-if="getOption('page_default_sidebar')">
                    <div class="to-changed-settings">
                        <to-alert
                            :title="$t('alert.add_widgets_sidebar')"
                            :titleLink="$t('alert.add_widgets_footer_link')"
                            target="_blank"
                            :href="adminUrl('widgets.php')">
                        </to-alert>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.footer">
            <to-panel-group :label-title="$t('panel.global_settings_apply_search_footer')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.archive_pages_search_custom_settings_for_footer') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption('global_settings_apply_search_footer')" @input="setOption('global_settings_apply_search_footer',$event)"/>
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption('global_settings_apply_search_footer') === '1'">
                <to-panel-subtitle v-slot:label>{{ $t('panel.general') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.footer')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_footer') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="0" falseValue="1" :value="getOption('search.effects_hide_footer')" @input="setOption('search.effects_hide_footer',$event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.effects_hide_footer') == 0" :label-title="$t('panel.parallax')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_parallax') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch :value="getOption('search.effects_parallax_footer')" @input="setOption('search.effects_parallax_footer',$event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.effects_hide_footer') == 0 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.top_margin')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_top_margin') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-block-label-slider-input
                            :min="0" :max="100" unit="px"
                            :value="getOption('')"
                            @input="setOption('',$event)"
                        />
                    </div>
                </to-panel-group>

                <to-panel-subtitle v-if="getOption('search.effects_hide_footer') == 0" v-slot:label>{{ $t('panel.footer_widget') }}</to-panel-subtitle>

                <to-panel-group v-if="getOption('search.effects_hide_footer') == 0" :label-title="$t('panel.footer_widget')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_footer_widget_area') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="0" falseValue="1" :value="getOption('search.footer_hide_widget_area')" @input="setOption('search.footer_hide_widget_area', $event)"/>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.effects_hide_footer') == 0 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.footer_width')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_footer_widget_area_fullwidth') }}
                            </div>
                        </div>
                    </template>
                    <to-switch
                        :value="getOption('')"
                        @input="setOption('', $event)"
                    />

                </to-panel-group>

                <to-panel-group v-if="getOption('search.effects_hide_footer') == 0 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.grid_type')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_footer_widget_area_grid_type') }}
                            </div>
                        </div>
                    </template>
                    <to-radio-icon
                        :value="getOption('')"
                        @input="setOption('', $event)"
                        :options="footerGridType">
                    </to-radio-icon>

                </to-panel-group>

                <to-panel-group v-if="getOption('search.effects_hide_footer') == 0 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.padding')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_footer_widget_area_padding') }}
                            </div>
                        </div>
                    </template>
                    <to-block-padding option-prefix=""/>

                </to-panel-group>

                <to-panel-subtitle v-if="getOption('search.effects_hide_footer') == 0" v-slot:label>{{ $t('panel.bottom_area') }}</to-panel-subtitle>

                <to-panel-group v-if="getOption('search.effects_hide_footer') == 0" :label-title="$t('panel.bottom_area')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_bottom_area') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="0" falseValue="1" :value="getOption('search.footer_hide_default')" @input="setOption('search.footer_hide_default', $event)"/>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.effects_hide_footer') == 0 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.footer_width')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_bottom_area_footer_fullwidth') }}
                            </div>
                        </div>
                    </template>
                    <to-switch
                        :value="getOption('')"
                        @input="setOption('', $event)"
                    />

                </to-panel-group>

                <to-panel-group v-if="getOption('search.effects_hide_footer') == 0 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.padding')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_bottom_area_padding') }}
                            </div>
                        </div>
                    </template>
                    <to-block-padding option-prefix=""/>

                </to-panel-group>

                <to-panel-subtitle v-if="getOption('search.effects_hide_footer') == 0" v-slot:label>{{ $t('panel.custom_footer') }}</to-panel-subtitle>

                <to-panel-group v-if="getOption('search.effects_hide_footer') == 0" :label-title="$t('panel.custom_footer')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.footer_custom_footer') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="1" falseValue="0" :value="getOption('search.footer_custom_show')" @input="setOption('search.footer_custom_show', $event)"/>
                </to-panel-group>

                <to-panel-group v-if="getOption('search.effects_hide_footer') == 0 && getOption('search.footer_custom_show') == 1" :label-title="$t('panel.custom_footer_select')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_select_custom_footer') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select
                                    :value="getOption('search.footer_custom')"
                                    @input="setOption('search.footer_custom', $event)"
                                    :options="customFooterList"
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
                                <to-link :href="footerTemplateCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                <to-link :href="footerTemplateImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.extras">
            <to-panel-group :label-title="$t('panel.global_settings_apply_search_extras')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.archive_pages_search_custom_settings_for_extras') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption('global_settings_apply_search_extras')" @input="setOption('global_settings_apply_search_extras',$event)"/>
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption('global_settings_apply_search_extras') === '1'">
                <to-panel-subtitle v-slot:label>{{ $t('panel.preloader') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.preloader_enabled')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_page_preloader') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption('search.enable_page_preloader')" @input="setOption('search.enable_page_preloader',$event)"/>
                    </div>
                </to-panel-group>

                <to-panel-subtitle v-slot:label>{{ $t('panel.lazy_load') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.lazy_load')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.archive_pages_search_lazy_loading') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="0" falseValue="1" :value="getOption('search.effects_disabled')" @input="setOption('search.effects_disabled',$event)"/>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.popups">
            <to-panel-group :label-title="$t('panel.popups')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info"><div v-html="$t('info.popups_layout_source_search')"/></div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('popups_layout_source_search')" @input="setOption('popups_layout_source_search',$event)" :options="popupsLayoutSource"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption('popups_layout_source_search') === 'custom'">
                <template v-for="popup in getOption('thegemPopupsSearch')">
                    <to-panel-group :label-title="$t('popups.popups_add')" v-bind:key="popup.key + '_1'">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">{{ $t('info.popups_add_new') }}</div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch
                                :value="getPopupOption(popup, 'active')"
                                @input="setPopupOption(popup, 'active', $event)"
                            />
                        </div>
                    </to-panel-group>

                    <div class="to-panel-separator next-of-type" v-if="getPopupOption(popup, 'active')" v-bind:key="popup.key + '_2'">
                        <to-panel-group :label-title="$t('popups.popups_template')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div v-html="$t('info.popups_template')"/>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-2">
                                        <to-label>{{$t('popups.template')}}</to-label>
                                        <to-select
                                            :value="getPopupOption(popup, 'template')"
                                            @input="setPopupOption(popup, 'template', $event)"
                                            :options="popupsTemplatesList"
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
                                        <to-link :href="popupsCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                                    </div>
                                </div>
                            </div>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-2">
                                        <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                        <to-link :href="popupsImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group :label-title="$t('popups.popups_triggers')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div v-html="$t('info.popups_triggers')"/>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <to-block-popups-trigger
                                    :value="getPopupOption(popup, 'triggers')"
                                    @input="setPopupOption(popup, 'triggers', $event)"
                                />
                            </div>
                        </to-panel-group>

                        <to-panel-subtitle v-slot:label>{{ $t('popups.popups_additional_options') }}</to-panel-subtitle>

                        <to-panel-group :label-title="$t('popups.cookie')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">{{ $t('info.popups_cookie') }}</div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-2">
                                        <to-label>{{$t('popups.cookie_time')}}</to-label>
                                        <to-input
                                            :value="getPopupOption(popup, 'cookie_time')"
                                            @input="setPopupOption(popup, 'cookie_time', $event)"
                                        />
                                    </div>
                                    <div class="col-4 aside--bottom">
                                        <to-button
                                            icon="restore" type="systems" style="min-width: 150px;"
                                            v-on:click="resetPopupsCookie(popup)">
                                            {{$t('button.reset_cookie')}}
                                        </to-button>
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group :label-title="$t('popups.show_after_x_page_views')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">{{ $t('info.popups_show_after_x_page_views') }}</div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-4">
                                        <to-switch
                                            :value="getPopupOption(popup, 'show_after_x_page_views')"
                                            @input="setPopupOption(popup, 'show_after_x_page_views', $event)"
                                        />
                                    </div>
                                    <div class="col-4" v-if="getPopupOption(popup, 'show_after_x_page_views')">
                                        <to-label>{{$t('popups.show_page_views')}}</to-label>
                                        <to-input
                                            :value="getPopupOption(popup, 'show_page_views')"
                                            @input="setPopupOption(popup, 'show_page_views', $event)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group :label-title="$t('popups.show_up_to_x_times')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">{{ $t('info.popups_show_up_to_x_times') }}</div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-4">
                                        <to-switch
                                            :value="getPopupOption(popup, 'show_up_to_x_times')"
                                            @input="setPopupOption(popup, 'show_up_to_x_times', $event)"
                                        />
                                    </div>
                                    <div class="col-4" v-if="getPopupOption(popup, 'show_up_to_x_times')">
                                        <to-label>{{$t('popups.show_popup_count')}}</to-label>
                                        <to-input
                                            :value="getPopupOption(popup, 'show_popup_count')"
                                            @input="setPopupOption(popup, 'show_popup_count', $event)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group :label-title="$t('popups.hide_for_logged_in_users')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">{{ $t('info.popups_hide_for_logged_in_users') }}</div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-switch
                                            :value="getPopupOption(popup, 'hide_for_logged_in_users')"
                                            @input="setPopupOption(popup, 'hide_for_logged_in_users', $event)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group :label-title="$t('popups.show_on_devices')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">{{ $t('info.popups_show_on_devices') }}</div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-3">
                                        <to-label>{{$t('popups.show_on_mobile')}}</to-label>
                                        <to-switch
                                            :value="getPopupOption(popup, 'show_on_mobile')"
                                            @input="setPopupOption(popup, 'show_on_mobile', $event)"
                                        />
                                    </div>
                                    <div class="col-3">
                                        <to-label>{{$t('popups.show_on_tablet')}}</to-label>
                                        <to-switch
                                            :value="getPopupOption(popup, 'show_on_tablet')"
                                            @input="setPopupOption(popup, 'show_on_tablet', $event)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group :label-title="$t('popups.images_preloading')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">{{ $t('info.popups_images_preloading') }}</div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-switch
                                            :value="getPopupOption(popup, 'images_preloading')"
                                            @input="setPopupOption(popup, 'images_preloading', $event)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-separator />
                    </div>
                </template>
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
            let headerBuilderTemplatesList = JSON.parse(JSON.stringify(config.headerBuilderTemplates));
            for(let item of headerBuilderTemplatesList) {
                if (item.preview) {
                    item.rightButton = {icon: 'eye'};
                }

                if (item.edit) {
                    item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
                }
            }

            let customTitleList = JSON.parse(JSON.stringify(config.customTitles));
            for(let item of customTitleList) {
                if (item.preview) {
                    item.rightButton = {icon: 'eye'};
                }

                if (item.edit) {
                    item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
                }
            }

            let customFooterList = JSON.parse(JSON.stringify(config.customFooters));
            for(let item of customFooterList) {
                if (item.preview) {
                    item.rightButton = {icon: 'eye'};
                }

                if (item.edit) {
                    item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
                }
            }

            const popupsTemplatesList = JSON.parse(JSON.stringify(config.popupsTemplates));
            for(let item of popupsTemplatesList) {
                if (item.preview) {
                    item.rightButton = {icon: 'eye'};
                }

                if (item.edit) {
                    item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
                }
            }

            return {
                headerBuilderTemplatesList,
                customTitleList,
                customFooterList,
                popupsTemplatesList,
                searchLayoutType: [
                    {label: i18n.t('searchLayout.type_default'), value: 'default'},
                    {label: i18n.t('searchLayout.type_grid'), value: 'grid'},
                    //{label: i18n.t('searchLayout.type_list_01'), value: 'list_01'},
                    //{label: i18n.t('searchLayout.type_list_02'), value: 'list_02'},
                ],
                searchLayoutTypeGrid: [
                    {icon: 'Schemes-41', title: i18n.t('searchLayout.grid_justified'), value: 'justified'},
                    {icon: 'Schemes-42', title: i18n.t('searchLayout.grid_masonry'), value: 'masonry'},
                    {icon: 'Schemes-43', title: i18n.t('searchLayout.grid_metro'), value: 'metro'},
                ],
                searchLayoutSkin: [
                    {label: i18n.t('searchLayout.skin_classic'), value: 'classic'},
                    {label: i18n.t('searchLayout.skin_alternative'), value: 'alternative'},
                ],
                searchLayoutColumnsDesktop: [
                    {label: i18n.t('searchLayout.col-2x'), value: '2x'},
                    {label: i18n.t('searchLayout.col-3x'), value: '3x'},
                    {label: i18n.t('searchLayout.col-4x'), value: '4x'},
                    {label: i18n.t('searchLayout.col-100%'), value: '100%'},
                ],
                searchLayoutColumnsTablet: [
                    {label: i18n.t('searchLayout.col-2x'), value: '2x'},
                    {label: i18n.t('searchLayout.col-3x'), value: '3x'},
                    {label: i18n.t('searchLayout.col-4x'), value: '4x'},
                ],
                searchLayoutColumnsMobile: [
                    {label: i18n.t('searchLayout.col-1x'), value: '1x'},
                    {label: i18n.t('searchLayout.col-2x'), value: '2x'},
                ],
                searchLayoutListColumns: [
                    {label: i18n.t('searchLayout.col-1x'), value: '1x'},
                    {label: i18n.t('searchLayout.col-2x'), value: '2x'},
                ],
                searchLayoutColumns100: [
                    {label: i18n.t('searchLayout.col-4'), value: '4'},
                    {label: i18n.t('searchLayout.col-5'), value: '5'},
                    {label: i18n.t('searchLayout.col-6'), value: '6'},
                ],
                searchLayoutCaptionPosition: [
                    {label: i18n.t('searchLayout.caption_bellow_image'), value: 'bellow'},
                    {label: i18n.t('searchLayout.caption_on_image'), value: 'on_image'},
                ],
                searchLayoutCaptionTitlePreset: [
                    {label: i18n.t('searchLayout.caption_title_h5'), value: 'h5'},
                    {label: i18n.t('searchLayout.caption_title_h6'), value: 'h6'},
                ],
                searchLayoutCaptionContentAlignment: [
                    {icon:'align-objects-left', value:'left', tooltip:i18n.t('general.left')},
                    {icon:'align-objects-center', value:'center', tooltip:i18n.t('general.center')},
                    {icon:'align-objects-right', value:'right', tooltip:i18n.t('general.right')},
                ],
                searchLayoutCaptionContainerPreset: [
                    {label: i18n.t('searchLayout.caption_container_transparent'), value: 'transparent'},
                    {label: i18n.t('searchLayout.caption_container_white'), value: 'white'},
                    {label: i18n.t('searchLayout.caption_container_gray'), value: 'gray'},
                    {label: i18n.t('searchLayout.caption_container_dark'), value: 'dark'},
                ],
                searchLayoutPaginationType: [
                    {label: i18n.t('searchLayout.pagination_numbers'), value: 'normal'},
                    {label: i18n.t('searchLayout.pagination_more'), value: 'loadmore'},
                    {label: i18n.t('searchLayout.pagination_scroll'), value: 'scroll'},
                ],
                searchLayoutLoadMoreBtnType: [
                    {label: i18n.t('searchLayout.loadmore_type_flat'), value: 'flat'},
                    {label: i18n.t('searchLayout.loadmore_type_outline'), value: 'outline'},
                ],
                searchLayoutLoadMoreBtnSize: [
                    {label: i18n.t('searchLayout.loadmore_size_small'), value: 'small'},
                    {label: i18n.t('searchLayout.loadmore_size_medium'), value: 'medium'},
                    {label: i18n.t('searchLayout.loadmore_size_large'), value: 'large'},
                ],
                searchLayoutAnimationEffect: [
                    {label: i18n.t('searchLayout.animation_bounce'), value: 'bounce'},
                    {label: i18n.t('searchLayout.animation_move_up'), value: 'move-up'},
                    {label: i18n.t('searchLayout.animation_fade_in'), value: 'fade-in'},
                    {label: i18n.t('searchLayout.animation_fall_perspective'), value: 'fall-perspective'},
                    {label: i18n.t('searchLayout.animation_scale'), value: 'scale'},
                    {label: i18n.t('searchLayout.animation_flip'), value: 'flip'},
                ],
                headerSource: [
                    {label: i18n.t('headerBuilder.header_default'), value: 'default'},
                    {label: i18n.t('headerBuilder.header_builder'), value: 'builder'},
                ],
                titleStyleList: [
                    {icon:'services', title:i18n.t('general.default_title'), value:'1'},
                    {icon:'add-row', title:i18n.t('general.custom_title'), value:'2'},
                ],
                breadcrumbsAlignment: [
                    {icon:'align-objects-left', value:'left', tooltip:i18n.t('general.left')},
                    {icon:'align-objects-center', value:'center', tooltip:i18n.t('general.center')},
                    {icon:'align-objects-right', value:'right', tooltip:i18n.t('general.right')},
                ],
                breadcrumbsDelimiter: [
                    {icon:'arrow-bullet-right',tooltip:i18n.t('general.left'),value:'1'},
                    {icon:'line',tooltip:i18n.t('general.center'),value:'2'},
                    {icon:'right-arrow',tooltip:i18n.t('general.right'),value:'3'},
                    {icon:'more',tooltip:i18n.t('general.right'),value:'4'},
                    {icon:'circle-small',tooltip:i18n.t('general.right'),value:'5'},
                ],
                horizontalAlignList: [
                    {icon:'align-objects-left', value:'left', tooltip:i18n.t('general.left')},
                    {icon:'align-objects-center', value:'center', tooltip:i18n.t('general.center')},
                    {icon:'align-objects-right', value:'right', tooltip:i18n.t('general.right')},
                ],
                verticalAlignList: [
                    {icon:'align-objects-top',value:'1',tooltip:i18n.t('general.left')},
                    {icon:'align-objects-centerY',value:'2',tooltip:i18n.t('general.center')},
                    {icon:'align-objects-bottom',value:'3',tooltip:i18n.t('general.right')},
                ],
                sidebarPosition: [
                    {icon:'Schemes-23',title:i18n.t('settings.sidebar_left'),value:'left'},
                    {icon:'Schemes-22',title:i18n.t('settings.sidebar_right'),value:'right'}
                ],
                footerGridType: [
                    {icon:'Schemes-05',title:'3x',value:'3x'},
                    {icon:'Schemes-06',title:'4x',value:'4x'},
                    {icon:'Schemes-07',title:'5x',value:'5x'}
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
                optimizer: config.optimizer,
                popupsLayoutSource: [
                    {label: i18n.t('general.default_settings'), value: 'default'},
                    {label: i18n.t('general.custom_settings'), value: 'custom'},
                    {label: i18n.t('general.disabled'), value: 'disabled'},
                ],
            }
        },

        computed: {
            headerBuilderCreateUrl(){
                return config.headerBuilderCreateUrl
            },

            headerBuilderImportUrl(){
                return config.headerBuilderImportUrl
            },

            titleTemplateCreateUrl(){
                return config.titleTemplateCreateUrl
            },

            titleTemplateImportUrl(){
                return config.titleTemplateImportUrl
            },

            footerTemplateCreateUrl(){
                return config.footerTemplateCreateUrl
            },

            footerTemplateImportUrl(){
                return config.footerTemplateImportUrl
            },

            isWooCommerce() {
                return config.isWooCommerce;
            },

            searchLayoutHover() {
                let hovers = [
                    {label: i18n.t('searchLayout.hover_default'), value: 'default'},
                    {label: i18n.t('searchLayout.hover_zooming_blur'), value: 'zooming_blur'},
                    {label: i18n.t('searchLayout.hover_horizontal_sliding'), value: 'horizontal_sliding'},
                    {label: i18n.t('searchLayout.hover_vertical_sliding'), value: 'vertical_sliding'},
                    {label: i18n.t('searchLayout.hover_gradient'), value: 'gradient'},
                    {label: i18n.t('searchLayout.hover_circular'), value: 'circular'},
                ];
                let captionPosition = this.getOption('search_layout_caption_position');

                if (captionPosition === 'bellow') {
                    hovers.push({label: i18n.t('searchLayout.hover_simple_zoom'), value: 'simple_zoom'})
                }

                return hovers;
            },

            popupsCreateUrl(){
                return config.popupsCreateUrl
            },

            popupsImportUrl(){
                return config.popupsImportUrl
            },
        },

        methods: {
            showPreview(item) {
                window.open(item.preview,'_blank');
            },

            showEditPage(item) {
                window.open(item.edit,'_blank');
            },

            getPopupOption(popup, option) {
                return this.getOption('thegemPopupsSearch.' + popup.key + '.' + option);
            },

            setPopupOption(popup, option, value) {
                this.setOption('thegemPopupsSearch.' + popup.key + '.' + option, value);
                this.autoAddNewPopup();
            },

            autoAddNewPopup() {
                let popups = this.getOption('thegemPopupsSearch');
                let lastIdx = popups.length-1;

                if (lastIdx<0 || popups[lastIdx].active) {
                    popups.push({
                        active: '',
                        template: '',
                        triggers: {},
                        show_after_x_page_views: '',
                        show_page_views: '2',
                        show_up_to_x_times: '',
                        show_popup_count: '1',
                        cookie_time: '30',
                        hide_for_logged_in_users: '',
                        show_on_mobile: '',
                        show_on_tablet: '',
                        images_preloading: '',
                        id: `thegem-popup-${Math.floor(Date.now() * Math.random())}`,
                        key: lastIdx < 0 ? 0 : (popups[lastIdx].key + 1),
                    });
                    this.setOption('thegemPopupsSearch', popups);
                }
            },

            resetPopupsCookie(popup) {
                this.setPopupOption(popup, 'id', `thegem-popup-${Math.floor(Date.now() * Math.random())}`)

                this.$modal.confirm({
                    title: this.$t('popups.cookie'),
                    htmlMessage: this.$t('popups.reset_cookie_confirm')
                }).then( (result) => {
                    if (result) {
                        this.$store.dispatch('save');
                    }
                });
            },
        },

        mounted() {
            this.autoAddNewPopup();
        }
    })
</script>
