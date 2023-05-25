<template>
    <div class="to-block-switch-input">
        <div class="to-block-switch">
            <to-label :icon="switchLabelIcon">{{ switchLabelTitle }}</to-label>
            <to-switch :value="getOption(optionSwitch)" @input="setOption(optionSwitch,$event)"></to-switch>
        </div>
        <div class="to-block-input">
            <to-label :icon="inputLabelIcon">{{ inputLabelTitle }}</to-label>
            <to-input :value="getOption(optionInput)" @input="setOption(optionInput,$event)"></to-input>
        </div>
    </div>
</template>

<script>
import { addHelpers } from '@/services/helper';

export default addHelpers({
    props: {
        switchLabelIcon: {
            type: String,
            required: false
        },
        switchLabelTitle: {
            type: String,
            required: true
        },
        inputLabelIcon: {
            type: String,
            required: false
        },
        inputLabelTitle: {
            type: String,
            required: true
        },
        optionSwitch: {
            type: String,
            required: true
        },
        optionInput: {
            type: String,
            required: true
        },
    }
});

</script>

<style lang="scss">
#thegem-options {
    .to-block-switch-input{
        display: flex;

        .to-block-switch{
            display: flex;
            flex-direction: column;
            width: 120px;
        }

        .to-block-input{
            display: flex;
            flex-direction: column;
            width: calc(100% - 120px);
            padding-left: 10px;
        }
    }
}
</style>
