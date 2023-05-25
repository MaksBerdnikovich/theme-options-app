<template>
    <div>
        <to-panel id="panel.general">
            <to-panel-group :label-title="$t('panel.post_layout_settings')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_post_layout_settings')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1 col-tb-1">
                            <to-select :value="getOption('post_item_data.post_layout_settings')" @input="setOption('post_item_data.post_layout_settings',$event)" :options="postLayoutSettings"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.layout" v-if="getOption('post_item_data.post_layout_settings') === 'custom'">
            <to-panel-group :label-title="$t('panel.post_layout_source')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_post_layout_source')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-select :value="getOption('post_item_data.post_layout_source')" @input="setOption('post_item_data.post_layout_source', $event)" :options="postLayoutSource"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div v-if="getOption('post_item_data.post_layout_source') === 'builder'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.post_builder_template')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.single_pages_post_builder_template')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-label>{{$t('postLayout.select_template')}}</to-label>
                                <to-select
                                    :value="getOption('post_item_data.post_builder_template')"
                                    @input="setOption('post_item_data.post_builder_template', $event)"
                                    :options="postBuilderTemplatesList"
                                    v-on:right-button-clicked="showPreview($event)"
                                    v-on:edit-button-clicked="showEditPage($event)"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                <to-link :href="postBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                <to-link :href="postBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.post_appearance" v-if="(getOption('post_item_data.post_layout_settings') === 'custom' && getOption('post_item_data.post_layout_source') === 'default') || getOption('post_item_data.post_layout_settings') === 'default'">
            <to-panel-group :label-title="$t('panel.featured_content')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_post_featured_content') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Featured_Content.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <to-label>{{ $t('settings.featured_content') }}</to-label>
                <to-select :value="getOption('post_item_data.show_featured_content')" @input="setOption('post_item_data.show_featured_content', $event)" :options="showFeaturedContent"/>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.post_elements')" v-if="(getOption('post_item_data.post_layout_settings') === 'custom' && getOption('post_item_data.post_layout_source') === 'default')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_post_post_elements') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Blog_Post_Elements-1-1.png'},
                                {name: 'Blog_Post_Elements-1-2.png'},
                                {name: 'Blog_Post_Elements-1-3.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>

                <div class="to-changed-settings">
                    <to-select :value="getOption('post_elements_data.post_elements')" @input="setOption('post_elements_data.post_elements', $event)" :options="postElements"/>
                </div>

                <div v-if="getOption('post_elements_data.post_elements') == 'custom'" class="to-changed-settings to-post-elements-box">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-label>{{ $t('settings.author_info') }}</to-label>
                            <to-switch trueValue="1" falseValue="" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')" :value="getOption('post_elements_data.show_author')" @input="setOption('post_elements_data.show_author',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('settings.author_name') }}</to-label>
                            <to-switch trueValue="" falseValue="1" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')" :value="getOption('post_elements_data.blog_hide_author')" @input="setOption('post_elements_data.blog_hide_author',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('settings.date') }}</to-label>
                            <to-switch trueValue="" falseValue="1" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')" :value="getOption('post_elements_data.blog_hide_date')" @input="setOption('post_elements_data.blog_hide_date',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('settings.date_in_blog') }}</to-label>
                            <to-switch trueValue="" falseValue="1" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')" :value="getOption('post_elements_data.blog_hide_date_in_blog_cat')" @input="setOption('post_elements_data.blog_hide_date_in_blog_cat',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('settings.categories') }}</to-label>
                            <to-switch trueValue="" falseValue="1" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')" :value="getOption('post_elements_data.blog_hide_categories')" @input="setOption('post_elements_data.blog_hide_categories',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('settings.tags') }}</to-label>
                            <to-switch trueValue="" falseValue="1" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')" :value="getOption('post_elements_data.blog_hide_tags')" @input="setOption('post_elements_data.blog_hide_tags',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('settings.comments_icon') }}</to-label>
                            <to-switch trueValue="" falseValue="1" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')" :value="getOption('post_elements_data.blog_hide_comments')" @input="setOption('post_elements_data.blog_hide_comments',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('settings.likes') }}</to-label>
                            <to-switch trueValue="" falseValue="1" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')" :value="getOption('post_elements_data.blog_hide_likes')" @input="setOption('post_elements_data.blog_hide_likes',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('settings.posts_navigation') }}</to-label>
                            <to-switch trueValue="" falseValue="1" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')" :value="getOption('post_elements_data.blog_hide_navigation')" @input="setOption('post_elements_data.blog_hide_navigation',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('settings.social_sharing') }}</to-label>
                            <to-switch trueValue="" falseValue="1" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')" :value="getOption('post_elements_data.blog_hide_socials')" @input="setOption('post_elements_data.blog_hide_socials',$event)"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('settings.related_posts') }}</to-label>
                            <to-switch trueValue="" falseValue="1" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')" :value="getOption('post_elements_data.blog_hide_realted')" @input="setOption('post_elements_data.blog_hide_realted',$event)"/>
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
            const postBuilderTemplatesList = JSON.parse(JSON.stringify(config.postBuilderTemplates));
            for(let item of postBuilderTemplatesList) {
                if (item.preview) {
                    item.rightButton = {icon: 'eye'};
                }

                if (item.edit) {
                    item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
                }
            }

            const galleryList = JSON.parse(JSON.stringify(config.galleries));
            //for(let item of galleryList) {
            //    if (item.preview) {
            //        item.rightButton = {icon: 'eye'};
            //    }
            //}

            return {
                postBuilderTemplatesList,
                postLayoutSettings: [
                    {label: i18n.t('postLayout.default_settings'), value: 'default'},
                    {label: i18n.t('postLayout.custom_settings'), value: 'custom'},
                ],
                postLayoutSource: [
                    {label: i18n.t('postLayout.layout_default_po'), value: 'default'},
                    {label: i18n.t('postLayout.layout_builder'), value: 'builder'},
                ],
                oldPostFormat: false,
                oldExcerpt: false,
                showFeaturedContent: [
                    {label:i18n.t('general.default_settings'),value:'default'},
                    {label:i18n.t('general.show'),value:'enabled'},
                    {label:i18n.t('general.hide'),value:'disabled'}
                ],
                postElements: [
                    {label:i18n.t('general.default_settings'),value:'default'},
                    {label:i18n.t('general.custom_settings'),value:'custom'},
                ],
                highlightTypeList: [
                    {icon:'Schemes-24',title:i18n.t('general.squared'),value:'squared'},
                    {icon:'Schemes-25',title:i18n.t('general.horizontal'),value:'horizontal'},
                    {icon:'Schemes-26',title:i18n.t('general.vertical'),value:'vertical'},
                ],
                highlightStyleList: [
                    {icon:'Schemes-33',title:i18n.t('general.default'),value:'default'},
                    {icon:'Schemes-32',title:i18n.t('general.alternative'),value:'alternative'},
                ],
                formatList: [
                    {icon:'standard',title:i18n.t('general.standard'),value: '0'},
                    {icon:'unsplash', title:i18n.t('general.image'),value: 'image'},
                    {icon:'circled-play', title:i18n.t('general.video'),value: 'video'},
                    {icon:'audio', title:i18n.t('general.audio'),value: 'audio'},
                    {icon:'quote', title:i18n.t('general.quote'),value: 'quote'},
                    {icon:'gallery', title:i18n.t('general.gallery'),value: 'gallery'}
                ],
                videoTypeList: [
                    {label:i18n.t('video.type_youtube'),value:'youtube'},
                    {label:i18n.t('video.type_vimeo'),value:'vimeo'},
                    {label:i18n.t('video.type_selfhosted'),value:'self'},
                ],
                galleryList: galleryList,
                postFormatChangedHandler: null,
            }
        },

        computed: {
            postBuilderCreateUrl(){
                return config.postBuilderCreateUrl
            },

            postBuilderImportUrl(){
                return config.postBuilderImportUrl
            },
        },

        mounted() {
            this.forceUpdateHandler = () => {
                setTimeout(() => {
                    this.$forceUpdate();
                });
            };

            // page builder
            window.jQuery('#post-formats-select input[name=post_format]').on('change', this.forceUpdateHandler);
            window.jQuery('body').on('input', '#excerpt', this.forceUpdateHandler);

            // gutenberg
            window.jQuery('body').on('change', '.editor-post-format select', this.forceUpdateHandler);
            window.jQuery('body').on('input', '.editor-post-excerpt textarea', this.forceUpdateHandler);
        },

        beforeDestroy() {
            // page builder
            window.jQuery('#post-formats-select input[name=post_format]').off('change', this.forceUpdateHandler);
            window.jQuery('body').off('input', '#excerpt', this.forceUpdateHandler);

            // gutenberg
            window.jQuery('body').off('change', '.editor-post-format select', this.forceUpdateHandler);
            window.jQuery('body').off('input', '.editor-post-excerpt textarea', this.forceUpdateHandler);
        },

        methods: {
            checkPostFormatModified(value) {
                if (value !== undefined) {
                    if (this.oldPostFormat !== false && value != this.oldPostFormat) {
                        this.setOption('options_outside_parameter_modified', true);
                    }

                    this.oldPostFormat = value;
                }
            },

            checkExcerptModified(value) {
                if (value !== undefined) {
                    if (this.oldExcerpt !== false && value != this.oldExcerpt) {
                        this.setOption('options_outside_parameter_modified', true);
                    }

                    this.oldExcerpt = value;
                }
            },

            setExcerpt(value) {
                window.jQuery('#excerpt').val(value);

                if (window.wp && window.wp.data && window.wp.data.dispatch && window.wp.data.dispatch( 'core/editor' )) {
                    window.wp.data.dispatch( 'core/editor' ).editPost( { excerpt: value } )
                }
            },

            excerpt() {
                if (window.wp && window.wp.data && window.wp.data.select && window.wp.data.select('core/editor')) {
                    let excerpt = window.wp.data.select('core/editor').getEditedPostAttribute('excerpt');

                    if (excerpt === undefined) {
                        setTimeout(()=> {
                        this.$forceUpdate();
                        }, 100);
                    }

                    this.checkExcerptModified(excerpt);
                    return excerpt;
                }

                let excerpt = window.jQuery('#excerpt').val();
                this.checkExcerptModified(excerpt);

                return excerpt;
            },

            postFormat() {
                if (window.wp && window.wp.data && window.wp.data.select && window.wp.data.select('core/editor')) {
                    let format = window.wp.data.select('core/editor').getEditedPostAttribute('format');

                    if (format == 'standard') {
                        format = '0';
                    }

                    if (format === undefined) {
                        setTimeout(()=> {
                        this.$forceUpdate();
                        }, 100);
                    }

                    this.checkPostFormatModified(format);
                    return format;
                }

                let format = window.jQuery('#post-formats-select input[name=post_format]:checked').val();
                this.checkPostFormatModified(format);

                return format;
            },

            setPostFormat(value) {
                // page builder
                window.jQuery('#post-formats-select input[name=post_format][value=' + value + ']').prop('checked',true);

                // gutenberg
                if (window.wp && window.wp.data && window.wp.data.dispatch && window.wp.data.dispatch( 'core/editor' )) {
                    window.wp.data.dispatch( 'core/editor').editPost({format: value === '0' ? 'standard':value});
                }

                this.$forceUpdate();
            },

            showPreview(item) {
                window.open(item.preview,'_blank');
            },

            showEditPage(item) {
                window.open(item.edit,'_blank');
            }
        }
    })
</script>
