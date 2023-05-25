<template>
    <div>
        <to-panel id="panel.post_format">
            <to-panel-group :label-title="$t('panel.format')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_post_format')"/>
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Portfolio_Page.png'},
                                {name: 'Internal_Link.png'},
                                {name: 'External_Link.png'},
                                {name: 'Lightbox_Image.png'},
                                {name: 'Video.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-post-format-settings">
                    <to-radio-toggle :value="postFormat()" @input="setPostFormat($event)" :options="formatList"></to-radio-toggle>
                </div>

                <div v-if="postFormat()==='video'" class="to-post-format-setting-item">
                    <div class="form-grid">
                        <div class="col-2 col-tb-1">
                            <to-label>{{ $t('video.type') }}</to-label>
                            <to-select :value="getOption('post_item_data.video_type')" @input="setOption('post_item_data.video_type', $event)" :placeholder="$t('video.type_select')" :options="videoTypeList"/>
                        </div>
                        <div class="col-2 col-tb-1">
                            <to-label>{{ $t('video.aspect_ratio') }}</to-label>
                            <to-input :value="getOption('post_item_data.video_aspect_ratio')" @input="setOption('post_item_data.video_aspect_ratio', $event)"/>
                        </div>
                    </div>

                    <div class="form-grid">
                        <div class="col-2 col-tb-1" v-if="getOption('post_item_data.video_type') !== 'self'">
                            <to-label>{{ $t('video.link') }}</to-label>
                            <to-input :value="getOption('post_item_data.video')" @input="setOption('post_item_data.video', $event)"/>
                        </div>
                        <div class="col-2 col-tb-1" v-if="getOption('post_item_data.video_type') === 'self'">
                            <to-label>{{ $t('video.self_link') }}</to-label>
                            <to-input-button-group :value="getOption('post_item_data.video')" @input="setOption('post_item_data.video', $event)" type="video"/>
                        </div>
                        <div class="col-2 col-tb-1" v-if="getOption('post_item_data.video_type') === 'self'">
                            <to-label>{{ $t('video.poster') }}</to-label>
                            <to-input-button-group :value="getOption('post_item_data.video_poster')" @input="setOption('post_item_data.video_poster', $event)" type="image"/>
                        </div>
                        <div class="col-2 col-tb-1">
                            <to-label>{{ $t('video.start') }}</to-label>
                            <to-select :value="getOption('post_item_data.video_start')" @input="setOption('post_item_data.video_start', $event)" :options="videoStart"/>
                        </div>
                        <div class="col-2 col-tb-2">
                            <to-label>{{ $t('video.play_on_mobile') }}</to-label>
                            <to-switch :value="getOption('post_item_data.video_play_on_mobile')" @input="setOption('post_item_data.video_play_on_mobile', $event)"></to-switch>
                        </div>
                        <div class="col-2 col-tb-2">
                            <to-color-picker :label-title="$t('video.overlay')" :value="getOption('post_item_data.video_overlay')" @input="setOption('post_item_data.video_overlay', $event)"/>
                        </div>
                    </div>
                </div>

                <div v-if="postFormat()==='audio'" class="to-post-format-setting-item">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-label>{{ $t('audio.link') }}</to-label>
                            <div class="to-input-button-group">
                                <to-input :value="getOption('post_item_data.audio')" @input="setOption('post_item_data.audio', $event)"/>
                                <to-file-select-button :value="getOption('post_item_data.audio')" @input="setOption('post_item_data.audio', $event)" :popup-title="$t('general.select_audio')" :popup-button-title="$t('general.use_audio')" type="audio"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="postFormat()==='quote'" class="to-post-format-setting-item">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-wysiwyg :value="getOption('post_item_data.quote_text')" @input="setOption('post_item_data.quote_text',$event)" :height="'120px'"></to-wysiwyg>
                        </div>
                    </div>
                    <div class="form-grid">
                        <div class="col-1">
                            <to-label>{{ $t('settings.quote_author') }}</to-label>
                            <to-input :value="getOption('post_item_data.quote_author')" @input="setOption('post_item_data.quote_author',$event)"></to-input>
                        </div>
                    </div>
                    <div class="form-grid">
                        <div class="col-4 col-tb-2">
                            <to-color-picker :value="getOption('post_item_data.quote_background')" @input="setOption('post_item_data.quote_background',$event)" :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4 col-tb-2">
                            <to-color-picker :value="getOption('post_item_data.quote_author_color')" @input="setOption('post_item_data.quote_author_color',$event)" :label-title="$t('colors.author_color')"/>
                        </div>
                    </div>
                </div>

                <div v-if="postFormat()==='gallery'" class="to-post-format-setting-item">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-label>{{ $t('general.gallery') }}</to-label>
                            <to-select :value="getOption('post_item_data.gallery')" @input="setOption('post_item_data.gallery',$event)" :options="galleryList" v-on:right-button-clicked="showPreview($event)"></to-select>
                        </div>
                    </div>
                    <div class="form-grid">
                        <div class="col-1">
                            <to-label>{{ $t('settings.gallery_autoscroll') }}</to-label>
                            <to-input :value="getOption('post_item_data.gallery_autoscroll')" @input="setOption('post_item_data.gallery_autoscroll',$event)"></to-input>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.featured_post')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_post_featured_post') }}
                        </div>
                    </div>
                </template>
                <to-label>{{ $t('settings.featured_post') }}</to-label>
                <to-switch trueValue="1" falseValue="0" :value="getOption('post_item_data.show_featured_posts_slider')" @input="setOption('post_item_data.show_featured_posts_slider', $event)"/>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.appearance_grid_list">
            <to-panel-group v-bind:class="{'development': isFutureMode}" v-if="isFutureMode" :label-title="$t('panel.excerpt_length')">
                <div class="form-grid">
                    <div class="col-2">
                        <to-block-label-slider-input :min="0" :max="500" unit="words" :value="getOption('')" @input="setOption('', $event)"/>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.post_excerpt')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.post_excerpt') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Specify_Description_for_Blog_1.png'},
                                {name: 'Specify_Description_for_Blog_2.png'},
                                {name: 'Specify_Description_for_Blog_3.png'},
                                {name: 'Specify_Description_for_Blog_4.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <to-textarea :value="excerpt()" :height="'91px'" @input="setExcerpt($event)"></to-textarea>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.highlighted_post')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_post_highlighted_post') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Highlighted_Post_in_Blog_Grid.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <to-label>{{ $t('settings.highlighted_post') }}</to-label>
                <to-switch trueValue="1" falseValue="0" :value="getOption('post_item_data.highlight')" @input="setOption('post_item_data.highlight', $event)"/>
            </to-panel-group>

            <div v-if="getOption('post_item_data.highlight') == 1" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.highlight_type')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_post_highlight_type') }}
                            </div>
                        </div>
                    </template>
                    <to-radio-icon :value="getOption('post_item_data.highlight_type')" @input="setOption('post_item_data.highlight_type',$event)" :options="highlightTypeList" />
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.highlight_style')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_post_highlight_style') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Highlighted_Post_in_Blog_Grid-1-1.png'},
                                {name: 'Highlighted_Post_in_Blog_Grid-1-3.png'},
                                {name: 'Highlighted_Post_in_Blog_Grid-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <to-radio-icon :value="getOption('post_item_data.highlight_style')" @input="setOption('post_item_data.highlight_style',$event)" :options="highlightStyleList" />
                </to-panel-group>

                <to-panel-group v-if="getOption('post_item_data.highlight_style') == 'alternative'" :label-title="$t('panel.highlight_alternative_colors')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_post_highlight_alternative_colors') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Highlighted_Post_in_Blog_Grid_Alternative-1-1.png'},
                                {name: 'Highlighted_Post_in_Blog_Grid_Alternative-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-4 col-tb-2">
                                <to-color-picker
                                    :value="getOption('post_item_data.highlight_title_left_background')"
                                    @input="setOption('post_item_data.highlight_title_left_background',$event)"
                                    :label-title="$t('colors.highlight_title_left_background')"/>
                            </div>
                            <div class="col-4 col-tb-2">
                                <to-color-picker
                                    :value="getOption('post_item_data.highlight_title_left_color')"
                                    @input="setOption('post_item_data.highlight_title_left_color',$event)"
                                    :label-title="$t('colors.highlight_title_left_color')"/>
                            </div>
                            <div class="col-4 col-tb-2">
                                <to-color-picker
                                    :value="getOption('post_item_data.highlight_title_right_background')"
                                    @input="setOption('post_item_data.highlight_title_right_background',$event)"
                                    :label-title="$t('colors.highlight_title_right_background')"/>
                            </div>
                            <div class="col-4 col-tb-2">
                                <to-color-picker
                                    :value="getOption('post_item_data.highlight_title_right_color')"
                                    @input="setOption('post_item_data.highlight_title_right_color',$event)"
                                    :label-title="$t('colors.highlight_title_right_color')"/>
                            </div>
                        </div>
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
                postLayoutSource: [
                    {label: i18n.t('blogLayout.layout_default'), value: 'default'},
                    {label: i18n.t('blogLayout.layout_builder'), value: 'builder'},
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
                videoStart: [
                    {label: i18n.t('video.autoplay'), value: 'autoplay'},
                    {label: i18n.t('video.play_on_hover'), value: 'play_on_hover'},
                    {label: i18n.t('video.open_in_lightbox'), value: 'open_in_lightbox'},
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
