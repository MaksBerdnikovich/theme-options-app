<template>
    <div class="to-block-popups-trigger">
        <div class="to-block-popups-trigger__repeater">
            <div class="to-block-popups-trigger__item" v-for="(trigger,index) in triggersList" :key="trigger.id">
                <div class="to-block-popups-trigger__item-title">
                    <div class="to-block-popups-trigger__item-title-name">
                        <to-input v-model="trigger.title"></to-input>
                    </div>
                    <div class="to-block-popups-trigger__item-title-btns">
                        <to-button
                            class="to-btn has-tooltip" icon="virtual-machine"
                            v-tooltip.bottom="$t('button.copy')"
                            @click="addItem(trigger)"
                        />
                        <to-button
                            class="to-btn has-tooltip" icon="delete"
                            v-tooltip.bottom="$t('button.delete')"
                            @click="deleteItem(index)"
                        />
                    </div>
                </div>

                <div class="to-block-popups-trigger__item-options">
                    <div class="form-grid">
                        <div v-bind:class="(trigger.trigger_type === 'on_scroll' || trigger.trigger_type === 'on_exit') ? 'col-1' : 'col-2'">
                            <to-label>{{$t('popups.trigger_type')}}</to-label>
                            <to-select v-model="trigger.trigger_type" :options="triggerType" />
                        </div>
                        <div class="col-2" v-if="trigger.trigger_type === 'on_page_load'">
                            <to-label>{{$t('popups.popup_delay')}}</to-label>
                            <to-input v-model="trigger.popup_delay"/>
                        </div>
                        <div class="col-2" v-if="trigger.trigger_type === 'on_scroll'">
                            <to-label>{{$t('popups.scroll_direction')}}</to-label>
                            <to-select v-model="trigger.scroll_direction" :options="scrollDirection" />
                        </div>
                        <div class="col-2" v-if="trigger.trigger_type === 'on_scroll'">
                            <to-label>{{$t('popups.within')}}</to-label>
                            <to-block-label-slider-input :min="0" :max="100" unit="%" v-model="trigger.within"/>
                        </div>
                        <div class="col-2" v-if="trigger.trigger_type === 'on_click'">
                            <to-label>{{$t('popups.unique_id')}}</to-label>
                            <to-input v-model="trigger.unique_id" :readonly="'readonly'"/>
                        </div>
                        <div class="col-2" v-if="trigger.trigger_type === 'after_activity'">
                            <to-label>{{$t('popups.inactivity')}}</to-label>
                            <to-input v-model="trigger.inactivity"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="to-block-popups-trigger__add">
            <to-button type="systems" @click="addItem()">{{$t('popups.trigger_add')}}</to-button>
        </div>
    </div>
</template>

<script>

import { addHelpers } from '@/services/helper';
import i18n from '@/services/i18n';

export default addHelpers({

    data() {
        return {
            triggersList: [],
            triggerType: [
                {label: i18n.t('popups.trigger_type_on_page_load'), value: 'on_page_load'},
                {label: i18n.t('popups.trigger_type_on_scroll'), value: 'on_scroll'},
                {label: i18n.t('popups.trigger_type_on_click'), value: 'on_click'},
                {label: i18n.t('popups.trigger_type_on_exit'), value: 'on_exit'},
                {label: i18n.t('popups.trigger_type_after_activity'), value: 'after_activity'},
            ],
            scrollDirection: [
                {label: i18n.t('popups.down'), value: 'down'},
                {label: i18n.t('popups.up'), value: 'up'},
            ],
        }
    },

    model: {
        prop: "value",
        event: "input"
    },

    props: {
        value: [String, Number, Boolean, Object],
    },

    methods: {
        fixTriggersList() {
            if (this.triggersList.length === 0) {
                this.addItem();
            }
        },

        addItem(prototype) {
            if (prototype) {
                prototype = JSON.parse(JSON.stringify(prototype));
            } else {
                prototype = {
                    title: 'Trigger '+ (this.triggersList.length + 1),
                    trigger_type: 'on_page_load',
                    popup_delay: '',
                    scroll_direction: 'down',
                    within: '30',
                    unique_id: `trigger-${Math.floor(Date.now() * Math.random())}`,
                    inactivity: '',
                };
            }

            prototype.id =  this.triggersList.length > 0 ? this.triggersList[this.triggersList.length-1].id + 1 : 1;

            this.triggersList.push(prototype);
        },

        deleteItem(index) {
            this.triggersList.splice(index, 1);
        },

        parseJson(data) {
            try {
                this.triggersList = JSON.parse(data);
            } catch (e) {
                this.triggersList = [];
            }
        }
    },

    watch: {
        value: function(newVal, oldVal) {
            if (newVal != oldVal) {
                this.parseJson(newVal);
            }
        },

        triggersList: {
            deep: true,
            handler: function() {
                this.fixTriggersList();
                this.$emit('input', JSON.stringify(this.triggersList));
            }
        }
    },

    mounted() {
        this.parseJson(this.value);
    }
})

</script>

<style lang="scss">
#thegem-options .to-block-popups-trigger {
    display: flex;
    flex: auto;
    flex-wrap: wrap;
    align-items: flex-start;

    &.popups-trigger--po .form-grid .col-2{
        width: 100%;
    }

    &.popups-trigger--po .to-block-popups-trigger__repeater,
    &.popups-trigger--po .to-block-popups-trigger__item-title{
        max-width: 380px;
        margin-right: 0;
    }

    &.popups-trigger--po .to-block-popups-trigger__add {
        margin-left: 20px;
    }

    &__repeater {
        margin-right: auto;
        width: calc(100% - 135px);
    }

    &__item{
        margin-top: 30px;

        &:first-child{
            margin-top: 0;
        }
    }

    &__item-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-height: 38px;
        margin-bottom: 20px;
        border: 1px solid $light-border-color;
    }

    &__item-title-name {
        margin-right: auto;
        width: 100%;

        .to-input-group .to-input {
            border: 0;
        }
    }

    &__item-title-btns {
        display: flex;
        margin-left: auto;

        button {
            border-left: 1px solid $light-border-color;
            border-radius: 0;
        }
    }

    &__add {
        margin-left: auto;

        .to-btn.to-btn-systems {
            min-height: 42px;
            padding: 0 15px;
        }
    }
}
</style>

