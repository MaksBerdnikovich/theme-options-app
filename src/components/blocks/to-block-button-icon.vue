<template>
    <div class="to-block-button-icon">
        <div class="form-line column" v-if="labelTitle">
            <div class="form-line__box">
                <to-label v-if="labelTitle">{{ labelTitle }}</to-label>
                <to-input :value="getPrefixedOption('text')" @input="setPrefixedOption('text',$event)"/>
            </div>
        </div>
        <div class="form-line" v-if="blockIcon && iconPositions">
            <div class="form-line__box">
                <to-label>{{ $t('addicon.icon_position') }}</to-label>
                <to-radio-toggle :value="getPrefixedOption('icon_position')" @input="setPrefixedOption('icon_position',$event)" :options="iconPosition"/>
            </div>
        </div>
        <div class="form-line" v-if="blockIcon">
            <div class="form-line__box">
                <to-block-icon :option-prefix="optionPrefix+'_icon'" :label-title="iconTitle ? iconTitle : $t('addicon.icon')"/>
            </div>
            <div class="form-line__box" v-if="blockIconColor">
                <to-color-picker :value="getPrefixedOption('icon_color')" @input="setPrefixedOption('icon_color',$event)" :label-title="$t('addicon.icon_color')" />
            </div>
        </div>
    </div>
</template>


<script>
    import {addHelpers} from '@/services/helper';
    import i18n from '@/services/i18n';

    export default addHelpers({
        data: () => {
            return {
                iconPosition: [
                    {icon:'align-left',value:'left',tooltip:i18n.t('general.left')},
                    {icon:'align-right',value:'right',tooltip:i18n.t('general.right')},
                ],
            }
        },

        props: {
            optionPrefix: {
                type: String,
                required: true
            },
            labelTitle: {
                type: String,
                required: false
            },
            iconTitle: {
                type: String,
                required: false
            },
            iconPositions: {
                type: Boolean,
                required: false,
                default: true
            },
            blockIcon: {
                type: Boolean,
                required: false,
                default: true
            },
            blockIconColor: {
                type: Boolean,
                required: false,
                default: false
            },
        }
    });
</script>

<style lang="scss">
    #thegem-options {
        .to-block-button-icon{

            .form-line{
                display: flex;
                align-items: flex-start;
                margin: 0 -10px;

                .form-line__box{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    padding: 0 10px;
                }

                &.column{
                    .form-line__box{
                        flex-direction: column;
                    }
                }

                .to-input-group{
                    width: 100%;
                }


            }

            .form-line + .form-line{
                margin-top: 20px;
            }
        }

        .form-line {
            .to-block-icon{
                width: 220px;
            }
        }
    }
</style>
