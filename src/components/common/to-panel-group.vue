<template>
    <div class="to-panel-group">
        <div class="to-panel-group-title">
            <span>{{ labelTitle }}</span>
            <i v-if="labelDeprecated">({{labelDeprecated}})</i>

            <to-help-tooltip v-if="this.$slots.tooltip"><slot name="tooltip"/></to-help-tooltip>

            <to-dropdown-icon v-if="responsive" :value="responsiveType" @input="setResponsiveType($event)" :options="typeOptions"/>
        </div>
        <div class="to-panel-group-content">
            <slot v-bind:isDesktop="isDesktop"
                v-bind:isTablet="isTablet"
                v-bind:isMobile="isMobile"
                v-bind:responsiveType="responsiveType"
            />
        </div>
    </div>
</template>

<script>
import i18n from '@/services/i18n';
import {bus} from '@/services/bus';

export default {
    data() {
        return {
            responsiveType: 'desktop'
        }
    },

    props: {
        labelTitle: {
            type: String,
            required: false,
        },
        responsive: {
            type: Boolean,
            required: false,
            default: false
        },
        labelDeprecated: {
            type: String,
            required: false,
        },
        desktop: {
            type: Boolean,
            required: false,
            default: true
        },
        tablet: {
            type: Boolean,
            required: false,
            default: false
        },
        mobile: {
            type: Boolean,
            required: false,
            default: true
        },
    },

    computed: {
        typeOptions() {
            var options=[];

            if (this.desktop) {
                options.push({icon:'monitor',tooltip:i18n.t('general.desktop'),value:'desktop'});
            }
            if (this.tablet) {
                options.push({icon:'tablet',tooltip:i18n.t('general.tablet'),value:'tablet'});
            }
            if (this.mobile) {
                options.push({icon:'android',tooltip:i18n.t('general.mobile'),value:'mobile'});
            }
            return options;
        },

        isDesktop() {
            return this.responsiveType === 'desktop';
        },
        isTablet() {
            return this.responsiveType === 'tablet';
        },
        isMobile() {
            return this.responsiveType === 'mobile';
        }
    },

    methods: {
        setResponsiveType(value) {
            bus.$emit('setResponsiveType', value);
        }
    },

    created() {
        bus.$on('setResponsiveType', value => {
            this.responsiveType = value;
        });
    }
};
</script>

<style lang="scss">
#thegem-options {
    .to-panel-group {
        display: flex;
        //outline: 1px solid #cc0000;

        &.development{
            .to-panel-group-title{
                background-color: #f8dce1;
            }
        }
        &.development-mob{
            .to-panel-group-title{
                background-color: #dce4f8;
            }
        }

        .to-panel-group-title {
            width: 170px;
            padding-right: 20px;

            line-height: 1.5;

            span{
                margin-right: 5px;
            }

            i{
                display: block;
                color: $light-gray-color;
                text-transform: lowercase;
                font-style: normal;
            }

            .v-popover {
                padding: 0;
                margin: 1px 0 0 0;
                display: inline-block;
                vertical-align: top;
                color: $cyan-color;

                visibility: hidden;
                opacity: 0;
                cursor: pointer;
                transition: $element-transition;

                &.open {
                    opacity: 1;
                    visibility: visible;
                }
            }

            &:hover {
                .v-popover {
                    opacity: 1;
                    visibility: visible;
                }
            }

        }

        .to-panel-group-content {
            width: calc(100% - 170px);

            .to-changed-settings{
                width: 100%;
            }

            .to-changed-settings + .to-changed-settings{
                margin-top: 20px;
            }
        }
    }

    .to-panel-group + .to-panel-group {
        margin-top: 30px;
    }
    .to-panel-group + .to-panel-subtitle{
        margin-top: 30px;
    }
    .to-panel-subtitle + .to-panel-group{
        margin-top: 30px;
    }

    .to-panel-group.no-title {
        .to-panel-group-title {
            display: none;
        }
        .to-panel-group-content{
            width: 100%;
        }
    }

    @media (max-width: 1919px) {
        .to-panel-group.tmce-full{
            .to-panel-group-title{
                display: none;
            }
            .to-panel-group-content{
                width: 100%;
            }
        }
    }

    @media (max-width: 1279px) {
        .to-panel-group {

            .to-panel-group-title {
                width: 150px;
            }
            .to-panel-group-content {
                width: calc(100% - 150px);
            }
        }
    }
}
</style>
