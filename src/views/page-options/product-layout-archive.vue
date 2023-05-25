<template>
    <div>
        <to-panel id="panel.layout">
            <to-panel-group :label-title="$t('panel.product_archive_layout_source')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.woocommerce_product_archive_layout_source_po')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-select :value="getOption('product_archive_item_data.product_archive_layout_source')" @input="setOption('product_archive_item_data.product_archive_layout_source', $event)" :options="productArchiveLayoutSource"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div v-if="getOption('product_archive_item_data.product_archive_layout_source') === 'builder'" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.product_archive_builder_template')" :class="{'taxonomy-te-edit-link': isTaxonomy}">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.woocommerce_product_archive_builder_template')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-label>{{$t('productArchive.select_template')}}</to-label>
                                <to-select
                                    :value="getOption('product_archive_item_data.product_archive_builder_template')"
                                    @input="setOption('product_archive_item_data.product_archive_builder_template', $event)"
                                    :options="productArchiveBuilderTemplatesList"
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
                                <to-link :href="productArchiveBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                <to-link :href="productArchiveBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
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
        const productArchiveBuilderTemplatesList = JSON.parse(JSON.stringify(config.productArchiveBuilderTemplates));
        for(let item of productArchiveBuilderTemplatesList) {
            if (item.preview) {
                item.rightButton = {icon: 'eye'};
            }

            if (item.edit) {
                item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
            }
        }

        return {
            productArchiveBuilderTemplatesList,
            productArchiveLayoutSource: [
                {label: i18n.t('productArchive.layout_default_po'), value: 'default'},
                {label: i18n.t('productArchive.layout_builder'), value: 'builder'},
            ],
        }
    },

    computed: {
        productArchiveBuilderCreateUrl(){
            return config.productArchiveBuilderCreateUrl
        },

        productArchiveBuilderImportUrl(){
            return config.productArchiveBuilderImportUrl
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
