<template>
    <div>
        <to-panel id="panel.product_page_additional_tabs">
            <to-panel-group :label-title="$t('panel.product_page_additional_tabs')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_product_additional_tabs')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-select :value="getOption('product_item_data.product_page_additional_tabs')" @input="setOption('product_item_data.product_page_additional_tabs',$event)" :options="productAdditionalTabs"></to-select>
                        </div>
                        <div class="col-1" v-if="getOption('product_item_data.product_page_additional_tabs') === 'custom'">
                            <to-block-additional-tabs :value="getOption('product_item_data.product_page_additional_tabs_data')" @input="setOption('product_item_data.product_page_additional_tabs_data', $event)" />
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>
    </div>
</template>


<script>
    import {addHelpers} from '@/services/helper';
    import i18n from '@/services/i18n';

    export default addHelpers({
        data() {
            return {
                productAdditionalTabs: [
                    {label: i18n.t('productPage.additional_tabs_default'), value: 'default'},
                    {label: i18n.t('productPage.additional_tabs_custom'), value: 'custom'},
                    {label: i18n.t('productPage.additional_tabs_disabled'), value: 'disabled'},
                ],
            }
        },
    })
</script>
