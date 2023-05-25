<template>
    <div>
        <to-panel id="panel.logo">
            <to-panel-group :label-title="$t('panel.logo_desktop')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.logo_desktop') }}
                        </div>
                    </div>
                </template>
                <to-block-logo-select option-image="logo" option-width="logo_width" :label-title="$t('logo.desktop_logo_width')"/>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.logo_desktop_light')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.logo_desktop_light') }}
                        </div>
                    </div>
                </template>
                <to-block-logo-select option-image="logo_light" option-width="logo_width" :label-title="$t('logo.desktop_logo_width')"/>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.logo_mobile')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.logo_mobile') }}
                        </div>
                    </div>
                </template>
                <to-block-logo-select option-image="small_logo" option-width="small_logo_width" :label-title="$t('logo.mobile_logo_width')"/>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.logo_mobile_light')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.logo_mobile_light') }}
                        </div>
                    </div>
                </template>
                <to-block-logo-select option-image="small_logo_light" option-width="small_logo_width" :label-title="$t('logo.mobile_logo_width')"/>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.favicon">
            <to-panel-group :label-title="$t('panel.favicon')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.favicon') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-image-select :labelTitle="$t('general.choose_favicon')" :value="getOption('favicon')" @input="setOption('favicon',$event)"/>
                </div>
            </to-panel-group>
        </to-panel>
    </div>
</template>


<script>
import {addHelpers} from '@/services/helper';
//import i18n from '@/services/i18n';

export default addHelpers({
    data() {
        return {
        }
    }
})
</script>
