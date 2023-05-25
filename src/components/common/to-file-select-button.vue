<template>
    <div class="to-file-select-button">
        <to-file-select :value="value" @input="updateInput" :popup-title="popupTitle" :popup-button-title="popupButtonTitle" :type="type">
            <template v-slot:default="toFileSelect">
                <button type="button" v-on:click="toFileSelect.select()"><to-svg-icon :name="'browse-folder'"/> {{ $t('general.select') }}</button>
            </template>
        </to-file-select>
    </div>
</template>

<script>
//import i18n from '@/services/i18n';

export default {
    model: {
        prop: "value",
        event: "input"
    },

    props: {
        value: String,
        popupTitle: {
            type: String,
            required: false,
        },
        popupButtonTitle: {
            type: String,
            required: false,
        },
        type: {
            type: String,
            required: false
        }
    },

    methods: {
        updateInput: function (e) {
            this.$emit("input", e);
        }
    }
}
</script>


<style lang="scss">
#thegem-options {
    .to-file-select-button{

        .to-file-select{
            button{
                display: flex;
                align-items: center;
                justify-content: center;
                width: auto;
                height: auto;
                padding: 0 10px;
                min-width: 94px;
                min-height: 27px;

                border-radius: $element-border-radius;
                border: 1px solid $light-border-color;

                &:hover{
                    background-color: $light-toggle-active-background;
                    border-color: $light-toggle-active-background;
                    color: $white-color;
                    opacity: 1;
                }
            }
        }
    }
}
</style>
