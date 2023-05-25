import Vue from 'vue';
import config from '@/services/config';


export default function api(action,data,options) {
    return Vue.axios.post(config.apiUrl,
        Object.assign({to_action: action}, data ? data : {}),
        Object.assign({ timeout: 15*1000 }, options ? options : {})
    );
}

