<template>
    <div>
        <to-panel id="panel.main_menu">
            <to-panel-group :label-title="$t('panel.main_menu_font')" :responsive="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.main_menu_font') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop, isMobile }">
                    <div class="to-changed-settings" v-if="isDesktop">
                        <to-block-font option-prefix="main_menu" :exCollapsed="true"></to-block-font>
                    </div>
                    <div class="to-changed-settings" v-if="isMobile">
                        <to-block-font option-prefix="mobile_menu" :exCollapsed="true"></to-block-font>
                    </div>
                </template>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.main_menu_font_color_level1')" :responsive="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.main_menu_level_1_font_color') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop, isMobile }">
                    <div class="to-changed-settings" v-if="isDesktop">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('main_menu_level1_color')" @input="setOption('main_menu_level1_color',$event)" :label-title="$t('colors.menu_item_normal')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('main_menu_level1_hover_color')" @input="setOption('main_menu_level1_hover_color',$event)" :label-title="$t('colors.menu_item_hover')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('main_menu_level1_active_color')" @input="setOption('main_menu_level1_active_color',$event)" :label-title="$t('colors.menu_item_active')"/>
                            </div>
                            <div class="col-4" v-if="getOption('header_source') === 'default'">
                                <to-color-picker :value="getOption('main_menu_level1_light_color')" @input="setOption('main_menu_level1_light_color',$event)" :label-title="$t('colors.menu_item_normal_light')"/>
                            </div>
                        </div>
                    </div>

                    <div class="to-changed-settings" v-if="isDesktop && getOption('header_source') === 'default'">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('main_menu_level1_light_hover_color')" @input="setOption('main_menu_level1_light_hover_color',$event)" :label-title="$t('colors.menu_item_hover_light')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('main_menu_level1_light_active_color')" @input="setOption('main_menu_level1_light_active_color',$event)" :label-title="$t('colors.menu_item_active_light')"/>
                            </div>
                        </div>
                    </div>

                    <div class="to-changed-settings" v-if="isMobile">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker
                                    :value="getOption('mobile_menu_level1_color')"
                                    @input="setOption('mobile_menu_level1_color',$event)"
                                    :label-title="$t('colors.menu_item_normal')"
                                />
                            </div>
                            <div class="col-4">
                                <to-color-picker
                                    :value="getOption('mobile_menu_level1_active_color')"
                                    @input="setOption('mobile_menu_level1_active_color',$event)"
                                    :label-title="$t('colors.menu_item_active')"
                                />
                            </div>
                        </div>
                    </div>
                </template>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <to-alert
                        :title="$t('alert.background_colors')"
                        :titleLink="$t('alert.menu_color_settings')"
                        route="/menu-and-header/colors/panel.menu_header">
                    </to-alert>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.submenu">
            <to-panel-group :label-title="$t('panel.submenu_font')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.submenu_font') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="submenu"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.submenu_font_color_level2')" :responsive="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.submenu_level_2_font_color') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop, isMobile }">
                    <div class="to-changed-settings" v-if="isDesktop">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker
                                    :value="getOption('main_menu_level2_color')"
                                    @input="setOption('main_menu_level2_color',$event)"
                                    :label-title="$t('colors.menu_item_normal')"
                                />
                            </div>
                            <div class="col-4">
                                <to-color-picker
                                    :value="getOption('main_menu_level2_hover_color')"
                                    @input="setOption('main_menu_level2_hover_color',$event)"
                                    :label-title="$t('colors.menu_item_hover')"
                                />
                            </div>
                            <div class="col-4">
                                <to-color-picker
                                    :value="getOption('main_menu_level2_active_color')"
                                    @input="setOption('main_menu_level2_active_color',$event)"
                                    :label-title="$t('colors.menu_item_active')"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="to-changed-settings" v-if="isMobile">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker
                                    :value="getOption('mobile_menu_level2_color')"
                                    @input="setOption('mobile_menu_level2_color',$event)"
                                    :label-title="$t('colors.menu_item_normal')"
                                />
                            </div>
                            <div class="col-4">
                                <to-color-picker
                                    :value="getOption('mobile_menu_level2_active_color')"
                                    @input="setOption('mobile_menu_level2_active_color',$event)"
                                    :label-title="$t('colors.menu_item_active')"
                                />
                            </div>
                        </div>
                    </div>

                </template>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.submenu_font_color_level3')" :responsive="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.submenu_level_3_font_color') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop, isMobile }">
                    <div class="to-changed-settings" v-if="isDesktop">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker
                                    :value="getOption('main_menu_level3_color')"
                                    @input="setOption('main_menu_level3_color',$event)"
                                    :label-title="$t('colors.menu_item_normal')"
                                />
                            </div>
                            <div class="col-4">
                                <to-color-picker
                                    :value="getOption('main_menu_level3_hover_color')"
                                    @input="setOption('main_menu_level3_hover_color',$event)"
                                    :label-title="$t('colors.menu_item_hover')"
                                />
                            </div>
                            <div class="col-4">
                                <to-color-picker
                                    :value="getOption('main_menu_level3_active_color')"
                                    @input="setOption('main_menu_level3_active_color',$event)"
                                    :label-title="$t('colors.menu_item_active')"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="to-changed-settings" v-if="isMobile">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker
                                    :value="getOption('mobile_menu_level3_color')"
                                    @input="setOption('mobile_menu_level3_color',$event)"
                                    :label-title="$t('colors.menu_item_normal')"
                                />
                            </div>
                            <div class="col-4">
                                <to-color-picker
                                    :value="getOption('mobile_menu_level3_active_color')"
                                    @input="setOption('mobile_menu_level3_active_color',$event)"
                                    :label-title="$t('colors.menu_item_active')"
                                />
                            </div>
                        </div>
                    </div>

                </template>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <to-alert
                        :title="$t('alert.background_colors')"
                        :titleLink="$t('alert.menu_color_settings')"
                        route="/menu-and-header/colors/panel.menu_header">
                    </to-alert>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.overlay_menu">
            <to-panel-group :label-title="$t('panel.overlay_menu_font')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.overlay_menu_font') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="overlay_menu"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.overlay_menu_font_colors')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.overlay_menu_font_color') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('overlay_menu_color')"
                                @input="setOption('overlay_menu_color',$event)"
                                :label-title="$t('colors.text_color')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('overlay_menu_active_color')"
                                @input="setOption('overlay_menu_active_color',$event)"
                                :label-title="$t('colors.link_color')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('overlay_menu_hover_color')"
                                @input="setOption('overlay_menu_hover_color',$event)"
                                :label-title="$t('colors.link_color_hover')"
                            />
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <to-alert
                        :title="$t('alert.background_colors')"
                        :titleLink="$t('alert.menu_color_settings')"
                        route="/menu-and-header/colors/panel.overlay_menu">
                    </to-alert>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.top_area" v-if="getOption('header_source') === 'default'">
            <to-panel-group v-if="isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.top_area_font')">
                <div class="to-changed-settings">
                    <to-block-font option-prefix=""></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.top_area_font_colors')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.top_area_font_colors') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('top_area_text_color')"
                                @input="setOption('top_area_text_color',$event)"
                                :label-title="$t('colors.text_color')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('top_area_link_color')"
                                @input="setOption('top_area_link_color',$event)"
                                :label-title="$t('colors.link_color')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('top_area_link_hover_color')"
                                @input="setOption('top_area_link_hover_color',$event)"
                                :label-title="$t('colors.link_color_hover')"
                            />
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <to-alert
                        :title="$t('alert.background_colors')"
                        :titleLink="$t('alert.menu_color_settings')"
                        route="/menu-and-header/colors/panel.top_area">
                    </to-alert>
                </div>
            </to-panel-group>
        </to-panel>
    </div>
</template>


<script>
    import {addHelpers} from '@/services/helper';

    export default addHelpers({
        data() {
            return {}
        }
    })
</script>
