<template>
    <div class="to-input-button-group">
        <to-input :value="value" @input="updateInput"/>
        <to-file-select-button :value="value" @input="updateInput" :type="type"/>
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
            value: String,
            type: {
                type: String,
                required: true
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
    .to-input-button-group {
        display: flex;
        align-items: center;

        .to-input-group {
            width: 100%;
        }

        .to-file-select-button {
            margin-left: 10px;

            .svg-icon {
                margin: 0 5px 0 0;
            }
        }
    }
</style>
