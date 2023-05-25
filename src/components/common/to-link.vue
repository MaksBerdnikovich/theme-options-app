<template>
    <a v-if="href" :href="href" :target="target" v-bind:class="classComputed" :disabled="disabled || processing">
        <i v-if="iconComputed" class="btn-icon"><to-svg-icon :name="iconComputed"/></i>
        <span class="btn-text" v-if="$slots.default"><slot/></span>
    </a>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: false,
            default: 'default'
        },
        icon: {
            type: String,
            required: false,
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        processing: {
            type: Boolean,
            required: false,
            default: false
        },
        route: {
            type: String,
            required: false
        },
        href: {
            type: String,
            required: false
        },
        target: {
            type: String,
            required: false,
            default: '_self'
        },
    },

    computed: {
        iconComputed() {
            return this.processing ? 'preloader' : this.icon;
        },

        classComputed() {
            let classes=['to-link to-btn', 'to-btn-' + this.type];
            if (this.processing) {
                classes.push('animation-spin');
            }

            return classes;
        }
    },
}
</script>

<style lang="scss">
#thegem-options {
    $btn-width: 105px;
    $btn-height: 40px;
    $btn-icon-width: 40px;

    .to-btn{
        position: relative;
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;

        max-width: $btn-width;
        min-height: $btn-height;

        border: 0;
        border-radius: $element-border-radius;
        color: $light-body-color;
        background-color: $white-background;

        font-size: 10px;
        text-transform: uppercase;
        line-height: 1.3;
        text-align: left;

        &.to-btn-primary{
            background-color: $cyan-background;
            color: $white-color;

            transition-property: background,color,opacity;
            transition-duration: .3s;
        }
        &.to-btn-secondary{
            background-color: $gray-background;
            color: $light-body-color;

            transition-property: background,color,opacity;
            transition-duration: .3s;
        }
        &.to-btn-outline{
            background-color: transparent;
            color: $dark-blue-color;
            border: 1px solid $element-outline-button;

            transition-property: background,color,opacity;
            transition-duration: .3s;

            &.alert{
                color: $red-color;
                border: 1px solid $red-color;
            }

            &:hover{
                background-color: $element-outline-button;
                color: $white-color;

                &.alert{
                    color: $white-color;
                    background-color: $red-color;
                }
            }
        }
        &.to-btn-systems{
            max-width: 100%;
            min-height: 27px;
            width: 100%;
            justify-content: center;

            text-align: center;
            text-transform: none;
            font-size: 13px;

            background-color: $white-background;
            color: $light-body-color;
            border: 1px solid $light-border-color;
            border-radius: $element-border-radius;

            transition-property: background,color,opacity;
            transition-duration: .3s;

            .btn-icon{
                min-width: auto;
                margin-right: 5px;
            }

            &:hover{
                background-color: $light-toggle-active-background;
                border-color: $light-toggle-active-background;
                color: $white-color;
            }

            &:disabled{
                background-color: $white-background;
                color: $light-body-color;
                border: 1px solid $light-border-color;
                opacity: 0.5;
            }
        }

        .btn-text{
            display: flex;
            align-items: center;
        }

        .btn-icon{
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: $btn-icon-width;
            height: 100%;
        }

        &.animation-spin{
            .svg-icon--preloader{
                animation: spin 2s infinite linear;
            }
        }
    }

    .btn-group{
        display: flex;
        align-items: center;

        li{
            display: flex;
            align-items: center;
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    &.theme-dark {
        .to-btn{
            color: $dark-body-color;
            background-color: $anthracite-background;

            &.to-btn-primary{
                background-color: $cyan-background;
                color: $white-color;
            }
            &.to-btn-secondary{
                background-color: $anthracite-background;
                color: $dark-body-color;
            }
            &.to-btn-systems{
                background-color: $anthracite-background;
                color: $dark-body-color;
                border: 1px solid $dark-border-color;

                &:hover{
                    background-color: $dark-border-color;
                    color: $white-color;
                }
            }
        }
    }

}
</style>
