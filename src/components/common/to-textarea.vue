<template>
    <textarea :type="type" :placeholder="placeholder" class="to-textarea" :value="value" @input="updateInput" :height="height" v-bind:style="{height: height}" />
</template>

<script>
    export default {
        model: {
            prop: "value",
            event: "input"
        },
        props: {
            value: [String, Number],
            type: {
                type: String,
                required: false,
                default: 'text'
            },
            placeholder: {
                type: String,
                required: false,
            },
            height: {
                type: String,
                required: false,
                default: '200px'
            }
        },
        methods: {
            updateInput: function (e) {
                this.$emit("input", e.target.value);
            }
        },
    }
</script>

<style lang="scss">
#thegem-options {
    .to-textarea {
        display: flex;
        padding: 10px;
        width: 100%;
        line-height: 1.5 !important;
        font-size: 13px;
        border: 1px solid $light-border-color;
        border-radius: $element-border-radius;
    }
}

#thegem-options.theme-dark {
    .to-textarea {
        color: $dark-body-color;
        border: 1px solid $dark-border-color;
        background-color: $anthracite-background;
    }
}
</style>
