<template>
    <div>
        <to-panel id="panel.typography">
            <to-panel-group :label-title="$t('panel.testimonial_quoted_text')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_testimonials_quoted_text_font') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Testimonials_Quoted_Text_Font.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="testimonial"></to-block-font>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.testimonial_name_text')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_testimonials_name_text_font') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="testimonial_name"></to-block-font>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.testimonial_company_text')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_testimonials_company_text_font') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="testimonial_company"></to-block-font>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.testimonial_position_text')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_testimonials_position_text_font') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="testimonial_position"></to-block-font>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.colors">
            <to-panel-group :label-title="$t('panel.testimonials_arrows')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_testimonials_slider_arrows') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Testimonials_Slider_Arrows.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('testimonial_arrow_color')"
                                @input="setOption('testimonial_arrow_color',$event)"
                                :label-title="$t('colors.arrow_icon')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('testimonial_arrow_hover_color')"
                                @input="setOption('testimonial_arrow_hover_color',$event)"
                                :label-title="$t('colors.arrow_icon_hover')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('testimonial_arrow_background_color')"
                                @input="setOption('testimonial_arrow_background_color',$event)"
                                :label-title="$t('colors.arrow_background')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('testimonial_arrow_background_hover_color')"
                                @input="setOption('testimonial_arrow_background_hover_color',$event)"
                                :label-title="$t('colors.arrow_background_hover')"
                            />
                        </div>
                    </div>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.blockquotes')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_elements_blockquotes_icon_in_testimonials') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Help-BlockQuotes-InTestimonials.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker :value="getOption('blockquote_icon_testimonials')" @input="setOption('blockquote_icon_testimonials',$event)" :label-title="$t('colors.testimonials_color')"/>
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
