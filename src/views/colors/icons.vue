<template>
    <div>
        <to-panel id="panel.icons_color">
            <to-panel-group :label-title="$t('panel.icons_color_content')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_icons_content_icons') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Icon_Element_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker :value="getOption('icons_symbol_color')" @input="setOption('icons_symbol_color',$event)" :label-title="$t('colors.icons_color')"/>
                        </div>
                    </div>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.icons_color_system')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_icons_system_icons') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'System_Icons_Defaults-1-1.png'},
                                {name: 'System_Icons_Defaults-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('system_icons_font')" @input="setOption('system_icons_font',$event)" :label-title="$t('colors.icons_color_system') + ' 1'"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('system_icons_font_2')" @input="setOption('system_icons_font_2',$event)" :label-title="$t('colors.icons_color_system') + ' 2'"/>
                        </div>
                    </div>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.icons_color_in_portfolio_gallery')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_icons_portfolio_gallery_hover_color') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Icons_In_Portfolio_Gallery_Hovers.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('icons_portfolio_gallery_hover_color')" @input="setOption('icons_portfolio_gallery_hover_color',$event)" :label-title="$t('colors.icons_color')"/>
                        </div>
                    </div>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.icons_color_socials')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_icons_social_icons') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Social_Icons_Defaults-1-1.png'},
                                {name: 'Social_Icons_Defaults-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('socials_colors_top_area')" @input="setOption('socials_colors_top_area',$event)" :label-title="$t('colors.icons_color_social_top_area')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('socials_colors_footer')" @input="setOption('socials_colors_footer',$event)" :label-title="$t('colors.icons_color_social_footer')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('socials_colors_posts')" @input="setOption('socials_colors_posts',$event)" :label-title="$t('colors.icons_color_social_post_types')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('socials_colors_woocommerce')" @input="setOption('socials_colors_woocommerce',$event)" :label-title="$t('colors.icons_color_social_woo')"/>
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
