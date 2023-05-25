<template>
    <div>
        <to-panel id="panel.general">
            <to-panel-group :label-title="$t('panel.sidebar')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_sidebar_general_sidebar') }}
                        </div>
                    </div>
                </template>
                <to-switch trueValue="1" falseValue="0" :value="getOption('sidebar_show')" @input="setOption('sidebar_show', $event)"/>
            </to-panel-group>

            <to-panel-group v-bind:class="{'development-mob': isFutureMode}" v-if="getOption('sidebar_show') === '1'" :label-title="$t('panel.sidebar_style')" :responsive="isFutureMode">
                <template v-slot:default="{ isDesktop }">
                    <to-radio-icon v-if="isDesktop" :value="getOption('sidebar_position')" @input="setOption('sidebar_position',$event)" :options="positionList"></to-radio-icon>
                    <to-radio-icon v-if="!isDesktop" :value="getOption('')" @input="setOption('',$event)" :options="positionList"></to-radio-icon>
                </template>
            </to-panel-group>

            <to-panel-group v-if="getOption('sidebar_show') === '1'" :label-title="$t('panel.sidebar_sticky')">
                <to-switch trueValue="1" falseValue="0" :value="getOption('sidebar_sticky')" @input="setOption('sidebar_sticky', $event)"/>
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
                positionList: [
                    {icon:'Schemes-23',title:i18n.t('settings.sidebar_left'),value:'left'},
                    {icon:'Schemes-22',title:i18n.t('settings.sidebar_right'),value:'right'}
                ],
            }
        }
    })
</script>
