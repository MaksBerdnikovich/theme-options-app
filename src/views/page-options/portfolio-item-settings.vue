<template>
    <div>
        <to-panel id="panel.portfolio_project_details">
            <to-panel-group :label-title="$t('panel.portfolio_project_details')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_portfolio_project_details')"/>
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[{name: 'Adding-New-Project--Details.png'}]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div v-if="getOption('portfolio_item_data.meta')" class="to-changed-settings">
                    <div class="form-grid">
                        <template v-for="(meta, idx) in getOption('portfolio_item_data.meta')">
                            <div class="col-2 col-tb-1" v-bind:key="meta.key + '_1' + idx">
                                <to-label>{{ meta.title }}</to-label>
                                <to-input
                                    :value="getOption(`portfolio_item_data.meta.${idx}.value`)"
                                    @input="setOption(`portfolio_item_data.meta.${idx}.value`, $event)"/>
                                <to-alert v-if="meta.type === 'number'" :title="$t('alert.custom_fields_type_number')"/>
                            </div>

                            <div class="col-2 col-tb-1" v-bind:key="meta.key + '_2' + idx">
                                <to-label>{{ meta.title }} {{ $t('general.meta_key') }}</to-label>
                                <to-input-clipboard
                                    :value="getOption(`portfolio_item_data.meta.${idx}.key`)"
                                    @input="setOption(`portfolio_item_data.meta.${idx}.key`, $event)"
                                    style="max-width: 140px" :isReadonly="true" readonly/>
                            </div>
                        </template>
                    </div>
                </div>
                <div v-if="!getOption('portfolio_item_data.meta')" class="to-changed-settings">
                    <to-alert
                        :title="$t('alert.portfolio_project_details')"
                        :titleLink="$t('alert.portfolio_project_details_link')"
                        :href="adminUrl('admin.php?page=thegem-theme-options#/single-pages/portfolio/panel.portfolio_project_details')"
                        target="_blank"
                    />
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.preview_button')" v-if="getOption('portfolio_item_data.portfolio_layout_source') !== 'builder'">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_portfolio_item_preview_button') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                               {name: 'Project_Preview_Button.png'},
                           ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <to-switch trueValue="1" falseValue="0" :value="getOption('portfolio_item_data.project_button_show')" @input="setOption('portfolio_item_data.project_button_show', $event)" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('portfolio_item_data.project_button_show') == 1" :label-title="$t('panel.preview_button_text')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_portfolio_item_preview_button_text') }}
                        </div>
                    </div>
                </template>
                <to-input :value="getOption('portfolio_item_data.project_text')" @input="setOption('portfolio_item_data.project_text',$event)" />
            </to-panel-group>

            <to-panel-group v-if="getOption('portfolio_item_data.project_button_show') == 1" :label-title="$t('panel.preview_button_link')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_portfolio_item_preview_button_link') }}
                        </div>
                    </div>
                </template>
                <to-input :value="getOption('portfolio_item_data.project_link')" @input="setOption('portfolio_item_data.project_link',$event)" />
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.portfolio_appearance_grid">
            <to-panel-group :label-title="$t('panel.portfolio_appearance_format')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_portfolio_item_appearance_grid_type')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-background
                        optionPrefix="portfolio_item_data.grid_appearance"
                        :tab-color="false"
                        :tab-gradient="false"
                        :tab-image="false"
                        :tab-pattern="false"
                        :tab-featured-image="true"
                        :tab-gif="true"
                        :tab-gallery="true"
                        :isVideoStart="true"
                    />
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption('portfolio_item_data.grid_appearance_type') === 'featured_image'">
                <to-panel-group :label-title="$t('panel.portfolio_click_behavior')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.p_options_portfolio_item_click_behavior')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-select :value="getOption('portfolio_item_data.grid_appearance_image_behavior')" @input="setOption('portfolio_item_data.grid_appearance_image_behavior', $event)" :options="gridAppearanceAllBehavior"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.link_target')" v-if="getOption('portfolio_item_data.grid_appearance_image_behavior') === 'link_to_page'">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.p_options_portfolio_item_behavior_link_target')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-select :value="getOption('portfolio_item_data.grid_appearance_behavior_target')" @input="setOption('portfolio_item_data.grid_appearance_behavior_target',$event)" :options="linkTargetList" />
                    </div>
                </to-panel-group>

                <div class="to-panel-separator" v-if="getOption('portfolio_item_data.grid_appearance_image_behavior') === 'multiple_choice'">
                    <template v-for="(type, idx) in getOption('portfolio_item_data.types')">
                        <to-panel-group :label-title="$t('panel.hover_options_portfolio')" v-bind:key="type.type + '|' + idx + '|1|' + type.link_target">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        <div v-html="$t('info.p_options_portfolio_item_hover_options')"/>
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
                            <div class="form-grid">
                                <div class="col-1">
                                    <to-radio-toggle
                                        :value="getOption('portfolio_item_data.types.'+idx+'.type')"
                                        @input="setOption('portfolio_item_data.types.'+idx+'.type',$event)"
                                        :options="getTypeList(idx)"
                                        @plus="addType()"
                                        @minus="removeType(idx)"
                                    />
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group v-if="getOption('portfolio_item_data.types.'+idx+'.type') !== 'full-image'" :label-title="$t('panel.link_url')" v-bind:key="type.type + '|' + idx + '|2|' + type.link_target">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        {{ $t('info.p_options_portfolio_item_link_target') }}
                                    </div>
                                </div>
                            </template>
                            <div class="form-grid">
                                <div class="col-1" v-if="showLink(idx) && getOption('portfolio_item_data.types.'+idx+'.type') !== 'self_video'">
                                    <to-input :value="getOption('portfolio_item_data.types.'+idx+'.link')" @input="setOption('portfolio_item_data.types.'+idx+'.link',$event)"/>
                                </div>
                                <div class="col-1" v-if="showLink(idx) && getOption('portfolio_item_data.types.'+idx+'.type') === 'self_video'">
                                    <to-input-button-group :value="getOption('portfolio_item_data.types.'+idx+'.link')" @input="setOption('portfolio_item_data.types.'+idx+'.link',$event)" type="video"/>
                                </div>
                                <div class="col-1" v-if="getOption('portfolio_item_data.types.'+idx+'.type') !== 'self_video'">
                                    <to-label>{{ $t('general.target') }}</to-label>
                                    <to-select :value="getOption('portfolio_item_data.types.'+idx+'.link_target')" @input="setOption('portfolio_item_data.types.'+idx+'.link_target',$event)" :options="linkTargetList" />
                                </div>
                            </div>
                        </to-panel-group>
                    </template>
                </div>

                <div class="to-panel-separator" v-if="getOption('portfolio_item_data.grid_appearance_image_behavior') === 'custom_link'">
                    <to-panel-group :label-title="$t('panel.portfolio_custom_url')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.p_options_portfolio_item_behavior_custom_link') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-1">
                                    <to-input :value="getOption('portfolio_item_data.grid_appearance_behavior_custom_link')" @input="setOption('portfolio_item_data.grid_appearance_behavior_custom_link',$event)" />
                                </div>
                                <div class="col-1">
                                    <to-select :value="getOption('portfolio_item_data.grid_appearance_behavior_custom_link_target')" @input="setOption('portfolio_item_data.grid_appearance_behavior_custom_link_target',$event)" :options="linkTargetList" />
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>

            <div class="to-panel-separator" v-if="getOption('portfolio_item_data.grid_appearance_type') === 'animated_gif'">
                <to-panel-group :label-title="$t('panel.portfolio_click_behavior')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.p_options_portfolio_item_click_behavior')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-select :value="getOption('portfolio_item_data.grid_appearance_gif_behavior')" @input="setOption('portfolio_item_data.grid_appearance_gif_behavior', $event)" :options="gridAppearanceGifBehavior"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.link_target')" v-if="getOption('portfolio_item_data.grid_appearance_gif_behavior') === 'link_to_page'">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.p_options_portfolio_item_behavior_link_target')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-select :value="getOption('portfolio_item_data.grid_appearance_behavior_target')" @input="setOption('portfolio_item_data.grid_appearance_behavior_target',$event)" :options="linkTargetList" />
                    </div>
                </to-panel-group>

                <div class="to-panel-separator" v-if="getOption('portfolio_item_data.grid_appearance_gif_behavior') === 'custom_link'">
                    <to-panel-group :label-title="$t('panel.portfolio_custom_url')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.p_options_portfolio_item_behavior_custom_link') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-1">
                                    <to-input :value="getOption('portfolio_item_data.grid_appearance_behavior_custom_link')" @input="setOption('portfolio_item_data.grid_appearance_behavior_custom_link',$event)" />
                                </div>
                                <div class="col-1">
                                    <to-select :value="getOption('portfolio_item_data.grid_appearance_behavior_custom_link_target')" @input="setOption('portfolio_item_data.grid_appearance_behavior_custom_link_target',$event)" :options="linkTargetList" />
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>

            <div class="to-panel-separator" v-if="getOption('portfolio_item_data.grid_appearance_type') === 'video'">
                <to-panel-group :label-title="$t('panel.portfolio_click_behavior')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.p_options_portfolio_item_click_behavior')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-select :value="getOption('portfolio_item_data.grid_appearance_video_behavior')" @input="setOption('portfolio_item_data.grid_appearance_video_behavior', $event)" :options="gridAppearanceVideoBehavior"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.link_target')" v-if="getOption('portfolio_item_data.grid_appearance_video_behavior') === 'link_to_page'">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.p_options_portfolio_item_behavior_link_target')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-select :value="getOption('portfolio_item_data.grid_appearance_behavior_target')" @input="setOption('portfolio_item_data.grid_appearance_behavior_target',$event)" :options="linkTargetList" />
                    </div>
                </to-panel-group>

                <div class="to-panel-separator" v-if="getOption('portfolio_item_data.grid_appearance_video_behavior') === 'custom_link'">
                    <to-panel-group :label-title="$t('panel.portfolio_custom_url')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.p_options_portfolio_item_behavior_custom_link') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-1">
                                    <to-input :value="getOption('portfolio_item_data.grid_appearance_behavior_custom_link')" @input="setOption('portfolio_item_data.grid_appearance_behavior_custom_link',$event)" />
                                </div>
                                <div class="col-1">
                                    <to-select :value="getOption('portfolio_item_data.grid_appearance_behavior_custom_link_target')" @input="setOption('portfolio_item_data.grid_appearance_behavior_custom_link_target',$event)" :options="linkTargetList" />
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>

            <div class="to-panel-separator" v-if="getOption('portfolio_item_data.grid_appearance_type') === 'gallery'">
                <to-panel-group :label-title="$t('panel.portfolio_click_behavior')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.p_options_portfolio_item_click_behavior')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-select :value="getOption('portfolio_item_data.grid_appearance_gallery_behavior')" @input="setOption('portfolio_item_data.grid_appearance_gallery_behavior', $event)" :options="gridAppearanceAllBehavior"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.link_target')" v-if="getOption('portfolio_item_data.grid_appearance_gallery_behavior') === 'link_to_page'">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.p_options_portfolio_item_behavior_link_target')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-select :value="getOption('portfolio_item_data.grid_appearance_behavior_target')" @input="setOption('portfolio_item_data.grid_appearance_behavior_target',$event)" :options="linkTargetList" />
                    </div>
                </to-panel-group>

                <div class="to-panel-separator" v-if="getOption('portfolio_item_data.grid_appearance_gallery_behavior') === 'multiple_choice'">
                    <template v-for="(type, idx) in getOption('portfolio_item_data.types')">
                        <to-panel-group :label-title="$t('panel.hover_options_portfolio')" v-bind:key="type.type + '|' + idx + '|1|' + type.link_target">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        <div v-html="$t('info.p_options_portfolio_item_hover_options')"/>
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
                            <div class="form-grid">
                                <div class="col-1">
                                    <to-radio-toggle
                                        :value="getOption('portfolio_item_data.types.'+idx+'.type')"
                                        @input="setOption('portfolio_item_data.types.'+idx+'.type',$event)"
                                        :options="getTypeList(idx)"
                                        @plus="addType()"
                                        @minus="removeType(idx)"
                                    />
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group v-if="getOption('portfolio_item_data.types.'+idx+'.type') !== 'full-image'" :label-title="$t('panel.link_url')" v-bind:key="type.type + '|' + idx + '|2|' + type.link_target">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        {{ $t('info.p_options_portfolio_item_link_target') }}
                                    </div>
                                </div>
                            </template>
                            <div class="form-grid">
                                <div class="col-1" v-if="showLink(idx) && getOption('portfolio_item_data.types.'+idx+'.type') !== 'self_video'">
                                    <to-input :value="getOption('portfolio_item_data.types.'+idx+'.link')" @input="setOption('portfolio_item_data.types.'+idx+'.link',$event)"/>
                                </div>
                                <div class="col-1" v-if="showLink(idx) && getOption('portfolio_item_data.types.'+idx+'.type') === 'self_video'">
                                    <to-input-button-group :value="getOption('portfolio_item_data.types.'+idx+'.link')" @input="setOption('portfolio_item_data.types.'+idx+'.link',$event)" type="video"/>
                                </div>
                                <div class="col-1" v-if="getOption('portfolio_item_data.types.'+idx+'.type') !== 'self_video'">
                                    <to-label>{{ $t('general.target') }}</to-label>
                                    <to-select :value="getOption('portfolio_item_data.types.'+idx+'.link_target')" @input="setOption('portfolio_item_data.types.'+idx+'.link_target',$event)" :options="linkTargetList" />
                                </div>
                            </div>
                        </to-panel-group>
                    </template>
                </div>

                <div class="to-panel-separator" v-if="getOption('portfolio_item_data.grid_appearance_gallery_behavior') === 'custom_link'">
                    <to-panel-group :label-title="$t('panel.portfolio_custom_url')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.p_options_portfolio_item_behavior_custom_link') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-1">
                                    <to-input :value="getOption('portfolio_item_data.grid_appearance_behavior_custom_link')" @input="setOption('portfolio_item_data.grid_appearance_behavior_custom_link',$event)" />
                                </div>
                                <div class="col-1">
                                    <to-select :value="getOption('portfolio_item_data.grid_appearance_behavior_custom_link_target')" @input="setOption('portfolio_item_data.grid_appearance_behavior_custom_link_target',$event)" :options="linkTargetList" />
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>

            <div class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.show_as_highlight')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_portfolio_item_show_as_highlight') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                               {name: 'Highlight_Item_in_Portfolio_Grid.png'},
                           ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="1" falseValue="0" :value="getOption('portfolio_item_data.highlight')" @input="setOption('portfolio_item_data.highlight', $event)" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')"/>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.highlight_type')" v-if="getOption('portfolio_item_data.highlight') == 1">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_portfolio_item_highlight_type') }}
                            </div>
                        </div>
                    </template>
                    <to-radio-icon :value="getOption('portfolio_item_data.highlight_type')" @input="setOption('portfolio_item_data.highlight_type',$event)" :options="highlightTypeList" />
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.overview_title')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_portfolio_item_alternative_title') }}
                            </div>
                        </div>
                    </template>
                    <to-input :value="getOption('portfolio_item_data.overview_title')" @input="setOption('portfolio_item_data.overview_title',$event)" />
                </to-panel-group>
            </div>

            <div class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.portfolio_excerpt')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_portfolio_item_excerpt') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                               {name: 'Specify_Description_for_Portfolio_1.png'},
                               {name: 'Specify_Description_for_Portfolio_2.png'},
                           ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-textarea :value="excerpt()" :height="'91px'" @input="setExcerpt($event)"></to-textarea>
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

