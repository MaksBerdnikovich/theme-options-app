<template>
    <div class="to-modal-credentials">
        <div class="close"><to-button :icon="'delete'" @click="$emit('close')" :type="'default'"></to-button></div>
        <div class="form" ref="mydiv" v-html="preparedHtml"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            preparedHtml: ''
        }
    },

    props: {
        html: {
            type: String,
            required: true
        },

        doneCallback: {
            required: true
        }
    },

    methods: {
        serialize(form) {
            var i, j, q = {};
            for (i = form.elements.length - 1; i >= 0; i = i - 1) {
                if (form.elements[i].name === "") {
                    continue;
                }
                switch (form.elements[i].nodeName) {
                case 'INPUT':
                    switch (form.elements[i].type) {
                    case 'text':
                    case 'hidden':
                    case 'password':
                    case 'button':
                    case 'reset':
                    case 'submit':
                        q[form.elements[i].name] = form.elements[i].value;
                        break;
                    case 'checkbox':
                    case 'radio':
                        if (form.elements[i].checked) {
                            q[form.elements[i].name] = form.elements[i].value;
                        }
                        break;
                    }
                    break;
                case 'file':
                    break;
                case 'TEXTAREA':
                    q[form.elements[i].name] = form.elements[i].value;
                    break;
                case 'SELECT':
                    switch (form.elements[i].type) {
                    case 'select-one':
                        q[form.elements[i].name] = form.elements[i].value;
                        break;
                    case 'select-multiple':
                        for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                            if (form.elements[i].options[j].selected) {
                                q[form.elements[i].name] = form.elements[i].value;
                            }
                        }
                        break;
                    }
                    break;
                case 'BUTTON':
                    switch (form.elements[i].type) {
                    case 'reset':
                    case 'submit':
                    case 'button':
                        q[form.elements[i].name] = form.elements[i].value;
                        break;
                    }
                    break;
                }
            }
            return q;
        }
    },

    created() {
        this.preparedHtml = this.html;
    },

    mounted() {
        let form=this.$refs['mydiv'].getElementsByTagName('form')[0];

        form.addEventListener('submit',(event) => {
            event.preventDefault();
            this.$store.commit({
                type:'extra/setExtraByName',
                name: 'credentials',
                value: this.serialize(event.target)
            });

            this.$emit('close');

            this.doneCallback();
        });
    }
}
</script>

<style lang="scss">
#thegem-options {
    .to-modal-credentials{
        position: relative;

        .close{
            position: absolute;
            top: 10px;
            right: 20px;
            z-index: 5;

            .btn-icon{
                min-width: auto;
            }
        }

        #request-filesystem-credentials-title{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 60px;
            padding: 0 20px 0 60px;
            margin: 0;

            background-color: $white-background;
            box-shadow: $element-bottom-shadow;

            font-size: 14px;
            text-transform: uppercase;
            font-weight: 300;

            &:before{
                content: '';
                position: absolute;
                left: 20px;
                top: 50%;
                transform: translate(0, -50%);

                width: 30px;
                height: 30px;

                background-image: url("../../assets/img/logo-dark.png");
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
            }
        }

        #request-filesystem-credentials-desc{
            padding: 20px 30px;
            margin: 0;
            font-size: 13px;
            line-height: 2;
        }

        label{
            display: flex;
            flex-direction: column;
            margin-bottom: 15px;
            padding: 0 30px;

            span,em{
                display: flex;
                width: 100%;
                padding-bottom: 8px;
                text-align: left;

                font-family: 'Roboto';
                font-size: 12px;
                line-height: 1;
                color: $light-body-color;
            }
            em{
                font-weight: 300;
                font-size: 11px;
                padding-bottom: 0;
                padding-top: 5px;
            }

            input[type='text'],
            input[type='password']{
                width: 100%;
                height: 27px;
                min-height: auto;
                padding: 0 10px;
                margin: 0;
                font-size: 13px;
                font-weight: 400;
                color: $light-body-color;
                line-height: 1;
                outline: none;
                border-radius: 3px;
                border: 1px solid $light-border-color;
                background-color: $white-background;
            }
        }

        fieldset{
            padding: 0 30px;
            margin: 0;

            legend{
                display: flex;
                width: 100%;
                padding: 0;
                margin: 0;
                text-align: left;

                font-family: 'Roboto';
                font-size: 12px;
                line-height: 1;
                color: $light-body-color;
            }

            label{
                display: inline-block;
                vertical-align: middle;
                padding: 0;
                margin-top: 12px;
                margin-right: 20px;
                margin-bottom: 15px;

                input[type=radio]{
                    position: relative;
                    width: 20px;
                    height: 20px;
                    border-radius: 100%;
                    margin: -3px 5px 0 0;
                }

                input[type=radio]:checked::before{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    margin: 0;
                    border-color: $light-border-color !important;
                    background-color: $cyan-background;
                }
            }
        }

        .request-filesystem-credentials-action-buttons{
            padding: 10px 30px 30px 30px;
            margin: 0;

            input.button{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0;
                margin: 0;
                width: 100%;
                min-height: 40px;
                border: 0;
                border-radius: 3px;
                background-color: $cyan-background;
                color: $white-color;
                text-transform: uppercase;
                line-height: 1.3;
                text-align: center;
                transition: all 0.3s;
            }
        }
    }

    &.theme-dark{
        .to-modal-credentials .close .to-btn{
            background-color: $white-background;
        }
    }
}
</style>
