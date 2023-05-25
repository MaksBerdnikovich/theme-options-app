<template>
    <codemirror v-if="cmOptions" :value="value" @input="updateInput" :options="cmOptions"></codemirror>
</template>

<script>
    import {addHelpers} from '@/services/helper';

    export default addHelpers({
        data() {
            return {
                modes: {
                    'css': 'text/css',
                    'js': 'text/javascript',
                    'html': 'text/html'
                }
            }
        },

        model: {
            prop: "value",
            event: "input"
        },

        props: {
            value: [String],
            lang: {
                type: String,
                required: true,
            },
        },

        computed: {
            cmOptions: function () {
                if (!this.modes[this.lang]) {
                    window.console.error('to-codemirror: lang ' + this.lang + ' is unsupported');
                    return null;
                }

                return {
                    tabSize: 4,
                    mode: this.modes[this.lang],
                    theme: this.getSetting('theme') === 'dark' ? 'darcula' : 'idea',
                    lineNumbers: true,
                    line: true,
                    viewportMargin: Infinity
                }
            }
        },
        methods: {
            updateInput: function (value) {
                this.$emit("input", value);
            }
        }
    });
</script>

<style lang="scss">
#thegem-options {
    .CodeMirror {
        position: relative;
        width: 100%;
        min-height: 300px;
        overflow: hidden;

        border: 1px solid $light-border-color;
        border-radius: $element-border-radius;
    }

    .CodeMirror-gutters {
        border-right: 1px solid $light-border-color;
        white-space: nowrap;
        text-align: center;
    }

    .CodeMirror-lines {
        padding: 5px 0;
    }

    .CodeMirror-scroll {
        max-height: 300px;
    }

    &.theme-dark {
        .CodeMirror {
            border: 1px solid $dark-border-color
        }
    }
}
</style>
