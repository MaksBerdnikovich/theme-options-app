require('intersection-observer');

import Vue from 'vue';
import AppTheme from './views/app-theme.vue';
import AppPage from './views/app-page.vue';
import AppDashboard from './views/app-dashboard.vue';
import AppEmbedded from './views/app-embedded.vue';
import routerTheme from './router-theme';
import routerPage from './router-page';
import routerDashboard from './router-dashboard';
import routerEmbedded from './router-embedded';
import i18n from '@/services/i18n';
import storeTheme from '@/services/store-theme';
import storePage from '@/services/store-page';
import storeDashboard from '@/services/store-dashboard';
import storeEmbedded from '@/services/store-embedded';
import vSelect from 'vue-select';
import VueSlider from 'vue-slider-component';
import vClickOutside from 'v-click-outside';
import VueScrollTo from 'vue-scrollto';
import toSelectOpenIndicator from './components/system/to-select-open-indicator.vue';
import toSelectDeselect from './components/system/to-select-deselect.vue';
import Sticky from 'vue-sticky-directive';
import VTooltip from 'v-tooltip';
import VueCodemirror from 'vue-codemirror';
import VueObserveVisibility from 'vue-observe-visibility';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueVirtualScroller from 'vue-virtual-scroller';
import config from '@/services/config';

import 'codemirror/mode/css/css.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/htmlmixed/htmlmixed.js';

Vue.use(VueObserveVisibility);
Vue.use(VueVirtualScroller);
Vue.use(VueAxios, axios);
Vue.use(require('vue-prevent-parent-scroll'));

require('@/services/modal');

Vue.use(VueCodemirror, /* {
    options: { theme: 'base16-dark', ... },
    events: ['scroll', ...]
  } */);

Vue.component('vue-select',vSelect);

vSelect.props.components.default = () => ({
  OpenIndicator:  toSelectOpenIndicator,
  Deselect: toSelectDeselect
});

Vue.component('to-slider',VueSlider);

Vue.use(vClickOutside);

Vue.use(VTooltip, {
    // Default tooltip placement relative to target element
    defaultPlacement: 'top',
    // Default CSS classes applied to the tooltip element
    defaultClass: 'vue-tooltip-theme',
    // Default CSS classes applied to the target element of the tooltip
    defaultTargetClass: 'has-tooltip',
    // Is the content HTML by default?
    defaultHtml: true,
    // Default HTML template of the tooltip element
    // It must include `tooltip-arrow` & `tooltip-inner` CSS classes (can be configured, see below)
    // Change if the classes conflict with other libraries (for example bootstrap)
    defaultTemplate: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    // Selector used to get the arrow element in the tooltip template
    defaultArrowSelector: '.tooltip-arrow, .tooltip__arrow',
    // Selector used to get the inner content element in the tooltip template
    defaultInnerSelector: '.tooltip-inner, .tooltip__inner',
    // Delay (ms)
    defaultDelay: 0,
    // Default events that trigger the tooltip
    defaultTrigger: 'hover focus',
    // Default position offset (px)
    defaultOffset: 0,
    // Default container where the tooltip will be appended
    defaultContainer: '#thegem-options',
    defaultBoundariesElement: undefined,
    defaultPopperOptions: {},
    // Class added when content is loading
    defaultLoadingClass: 'tooltip-loading',
    // Displayed when tooltip content is loading
    defaultLoadingContent: '...',
    // Hide on mouseover tooltip
    autoHide: true,
    // Close tooltip on click on tooltip target?
    defaultHideOnTargetClick: true,
    // Auto destroy tooltip DOM nodes (ms)
    disposeTimeout: 5000,
    // Options for popover
    popover: {
        defaultPlacement: 'bottom',
        // Use the `popoverClass` prop for theming
        defaultClass: 'vue-popover-theme',
        // Base class (change if conflicts with other libraries)
        defaultBaseClass: 'tooltip popover',
        // Wrapper class (contains arrow and inner)
        defaultWrapperClass: 'wrapper',
        // Inner content class
        defaultInnerClass: 'tooltip-inner popover-inner',
        // Arrow class
        defaultArrowClass: 'tooltip-arrow popover-arrow',
        // Class added when popover is open
        defaultOpenClass: 'open',
        defaultDelay: 0,
        defaultTrigger: 'click',
        defaultOffset: 0,
        defaultContainer: '#thegem-options',
        defaultBoundariesElement: undefined,
        defaultPopperOptions: {},
        // Hides if clicked outside of popover
        defaultAutoHide: true,
        // Update popper on content resize
        defaultHandleResize: true,
    },
});

Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: -40,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

Vue.use(Sticky);

Vue.config.productionTip = false;

const requireComponent = require.context(
  // components folder
  './components',
  // process subfolders
  true,
  // regexp
  /\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName.split('/').pop().replace(/\.\w+$/, '');

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  );
});

const router = config.isTheme ? routerTheme : ((config.isPage || config.isTaxonomy) ? routerPage : (config.isEmbedded ? routerEmbedded:routerDashboard));
const store = config.isTheme ? storeTheme : ((config.isPage || config.isTaxonomy) ? storePage : (config.isEmbedded ? storeEmbedded:storeDashboard));

store.dispatch('init');

// IE createEvent polyfill
(function () {
    if ( typeof window.CustomEvent === "function" ) return false; //If not IE

    function CustomEvent ( event, params ) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = document.createEvent( 'CustomEvent' );
      evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
      return evt;
     }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
})();

// gutenberg scroll

let scrollHandlerBindTryLeft = 100;

function scrollHandlerBindTry() {
    let containers = document.getElementsByClassName('interface-interface-skeleton__content');
    if (containers.length==0 && scrollHandlerBindTryLeft-->0) {
        setTimeout(scrollHandlerBindTry,100);
        return;
    }

    function generateScrollEvent() {
        let event = new Event('scroll');
        window.dispatchEvent(event);
    }

    if (containers.length>0) {
        containers[0].addEventListener('scroll', generateScrollEvent);
        generateScrollEvent();
    }
}

if (config.isEmbedded) {
    let initialized = false;
    window.thegemThemeOptions = {
        init() {
            if (!initialized) {
                let el = document.createElement('div');
                el.setAttribute("id", "thegem-themeoptions");

                document.body.appendChild(el);

                new Vue({
                    router,
                    store,
                    i18n,
                    render: h => h( AppEmbedded )
                }).$mount('#thegem-themeoptions');

                initialized = true;
            }
        }
    }
} else {
    if (config.isPage) {
        window.thegemThemeOptions = {
            init() {
            }
        }
    }

    new Vue({
        router,
        store,
        i18n,
        render: h => h(config.isTheme ? AppTheme : ((config.isPage || config.isTaxonomy) ? AppPage : AppDashboard) )
    }).$mount('#thegem-themeoptions');

    scrollHandlerBindTry();
}

