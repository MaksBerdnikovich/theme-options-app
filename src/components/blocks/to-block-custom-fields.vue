<template>
    <div class="to-block-cf">
        <div class="to-block-cf__wrap">
            <div class="to-block-cf__item" v-for="(item,index) in repeatList" :key="item.id">
                <div class="to-block-cf__title">
                    <div class="to-block-cf__title-name">
                        <to-input v-model="item.title" :placeholder="$t('repeater.label')"/>
                    </div>
                    <div class="to-block-cf__title-btns">
                        <to-button class="to-btn has-tooltip"
                                   icon="virtual-machine"
                                   v-tooltip.bottom="$t('button.copy')"
                                   @click="addItem(attr)">
                        </to-button>
                        <to-button class="to-btn has-tooltip"
                                   icon="delete"
                                   v-tooltip.bottom="$t('button.delete')"
                                   @click="deleteItem(index)">
                        </to-button>
                    </div>
                </div>

                <div class="to-block-cf__field">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label>{{ $t('repeater.field_type') }}</to-label>
                            <to-select v-model="item.type" :options="type"/>
                        </div>
                        <div class="col-2">
                            <to-label>{{ $t('repeater.meta_key') }}</to-label>
                            <to-input-clipboard v-model="item.key"/>
                        </div>
                    </div>
                </div>

                <div class="to-block-cf__field">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-label>{{ $t('repeater.value') }}</to-label>
                            <to-input v-model="item.value" />
                            <to-alert v-if="item.type === 'number'" :title="$t('alert.custom_fields_type_number')"/>
                        </div>

                        <div class="col-auto">
                            <to-button :processing="item.applying" type="systems" @click="apply({index, pt: postType, title: item.title, key: item.key, value: item.value})">
                                {{$t('repeater.apply_all')}}
                            </to-button>
                        </div>
                    </div>
                </div>

                <to-separator />
            </div>
        </div>

        <div class="to-block-cf__add">
            <to-button type="systems" @click="addItem()">{{$t('repeater.add_field')}}</to-button>
        </div>
    </div>
</template>

<script>

import { addHelpers } from '@/services/helper';
import i18n from '@/services/i18n';

export default addHelpers({

    data() {
        return {
            repeatList: [],
            type: [
                {label: i18n.t('repeater.field_text'), value: 'text'},
                {label: i18n.t('repeater.field_number'), value: 'number'},
                {label: i18n.t('repeater.field_link'), value: 'link'},
            ],
        }
    },

    model: {
        prop: "value",
        event: "input"
    },

    props: {
        value: [String],
        postType: {
            type: String,
            required: true,
        },
    },

    methods: {
        fixRepeatList() {
            if (this.repeatList.length == 0) this.addItem();
        },

        addItem(prototype) {
            if (prototype) {
                prototype = JSON.parse(JSON.stringify(prototype));
            } else {
                prototype = {
                    title: `${i18n.t('repeater.label')} ${this.repeatList.length + 1}`,
                    key: `_tg_cf_${Math.floor(Date.now() * Math.random() / 10000)}`,
                    value: '',
                    type: 'text',
                    applying: false,
                };
            }

            prototype.id = this.repeatList.length > 0 ? this.repeatList[this.repeatList.length-1].id + 1 : 1;

            this.repeatList.push(prototype);
        },

        deleteItem(index) {
            this.repeatList.splice(index, 1);
        },

        parseJson(data) {
            try {
                this.repeatList = JSON.parse(data);
            } catch (e) {
                this.repeatList = [];
            }
        },

        apply(payload) {
            this.repeatList[payload.index].applying = true

            this.api('applyCustomField', payload).then(
                response => {
                    this.repeatList[payload.index].applying = false
                    if (response.data && response.data.status === true) {
                        this.$modal.confirm({
                            title: this.$t('repeater.applying'),
                            htmlMessage: `"${response.data.title}" ${this.$t('repeater.applying_confirm')}`
                        }).then((result) => {
                            if (result) {
                                this.$store.dispatch('save');
                            }
                        });
                    } else {
                        this.$modal.alert({message:this.$t('repeater.applying_failed')});
                    }
                },
                () => {
                    this.repeatList[payload.index].applying = false
                    this.$modal.alert({message:this.$t('repeater.applying_failed')});
                }
            );
        },
    },

    watch: {
        value: function(newVal, oldVal) {
            if (newVal != oldVal) this.parseJson(newVal);
        },

        repeatList: {
            deep: true,
            handler: function() {
                this.fixRepeatList();
                this.$emit('input', JSON.stringify(this.repeatList));
            }
        }
    },

    mounted() {
        this.parseJson(this.value);
    }
})

</script>

<style lang="scss">
#thegem-options .to-block-cf {
    position: relative;
    display: flex;
    align-items: flex-start;

    &__wrap{
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
    }

    &__item{
        display: flex;
        flex-direction: column;

        .to-separator{
            margin: 30px 0;
        }

        &:last-child .to-separator{
            display: none;
        }
    }

    &__title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        min-height: 38px;
        border: 1px solid $light-border-color;
    }

    &__title-name {
        margin-right: auto;
        width: 100%;

        .to-input {
            min-height: 40px !important;
            border: 0 !important;
        }
    }

    &__title-btns {
        display: flex;
        margin-left: auto;

        button {
            border-left: 1px solid $light-border-color;
            border-radius: 0;
        }
    }

    &__field{
        margin-top: 20px;

        .form-grid {
            align-items: flex-start;
            flex-wrap: nowrap;
        }

        .to-btn.to-btn-systems {
            min-width: 100px;
            margin-top: 26px;
        }
    }

    &__add {
        margin-left: 20px;

        .to-btn.to-btn-systems {
            min-height: 42px;
            padding: 0 10px;
            min-width: 100px;
        }
    }
}

#thegem-options.theme-dark .to-block-cf {
    &__title-wrap {
        border: 1px solid $dark-border-color;
    }

    &__title-btns button {
        border-left: 1px solid $dark-border-color;
    }
}
</style>

