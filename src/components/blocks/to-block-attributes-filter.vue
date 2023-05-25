<template>
    <div class="to-block-attr-filter">
        <div class="attr-filter__block">
            <div class="attr-filter__block-item" v-for="(attr,index) in attrList" :key="attr.id">
                <div class="attr-filter__title">
                    <div class="attr-filter__title-name">
                        <to-input v-model="attr.title" />
                    </div>
                    <div class="attr-filter__title-btns">
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

                <div class="attr-filter__info">
                    <div class="form-grid">
                        <div :class="isSwatches ? 'col-3' : 'col-2'">
                            <to-label>{{ $t('productArchive.filter_attr_attribute') }}</to-label>
                            <to-select v-model="attr.attribute" :options="attributeOptions"/>
                        </div>
                        <div v-if="!isSwatches" class="col-2">
                            <to-label>{{ $t('productArchive.filter_attr_query_type') }}</to-label>
                            <to-select v-model="attr.query_type" :options="queryTypeOptions"/>
                        </div>
                        <div v-if="isSwatches" class="col-3">
                            <to-label>{{ $t('productArchive.number_of_value_to_show') }}</to-label>
                            <to-input v-model="attr.value_to_show"/>
                        </div>
                        <div v-if="isSwatches" class="col-3">
                            <to-label>{{ $t('productArchive.attribute_name') }}</to-label>
                            <to-switch v-model="attr.attribute_name" :trueValueTitle="$t('general.show')" :falseValueTitle="$t('general.hide')"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="attr-filter__add">
            <to-button type="systems" @click="addItem()">{{$t('productArchive.filter_attr_add_item')}}</to-button>
        </div>
    </div>
</template>

<script>

import { addHelpers } from '@/services/helper';
import config from '@/services/config';
import i18n from '@/services/i18n';


export default addHelpers({

    data() {
        return {
            attrList: [],
            attributeOptions: config.WCAttributes,
            queryTypeOptions: [
                    {label: i18n.t('productArchive.filter_attr_query_type_and'), value: 'and'},
                    {label: i18n.t('productArchive.filter_attr_query_type_or'), value: 'or'},
            ],
        }
    },

    model: {
        prop: "value",
        event: "input"
    },

    props: {
        value: [String],
        isSwatches: {
            type: Boolean,
            required: false,
            default: false
        },
    },

    methods: {
        fixAttrList() {
            if (this.attrList.length == 0) {
                this.addItem();
            }
        },

        addItem(prototype) {
            if (prototype) {
                prototype = JSON.parse(JSON.stringify(prototype));
            } else {
                prototype = {
                    title: 'Attribute '+ (this.attrList.length + 1),
                    attribute: '',
                    query_type: 'AND',
                };
            }

            prototype.id =  this.attrList.length > 0 ? this.attrList[this.attrList.length-1].id + 1 : 1;

            this.attrList.push(prototype);
        },

        deleteItem(index) {
            this.attrList.splice(index, 1);
        },

        parseJson(data) {
            try {
                this.attrList = JSON.parse(data);
            } catch (e) {
                this.attrList = [];
            }
        }
    },

    watch: {
        value: function(newVal, oldVal) {
            if (newVal != oldVal) {
                this.parseJson(newVal);
            }
        },

        attrList: {
            deep: true,
            handler: function() {
                this.fixAttrList();
                this.$emit('input', JSON.stringify(this.attrList));
            }
        }
    },

    mounted() {
        this.parseJson(this.value);
    }
})

</script>

<style lang="scss">
    #thegem-options {
        .to-block-attr-filter {
            display: flex;
            flex: auto;
            flex-wrap: wrap;
            align-items: flex-start;

            .attr-filter__block{
                margin-right: auto;
                width: calc(100% - 135px);
            }

            .attr-filter__block-item{
                & + .attr-filter__block-item{
                    margin-top: 30px;
                }
            }

            .attr-filter__title{
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                min-height: 38px;
                margin-bottom: 20px;
                border: 1px solid $light-border-color;
            }

            .attr-filter__title-name{
                margin-right: auto;
                width: 100%;

                input{
                    border: 0;
                }
            }

            .attr-filter__title-btns{
                display: flex;
                margin-left: auto;

                button{
                    border-left: 1px solid $light-border-color;
                    border-radius: 0;
                }
            }

            .attr-filter__area{
                width: calc(100% / 3);
                margin-top: 30px;
            }

            .attr-filter__add{
                margin-left: auto;

                button{
                    min-height: 42px;
                    padding: 0 15px;
                }
            }
        }
    }
</style>

