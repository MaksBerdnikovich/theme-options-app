<template>
    <div class="form-grid to-block-term-search">
        <div class="col-2 term-search__block">
            <div class="term-search__block-item" v-for="(term,index) in termList" :key="term.id">
                <div class="term-search__title">
                    <div class="term-search__title-name">
                        <to-input v-model="term.title"></to-input>
                    </div>
                    <div class="term-search__title-btns">
                        <to-button class="to-btn has-tooltip"
                                   icon="virtual-machine"
                                   v-tooltip.bottom="$t('button.copy')"
                                   @click="addItem(term)">
                        </to-button>
                        <to-button class="to-btn has-tooltip"
                                   icon="delete"
                                   v-tooltip.bottom="$t('button.delete')"
                                   @click="deleteItem(index)">
                        </to-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-auto term-search__add">
            <to-button type="systems" @click="addItem()">{{$t('search.add_term_item')}}</to-button>
        </div>
    </div>
</template>

<script>

import { addHelpers } from '@/services/helper';

export default addHelpers({

    data() {
        return {
            termList: [],
        }
    },

    model: {
        prop: "value",
        event: "input"
    },

    props: {
        value: [String],
    },

    methods: {
        fixTermList() {
            if (this.termList.length == 0) {
                this.addItem();
            }
        },

        addItem(prototype) {
            if (prototype) {
                prototype = JSON.parse(JSON.stringify(prototype));
            } else {
                prototype = {
                    title: 'Search Term '+ (this.termList.length + 1)
                };
            }

            prototype.id =  this.termList.length > 0 ? this.termList[this.termList.length-1].id + 1 : 1;

            this.termList.push(prototype);
        },

        deleteItem(index) {
            this.termList.splice(index, 1);
        },

        parseJson(data) {
            try {
                this.termList = JSON.parse(data);
            } catch (e) {
                this.termList = [];
            }
        }
    },

    watch: {
        value: function(newVal, oldVal) {
            if (newVal != oldVal) {
                this.parseJson(newVal);
            }
        },

        termList: {
            deep: true,
            handler: function() {
                this.fixTermList();
                this.$emit('input', JSON.stringify(this.termList));
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
        .to-block-term-search {
            display: flex;
            flex: auto;
            align-items: flex-start;

            .term-search__block-item{
                & + .term-search__block-item{
                    margin-top: 15px;
                }
            }

            .term-search__title{
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 100%;
                border: 1px solid $light-border-color;
            }

            .term-search__title-name{

                input{
                    border: 0;
                }
            }

            .term-search__title-btns{
                display: flex;
                margin-left: auto;

                button{
                    border-left: 1px solid $light-border-color;
                    border-radius: 0;
                    min-height: 27px;
                    min-width: 27px;
                }
            }

            .term-search__add{
                min-width: 160px;

                .btn-text{
                    padding-right: 0;
                }

                button{
                    min-height: 29px;
                    padding: 0 15px;
                }
            }
        }
    }
</style>

