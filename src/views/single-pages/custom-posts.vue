<template>
    <div>
        <to-panel id="panel.layout">
            <to-panel-group :label-title="$t('panel.apply_all_existing_post')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.single_pages_post_custom_apply_on_all_existing_posts') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-3">
                            <to-button
                                icon="static-views" type="systems"
                                :processing="getExtra('page_settings_applying')"
                                v-on:click="$store.dispatch('extra/applyPageSettings',{'pt': postType, 'gr': 'layout', 'msg': 'custom_posts'})">
                                {{$t('apply.apply_now')}}
                            </to-button>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.post_layout_custom') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.post_layout_source')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.single_pages_post_custom_layout_source')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption(postType + '.' + 'post_layout_source')" @input="setOption(postType + '.' + 'post_layout_source', $event)" :options="postLayoutSource"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div v-if="getOption(postType + '.' + 'post_layout_source') === 'builder'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.post_custom_builder_template')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.single_pages_post_custom_builder_template')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label>{{$t('postLayout.select_template')}}</to-label>
                                <to-select
                                    :value="getOption(postType + '.' + 'post_builder_template')"
                                    @input="setOption(postType + '.' + 'post_builder_template', $event)"
                                    :options="postBuilderTemplatesList"
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
                                <to-link :href="postBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                <to-link :href="postBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.menu_and_header">
            <to-panel-group :label-title="$t('panel.global_settings_apply_post')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.single_pages_post_custom_global_settings_for_all_posts') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption(postType + '.' + 'global_settings_apply_header')" @input="setOption(postType + '.' + 'global_settings_apply_header',$event)"/>
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption(postType + '.' + 'global_settings_apply_header')">
                <to-panel-group :label-title="$t('panel.apply_all_existing_post')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_apply_on_all_existing_posts') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-3">
                                <to-button
                                    icon="static-views" type="systems"
                                    :processing="getExtra('page_settings_applying')"
                                    v-on:click="$store.dispatch('extra/applyPageSettings',{'pt': postType, 'gr': 'header', 'msg': 'custom_posts'})">
                                    {{$t('apply.apply_now')}}
                                </to-button>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-subtitle v-slot:label>{{ $t('panel.general') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.header')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_header') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-auto">
                                <to-switch trueValue="0" falseValue="1" :value="getOption(postType + '.' + 'effects_hide_header')" @input="setOption(postType + '.' + 'effects_hide_header',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <div class="to-panel-separator" v-if="getOption(postType + '.' + 'effects_hide_header') === '0'">
                    <to-panel-group :label-title="$t('panel.header_source')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    <div v-html="$t('info.single_pages_post_custom_header_source')"/>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select :value="getOption(postType + '.' + 'header_source')" @input="setOption(postType + '.' + 'header_source', $event)" :options="headerSource" v-on:right-button-clicked="showPreview($event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <div class="to-panel-separator" v-if="getOption(postType + '.' + 'header_source') === 'default'">
                        <to-panel-subtitle v-slot:label>{{ $t('panel.menu') }}</to-panel-subtitle>

                        <to-panel-group :label-title="$t('panel.menu')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        <div v-html="$t('info.single_pages_post_custom_menu')"/>
                                    </div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-switch :value="getOption(postType + '.' + 'menu_show')" @input="setOption(postType + '.' + 'menu_show',$event)"/>
                                    </div>
                                </div>
                            </div>
                            <div v-if="getOption(postType + '.' + 'menu_show') == 1" class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-3">
                                        <to-label>{{ $t('settings.menu_transparency') }}</to-label>
                                        <to-switch :value="getOption(postType + '.' + 'header_transparent')" @input="setOption(postType + '.' + 'header_transparent',$event)"/>
                                    </div>
                                    <div class="col-offset-3" v-if="getOption(postType + '.' + 'header_transparent') == 1">
                                        <to-block-label-slider-input
                                            :label-title="$t('settings.menu_opacity')" :min="0" :max="100" unit="%"
                                            :value="getOption(postType + '.' + 'header_opacity')"
                                            @input="setOption(postType + '.' + 'header_opacity',$event)"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="to-changed-settings" v-if="getOption(postType + '.' + 'header_transparent') == 1">
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
                            <div v-if="getOption(postType + '.' + 'menu_show') == 1" class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-label>{{ $t('settings.use_light_menu_logo') }}</to-label>
                                        <to-switch :value="getOption(postType + '.' + 'header_menu_logo_light')" @input="setOption(postType + '.' + 'header_menu_logo_light',$event)"/>
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group v-if="getOption(postType + '.' + 'menu_show') == 0" :label-title="$t('panel.use_light_logo')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        {{ $t('info.single_pages_post_custom_use_ligth_logo') }}
                                    </div>
                                </div>
                            </template>
                            <to-switch :value="getOption(postType + '.' + 'header_menu_logo_light')" @input="setOption(postType + '.' + 'header_menu_logo_light',$event)"/>
                        </to-panel-group>

                        <to-panel-subtitle v-slot:label>{{ $t('panel.top_area') }}</to-panel-subtitle>

                        <to-panel-group :label-title="$t('panel.top_area')" :responsive="true" :tablet="true">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        {{ $t('info.single_pages_post_custom_top_area') }}
                                    </div>
                                </div>
                            </template>
                            <template v-slot:default="{isDesktop,isTablet,isMobile}">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-switch v-if="isDesktop" trueValue="0" falseValue="1" :value="getOption(postType + '.' + 'header_hide_top_area')" @input="setOption(postType + '.' + 'header_hide_top_area', $event)"/>
                                        <to-switch v-if="isTablet" trueValue="0" falseValue="1" :value="getOption(postType + '.' + 'header_hide_top_area_tablet')" @input="setOption(postType + '.' + 'header_hide_top_area_tablet', $event)"/>
                                        <to-switch v-if="isMobile" trueValue="0" falseValue="1" :value="getOption(postType + '.' + 'header_hide_top_area_mobile')" @input="setOption(postType + '.' + 'header_hide_top_area_mobile', $event)"/>
                                    </div>
                                </div>
                            </template>
                        </to-panel-group>

                        <to-panel-group v-if="getOption(postType + '.' + 'header_hide_top_area') == 0 || getOption(postType + '.' + 'header_hide_top_area_tablet') == 0 || getOption(postType + '.' + 'header_hide_top_area_mobile') == 0" :label-title="$t('panel.top_area_options')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        {{ $t('info.single_pages_post_custom_top_area') }}
                                    </div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-3">
                                        <to-label>{{ $t('settings.top_area_transparency') }}</to-label>
                                        <to-switch trueValue="1" falseValue="0" :value="getOption(postType + '.' + 'header_top_area_transparent')" @input="setOption(postType + '.' + 'header_top_area_transparent', $event)"/>
                                    </div>
                                    <div class="col-offset-3" v-if="getOption(postType + '.' + 'header_top_area_transparent') == 1">
                                        <to-label>{{ $t('settings.top_area_opacity') }}</to-label>
                                        <to-block-label-slider-input :min="0" :max="100" unit="%" :value="getOption(postType + '.' + 'header_top_area_opacity')" @input="setOption(postType + '.' + 'header_top_area_opacity', $event)"/>
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>
                    </div>

                    <div class="to-panel-separator" v-if="getOption(postType + '.' + 'header_source') === 'builder'">
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
                                            :value="getOption(postType + '.' + 'header_builder')"
                                            @input="setOption(postType + '.' + 'header_builder', $event)"
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
                                            <to-switch v-if="isDesktop" trueValue="1" falseValue="0" :value="getOption(postType + '.' + 'header_builder_sticky_desktop')" @input="setOption(postType + '.' + 'header_builder_sticky_desktop',$event)"/>
                                            <to-switch v-if="isMobile" trueValue="1" falseValue="0" :value="getOption(postType + '.' + 'header_builder_sticky_mobile')" @input="setOption(postType + '.' + 'header_builder_sticky_mobile',$event)"/>
                                        </div>
                                        <div class="col-4" v-if="isDesktop && getOption(postType + '.' + 'header_builder_sticky_desktop') === '1'">
                                            <to-switch trueValue="1" falseValue="0" :trueValueTitle="$t('headerBuilder.hide_on_scroll')" :falseValueTitle="$t('headerBuilder.hide_on_scroll')" :value="getOption(postType + '.' + 'header_builder_sticky_hide_desktop')" @input="setOption(postType + '.' + 'header_builder_sticky_hide_desktop',$event)"/>
                                        </div>
                                        <div class="col-4" v-if="isMobile && getOption(postType + '.' + 'header_builder_sticky_mobile') === '1'">
                                            <to-switch trueValue="1" falseValue="0" :trueValueTitle="$t('headerBuilder.hide_on_scroll')" :falseValueTitle="$t('headerBuilder.hide_on_scroll')" :value="getOption(postType + '.' + 'header_builder_sticky_hide_mobile')" @input="setOption(postType + '.' + 'header_builder_sticky_hide_mobile',$event)"/>
                                        </div>
                                    </div>
                                    <to-separator v-if="(isDesktop && getOption(postType + '.' + 'header_builder_sticky_desktop') === '1') || (isMobile && getOption(postType + '.' + 'header_builder_sticky_mobile') === '1')"></to-separator>
                                </div>
                                <div class="to-panel-separator" v-if="getOption(postType + '.' + 'header_builder_sticky_desktop') === '1' || getOption(postType + '.' + 'header_builder_sticky_mobile') === '1'">
                                    <div class="to-changed-settings">
                                        <div class="form-grid">
                                            <div class="col-2">
                                                <to-label>{{$t('headerBuilder.sticky_template')}}</to-label>
                                                <to-select
                                                    :value="getOption(postType + '.' + 'header_builder_sticky')"
                                                    @input="setOption(postType + '.' + 'header_builder_sticky', $event)"
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
                                                <to-block-label-slider-input :value="getOption(postType + '.' + 'header_builder_sticky_opacity')" @input="setOption(postType + '.' + 'header_builder_sticky_opacity',$event)" :label-title="$t('headerBuilder.sticky_template_opacity')" :min="0" :max="100" unit="%"/>
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
                                        <to-switch :value="getOption(postType + '.' + 'header_transparent')" @input="setOption(postType + '.' + 'header_transparent',$event)"/>
                                    </div>
                                    <div class="col-2" v-if="getOption(postType + '.' + 'header_transparent') === '1'">
                                        <to-block-label-slider-input :value="getOption(postType + '.' + 'header_opacity')" @input="setOption(postType + '.' + 'header_opacity',$event)" :label-title="$t('headerBuilder.header_opacity')" :min="0" :max="100" unit="%"/>
                                    </div>
                                </div>
                            </div>
                            <div class="to-changed-settings" v-if="getOption(postType + '.' + 'header_transparent') === '1'">
                                <div class="form-grid">
                                    <div class="col-3">
                                        <to-label>{{ $t('headerBuilder.light_scheme') }}</to-label>
                                        <to-switch :value="getOption(postType + '.' + 'header_menu_logo_light')" @input="setOption(postType + '.' + 'header_menu_logo_light',$event)"/>
                                    </div>
                                    <div class="col-auto" v-if="getOption(postType + '.' + 'header_menu_logo_light') === '1'">
                                        <to-color-picker :value="getOption(postType + '.' + 'header_builder_light_color')" @input="setOption(postType + '.' + 'header_builder_light_color',$event)" :label-title="$t('headerBuilder.light_scheme_color')"/>
                                    </div>
                                    <div class="col-auto" v-if="getOption(postType + '.' + 'header_menu_logo_light') === '1'">
                                        <to-color-picker :value="getOption(postType + '.' + 'header_builder_light_color_hover')" @input="setOption(postType + '.' + 'header_builder_light_color_hover',$event)" :label-title="$t('headerBuilder.light_scheme_color_hover')"/>
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>
                    </div>
                </div>
            </div>
        </to-panel>

        <to-panel id="panel.title_area">
            <to-panel-group :label-title="$t('panel.global_settings_apply_post')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.single_pages_post_custom_global_settings_for_all_posts') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption(postType + '.' + 'global_settings_apply_title')" @input="setOption(postType + '.' + 'global_settings_apply_title',$event)"/>
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption(postType + '.' + 'global_settings_apply_title')">
                <to-panel-group :label-title="$t('panel.apply_all_existing_post')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_apply_on_all_existing_posts') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-3">
                                <to-button
                                    icon="static-views" type="systems"
                                    :processing="getExtra('page_settings_applying')"
                                    v-on:click="$store.dispatch('extra/applyPageSettings',{'pt': postType, 'gr': 'title', 'msg': 'custom_posts'})">
                                    {{$t('apply.apply_now')}}
                                </to-button>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-subtitle v-slot:label>{{ $t('panel.general') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.title_area')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_title_area') }}
                            </div>
                        </div>
                    </template>

                    <to-switch :value="getOption(postType + '.' + 'title_show')" @input="setOption(postType + '.' + 'title_show', $event)"/>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'title_show') == 1" :label-title="$t('panel.title_area_type')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.single_pages_post_custom_type_of_title_area')"/>
                            </div>
                        </div>
                    </template>

                    <div class="to-changed-settings">
                        <to-radio-toggle :value="getOption(postType + '.' + 'title_style')" @input="setOption(postType + '.' + 'title_style', $event)" :options="titleStyleList"></to-radio-toggle>
                    </div>

                    <div class="to-panel-separator" v-if="getOption(postType + '.' + 'title_style') == 2">
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-label>{{ $t('settings.custom_title') }}</to-label>
                                    <to-select
                                        :value="getOption(postType + '.' + 'title_template')"
                                        @input="setOption(postType + '.' + 'title_template',$event)"
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

                <to-panel-group v-if="getOption(postType + '.' + 'title_show') == 1" :label-title="$t('panel.breadcrumbs')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_breadcrumbs') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="0" falseValue="1" :value="getOption(postType + '.' + 'title_breadcrumbs')" @input="setOption(postType + '.' + 'title_breadcrumbs', $event)"/>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_breadcrumbs') == 0" :label-title="$t('panel.breadcrumbs_settings')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_breadcrumbs_settings') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-auto">
                                <to-color-picker :value="getOption(postType + '.' + 'breadcrumbs_default_color')" @input="setOption(postType + '.' + 'breadcrumbs_default_color',$event)" :label-title="$t('colors.color_normal')"/>
                            </div>
                            <div class="col-auto">
                                <to-color-picker :value="getOption(postType + '.' + 'breadcrumbs_active_color')" @input="setOption(postType + '.' + 'breadcrumbs_active_color',$event)" :label-title="$t('colors.color_active')"/>
                            </div>
                            <div class="col-auto">
                                <to-color-picker :value="getOption(postType + '.' + 'breadcrumbs_hover_color')" @input="setOption(postType + '.' + 'breadcrumbs_hover_color',$event)" :label-title="$t('colors.color_hover')"/>
                            </div>
                            <div class="col-auto">
                                <to-label>{{ $t('settings.breadcrumbs_alignment') }}</to-label>
                                <to-radio-toggle :value="getOption(postType + '.' + 'title_breadcrumbs_alignment')" @input="setOption(postType + '.' + 'title_breadcrumbs_alignment', $event)" :options="breadcrumbsAlignment"/>
                            </div>
                            <div class="col-auto" v-if="isFutureMode">
                                <to-label>{{ $t('settings.breadcrumbs_delimiter') }}</to-label>
                                <to-radio-toggle :value="getOption(postType + '.' + '')" @input="setOption(postType + '.' + '',$event)" :options="breadcrumbsDelimiter"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') == 2" :label-title="$t('panel.use_page_settings')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_title_area_general_settings') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="1" falseValue="0" :value="getOption(postType + '.' + 'title_use_page_settings')" @input="setOption(postType + '.' + 'title_use_page_settings', $event)"/>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.use_rich_content_title')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_title_area_title_excerpt_use_rich_content') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="1" falseValue="0" :value="getOption(postType + '.' + 'title_rich_content')" @input="setOption(postType + '.' + 'title_rich_content', $event)"/>
                </to-panel-group>

                <to-panel-group v-bind:class="'tmce-full'" v-if="getOption(postType + '.' + 'title_rich_content') == 1">
                    <to-wysiwyg :value="getOption(postType + '.' + 'title_content')" @input="setOption(postType + '.' + 'title_content', $event)" :height="'120px'" ></to-wysiwyg>
                </to-panel-group>

                <to-panel-subtitle id="panel.style_alignment" v-if="getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') == 1" v-slot:label>{{ $t('panel.style_alignment') }}</to-panel-subtitle>
                <to-panel-subtitle v-if="getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') == 2 && getOption(postType + '.' + 'title_use_page_settings') == 1" v-slot:label>{{ $t('panel.style') }}</to-panel-subtitle>

                <to-panel-group v-if="getOption(postType + '.' + 'title_show') == 1 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.style_alignment_fullheight')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_fullheight') }}
                            </div>
                        </div>
                    </template>
                    <to-switch v-model="styleAlignmentFullheight"/>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'title_show') == 1 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.style_alignment_fullwidth')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_fullwidth') }}
                            </div>
                        </div>
                    </template>
                    <to-switch v-model="styleAlignmentFullwidth"/>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') != 2" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.style_alignment_content_alignment')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_content_alignment') }}
                            </div>
                        </div>
                    </template>
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-label>{{ $t('settings.horizontal') }}</to-label>
                            <to-radio-toggle :value="getOption(postType + '.' + 'title_alignment')" @input="setOption(postType + '.' + 'title_alignment', $event)" :options="horizontalAlignList"/>
                        </div>
                        <div  v-if="isFutureMode" class="col-auto">
                            <to-label>{{ $t('settings.vertical') }}</to-label>
                            <to-radio-toggle :value="getOption(postType + '.' + '')" @input="setOption(postType + '.' + '', $event)" :options="verticalAlignList"/>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') != 2" :label-title="$t('panel.style_alignment_padding')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_paddings') }}
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{isDesktop,isTablet,isMobile}">
                        <div class="to-changed-settings" v-if="isDesktop">
                            <to-block-padding :option-prefix="postType + '.' + 'title_padding'"/>
                        </div>
                        <div class="to-changed-settings" v-if="isTablet">
                            <to-block-padding :option-prefix="postType + '.' + 'title_padding_tablet'"/>
                        </div>
                        <div class="to-changed-settings" v-if="isMobile">
                            <to-block-padding :option-prefix="postType + '.' + 'title_padding_mobile'"/>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') != 2" :label-title="$t('panel.title_top_margin')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_title_top_margin') }}
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
                                <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption(postType + '.' + 'title_top_margin')" @input="setOption(postType + '.' + 'title_top_margin', $event)"/>
                                <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption(postType + '.' + 'title_top_margin_tablet')" @input="setOption(postType + '.' + 'title_top_margin_tablet', $event)"/>
                                <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption(postType + '.' + 'title_top_margin_mobile')" @input="setOption(postType + '.' + 'title_top_margin_mobile', $event)"/>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') != 2" :label-title="$t('panel.title_max_width')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_title_max_width') }}
                            </div>
                        </div>
                    </template>
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="1200" unit="px" :value="getOption(postType + '.' + 'title_title_width')" @input="setOption(postType + '.' + 'title_title_width', $event)"/>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') != 2" :label-title="$t('panel.title_font_presets')">
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
                                <to-select :value="getOption(postType + '.' + 'title_font_preset_html')" @input="setOption(postType + '.' + 'title_font_preset_html',$event)" :options="presetFontHtml"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.style')}}</to-label>
                                <to-select :value="getOption(postType + '.' + 'title_font_preset_style')" @input="setOption(postType + '.' + 'title_font_preset_style',$event)" :options="presetFontStyle"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.weight')}}</to-label>
                                <to-select :value="getOption(postType + '.' + 'title_font_preset_weight')" @input="setOption(postType + '.' + 'title_font_preset_weight',$event)" :options="presetFontWeight"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.transform')}}</to-label>
                                <to-select :value="getOption(postType + '.' + 'title_font_preset_transform')" @input="setOption(postType + '.' + 'title_font_preset_transform',$event)" :options="presetFontTransform"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') != 2" :label-title="$t('panel.excerpt_top_margin')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_excerpt_top_margin') }}
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
                                <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption(postType + '.' + 'title_excerpt_top_margin')" @input="setOption(postType + '.' + 'title_excerpt_top_margin', $event)"/>
                                <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption(postType + '.' + 'title_excerpt_top_margin_tablet')" @input="setOption(postType + '.' + 'title_excerpt_top_margin_tablet', $event)"/>
                                <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption(postType + '.' + 'title_excerpt_top_margin_mobile')" @input="setOption(postType + '.' + 'title_excerpt_top_margin_mobile', $event)"/>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') != 2" :label-title="$t('panel.excerpt_max_width')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_excerpt_max_width') }}
                            </div>
                        </div>
                    </template>
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="1200" unit="px" :value="getOption(postType + '.' + 'title_excerpt_width')" @input="setOption(postType + '.' + 'title_excerpt_width', $event)"/>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') != 2" :label-title="$t('panel.excerpt_font_presets')">
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
                                <to-select :value="getOption(postType + '.' + 'title_excerpt_font_preset_html')" @input="setOption(postType + '.' + 'title_excerpt_font_preset_html',$event)" :options="presetFontHtml"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.style')}}</to-label>
                                <to-select :value="getOption(postType + '.' + 'title_excerpt_font_preset_style')" @input="setOption(postType + '.' + 'title_excerpt_font_preset_style',$event)" :options="presetFontStyle"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.weight')}}</to-label>
                                <to-select :value="getOption(postType + '.' + 'title_excerpt_font_preset_weight')" @input="setOption(postType + '.' + 'title_excerpt_font_preset_weight',$event)" :options="presetFontWeight"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.transform')}}</to-label>
                                <to-select :value="getOption(postType + '.' + 'title_excerpt_font_preset_transform')" @input="setOption(postType + '.' + 'title_excerpt_font_preset_transform',$event)" :options="presetFontTransform"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="(getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') == 1) || (getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') == 2 && getOption(postType + '.' + 'title_use_page_settings') == 1)" :label-title="$t('panel.style_alignment_title_color')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_title_text_color') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption(postType + '.' + 'title_text_color')" @input="setOption(postType + '.' + 'title_text_color',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="(getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') == 1) || (getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') == 2 && getOption(postType + '.' + 'title_use_page_settings') == 1)" :label-title="$t('panel.style_alignment_excerpt_color')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_excerpt_text_color') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption(postType + '.' + 'title_excerpt_text_color')" @input="setOption(postType + '.' + 'title_excerpt_text_color',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-subtitle v-if="(getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') == 1) || (getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') == 2 && getOption(postType + '.' + 'title_use_page_settings') == 1)" v-slot:label>{{ $t('panel.background') }}</to-panel-subtitle>

                <to-panel-group v-if="(getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') == 1) || (getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') == 2 && getOption(postType + '.' + 'title_use_page_settings') == 1)" :label-title="$t('panel.background_type')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_background_type') }}
                            </div>
                        </div>
                    </template>
                    <to-block-background :optionPrefix="postType + '.' + 'title_background'" :tab-pattern="false" :showOverlay="true"/>
                </to-panel-group>

                <to-panel-group v-if="(getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') == 1 && getOption(postType + '.' + 'title_background_type') === 'image') || (getOption(postType + '.' + 'title_show') == 1 && getOption(postType + '.' + 'title_style') == 2 && getOption(postType + '.' + 'title_use_page_settings') == 1) && getOption(postType + '.' + 'title_background_type') === 'image'" :label-title="$t('panel.background_effect')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_parallax_background') }}
                            </div>
                        </div>
                    </template>

                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-select :value="getOption(postType + '.' + 'title_background_effect')" @input="setOption(postType + '.' + 'title_background_effect',$event)" :options="titleBackgroundEffect"></to-select>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings" v-if="getOption(postType + '.' + 'title_background_effect') === 'ken_burns'">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label>{{ $t('settings.kenburns_direction') }}</to-label>
                                <to-select :value="getOption(postType + '.' + 'title_background_ken_burns_direction')" @input="setOption(postType + '.' + 'title_background_ken_burns_direction',$event)" :options="titleBackgroundKenBurnsDirection"></to-select>
                            </div>
                            <div class="col-2">
                                <to-label>{{ $t('settings.kenburns_speed') }}</to-label>
                                <to-input :value="getOption(postType + '.' + 'title_background_ken_burns_transition_speed')" @input="setOption(postType + '.' + 'title_background_ken_burns_transition_speed',$event)"></to-input>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.content_and_sidebar" v-if="getOption(postType + '.' + 'post_layout_source') === 'default'">
            <to-panel-group :label-title="$t('panel.global_settings_apply_post')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.single_pages_post_custom_global_settings_for_all_posts') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption(postType + '.' + 'global_settings_apply_content')" @input="setOption(postType + '.' + 'global_settings_apply_content',$event)"/>
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption(postType + '.' + 'global_settings_apply_content')">
                <to-panel-group :label-title="$t('panel.apply_all_existing_post')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_apply_on_all_existing_posts') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-3">
                                <to-button
                                    icon="static-views" type="systems"
                                    :processing="getExtra('page_settings_applying')"
                                    v-on:click="$store.dispatch('extra/applyPageSettings',{'pt': postType, 'gr': 'content', 'msg': 'custom_posts'})">
                                    {{$t('apply.apply_now')}}
                                </to-button>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-subtitle id="panel.main_content_area" v-slot:label>{{ $t('panel.main_content_area') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.body_background_type')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_content_background_type') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Content_Background_Type.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-block-background :optionPrefix="postType + '.' + 'main_background'" :tab-video="false"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.top_padding')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_top_padding') }}
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
                                <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption(postType + '.' + 'content_padding_top')" @input="setOption(postType + '.' + 'content_padding_top', $event)"/>
                                <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption(postType + '.' + 'content_padding_top_tablet')" @input="setOption(postType + '.' + 'content_padding_top_tablet', $event)"/>
                                <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption(postType + '.' + 'content_padding_top_mobile')" @input="setOption(postType + '.' + 'content_padding_top_mobile', $event)"/>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.bottom_padding')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_bottom_padding') }}
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
                                <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption(postType + '.' + 'content_padding_bottom')" @input="setOption(postType + '.' + 'content_padding_bottom', $event)"/>
                                <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption(postType + '.' + 'content_padding_bottom_tablet')" @input="setOption(postType + '.' + 'content_padding_bottom_tablet', $event)"/>
                                <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption(postType + '.' + 'content_padding_bottom_mobile')" @input="setOption(postType + '.' + 'content_padding_bottom_mobile', $event)"/>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-subtitle v-slot:label>{{ $t('panel.sidebar') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.sidebar')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_sidebar') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="1" falseValue="0" :value="getOption(postType + '.' + 'sidebar_show')" @input="setOption(postType + '.' + 'sidebar_show', $event)"/>
                </to-panel-group>

                <to-panel-group v-bind:class="{'development-mob': isFutureMode}" v-if="getOption(postType + '.' + 'sidebar_show') === '1'" :label-title="$t('panel.sidebar_style')" :responsive="isFutureMode">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_sidebar_style') }}
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{ isDesktop }">
                        <to-radio-icon v-if="isDesktop" :value="getOption(postType + '.' + 'sidebar_position')" @input="setOption(postType + '.' + 'sidebar_position',$event)" :options="sidebarPosition"></to-radio-icon>
                        <to-radio-icon v-if="!isDesktop" :value="getOption(postType + '.' + '')" @input="setOption(postType + '.' + '',$event)" :options="sidebarPosition"></to-radio-icon>
                    </template>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'sidebar_show') === '1'" :label-title="$t('panel.sidebar_sticky')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_sticky_sidebar') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="1" falseValue="0" :value="getOption(postType + '.' + 'sidebar_sticky')" @input="setOption(postType + '.' + 'sidebar_sticky', $event)"/>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'page_default_sidebar')">
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
            <to-panel-group :label-title="$t('panel.global_settings_apply_post')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.single_pages_post_custom_global_settings_for_all_posts') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption(postType + '.' + 'global_settings_apply_footer')" @input="setOption(postType + '.' + 'global_settings_apply_footer',$event)"/>
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption(postType + '.' + 'global_settings_apply_footer')">
                <to-panel-group :label-title="$t('panel.apply_all_existing_post')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_apply_on_all_existing_posts') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-3">
                                <to-button
                                    icon="static-views" type="systems"
                                    :processing="getExtra('page_settings_applying')"
                                    v-on:click="$store.dispatch('extra/applyPageSettings',{'pt': postType, 'gr': 'footer', 'msg': 'custom_posts'})">
                                    {{$t('apply.apply_now')}}
                                </to-button>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-subtitle v-slot:label>{{ $t('panel.general') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.footer')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom__footer') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="0" falseValue="1" :value="getOption(postType + '.' + 'effects_hide_footer')" @input="setOption(postType + '.' + 'effects_hide_footer',$event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'effects_hide_footer') == 0" :label-title="$t('panel.parallax')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_parallax') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch :value="getOption(postType + '.' + 'effects_parallax_footer')" @input="setOption(postType + '.' + 'effects_parallax_footer',$event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'effects_hide_footer') == 0 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.top_margin')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_top_margin') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-block-label-slider-input
                            :min="0" :max="100" unit="px"
                            :value="getOption(postType + '.' + '')"
                            @input="setOption(postType + '.' + '',$event)"
                        />
                    </div>
                </to-panel-group>

                <to-panel-subtitle v-if="getOption(postType + '.' + 'effects_hide_footer') == 0" v-slot:label>{{ $t('panel.footer_widget') }}</to-panel-subtitle>

                <to-panel-group v-if="getOption(postType + '.' + 'effects_hide_footer') == 0" :label-title="$t('panel.footer_widget')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_footer_widget_area') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="0" falseValue="1" :value="getOption(postType + '.' + 'footer_hide_widget_area')" @input="setOption(postType + '.' + 'footer_hide_widget_area', $event)"/>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'effects_hide_footer') == 0 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.footer_width')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_footer_widget_area_fullwidth') }}
                            </div>
                        </div>
                    </template>
                    <to-switch :value="getOption(postType + '.' + '')" @input="setOption(postType + '.' + '', $event)"/>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'effects_hide_footer') == 0 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.grid_type')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_footer_widget_area_grid_type') }}
                            </div>
                        </div>
                    </template>
                    <to-radio-icon :value="getOption(postType + '.' + '')" @input="setOption(postType + '.' + '', $event)" :options="footerGridType"></to-radio-icon>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'effects_hide_footer') == 0 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.padding')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_footer_widget_area_padding') }}
                            </div>
                        </div>
                    </template>
                    <to-block-padding option-prefix=""/>
                </to-panel-group>

                <to-panel-subtitle v-if="getOption(postType + '.' + 'effects_hide_footer') == 0" v-slot:label>{{ $t('panel.bottom_area') }}</to-panel-subtitle>

                <to-panel-group v-if="getOption(postType + '.' + 'effects_hide_footer') == 0" :label-title="$t('panel.bottom_area')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_bottom_area') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="0" falseValue="1" :value="getOption(postType + '.' + 'footer_hide_default')" @input="setOption(postType + '.' + 'footer_hide_default', $event)"/>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'effects_hide_footer') == 0 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.footer_width')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_bottom_area_footer_fullwidth') }}
                            </div>
                        </div>
                    </template>
                    <to-switch :value="getOption(postType + '.' + '')" @input="setOption(postType + '.' + '', $event)"/>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'effects_hide_footer') == 0 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.padding')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_bottom_area_padding') }}
                            </div>
                        </div>
                    </template>
                    <to-block-padding option-prefix=""/>
                </to-panel-group>

                <to-panel-subtitle v-if="getOption(postType + '.' + 'effects_hide_footer') == 0" v-slot:label>{{ $t('panel.custom_footer') }}</to-panel-subtitle>

                <to-panel-group v-if="getOption(postType + '.' + 'effects_hide_footer') == 0" :label-title="$t('panel.custom_footer')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.footer_custom_footer') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="1" falseValue="0" :value="getOption(postType + '.' + 'footer_custom_show')" @input="setOption(postType + '.' + 'footer_custom_show', $event)"/>
                </to-panel-group>

                <to-panel-group v-if="getOption(postType + '.' + 'effects_hide_footer') == 0 && getOption(postType + '.' + 'footer_custom_show') == 1" :label-title="$t('panel.custom_footer_select')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_select_custom_footer') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select
                                    :value="getOption(postType + '.' + 'footer_custom')"
                                    @input="setOption(postType + '.' + 'footer_custom', $event)"
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
            <to-panel-group :label-title="$t('panel.global_settings_apply_post')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.single_pages_post_custom_global_settings_for_all_posts') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption(postType + '.' + 'global_settings_apply_extras')" @input="setOption(postType + '.' + 'global_settings_apply_extras',$event)"/>
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption(postType + '.' + 'global_settings_apply_extras')">
                <to-panel-group :label-title="$t('panel.apply_all_existing_post')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_apply_on_all_existing_posts') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-3">
                                <to-button
                                    icon="static-views" type="systems"
                                    :processing="getExtra('page_settings_applying')"
                                    v-on:click="$store.dispatch('extra/applyPageSettings',{'pt': postType, 'gr': 'extras', 'msg': 'custom_posts'})">
                                    {{$t('apply.apply_now')}}
                                </to-button>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-subtitle v-slot:label>{{ $t('panel.preloader') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.preloader_enabled')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_page_preloader') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="1" falseValue="0" :value="getOption(postType + '.' + 'enable_page_preloader')" @input="setOption(postType + '.' + 'enable_page_preloader',$event)"/>
                    </div>
                </to-panel-group>

                <to-panel-subtitle v-slot:label>{{ $t('panel.lazy_load') }}</to-panel-subtitle>

                <to-panel-group :label-title="$t('panel.lazy_load')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.single_pages_post_custom_lazy_loading') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch trueValue="0" falseValue="1" :value="getOption(postType + '.' + 'effects_disabled')" @input="setOption(postType + '.' + 'effects_disabled',$event)"/>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.custom_fields">
            <to-panel-group :label-title="$t('panel.custom_fields_add')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.single_pages_custom_fields_add')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption(postType + '.' + 'custom_fields')" @input="setOption(postType + '.' + 'custom_fields',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.custom_fields_data')" v-if="getOption(postType + '.' + 'custom_fields')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.single_pages_custom_fields_data')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-custom-fields :postType="postType" :value="getOption(postType + '.' + 'custom_fields_data')" @input="setOption(postType + '.' + 'custom_fields_data', $event)" />
                </div>
            </to-panel-group>
        </to-panel>

        <!--
        <to-panel id="panel.post_builder">
            <to-panel-group :label-title="$t('panel.post_builder_preview_post')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.single_pages_post_custom_builder_preview_product') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select
                                :value="getOption(postType + '.' + 'single_post_builder_preview_post')"
                                @input="setOption(postType + '.' + 'single_post_builder_preview_post', $event)"
                                :options="postBuilderPreviewList"
                                v-on:right-button-clicked="showPreview($event)"
                            />
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>
        -->
    </div>
</template>

<script>
import {addHelpers} from '@/services/helper';
import i18n from '@/services/i18n';
import config from '@/services/config';

export default addHelpers({
    data() {
        const postBuilderTemplatesList = JSON.parse(JSON.stringify(config.postBuilderTemplates));
        for(let item of postBuilderTemplatesList) {
            if (item.preview) {
                item.rightButton = {icon: 'eye'};
            }

            if (item.edit) {
                item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
            }
        }

        const postBuilderPreviewList = JSON.parse(JSON.stringify(config.postBuilderPreviewList));
        for(let item of postBuilderPreviewList) {
            if (item.preview && item.preview !== '') {
                item.rightButton = {icon: 'eye'};
            }
        }

        const headerBuilderTemplatesList = JSON.parse(JSON.stringify(config.headerBuilderTemplates));
        for(let item of headerBuilderTemplatesList) {
            if (item.preview) {
                item.rightButton = {icon: 'eye'};
            }

            if (item.edit) {
                item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
            }
        }

        const customTitleList = JSON.parse(JSON.stringify(config.customTitles));
        for(let item of customTitleList) {
            if (item.preview) {
                item.rightButton = {icon: 'eye'};
            }

            if (item.edit) {
                item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
            }
        }

        const customFooterList = JSON.parse(JSON.stringify(config.customFooters));
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
            postBuilderTemplatesList,
            postBuilderPreviewList,
            headerBuilderTemplatesList,
            customTitleList,
            customFooterList,
            popupsTemplatesList,
            postType: this.$router.history.current.params.navigationParams,
            postTypeLabel: this.$router.history.current.query.label,
            postLayoutSource: [
                {label: i18n.t('blogLayout.layout_default'), value: 'default'},
                {label: i18n.t('blogLayout.layout_builder'), value: 'builder'},
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
        postBuilderCreateUrl(){
            return config.postBuilderCreateUrl
        },

        postBuilderImportUrl(){
            return config.postBuilderImportUrl
        },

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
            return this.getOption('thegemPopupsPost.' + popup.key + '.' + option);
        },

        setPopupOption(popup, option, value) {
            this.setOption('thegemPopupsPost.' + popup.key + '.' + option, value);
            this.autoAddNewPopup();
        },

        autoAddNewPopup() {
            let popups = this.getOption('thegemPopupsPost');
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
                this.setOption('thegemPopupsPost', popups);
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

    watch: {
        '$route'(to) {
            this.postType = to.params.navigationParams;
            this.postTypeLabel = to.query.label;
        }
    },

    mounted() {
        this.autoAddNewPopup();
    },

})
</script>
