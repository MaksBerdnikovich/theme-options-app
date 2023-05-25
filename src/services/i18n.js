import Vue from 'vue'
import VueI18n from 'vue-i18n'
import config from './config'

Vue.use(VueI18n);

function loadLocaleMessages() {
    let messages={};
    messages[config.i18n.locale]=config.i18n.messages;
    return messages;
}

export default new VueI18n({
    locale: config.i18n.locale,
    messages: loadLocaleMessages()
})


