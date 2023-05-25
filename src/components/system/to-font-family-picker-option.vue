<template>
    <div v-observe-visibility="visibilityChanged" v-bind:style="styles">
       <slot/>
    </div>
</template>

<script>
import fontLoader from '@/services/font-loader';
import { bus } from '@/services/bus';


export default {
    data() {
        return {
            isVisible: false,
            timeoutHandler: null
        };
    },

    props: {
        font: {
            type: String,
            required: true
        }
    },

    computed: {
        styles() {
            return {
                'font-family': this.font
            };
        }
    },

    mounted() {
            bus.$on('toFontFamilyPickerOptionVisibilityChanged',this.visibilityBusEventHandler);

    },

    beforeDestroy() {
            bus.$off('toFontFamilyPickerOptionVisibilityChanged',this.visibilityBusEventHandler);

            if (this.timeoutHandler) {
                clearTimeout(this.timeoutHandler);
            }
    },

    methods: {
        visibilityBusEventHandler() {
            if (this.timeoutHandler) {
                clearTimeout(this.timeoutHandler);
            }

            if (this.isVisible && !fontLoader.isLoaded(this.font,true)) {
                this.timeoutHandler = setTimeout(() => {
                    fontLoader.load(this.font,true);
                }, 1*1000);
            }
        },

        visibilityChanged: function(isVisible) {
            if (this.isVisible != isVisible) {
                this.isVisible = isVisible;

                bus.$emit('toFontFamilyPickerOptionVisibilityChanged');
            }
        }
    }
}
</script>
