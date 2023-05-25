<template>
    <div v-bind:class="classComputed" class="">
        <label>
            <to-svg-icon v-if="icon" :name="icon"/>
            <slot/>
        </label>
    </div>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                required: false
            },
            type: {
                type: String,
                required: false,
            },
        },

        computed: {
            classComputed() {
                let classes = ['form-line-label', this.type];

                return classes;
            }
        }
    }
</script>


<style lang="scss">
#thegem-options {
    .form-line-label {
        display: flex;
        width: 100%;
        padding-bottom: 8px;
        text-align: left;

        &.top-gap{
            padding-top: 5px;
        }

        label {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            line-height: 1.5;
            cursor: auto;

            svg {
                margin-right: 5px;
            }
        }

        &.alert{
            color: $light-gray-color;

            label{
                align-items: flex-start;
            }

            svg {
                margin: 2px 5px 0 0;
                min-width: 16px;
            }

            p{
                margin: 0;
            }

            a{
                color: $cyan-color;
                text-decoration: underline;
            }
        }
    }

    .form-line-label.text-separator {
        margin-top: -20px;
        padding: 0;
        min-height: 30px;
        align-items: center;
        text-align: center;
        justify-content: center;

        label{
            text-transform: uppercase;
        }
    }
}
</style>
