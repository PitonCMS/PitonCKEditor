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
 * Accepts URL or path to media file to insert into document
 */
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class PitonSelectMedia extends Plugin {
    static get pluginName() {
		return 'PitonInsertMedia';
    }

    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add('pitonInsertMedia', locale => {
            const view = new ButtonView(locale);

            view.set({
                label: 'Select media',
                icon: imageIcon,
                tooltip: true
            });

            // Callback executed once the image is clicked.
            view.on('execute', () => {
                let imageURL = prompt('Media URL');

				if (imageURL) {
					editor.model.change(writer => {
						const imageElement = writer.createElement('image', {
							src: imageURL
						});

						// Insert the image in the current selection location.
						editor.model.insertContent(imageElement, editor.model.document.selection);
					});
				}
            });

            return view;
        });
    }
}
