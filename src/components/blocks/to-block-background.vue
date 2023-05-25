<template>
    <div class="to-block-background">
        <div class="to-changed-settings">
            <to-radio-toggle :value="getPrefixedOption('type')" @input="setPrefixedOption('type',$event)" :options="typeOptions"></to-radio-toggle>
        </div>

        <div class="to-changed-settings type-color" v-if="getPrefixedOption('type') === 'color'">
            <to-color-picker :value="getPrefixedOption('color')" @input="setPrefixedOption('color', $event)" :label-title="$t('general.color')"/>
        </div>

        <div class="to-changed-settings type-gradient" v-if="getPrefixedOption('type') === 'gradient'">
            <to-block-gradient :option-prefix="optionPrefix+'_gradient'"></to-block-gradient>
        </div>

        <div class="to-changed-settings type-image" v-if="getPrefixedOption('type') === 'image'">
            <div class="form-grid">
                <div class="col-1">
                    <div class="to-file-select-list">
                        <to-file-select :value="getPrefixedOption('image')" @input="addImage($event)" :labelTitle="$t('general.choose_image')"/>
                        <to-radio-icon
                            :value="getPrefixedOption('image')"
                            @input="setPrefixedOption('image', $event)"
                            :options="backgroundOptions">

                            <template v-slot:default="slotProps">
                                <to-button class="trash-button"
                                    v-on:click="deleteImage(slotProps.option.value)"
                                    v-if="getPrefixedOption('image')!=slotProps.option.value"
                                    icon="trash-can"/>
                            </template>
                        </to-radio-icon>
                    </div>
                </div>
            </div>
            <div class="form-grid">
                <div class="col-auto">
                    <to-label>{{ $t('image.repeat') }}</to-label>
                    <to-switch :value="getPrefixedOption('image_repeat')" @input="setPrefixedOption('image_repeat', $event)"></to-switch>
                </div>
                <div class="col-auto">
                    <to-label>{{ $t('image.size') }}</to-label>
                    <to-select
                        :value="getPrefixedOption('size')"
                        @input="setPrefixedOption('size',$event)"
                        :options="backgroundSizeOptions"
                    />
                </div>
                <div class="col-auto">
                    <to-label>{{ $t('image.horizontal_position') }}</to-label>
                    <to-radio-toggle
                        :options="horizontalPositionOptions"
                        :value="getPrefixedOption('position_x')"
                        @input="setPrefixedOption('position_x', $event)"
                    />
                </div>
                <div class="col-auto">
                    <to-label>{{ $t('image.vertical_position') }}</to-label>
                    <to-radio-toggle
                        :options="verticalPositionOptions"
                        :value="getPrefixedOption('position_y')"
                        @input="setPrefixedOption('position_y', $event)"
                    />
                </div>
            </div>
            <div class="form-grid">
                <div class="col-auto">
                    <to-color-picker
                        :value="getPrefixedOption('image_color')"
                        @input="setPrefixedOption('image_color', $event)"
                        :label-title="$t('colors.background_color')"
                    />
                </div>
                <div class="col-auto" v-if="showOverlay">
                    <to-color-picker
                        :value="getPrefixedOption('image_overlay')"
                        @input="setPrefixedOption('image_overlay', $event)"
                        :label-title="$t('colors.overlay')"
                    />
                </div>
            </div>
        </div>

        <div class="to-changed-settings type-image" v-if="getPrefixedOption('type') === 'animated_gif'">
            <div class="form-grid">
                <div class="col-1">
                    <to-image-select :returnAllData="true" :value="getPrefixedOption('gif')" @input="setPrefixedOption('gif',$event)" :labelTitle="$t('general.choose_image')"/>
                </div>
                <div class="col-1">
                    <to-label>{{ $t('image.start') }}</to-label>
                    <to-select :value="getPrefixedOption('gif_start')" @input="setPrefixedOption('gif_start', $event)" :options="gifStart"/>
                </div>
                <div class="col-1" v-if="getPrefixedOption('gif_start') === 'play_on_hover'">
                    <to-label>{{ $t('image.gif_poster') }}</to-label>
                    <div class="to-input-button-group">
                        <to-input :value="getPrefixedOption('gif_poster')" @input="setPrefixedOption('gif_poster', $event)"/>
                        <to-file-select-button :value="getPrefixedOption('gif_poster')" @input="setPrefixedOption('gif_poster', $event)"/>
                    </div>
                </div>
                <div class="col-1" v-if="getPrefixedOption('gif_start') === 'play_on_hover'">
                    <to-label>{{ $t('image.gif_preload') }}</to-label>
                    <to-switch trueValue="1" falseValue="0" :value="getPrefixedOption('gif_preload')" @input="setPrefixedOption('gif_preload', $event)"/>
                </div>
            </div>
        </div>

        <div class="to-changed-settings type-video" v-if="getPrefixedOption('type') === 'video'">
            <div class="form-grid">
                <div class="col-2 col-tb-1">
                    <to-label>{{ $t('video.type') }}</to-label>
                    <to-select :value="getPrefixedOption('video_type')" @input="setPrefixedOption('video_type', $event)" :placeholder="$t('video.type_select')" :options="videoTypeOptions"/>
                </div>
                <div class="col-2 col-tb-1">
                    <to-label>{{ $t('video.aspect_ratio') }}</to-label>
                    <to-input :value="getPrefixedOption('video_aspect_ratio')" @input="setPrefixedOption('video_aspect_ratio', $event)"/>
                </div>
            </div>

            <div class="form-grid">
                <div class="col-2 col-tb-1" v-if="getPrefixedOption('video_type') !== 'self'">
                    <to-label>{{ $t('video.link') }}</to-label>
                    <to-input :value="getPrefixedOption('video')" @input="setPrefixedOption('video', $event)"/>
                </div>
                <div class="col-2 col-tb-1" v-if="getPrefixedOption('video_type') === 'self'">
                    <to-label>{{ $t('video.self_link') }}</to-label>
                    <to-input-button-group :value="getPrefixedOption('video')" @input="setPrefixedOption('video', $event)" type="video"/>
                </div>
                <div class="col-2 col-tb-1" v-if="getPrefixedOption('video_type') === 'self'">
                    <to-label>{{ $t('video.poster') }}</to-label>
                    <to-input-button-group :value="getPrefixedOption('video_poster')" @input="setPrefixedOption('video_poster', $event)" type="image"/>
                </div>
                <div class="col-2 col-tb-1" v-if="isVideoStart">
                    <to-label>{{ $t('video.start') }}</to-label>
                    <to-select :value="getPrefixedOption('video_start')" @input="setPrefixedOption('video_start', $event)" :options="videoStart"/>
                </div>
                <div class="col-2 col-tb-2">
                    <to-label>{{ $t('video.play_on_mobile') }}</to-label>
                    <to-switch :value="getPrefixedOption('video_play_on_mobile')" @input="setPrefixedOption('video_play_on_mobile', $event)"></to-switch>
                </div>
                <div class="col-2 col-tb-2">
                    <to-color-picker
                        :label-title="$t('video.overlay')"
                        :value="getPrefixedOption('video_overlay')"
                        @input="setPrefixedOption('video_overlay', $event)"
                    />
                </div>
            </div>
        </div>

        <div class="to-changed-settings type-gallery" v-if="getPrefixedOption('type') === 'gallery'">
            <div class="form-grid">
                <div class="col-1">
                    <to-alert :title="$t('alert.portfolio_project_gallery')"/>
                </div>
                <div class="col-1">
                    <to-label>{{ $t('gallery.autoscroll') }}</to-label>
                    <to-switch trueValue="1" falseValue="0" :value="getPrefixedOption('gallery_autoscroll')" @input="setPrefixedOption('gallery_autoscroll', $event)"/>
                </div>
                <div class="col-1" v-if="getPrefixedOption('gallery_autoscroll') === '1'">
                    <to-label>{{ $t('gallery.autoscroll_speed') }}</to-label>
                    <to-input :value="getPrefixedOption('gallery_autoscroll_speed')" @input="setPrefixedOption('gallery_autoscroll_speed', $event)"/>
                </div>
            </div>
        </div>

        <div class="to-changed-settings type-pattern" v-if="getPrefixedOption('type') === 'pattern'">
            <div class="to-file-select-list no-gaps">
                <to-radio-icon
                    :value="getPrefixedOption('pattern')"
                    @input="setPrefixedOption('pattern', $event)"
                    :options="patternOptions"
                />
            </div>
        </div>
    </div>
