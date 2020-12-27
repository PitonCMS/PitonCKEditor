/**
 * PitonCMS (https://github.com/PitonCMS)
 *
 * @link      https://github.com/PitonCMS/Piton
 * @copyright Copyright (c) 2015 - 2020 Wolfgang Moritz
 * @license   https://github.com/PitonCMS/Piton/blob/master/LICENSE (MIT License)
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

// Custom Piton Plugins
import PitonSelectMedia from './modules/pitonSelectMedia';
// import PitonInsertMedia from './modules/PitonInsertMedia';

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
	PitonSelectMedia,
	// PitonInsertMedia,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
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
			'pitonSelectMedia',
			// 'pitonInsertMedia',
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
