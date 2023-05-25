<template>
    <div>
        <to-panel id="panel.custom_fields">
            <to-panel-group v-if="!getOption('custom_fields_item_data')" class="no-title">
                <to-alert
                    :title="$t('alert.custom_fields_before')"
                    :titleAfterLink="$t('alert.custom_fields_after')"
                    :titleLink="$t('alert.custom_fields_link')"
                    :href="adminUrl('admin.php?page=thegem-theme-options#/single-pages')" target="_blank"
                />
            </to-panel-group>

            <to-panel-group v-if="getOption('custom_fields_item_data')" :label-title="$t('panel.custom_fields')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_custom_fields')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <template v-for="(field, idx) in getOption('custom_fields_item_data')">
                            <div class="col-2 col-tb-1" v-bind:key="field.key + '_1' + idx">
                                <to-label>{{ field.title }}</to-label>
                                <to-input
                                    :value="getOption(`custom_fields_item_data.${idx}.value`)"
                                    @input="setOption(`custom_fields_item_data.${idx}.value`, $event)"/>
                                <to-alert v-if="field.type === 'number'" :title="$t('alert.custom_fields_type_number')"/>
                            </div>

                            <div class="col-2 col-tb-1" v-bind:key="field.key + '_2' + idx">
                                <to-label>{{ field.title }} {{ $t('general.meta_key') }}</to-label>
                                <to-input-clipboard
                                    :value="getOption(`custom_fields_item_data.${idx}.key`)"
                                    @input="setOption(`custom_fields_item_data.${idx}.key`, $event)"
                                    style="max-width: 140px" :isReadonly="true" readonly/>
                            </div>
                        </template>
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
    },

    computed: {
    }
})
</script>
