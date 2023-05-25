<template>
    <div class="to-block-additional-tabs">
        <div class="to-block-additional-tabs__wrap">
            <div class="to-block-additional-tabs__item" v-for="(item,index) in repeatList" :key="item.id">
                <div class="to-block-additional-tabs__title">
                    <div class="to-block-additional-tabs__title-name">
                        <to-input v-model="item.title" :placeholder="$t('repeater.tab_title')"/>
                    </div>
                    <div class="to-block-additional-tabs__title-btns">
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

                <div class="to-block-additional-tabs__field">
                    <div class="form-grid">
                        <div class="col-2 col-tb-1">
                            <to-label>{{ $t('repeater.content_type') }}</to-label>
                            <to-select v-model="item.type" :options="type"/>
                        </div>
                        <div class="col-2 col-tb-1">
                            <to-label>{{ $t('repeater.tab_priority') }}</to-label>
                            <to-input type="number" v-model="item.priority" />
                        </div>
                        <div class="col-1" v-if="item.type === 'text'">
                            <to-wysiwyg v-model="item.text_content" :height="'120px'" />
                        </div>
                        <div class="col-1" v-if="item.type === 'section'">
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-2 col-tb-1">
                                        <to-label>{{$t('repeater.select_template')}}</to-label>
                                        <to-select
                                            v-model="item.section_content" :options="sectionContent"
                                            v-on:right-button-clicked="showPreview($event)"
                                            v-on:edit-button-clicked="showEditPage($event)"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-2 col-tb-1">
                                        <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                        <to-link :href="sectionCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <to-separator />
                </div>
            </div>
        </div>

        <div class="to-block-additional-tabs__add">
            <to-button type="systems" @click="addItem()">{{$t('repeater.tab_add')}}</to-button>
        </div>
    </div>
</template>

<script>

import { addHelpers } from '@/services/helper';
import i18n from '@/services/i18n';
import config from '@/services/config';

export default addHelpers({

    data() {
        const sectionContent = JSON.parse(JSON.stringify(config.sectionBuilderTemplates));
        for(let item of sectionContent) {
            if (item.preview) {
                item.rightButton = {icon: 'eye'};
            }

            if (item.edit) {
                item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
            }
        }

        return {
            repeatList: [],
            type: [
                {label: i18n.t('repeater.tab_editor'), value: 'text'},
                {label: i18n.t('repeater.tab_section'), value: 'section'},
            ],
            text_content: '',
            sectionContent,
        }
    },

    model: {
        prop: "value",
        event: "input"
    },

    props: {
        value: [String],
    },

    computed: {
        sectionCreateUrl() {
            return config.sectionBuilderCreateUrl
        },

        sectionImportUrl() {
            return config.sectionBuilderImportUrl
        }
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
                    title: `${i18n.t('repeater.tab_title')} ${this.repeatList.length + 1}`,
                    type: 'text',
                    priority: '',
                    text_content: '',
                    section_content: '',
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

        showPreview(item) {
            window.open(item.preview,'_blank');
        },

        showEditPage(item) {
            window.open(item.edit,'_blank');
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
#thegem-options .to-block-additional-tabs {
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
        //min-width: calc(100% + 120px);
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

