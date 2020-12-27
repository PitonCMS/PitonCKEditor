/**
 * PitonCMS (https://github.com/PitonCMS)
 *
 * @link      https://github.com/PitonCMS/Piton
 * @copyright Copyright (c) 2015 - 2020 Wolfgang Moritz
 * @license   https://github.com/PitonCMS/Piton/blob/master/LICENSE (MIT License)
 */

/**
 * Piton Custom CKEditor Plugin
 *
 * Opens Piton media select modal
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class PitonSelectMedia extends Plugin {
    static get pluginName() {
		return 'PitonSelectMedia';
    }

    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add('pitonSelectMedia', locale => {
            const view = new ButtonView(locale);

            view.set({
                label: 'Select media',
                icon: imageIcon,
                tooltip: true
            });

            // Callback executed once the image is clicked.
            view.on('execute', () => {
                if (this.mediaCKEditorSelectModal && this.mediaCKEditorSelectedListener) {
                    // Open Piton Media Modal
                    this.mediaCKEditorSelectModal();

                    // Listens for click to set image in editor
                    this.mediaCKEditorSelectedListener();
                } else {
                    throw new Error(`Piton CKEditor Error: mediaCKEditorSelectModal or mediaCKEditorSelectedListener not set.`);
                }
            });

            return view;
        });
    }

    setOpenMediaModal(launcher) {
        this.mediaCKEditorSelectModal = launcher;
    }

    setMediaSelectListener(closer) {
        this.mediaCKEditorSelectedListener = closer;
    }
}
