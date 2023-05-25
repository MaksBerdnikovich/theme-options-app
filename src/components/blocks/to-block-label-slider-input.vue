<template>
    <div class="to-block-label-slider" v-bind:class="{'input-invalid-value': this.inputInvalidValue}">
        <to-label v-if="labelTitle" :icon="labelIcon">{{ labelTitle }}</to-label>
        <div class="item">
            <to-slider :min="min" :max="max" :interval="step" :value="value" @change="updateInput"/>
            <to-input type="number" :min="min" :max="max" :step="step" :value="value" @input="updateInput"/>
            {{ unit }}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                inputInvalidValue: false
            }
        },

        model: {
            prop: 'value',
            event: 'input'
        },

        props: {
            value: [String, Number],
            labelIcon: {
                type: String,
                required: false
            },
            labelTitle: {
                type: String,
                required: false
            },
            min: {
                type: Number,
                required: true
            },
            max: {
                type: Number,
                required: true
            },
            step: {
                type: Number,
                required: false,
                default: 1
            },
            unit: {
                type: String,
                required: true
            }
        },

        methods: {
            updateInput: function (value) {
                this.inputInvalidValue = false;
                if (value > this.max || value < this.min) {
                    this.inputInvalidValue = true;
                    return;
                }

                this.$emit("input", value);
            }
        }
    }
</script>


<style lang="scss">

#thegem-options {
    .to-block-label-slider {
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        .item{
            display: flex;
            width: 100%;
            align-items: center;

            .to-input-group{
                min-width: 60px;
                margin-right: 5px;
            }
        }

        &.input-invalid-value{
            .item{
                color: $red-color;
                
                .to-input{
                    color: $red-color;
                    border-color: $red-color;
                }
                .to-input:focus{
                    border-color: $red-color;
                }
            }
        }
    }
}
</style>
