<template>
    <div>
        <to-panel id="panel.general">
            <to-panel-group :label-title="$t('panel.page_layout_settings')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_page_layout_settings')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1 col-tb-1">
                            <to-select :value="getOption('page_item_data.page_layout_settings')" @input="setOption('page_item_data.page_layout_settings',$event)" :options="layoutSettings"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.layout" v-if="getOption('page_item_data.page_layout_settings') === 'custom'">
            <to-panel-group :label-title="$t('panel.page_layout_source')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_page_layout_source')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-select :value="getOption('page_item_data.page_layout_source')" @input="setOption('page_item_data.page_layout_source', $event)" :options="layoutSource"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div v-if="getOption('page_item_data.page_layout_source') === 'builder'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.page_builder_template')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.single_pages_page_builder_template')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-label>{{$t('postLayout.select_template')}}</to-label>
                                <to-select
                                    :value="getOption('page_item_data.page_builder_template')"
                                    @input="setOption('page_item_data.page_builder_template', $event)"
                                    :options="pageBuilderTemplatesList"
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
                                <to-link :href="pageBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                <to-link :href="pageBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
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
            const pageBuilderTemplatesList = JSON.parse(JSON.stringify(config.postBuilderTemplates));
            for(let item of pageBuilderTemplatesList) {
                if (item.preview) {
                    item.rightButton = {icon: 'eye'};
                }

                if (item.edit) {
                    item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
                }
            }

            return {
                pageBuilderTemplatesList,
                layoutSettings: [
                    {label: i18n.t('postLayout.default_settings'), value: 'default'},
                    {label: i18n.t('postLayout.custom_settings'), value: 'custom'},
                ],
                layoutSource: [
                    {label: i18n.t('postLayout.layout_default_po'), value: 'default'},
                    {label: i18n.t('postLayout.layout_builder'), value: 'builder'},
                ],
            }
        },

        computed: {
            pageBuilderCreateUrl(){
                return config.postBuilderCreateUrl
            },

            pageBuilderImportUrl(){
                return config.postBuilderImportUrl
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
