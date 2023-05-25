<template>
    <div>
        <to-panel id="panel.reset">
            <to-panel-group :label-title="$t('panel.to_reset')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.reset_all_reset_theme_options') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-3">
                            <to-button icon="rotate" type="systems" v-on:click="restore()">{{$t('button.reset')}}</to-button>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>
    </div>
</template>


<script>
import {addHelpers} from '@/services/helper';

export default addHelpers({

    // mounted() {
    //     this.restore();
    // },

    methods: {
        restore() {
            this.$modal.confirm({title: this.$t('reset.confirm_title'), message: this.$t('reset.confirm_message')}).then( (result) => {
                if (result) {
                    this.$store.dispatch('reset');
                }
            });
        }
    }
})
</script>
