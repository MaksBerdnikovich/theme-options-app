import WebFontLoader from 'webfontloader';

export default {
    loadedFonts: {},
    loadedPreviewFonts: {},

    isLoaded(family,preview) {
        if (preview) {
            return !!this.loadedFonts[family] || !!this.loadedPreviewFonts[family]
        }

        return !!this.loadedFonts[family];
    },

    load(family,preview) {
        if (!this.isLoaded(family,preview)) {

            if (preview) {
                this.loadedPreviewFonts[family]=true;
                WebFontLoader.load({
                    google: {
                        families: [family]
                    },
                    text: family
                });
            } else {
                this.loadedFonts[family]=true;
                WebFontLoader.load({
                    google: {
                        families: [family+':100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic']
                    }
                });
            }


        }
    }
}