export default addHelpers({
    data() {

        return {
            highlightTypeList: [
                {icon: 'Schemes-24', title: i18n.t('general.squared'), value: 'squared'},
                {icon: 'Schemes-25', title: i18n.t('general.horizontal'), value: 'horizontal'},
                {icon: 'Schemes-26', title: i18n.t('general.vertical'), value: 'vertical'},
            ],
            linkTargetList: [
                {value: '_self', label: i18n.t('general.self')},
                {value: '_blank', label: i18n.t('general.blank')},
            ],
            typeList: [
                {icon: 'briefcase', tooltip: i18n.t('general.portfolio_page'), value: 'self-link'},
                {icon: 'link', tooltip: i18n.t('general.internal_link'), value: 'inner-link'},
                {icon: 'geography', tooltip: i18n.t('general.external_link'), value: 'outer-link'},
                {icon: 'unsplash', tooltip: i18n.t('general.lightbox_image'), value: 'full-image'},
                {icon: 'youtube', tooltip: i18n.t('general.youtube'), value: 'youtube'},
                {icon: 'vimeo', tooltip: i18n.t('general.vimeo'), value: 'vimeo'},
                {icon: 'cinema', tooltip: i18n.t('general.selfhosted'), value: 'self_video'},
            ],
            gridAppearanceAllBehavior: [
                {label: i18n.t('portfolioLayout.behavior_link_to_page'), value: 'link_to_page'},
                {label: i18n.t('portfolioLayout.behavior_lightbox'), value: 'lightbox'},
                {label: i18n.t('portfolioLayout.behavior_multiple_choice'), value: 'multiple_choice'},
                {label: i18n.t('portfolioLayout.behavior_custom_link'), value: 'custom_link'},
                {label: i18n.t('portfolioLayout.behavior_click_disabled'), value: 'click_disabled'},
            ],
            gridAppearanceGifBehavior: [
                {label: i18n.t('portfolioLayout.behavior_link_to_page'), value: 'link_to_page'},
                {label: i18n.t('portfolioLayout.behavior_lightbox'), value: 'lightbox'},
                {label: i18n.t('portfolioLayout.behavior_custom_link'), value: 'custom_link'},
                {label: i18n.t('portfolioLayout.behavior_click_disabled'), value: 'click_disabled'},
            ],
            gridAppearanceVideoBehavior: [
                {label: i18n.t('portfolioLayout.behavior_link_to_page'), value: 'link_to_page'},
                {label: i18n.t('portfolioLayout.behavior_lightbox_video'), value: 'lightbox'},
                {label: i18n.t('portfolioLayout.behavior_custom_link'), value: 'custom_link'},
                {label: i18n.t('portfolioLayout.behavior_click_disabled'), value: 'click_disabled'},
            ],
        }
    },

    computed: {
        lastTypeIdx() {
            return this.getOption('portfolio_item_data.types').length - 1;
        },
    },

    beforeDestroy() {
        // page builder
        window.jQuery('body').off('input', '#excerpt', this.forceUpdateHandler);

        // gutenberg
        window.jQuery('body').off('input', '.editor-post-excerpt textarea', this.forceUpdateHandler);
    },

    methods: {
        setExcerpt(value) {
            window.jQuery('#excerpt').val(value);

            if (window.wp && window.wp.data && window.wp.data.dispatch && window.wp.data.dispatch('core/editor')) {
                window.wp.data.dispatch('core/editor').editPost({excerpt: value})
            }
        },

        excerpt() {
            if (window.wp && window.wp.data && window.wp.data.select && window.wp.data.select('core/editor')) {
                let excerpt = window.wp.data.select('core/editor').getEditedPostAttribute('excerpt');

                if (excerpt === undefined) {
                    setTimeout(() => {
                        this.$forceUpdate();
                    }, 100);
                }

                return excerpt;
            }

            return window.jQuery('#excerpt').val();
        },

        getTypeList(idx) {
            let types = this.getOption('portfolio_item_data.types');

            let list = JSON.parse(JSON.stringify(this.typeList));

            let disabledCount = 0;

            for (let itemIdx in list) {
                for (let typeIdx in types) {
                    if (typeIdx != idx && types[typeIdx].type == list[itemIdx].value) {
                        list[itemIdx].disabled = true;
                        disabledCount++;
                        break;
                    }
                }
            }

            if (idx == this.lastTypeIdx && disabledCount < list.length - 1) {
                list.push({icon: 'plus', selectable: false, event: 'plus', class: 'action', value: 'plus'});
            } else {
                list.push({icon: 'minus', selectable: false, event: 'minus', class: 'action', value: 'minus'});
            }

            return list;
        },

        removeType(idx) {
            let types = this.getOption('portfolio_item_data.types');

            types.splice(idx, 1);

            this.setOption('portfolio_item_data.types', types);
        },

        showLink(idx) {
            let types = this.getOption('portfolio_item_data.types');

            return ['inner-link', 'outer-link', 'youtube', 'vimeo', 'self_video'].indexOf(types[idx].type) >= 0;
        },

        addType() {
            let types = this.getOption('portfolio_item_data.types');

            let list = this.typeList.slice();

            for (let itemIdx in list) {
                let isGood = true;
                for (let typeIdx in types) {
                    if (types[typeIdx].type == list[itemIdx].value) {
                        isGood = false;
                        break;
                    }
                }

                if (isGood) {
                    types.push({type: list[itemIdx].value, link_target: '_blank', link: ''});
                    break;
                }
            }

            this.setOption('portfolio_item_data.types', types);
        },
    },

    mounted() {
        this.forceUpdateHandler = () => {
            setTimeout(() => {
                this.$forceUpdate();
            });
        };

        // page builder
        window.jQuery('body').on('input', '#excerpt', this.forceUpdateHandler);

        // gutenberg
        window.jQuery('body').on('input', '.editor-post-excerpt textarea', this.forceUpdateHandler);

        let types = this.getOption('portfolio_item_data.types');
        for (let typeIdx in types) {
            if (!types[typeIdx].link) {
                types[typeIdx].link = '';
            }
        }
        this.setOption('portfolio_item_data.types', types);
    }
})
</script>
