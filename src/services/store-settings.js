import config from '@/services/config';
import Api from '@/services/api';

let saving = false;
let modifiedWhileSaving = false;

export default {
    namespaced: true,

    state() {
        return JSON.parse(JSON.stringify(config.settings));
    },

    getters: {
        getSettingByName: state => name => {
            return state[name];
        }
    },

    mutations: {
        setSettingByName(state, payload) {
            state[payload.name] = payload.value;
            this.dispatch('settings/updated')
        },
    },

    actions: {
        updated() {
            if (saving) {
                modifiedWhileSaving = true;
                return;
            }

            saving = true;
            modifiedWhileSaving = false;

            Api('saveSettings',{
                settings: JSON.parse(JSON.stringify(this.state.settings)),
            }).then(
                () => {
                    saving = false;
                    if (modifiedWhileSaving) {
                        this.dispatch('settings/updated');
                    }
                },
                () => {
                    saving = false;
                    if (modifiedWhileSaving) {
                        this.dispatch('settings/updated');
                    }
                }
            );

        }
    }
};
