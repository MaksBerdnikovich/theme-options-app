<template>
    <div class="to-block-image-select">
        <to-file-select
            class="to-block-image-file-select"
            v-if="!value"
            :value="value"
            :labelTitle="$t('general.choose_image')"
            :returnAllData="returnAllData"
            @input="updateInput"
        />
        <div v-if="value" class="to-block-image-select-preview">
            <img :src="returnAllData ? value.url : value" />
            <to-button v-on:click="clear()" icon="trash-can"></to-button>
        </div>
    </div>
</template>

<script>
import {addHelpers} from '@/services/helper';


export default addHelpers({
    model: {
        prop: "value",
        event: "input"
    },

    props: {
        value: [String, Number, Boolean, Object],
        returnAllData: {
            type: Boolean,
            required: false,
            default: false
        },
        labelTitle: {
            type: String,
            required: true
        }
    },

    computed: {
        styles() {
            return {
                width: this.getOption(this.optionWidth) + 'px'
            }
        }
    },

    methods: {
        clear() {
            this.updateInput(null);
        },

        updateInput: function (value) {
            this.$emit("input", value);
        }
    }
})
</script>

<style lang="scss">
#thegem-options {
    .to-block-image-select{
        display: flex;
        align-items: flex-start;

        .to-block-image-file-select{
            position: relative;
            max-width: 100%;

            button{
                width: 210px;
                height: 210px;

                img {
                    width: 100%;
                    height: auto;
                }
            }

            span{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                margin-top: 15px;
            }
        }

        .to-block-image-select-preview {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 210px;
            height: 210px;

            background-image: url("../../assets/img/pattern.jpg");
            background-repeat: repeat;

            img {
                max-height: 210px;
                max-width: 210px;
            }

            button{
                position: absolute;
                top: 10px;
                right: 10px;
                min-height: 30px;
                i{
                    min-width: 30px;
                }
            }
        }

        .to-block-label-slider{
            width: calc(100% - 210px);
            margin-left: auto;
            padding-left: 20px;
        }
    }
}
</style>
