<template>
    <div class="to-radio-icon" :class="itemSize">
        <div v-for="option of options" v-bind:key="option.value" v-bind:class="{'item':true, 'to-active': value === option.value}">
            <button type="button" v-on:click="change(option.value)" :style="getImageStyles(option)">
                <to-svg-icon v-if="option.icon" :name="option.icon"/>
                <slot v-bind:option="option"></slot>
            </button>
            <span v-if="option.title">{{option.title}}</span>
        </div>
    </div>
</template>

<script>
export default {
    model: {
        prop: "value",
        event: "input"
    },

    props: {
        value: [String, Number, Boolean, Object],
        options: {
            type: Array,
            required: true
        },
        itemSize: {
            type: String,
            required: false
        },
    },

    methods: {
        change: function (value) {
            this.$emit("input", value);
        },
        getImageStyles(option) {
            if (!option.image) {
                return {};
            }

            let styles={
                'background-image':'url('+option.image+')'
            };

            if (option.imageType == 'repeat') {
                styles['background-repeat']='repeat';
            } else {
                styles['background-size']='cover';
            }

            if (option.imageType == 'contain') {
                styles['background-size']='contain';
            }

            return styles;
        }
    },
}
</script>

<style lang="scss">
#thegem-options {
    .to-radio-icon {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin: -20px -10px 0 -10px;

        .item {
            padding: 0 10px;
            margin-top: 20px;
            text-align: center;
            width: auto;

            &:first-child {
                margin-left: 0;
            }

            button {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0;
                margin: 0;
                width: 90px;
                height: 70px;

                &:before{
                    content: '';
                    position: absolute;
                    top: -4px;
                    left: -4px;
                    width: calc(100% + 8px);
                    height: calc(100% + 8px);
                    opacity: 0;

                    border: 2px solid transparent;
                    border-radius: $element-border-radius;
                    transition: $element-transition;
                }

                .svg-icon {
                    width: 90px;
                    height: 70px;
                }

                img{
                    width: 100%;
                    height: auto;
                }
            }

            span {
                display: flex;
                justify-content: center;
                margin-top: 10px;
                line-height: 1.5;
            }
        }

        .item.to-active {
            button {
                &:before{
                    border-color: $cyan-color;
                    opacity: 1;
                }

                &:hover {
                    opacity: 1;
                }
            }
        }
    }

    .to-radio-icon.pattern{
        .item {
            button {
                background-color: $light-border-color;
                color: $white-color;

                background-repeat: no-repeat;
                background-position: center center;
                background-size: 60% !important;

                svg{
                    width: 32px;
                    height: 32px;
                }
            }

            &:nth-child(4){
                button{
                    background-size: 100% !important;
                }
            }
        }
    }

    .to-radio-icon.no-hover{
        button{
            cursor: default;
            opacity: 1;
        }
    }

    .to-radio-icon.width-48{
        .item button .svg-icon{
            width: 48px;
            height: 48px;
        }

        &.light{
            .item button .svg-icon{
                color: #FFFFFF;
            }
        }
    }

    .to-radio-icon.width-50{
        margin: -20px -20px 0 -20px;

        .item {
            width: auto;
            padding: 0 20px;

            button {
                width: 50px;
                height: 50px;

                .svg-icon{
                    width: 50px;
                    height: 50px;
                }
            }
        }
    }

    .to-radio-icon.width-70{
        margin: -20px -20px 0 -20px;

        .item {
            width: auto;
            padding: 0 20px;

            button {
                width: 70px;
                height: 90px;

                .svg-icon{
                    width: 70px;
                    height: 90px;
                }
            }
        }
    }

    .to-radio-icon.width-80{
        margin: -20px -15px 0 -15px;

        .item {
            width: auto;
            padding: 0 15px;

            button {
                width: 80px;
                height: 27px;

                .svg-icon{
                    width: 80px;
                    height: 27px;
                }
            }
        }
    }

    .to-radio-icon.default{
        .item span {
            max-width: 90px;
        }
    }

    /*huck for hide-header-layout--vertical*/
    .to-radio-icon.hide-header-layout--vertical{
        .item:nth-child(5) {
            display: none;
        }
    }
}
</style>
