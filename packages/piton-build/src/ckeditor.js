/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';


import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/image.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

class PitonInsertImage extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add('pitonInsertImage', locale => {
            const view = new ButtonView(locale);

            view.set({
                label: 'Select image',
                icon: imageIcon,
                tooltip: true
            });

            // Callback executed once the image is clicked.
            view.on('execute', () => {
				const imageURL = prompt('Image URL');

				editor.model.change(writer => {
                    const imageElement = writer.createElement('image', {
                        src: imageURL
                    });

                    // Insert the image in the current selection location.
                    editor.model.insertContent(imageElement, editor.model.document.selection);
                });
            });

            return view;
        });
    }
}

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	Code,
	BlockQuote,
	Heading,
	Image,
	ImageCaption,
	// ImageInsert,
	// ImageStyle,
	// ImageToolbar,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	Table,
	TableToolbar,
	TextTransformation,
	HorizontalLine,
	CodeBlock,
	PitonInsertImage,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			// Piton custom build
			'heading',
			'|',
			'bold',
			'italic',
			// 'underline',
			'|',
			'bulletedList',
			'numberedList',
			'|',
			// 'indent',
			// 'outdent',
			// '|',
			'link',
			'pitonInsertImage',
			// 'imageInsert',
			'|',
			'blockQuote',
			'insertTable',
			'horizontalLine',
			'|',
			'code',
			'codeBlock',
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	codeBlock: {
		languages: [
			{language: 'html', label: 'HTML'},
			{language: 'css', label: 'CSS'},
			{language: 'php', label: 'PHP'},
			{language: 'js', label: 'JS'},
			{language: 'sql', label: 'SQL'},
			{language: 'sh', label: 'Shell'},
			],
		},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
};
