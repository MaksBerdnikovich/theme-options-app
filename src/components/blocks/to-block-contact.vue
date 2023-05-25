<template>
    <div class="to-block-contact">
        <to-label v-if="labelTitle">{{ labelTitle }}</to-label>
        <div class="form-line">
            <div class="col">
                <to-input
                    :value="getPrefixedOption('')"
                    @input="setPrefixedOption('',$event)"
                />
            </div>
        </div>
        <div class="form-line" v-if="blockIcon">
            <div class="col">
                <to-block-icon :option-prefix="optionPrefix+'_icon'" :label-title="$t('addicon.icon_top_area')"/>
            </div>
            <div class="col">
                <to-color-picker
                    :value="getPrefixedOption('icon_color')"
                    @input="setPrefixedOption('icon_color',$event)"
                    :label-title="$t('addicon.icon_color')" />
            </div>
        </div>
    </div>
</template>


<script>
import {addHelpers} from '@/services/helper';
//import i18n from '@/services/i18n';

export default addHelpers({
    data: () => {
        return {}
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
        blockIcon: {
            type: Boolean,
            required: false,
            default: true
        },
    }
});
</script>

<style lang="scss">
#thegem-options {
    .to-block-contact{

        .form-line{
            display: flex;
            align-items: flex-start;
            margin: 0 -10px;

            .col{
                display: flex;
                width: 100%;
                padding: 0 10px;
            }

            .to-input-group{
                width: 100%;
            }

            .to-block-icon{
                width: 220px;
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
