<template>
    <div class="to-block-padding">
        <div class="item">
            <to-toggle-button false-value-icon="broken-link" true-value-icon="link" :value="getPrefixedOption('locked') || false" @input="setPrefixedOption('locked',$event)"></to-toggle-button>
        </div>
        <div class="item">
            <to-input type="number" :value="getPrefixedOption('left')" @input="setLinkedOption('left',$event)" icon="back-arrow" />px
        </div>
        <div class="item">
            <to-input type="number" :value="getPrefixedOption('right')" @input="setLinkedOption('right',$event)" icon="forward-button" />px
        </div>
        <div class="item">
            <to-input type="number" :value="getPrefixedOption('top')" @input="setLinkedOption('top',$event)" icon="scroll-up" />px
        </div>
        <div class="item">
            <to-input type="number" :value="getPrefixedOption('bottom')" @input="setLinkedOption('bottom',$event)" icon="scroll-down" />px
        </div>
    </div>
</template>

<script>

import { addHelpers } from '@/services/helper';

export default addHelpers({
    props: {
        optionPrefix: {
            type: String,
            required: true
        },
    },

    methods: {
        setLinkedOption: function(name,value) {
            this.setPrefixedOption(this.getPrefixedOption('locked') ? ['left','right','top','bottom'] : name, value);
        }
    }
})

</script>

<style lang="scss">
#thegem-options {
    .to-block-padding{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        margin-top: -15px;

        .item{
            display: flex;
            align-items: center;
            margin-right: 15px;
            margin-top: 15px;

            &:last-child{
                margin-right: 0;
            }
        }

        .to-toggle-btn{
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 30px;
            height: 27px;
            padding: 0;
            background-color: $light-toggle-background;
            border-radius: $element-border-radius;

            &.to-toggle-btn-true{
                background-color: $light-toggle-active-background;
                color: $white-color;
            }
        }
        .to-input-group{
            max-width: 80px;
            margin-right: 5px;

            .input-icon{
                margin-top: 1px;
            }
        }
    }
}

#thegem-options.theme-dark {
    .to-block-padding{
        .to-toggle-btn{
            background-color: $dark-toggle-background;

            &.to-toggle-btn-true{
                background-color: $dark-toggle-active-background;
                color: $white-color;
            }
        }
    }
}
</style>