</template>

<script>
import {addHelpers} from '@/services/helper';
import config from '@/services/config';
import i18n from '@/services/i18n';


export default addHelpers({
    data: () => {
        var patternOptions=[];
        var skins=['light','dark'];
        var types=['low_contrast_linen', 'mochaGrunge', 'bedge_grunge', 'solid', 'concrete_wall', 'dark_circles', 'debut_dark'];
        for(let skin of skins) {
            for(let type of types) {
                let url = config.patternsUrl + skin + '/' + type + '.jpg';
                patternOptions.push({image:url, imageType: 'repeat', value: url})
            }
        }

        return {
            backgroundSizeOptions: [
                {label: 'Cover', value: 'cover'},
                {label: 'Contain', value: 'contain'},
                {label: 'Auto', value: 'auto'},
            ],
            horizontalPositionOptions: [
                {icon: 'align-objects-left', value: 'left'},
                {icon: 'align-objects-center', value: 'center'},
                {icon: 'align-objects-right', value: 'right'},
            ],
            verticalPositionOptions: [
                {icon: 'align-objects-top', value: 'top'},
                {icon: 'align-objects-centerY', value: 'center'},
                {icon: 'align-objects-bottom', value: 'bottom'},
            ],
            videoTypeOptions: [
                //{label: i18n.t('video.type_select'), value: ''},
                {label: i18n.t('video.type_youtube'), value: 'youtube'},
                {label: i18n.t('video.type_vimeo'), value: 'vimeo'},
                {label: i18n.t('video.type_selfhosted'), value: 'self'},
            ],
            videoStart: [
                {label: i18n.t('video.autoplay'), value: 'autoplay'},
                {label: i18n.t('video.play_on_hover'), value: 'play_on_hover'},
                {label: i18n.t('video.open_in_lightbox'), value: 'open_in_lightbox'},
            ],
            gifStart: [
                {label: i18n.t('image.autoplay'), value: 'autoplay'},
                {label: i18n.t('image.play_on_hover'), value: 'play_on_hover'},
            ],
            patternOptions: patternOptions,
        }
    },

    props: {
        optionPrefix: {
            type: String,
            required: true
        },
        tabColor: {
            type: Boolean,
            required: false,
            default: true
        },
        tabGradient: {
            type: Boolean,
            required: false,
            default: true
        },
        tabImage: {
            type: Boolean,
            required: false,
            default: true
        },
        tabVideo: {
            type: Boolean,
            required: false,
            default: true
        },
        tabPattern: {
            type: Boolean,
            required: false,
            default: true
        },
        tabFeaturedImage: {
            type: Boolean,
            required: false,
            default: false
        },
        tabGif: {
            type: Boolean,
            required: false,
            default: false
        },
        tabGallery: {
            type: Boolean,
            required: false,
            default: false
        },
        showOverlay: {
            type: Boolean,
            required: false,
            default: false
        },
        isVideoStart: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    methods: {
        addImage(value) {
            this.setPrefixedOption('image', value);

            let images = this.getSetting('background_image_gallery');

            let found=false;
            for(let image of images) {
                if (image == value) {
                    found=true;
                    break;
                }
            }

            if (!found) {
                images.unshift(value);
                this.setSetting('background_image_gallery', images);
            }
        },

        deleteImage(value) {
            let images = this.getSetting('background_image_gallery');

            for(let imageIdx in images) {
                if (images[imageIdx] == value) {
                    images.splice(imageIdx,1);
                    break;
                }
            }

            this.setSetting('background_image_gallery', images);
        }
    },

    computed: {
        typeOptions() {
            var options=[];

            if (this.tabColor) {
                options.push({icon: 'water', title: i18n.t('general.color'), value: 'color'});
            }
            if (this.tabGradient) {
                options.push({icon: 'enlarge', title: i18n.t('general.gradient'), value: 'gradient'});
            }
            if (this.tabImage) {
                options.push({icon: 'unsplash', title: i18n.t('general.image'), value: 'image'});
            }
            if (this.tabFeaturedImage) {
                options.push({icon: 'unsplash', title: i18n.t('general.featured_image'), value: 'featured_image'});
            }
            if (this.tabGif) {
                options.push({icon: 'cinema', title: i18n.t('general.animated_gif'), value: 'animated_gif'});
            }
            if (this.tabVideo) {
                options.push({icon: 'circled-play', title: i18n.t('general.video'), value: 'video'});
            }
            if (this.tabGallery) {
                options.push({icon: 'gallery', title: i18n.t('general.gallery'), value: 'gallery'});
            }
            if (this.tabPattern) {
                options.push({icon: 'brick-wall', title: i18n.t('general.pattern'), value: 'pattern'});
            }
            return options;
        },

        backgroundOptions() {
            let options=[];

            // load LRU
            let images = this.getSetting('background_image_gallery');
            for(let image of images) {
                options.push({image:image, value:image});
            }

            let value = this.getPrefixedOption('image');

            if (value) {
                let found=false;
                for(let option of options) {
                    if (option.value == value) {
                        found=true;
                        break;
                    }
                }
                if (!found) {
                    options.unshift({image:value, value:value});
                }
            }

            return options;
        }
    }
});
</script>

<style lang="scss">
#thegem-options {
    .to-block-background{
        .to-file-select-list{
            position: relative;
            display: flex;
            min-height: 100px;

            .to-file-select{
                position: absolute;
                left: 0;
                top: 4px;
                margin-right: 20px;
            }

            .to-radio-icon{
                margin: -20px -12px 0 -12px;

                .item{
                    width: auto;
                    margin-top: 24px;
                    padding: 0 12px;

                    span{
                        display: none;
                    }

                    &:first-child{
                        margin-left: 115px;
                    }

                    button{
                        position: relative;

                        &:after{
                            content: '';
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            opacity: 0;

                            transition: $element-transition;
                            background-color: $overlay-background;
                        }

                        .trash-button{
                            position: absolute;
                            top: 5px;
                            right: 10px;
                            width: 20px;
                            height: 20px;
                            min-height: 20px;
                            margin: 0;
                            padding: 0;
                            text-align: center;

                            opacity: 0;
                            visibility: hidden;
                            transition: opacity 0.3s;

                            .btn-icon{
                                min-width: auto;
                            }
                            &:before{
                                display: none;
                            }

                            .svg-icon{
                                width: 16px;
                                height: 16px;
                            }
                        }

                        &:hover{
                            opacity: 1;

                            &:after{
                                opacity: 1;
                            }

                            .trash-button{
                                opacity: 1;
                                visibility: visible;
                                z-index: 5;
                            }
                        }
                    }

                    &.to-active{
                        button:after{
                            opacity: 1;
                        }
                    }
                }
            }

            &.no-gaps{
                .to-radio-icon{
                    .item {
                        &:first-child {
                            margin-left: 0;
                        }
                    }
                }
            }

        }

        .to-changed-settings{

            .to-radio-toggle{
                position: relative;
                z-index: 10;
            }

            &.type-image{
                .vue-slider {
                    min-width: 160px;
                }
            }

            .to-input-button-group{
                display: flex;
                align-items: center;

                .to-input-group{
                    width: 100%;
                }
                .to-file-select-button{
                    margin-left: 10px;

                    .svg-icon{
                        margin: 0 5px 0 0;
                    }
                }
            }

            .form-grid + .form-grid{
                margin-top: 0 !important;
            }
        }
    }

}
</style>
