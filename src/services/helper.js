import appConfig from '@/services/config';
import Api from '@/services/api';

//const mode = 'release';
const mode = 'development';
//const mode = 'future';

function getPrefixedOption() {
    return (name) => this.$store.getters.getOptionByPrefixedName(this.optionPrefix,name);
}

function getOption() {
    return (name) => this.$store.getters.getOptionByName(name);
}

function setPrefixedOption(name,value) {
    this.$store.commit({
        type: 'setOptionByPrefixedName',
        prefix: this.optionPrefix,
        name: name,
        value: value
    });
}

function setOption(name,value) {
    this.$store.commit({
        type: 'setOptionByName',
        name: name,
        value: value
    });
}

function getExtra() {
    return (name) => this.$store.getters['extra/getExtraByName'](name);
}

function setExtra(name,value) {
    this.$store.commit({
        type: 'extra/setExtraByName',
        name: name,
        value: value
    });
}

function getSetting() {
    return (name) => this.$store.getters['settings/getSettingByName'](name);
}

function setSetting(name,value) {
    this.$store.commit({
        type: 'settings/setSettingByName',
        name: name,
        value: value
    });
}

function isDevelopmentMode() {
    return mode === 'development';
}

function isFutureMode() {
    return mode === 'future';
}

export function addHelpers(config) {
    if (!config.computed) {
        config.computed = {};
    }

    if (!config.methods) {
        config.methods = {};
    }

    config.computed.getPrefixedOption = getPrefixedOption;
    config.computed.getOption = getOption;
    config.computed.getExtra = getExtra;
    config.computed.getSetting = getSetting;
    config.computed.isDevelopmentMode = isDevelopmentMode;
    config.computed.isFutureMode = isFutureMode;

    config.methods.setPrefixedOption = setPrefixedOption;
    config.methods.setOption = setOption;
    config.methods.setExtra = setExtra;
    config.methods.setSetting = setSetting;

    config.methods.api=Api;

    config.methods.adminUrl = (url) => appConfig.adminUrl + url;

    config.methods.getAdminPageUrl = (page) => {
        return appConfig.adminUrl + 'admin.php?page=' + page;
    };

    config.methods.opeUrlInNewTab = (url) => {
        window.open(url, '_blank');
    };

    config.methods.openUrl = (url) => {
        window.location.href = url;
    };

    return config;
}
