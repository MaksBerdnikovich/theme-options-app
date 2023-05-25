<template>
    <div id="thegem-options" class="embedded">
        <modals-container/>
    </div>
</template>

<script>
import { addHelpers } from '@/services/helper';
import config from '@/services/config';
import ToModalIcon from '@/components/system/to-modal-icon';

export default addHelpers({
    data() {
        return {
            config: config
        };
    },

    created() {
        let self = this;
        window.thegemThemeOptions = Object.assign(window.thegemThemeOptions, {
            iconPicker(config) {
                self.setOption('iconSelectorPack', config.pack);
                self.setOption('iconSelectorIcon', config.icon);

                self.$modal.show(ToModalIcon, {
                    iconOption: 'iconSelectorIcon',
                    packOption: 'iconSelectorPack',
                    packs: config.packs
                }, {
                    height: '80%',
                    width: 1082,
                    //height: 'auto'
                }, {
                    closed: function() {
                        config.set(self.getOption('iconSelectorPack'),self.getOption('iconSelectorIcon'));
                    }
                });
            }
        });
    },

    methods: {
    },
});
</script>
