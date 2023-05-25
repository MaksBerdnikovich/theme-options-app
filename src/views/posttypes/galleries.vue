<template>
    <div>
        <to-panel id="panel.typography">
            <to-panel-group :label-title="$t('panel.default_gallery_title_font')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_galleries_title_font_regular') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Gallery_Title_Font_(Regular)_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="gallery_title"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_gallery_title_font_bold')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_galleries_title_font_bold') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Gallery_Title_Font_(Bold-Style).png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="gallery_title_bold"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.description_gallery')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_galleries_description_font') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Gallery_Description_Font.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="gallery_description"></to-block-font>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.colors">
            <to-panel-group :label-title="$t('panel.gallery_slider_arrows')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_galleries_slider_arrows') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Gallery_Slider_Arrows_1-1.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('sliders_arrow_color')"
                                @input="setOption('sliders_arrow_color',$event)"
                                :label-title="$t('colors.arrow_normal')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('sliders_arrow_hover_color')"
                                @input="setOption('sliders_arrow_hover_color',$event)"
                                :label-title="$t('colors.arrow_hover')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('sliders_arrow_background_color')"
                                @input="setOption('sliders_arrow_background_color',$event)"
                                :label-title="$t('colors.background_normal')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('sliders_arrow_background_hover_color')"
                                @input="setOption('sliders_arrow_background_hover_color',$event)"
                                :label-title="$t('colors.background_hover')"
                            />
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.lightbox_colors')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_galleries_lightbox_colors') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Сolors_for_Gallery_Lightbox.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('gallery_caption_background_color')"
                                @input="setOption('gallery_caption_background_color',$event)"
                                :label-title="$t('colors.gallery_lightbox_caption')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('gallery_title_color')"
                                @input="setOption('gallery_title_color',$event)"
                                :label-title="$t('colors.gallery_lightbox_title')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('gallery_description_color')"
                                @input="setOption('gallery_description_color',$event)"
                                :label-title="$t('colors.gallery_lightbox_description')"
                            />
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
            }
        }
    })
</script>
