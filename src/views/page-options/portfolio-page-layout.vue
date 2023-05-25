<template>
    <div>
        <to-panel id="panel.general">
            <to-panel-group :label-title="$t('panel.portfolio_layout_settings')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_portfolio_layout_settings')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1 col-tb-1">
                            <to-select :value="getOption('portfolio_item_data.portfolio_layout_settings')" @input="setOption('portfolio_item_data.portfolio_layout_settings',$event)" :options="portfolioLayoutSettings"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.layout" v-if="getOption('portfolio_item_data.portfolio_layout_settings') === 'custom'">
            <to-panel-group :label-title="$t('panel.portfolio_layout_source')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_portfolio_layout_source')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-select :value="getOption('portfolio_item_data.portfolio_layout_source')" @input="setOption('portfolio_item_data.portfolio_layout_source', $event)" :options="portfolioLayoutSource"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div v-if="getOption('portfolio_item_data.portfolio_layout_source') === 'default'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.width_page_layout')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_portfolio_item_fullwidth_layout') }}
                            </div>
                        </div>
                    </template>
                    <to-switch trueValue="1" falseValue="0" :value="getOption('portfolio_item_data.fullwidth')" @input="setOption('portfolio_item_data.fullwidth', $event)" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')"/>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.portfolio_page_elements')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_portfolio_item_page_elements') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Portfolio_Page_Elements-1-1.png'},
                                {name: 'Portfolio_Page_Elements-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>

                    <div class="to-changed-settings">
                        <to-select :value="getOption('portfolio_elements_data.portfolio_page_elements')" @input="setOption('portfolio_elements_data.portfolio_page_elements', $event)" :options="portfolioPageElements"/>
                    </div>

                    <div v-if="getOption('portfolio_elements_data.portfolio_page_elements') == 'custom'" class="to-changed-settings to-post-elements-box">
                        <div class="form-grid">
                            <div class="col-auto">
                                <to-label>{{ $t('settings.date') }}</to-label>
                                <to-switch trueValue="" falseValue="1" :value="getOption('portfolio_elements_data.portfolio_hide_date')" @input="setOption('portfolio_elements_data.portfolio_hide_date',$event)" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')"/>
                            </div>
                            <div class="col-auto">
                                <to-label>{{ $t('settings.portfolio_sets') }}</to-label>
                                <to-switch trueValue="" falseValue="1" :value="getOption('portfolio_elements_data.portfolio_hide_sets')" @input="setOption('portfolio_elements_data.portfolio_hide_sets',$event)" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')"/>
                            </div>
                            <div class="col-auto">
                                <to-label>{{ $t('settings.likes') }}</to-label>
                                <to-switch trueValue="" falseValue="1" :value="getOption('portfolio_elements_data.portfolio_hide_likes')" @input="setOption('portfolio_elements_data.portfolio_hide_likes',$event)" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')"/>
                            </div>
                            <div class="col-auto">
                                <to-label>{{ $t('settings.social_sharing') }}</to-label>
                                <to-switch trueValue="" falseValue="1" :value="getOption('portfolio_elements_data.portfolio_hide_socials')" @input="setOption('portfolio_elements_data.portfolio_hide_socials',$event)" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')"/>
                            </div>
                            <div class="col-auto">
                                <to-label>{{ $t('settings.top_arrows') }}</to-label>
                                <to-switch trueValue="" falseValue="1" :value="getOption('portfolio_elements_data.portfolio_hide_top_navigation')" @input="setOption('portfolio_elements_data.portfolio_hide_top_navigation',$event)" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')"/>
                            </div>
                            <div class="col-auto">
                                <to-label>{{ $t('settings.bottom_arrows') }}</to-label>
                                <to-switch trueValue="" falseValue="1" :value="getOption('portfolio_elements_data.portfolio_hide_bottom_navigation')" @input="setOption('portfolio_elements_data.portfolio_hide_bottom_navigation',$event)" :falseValueTitle="$t('general.hide')" :trueValueTitle="$t('general.show')"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.back_to_overview')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.p_options_portfolio_item_back_to_overview') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Back_to_Overview_icon.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <div class="form-grid">
                        <div class="col-1">
                            <to-input :value="getOption('portfolio_item_data.back_url')" @input="setOption('portfolio_item_data.back_url',$event)" />
                        </div>
                    </div>
                </to-panel-group>
            </div>

            <div v-if="getOption('portfolio_item_data.portfolio_layout_source') === 'builder'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.portfolio_builder_template')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.p_options_portfolio_layout_source_builder')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-label>{{$t('portfolioLayout.select_template')}}</to-label>
                                <to-select
                                    :value="getOption('portfolio_item_data.portfolio_builder_template')"
                                    @input="setOption('portfolio_item_data.portfolio_builder_template', $event)"
                                    :options="portfolioBuilderTemplatesList"
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
                                <to-link :href="portfolioBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                <to-link :href="portfolioBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
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
       const portfolioBuilderTemplatesList = JSON.parse(JSON.stringify(config.portfolioBuilderTemplates));
       for(let item of portfolioBuilderTemplatesList) {
           if (item.preview) {
               item.rightButton = {icon: 'eye'};
           }

           if (item.edit) {
               item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
           }
       }

       return {
           portfolioBuilderTemplatesList,
           portfolioLayoutSettings: [
               {label: i18n.t('portfolioLayout.default_settings'), value: 'default'},
               {label: i18n.t('portfolioLayout.custom_settings'), value: 'custom'},
           ],
           portfolioLayoutSource: [
               {label: i18n.t('portfolioLayout.layout_default_option'), value: 'default'},
               {label: i18n.t('portfolioLayout.layout_builder'), value: 'builder'},
           ],
           portfolioPageElements: [
               {label: i18n.t('general.default_settings_po'), value: 'default'},
               {label: i18n.t('general.custom_settings'), value: 'custom'},
           ],
           parentPageItems: [],
       }
   },

   computed: {
       portfolioBuilderCreateUrl(){
           return config.portfolioBuilderCreateUrl
       },

       portfolioBuilderImportUrl(){
           return config.portfolioBuilderImportUrl
       },
   },

   methods: {
       showPreview(item) {
           window.open(item.preview,'_blank');
       },

       showEditPage(item) {
           window.open(item.edit,'_blank');
       }
   }
})
</script>
