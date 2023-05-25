import Vue from 'vue';
import VModal from 'vue-js-modal';
import ToModalAlert from "@/components/system/to-modal-alert";
import ToModalConfirm from "@/components/system/to-modal-confirm";

Vue.use(VModal,{ dynamic: true, dynamicDefaults: { clickToClose: true } });

Vue.prototype.$modal.alert = function(config) {
    return this.show(ToModalAlert, config, {
        height: 'auto'
    });
};

// resolves to true if user answers yes, and rejects to false if user answers no
Vue.prototype.$modal.confirm = function(config) {
    const promise=new Promise( (resolve) => {
        this.show(ToModalConfirm, Object.assign({}, config, {
            resolve: resolve
        }), {
            height: 'auto'
        }, {
            closed() {
                resolve(false);
            }
        });
    });

    return promise;
};
