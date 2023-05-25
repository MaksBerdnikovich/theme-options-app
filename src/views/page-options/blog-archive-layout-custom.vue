<template>
    <div>
        <to-panel id="panel.general">
            <to-panel-group :label-title="$t('panel.archive_layout_settings')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_archive_layout_settings')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1 col-tb-1">
                            <to-select :value="getOption('custom_archive_item_data.layout_settings')" @input="setOption('custom_archive_item_data.layout_settings',$event)" :options="archiveLayoutSettings"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.layout" v-if="getOption('custom_archive_item_data.layout_settings') === 'custom'">
            <to-panel-group :label-title="$t('panel.blog_archive_layout_source')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.archive_pages_custom_archive_layout_source_po')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-select
                                :value="getOption('custom_archive_item_data.layout_source')"
                                @input="setOption('custom_archive_item_data.layout_source', $event)"
                                :options="blogArchiveLayoutSource"
                            />
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div v-if="getOption('custom_archive_item_data.layout_source') === 'builder'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.blog_archive_custom_builder_template')" :class="{'taxonomy-te-edit-link': isTaxonomy}">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.archive_pages_custom_archive_builder_template')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-label>{{$t('blogLayout.select_template')}}</to-label>
                                <to-select
                                    :value="getOption('custom_archive_item_data.builder_template')"
                                    @input="setOption('custom_archive_item_data.builder_template', $event)"
                                    :options="blogArchiveBuilderTemplatesList"
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
                                <to-link :href="blogArchiveBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                <to-link :href="blogArchiveBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
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
        const blogArchiveBuilderTemplatesList = JSON.parse(JSON.stringify(config.blogArchiveBuilderTemplates));
        for(let item of blogArchiveBuilderTemplatesList) {
            if (item.preview) {
                item.rightButton = {icon: 'eye'};
            }

            if (item.edit) {
                item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
            }
        }

        return {
            blogArchiveBuilderTemplatesList,
            archiveLayoutSettings: [
                {label: i18n.t('postLayout.default_settings'), value: 'default'},
                {label: i18n.t('postLayout.custom_settings'), value: 'custom'},
            ],
            blogArchiveLayoutSource: [
                {label: i18n.t('blogLayout.layout_default'), value: 'default'},
                {label: i18n.t('blogLayout.layout_builder'), value: 'builder'},
            ],
        }
    },

    computed: {
        blogArchiveBuilderCreateUrl(){
            return config.blogArchiveBuilderCreateUrl
        },

        blogArchiveBuilderImportUrl(){
            return config.blogArchiveBuilderImportUrl
        },

        isTaxonomy() {
            return config.isTaxonomy;
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
