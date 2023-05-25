import Vue from 'vue';
import Vuex from 'vuex';
import config from '@/services/config';
import settings from '@/services/store-settings';


Vue.use(Vuex);

var timeoutHandler = null;

var store;

if  (config.isEmbedded) {
    store = new Vuex.Store({
        modules: {
            settings: settings
        },

        state() {
            return {
                'iconSelectorIcon': '',
                'iconSelectorPack': ''
            };
        },

        getters: {
            getOptionByName: state => name => {
                let parts = name.split('.');
                let value = parts.length == 1 ? state[name] : state.page_options[parts[0]][parts[1]];

                if (typeof value === 'undefined') {
                    window.console.error('trying to get unknown option "' + name + '"')
                }

                //window.console.log('get option "' + name + '" as "' + value + '"');
                return value;
            },

            getOptionByPrefixedName: state => (prefix, name) => {
                let option = prefix + (name!='' ? '_' + name : '');

                let parts = option.split('.');
                let value = parts.length == 1 ? state[option] : state.page_options[parts[0]][parts[1]];

                if (typeof value === 'undefined') {
                    window.console.error('trying to get unknown option "' + option + '"')
                }

                //window.console.log('get option "' + option + '" as "' + value + '"');
                return value;
            }
        },

        mutations: {
            setOptionByName(state, payload) {
                window.console.log('set option "' + payload.name + '" to "' + payload.value + '"');

                let parts = payload.name.split('.');
                if (parts.length == 1) {
                    state[payload.name] = payload.value;
                } else {
                    state.page_options[parts[0]][parts[1]] = payload.value;
                }

                this.dispatch('optionsUpdated');
            },

            setOptionByPrefixedName(state, payload) {
                if (!Array.isArray(payload.name)) {
                    payload.name=[payload.name];
                }

                for(var optionName of payload.name) {
                    var option = payload.prefix + (optionName != '' ? '_' + optionName : '');
                    window.console.log('set option "' + option + '" to "' + payload.value + '"');

                    let parts = option.split('.');
                    if (parts.length == 1) {
                        state[option] = payload.value;
                    } else {
                        state.page_options[parts[0]][parts[1]] = payload.value;
                    }
                }

                this.dispatch('optionsUpdated');
            },

            optionsUpdated(/*state*/) {
            },
        },

        actions: {
            init() {
                this.dispatch('optionsUpdated');
            },

            optionsUpdated() {
                if (timeoutHandler) {
                    clearTimeout(timeoutHandler);
                }

                timeoutHandler = setTimeout(()=>{
                    this.commit('optionsUpdated');
                    timeoutHandler = null;
                },100);
            }
        },

        strict: false
    });
}

export default store;
