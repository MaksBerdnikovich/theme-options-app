<template>
    <div class="to-menu-item">
        <div v-bind:class="{'item-link':true, '': collapsed, active: !collapsed, notChild: !hasChildren}" v-on:click="onClick">
            <router-link :to="routeLink ? routeLink:route">
                <i class="title-icon">
                    <to-svg-icon :name="icon"/>
                </i>
                <span>{{ title }}</span>
                <i v-if="hasChildren" class="collapsed-icon">
                    <to-svg-icon name="arrow-bullet-right"/>
                </i>
            </router-link>
        </div>
        <div v-if="hasChildren" v-bind:class="{'item-collapsed':true, hide: collapsed, show: !collapsed}">
            <slot/>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            collapsed: true
        };
    },

    props: {
        title: {
            type: String,
            required: true
        },
        route: {
            type: String,
            required: true
        },
        routeLink: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: false
        },
        hasChildren: {
            type: Boolean,
            required: false,
            default: true
        }
    },

    watch: {
        '$route'(to) {
            this.collapsed = true;
            for (let route of to.matched) {
                if (route.path == this.route) {
                    this.collapsed = false;
                }
            }
        }
    },

    methods: {
        onClick() {

            // page options
            if (document.getElementById('thegem_page_options')) {
                let mainMenu = document.querySelector('#thegem_page_options .main-menu');
                if (mainMenu.classList.contains('top-sticky')) {
                    let wrap = document.getElementById('thegem_page_options');
                    window.scrollTo(0, wrap.offsetTop);
                }
            }
        }
    }
};
</script>

<style lang="scss">
#thegem-options {
    .to-menu-item {
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;

        .item-link {
            position: relative;
            display: flex;
            width: 100%;
            justify-content: space-between;
            z-index: 5;

            a {
                display: flex;
                align-items: center;
                width: 100%;
                min-height: 35px;
                padding: 5px 0;
                background-color: $anthracite-background;

                span {
                    font-size: 13px;
                    font-weight: 400;
                    line-height: 1.5;
                    padding: 0 5px 0 0;
                    color: $white-color;
                }

                .title-icon,
                .collapsed-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 30px;
                    color: $light-body-color;
                    transition: $element-transition;
                    margin-top: 1px;
                }

                .collapsed-icon {
                    margin-left: auto;
                }

                &:hover {
                    opacity: 1;

                    span {
                        opacity: 0.8;
                        transition: $element-transition;
                    }
                }
            }
        }

        .item-link.active{
            .collapsed-icon {
                transform: rotate(90deg);
            }
            a {
                background-color: $cyan-background;
                color: $white-color;
                opacity: 1;

                i, span {
                    opacity: 1;
                    color: $white-color;
                }
            }
        }
        .item-link.notChild{
            .router-link-active {
                background-color: $cyan-background;
                color: $white-color;
                opacity: 1;

                i, span {
                    opacity: 1;
                    color: $white-color;
                }
            }
        }

    }

    .item-collapsed {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        overflow: hidden;
        background-color: #424b56;
        z-index: 0;

        a {
            position: relative;
            display: flex;
            width: 100%;
            height: 30px;
            padding: 0 15px 0 40px;
            align-items: center;
            font-size: 12px;
            font-weight: 400;
            line-height: 1.5;
            color: $gray-color;

            &:before {
                content: '';
                position: absolute;
                left: 30px;
                top: 50%;
                transform: translateY(-50%);
                width: 4px;
                height: 4px;
                border-radius: 100%;
                background-color: $white-background;
                opacity: 0.4;
            }

            &.router-link-active {
                color: $white-color;

                &:before {
                    opacity: 1;
                }
            }
        }

    }

    .item-collapsed.hide {
        height: 0;
        margin-top: -50%;
        transition: $element-transition;
    }

    .item-collapsed.show {
        height: auto;
        padding: 5px 0;
        margin-top: 0;
        transition: $element-transition;
    }
}

#thegem-options.page-options {

    .item-link {
        a {
            background-color: $white-background;
            span{
                color: $light-body-color;
            }
        }
    }

    .item-link.active {
        a.router-link-active {
            background-color: $cyan-background;
            opacity: 1;

            span{
                color: $white-color;
            }

            i {
                color: $white-color;
            }
        }
    }

}
</style>
