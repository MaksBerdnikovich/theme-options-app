<template>
    <div>
        <to-panel id="panel.style">
            <to-panel-group :label-title="$t('panel.layout_style')">
                <to-radio-icon :value="getOption('')" @input="setOption('', $event)" :options="layoutStyleList"></to-radio-icon>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.page_paddings')" :responsive="true">
                <template v-slot:default="{ isDesktop }">
                    <to-block-padding v-if="isDesktop" option-prefix="page_paddings"/>
                    <to-block-padding v-if="!isDesktop" option-prefix="page_paddings"/>
                </template>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.backgrounds">
            <to-panel-group :label-title="$t('panel.background_type_frame')">
                <to-block-background optionPrefix="test" :tab-video="false"/>
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
                layoutStyleList: [
                    {icon:'Schemes-01',title:i18n.t('general.fullwidth'),value:'fullwidth'},
                    {icon:'Schemes-02',title:i18n.t('general.boxed'),value:'boxed'},
                    {icon:'Schemes-03',title:i18n.t('general.body_Frame'),value:'body-frame'}
                ]
            }
        }
    })
</script>
