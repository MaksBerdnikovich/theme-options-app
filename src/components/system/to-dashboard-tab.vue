<template>
    <div class="to-dashboard-tab" v-bind:class="classObject">
        <a :href="url"><b>{{ title }}</b></a>
    </div>
</template>


<script>
import { addHelpers } from '@/services/helper';
import config from '@/services/config';

export default addHelpers({
    props: {
        page: {
            type: String,
            required: true
        }
    },

    computed: {
        classObject() {
            const classObj = {};

            if (this.page == config.dashboardPage) {
                classObj['active'] = true;
            }

            return classObj;
        },

        url() {
            return config.adminUrl + 'admin.php?page=' + this.page;
        },

        title () {
            return this.$t('menu.' + this.page);
        }
    }
});
</script>


<style lang="scss">
    #thegem-options {
        .to-dashboard-tab{
            display: flex;
            margin-left: 20px;

            &:first-child{
                margin-left: 0;
            }

            a{
                position: relative;
                display: flex;
                flex-basis: auto;
                min-height: 40px;
                align-items: center;
                padding: 0 10px 0 25px;
                z-index: 1;

                font-size: 16px;

                background-color: $dashboard-nav-bg;
                border-top-left-radius: $dashboard-nav-border-radius;
                border-top-right-radius: $dashboard-nav-border-radius;

                > b{
                    color: $dashboard-nav-color;
                }

                &:after{
                    content: '';
                    position: absolute;
                    right: -40px;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 40px 0 0 40px;
                    border-color: transparent transparent transparent $dashboard-nav-bg;
                }
            }

            &.active{
                a{
                    background-color: $dashboard-nav-bg-active;
                    z-index: 5;
                    > b{
                        color: $dashboard-nav-color-active;
                    }
                    &:after{
                        border-color: transparent transparent transparent $dashboard-nav-bg-active;
                    }
                }
            }

            @media (max-width: 900px) {
                a{
                    font-size: 15px;
                }
            }

            @media (max-width: 767px) {
                margin-left: 0;
                width: 100%;
                margin-bottom: 20px;

                a{
                    width: 100%;
                    font-size: 15px;
                    padding: 0 15px;
                    border-radius: $dashboard-nav-border-radius;

                    &:after{
                        display: none;
                    }
                }
            }
        }
    }
</style>























