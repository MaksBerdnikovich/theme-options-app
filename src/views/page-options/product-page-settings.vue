<template>
    <div>
        <to-panel id="panel.appearance_grid">
            <to-panel-group :label-title="$t('panel.highlighted_product')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_product_highlighted') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Highlighted_Product_in_Products_Grid.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <to-label>{{ $t('settings.highlighted_product') }}</to-label>
                <to-switch trueValue="1" falseValue="0" :value="getOption('product_item_data.highlight')" @input="setOption('product_item_data.highlight', $event)"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('product_item_data.highlight') == 1" :label-title="$t('panel.highlight_type')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_product_highlight_type') }}
                        </div>
                    </div>
                </template>
                <to-radio-icon :value="getOption('product_item_data.highlight_type')" @input="setOption('product_item_data.highlight_type',$event)" :options="highlightTypeList" />
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.hover_with_alternative_product')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_product_hover_with_alternative_product') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Hover_with_Alternative_Product_Image.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <to-switch trueValue="0" falseValue="1" :value="getOption('product_item_data.thegem_product_disable_hover')" @input="setOption('product_item_data.thegem_product_disable_hover', $event)"/>
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
                highlightTypeList: [
                    {icon:'Schemes-24',title:i18n.t('general.squared'),value:'squared'},
                    {icon:'Schemes-25',title:i18n.t('general.horizontal'),value:'horizontal'},
                    {icon:'Schemes-26',title:i18n.t('general.vertical'),value:'vertical'},
                ],
            }
        },
    })
</script>
