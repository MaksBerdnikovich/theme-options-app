<template>
    <div v-bind:class="[{ readonly: isReadonly }, 'to-input-clipboard']">
        <input :value="value" ref="message" :readonly="isReadonly"/>
        <to-button icon="virtual-machine" v-on:click="copyText()" v-tooltip.top="$t('button.copy')"></to-button>
    </div>
</template>

<script>
import {addHelpers} from '@/services/helper';

export default addHelpers({
    data() {
        return {
            message: ''
        }
    },

    model: {
        prop: "value",
        event: "input"
    },

    props: {
        value: String,
        isReadonly: {
            type: Boolean,
            required: false,
            default: false
        },
    },

    methods: {
        copyText() {
            const el = this.$refs.message;
            el.select();
            el.setSelectionRange(0, 99999);
            document.execCommand('copy');
        }
    }
})
</script>

<style lang="scss">
#thegem-options .to-input-clipboard {
    position: relative;
    display: flex;
    align-items: center;

    input{
        height: 27px;
        min-height: auto;
        border-radius: $element-border-radius;
        border: 1px solid $light-border-color;
        background-color: $white-background;
        width: 100%;
        padding: 0 10px;
    }

    &.readonly input{
        opacity: 0.8;
        background-color: transparent;
        border: 0;
        padding: 0;
    }

    .to-btn,
    .to-btn:hover{
        border: 0;
        min-height: auto !important;
        background-color: transparent;
        color: inherit;
        min-width: auto !important;
    }
}

#thegem-options.theme-dark {
    input{
        border: 1px solid $dark-border-color;
        background-color: $anthracite-background;
    }
}
</style>
