/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* global document */

import Font from '../src/font';
import ArticlePluginSet from '@ckeditor/ckeditor5-core/tests/_utils/articlepluginset';
import ClassicTestEditor from '@ckeditor/ckeditor5-core/tests/_utils/classictesteditor';
import { setData as setModelData } from '@ckeditor/ckeditor5-engine/src/dev-utils/model';
import env from '@ckeditor/ckeditor5-utils/src/env';

describe( 'Integration test Font', () => {
	let element, editor, model;

	beforeEach( () => {
		element = document.createElement( 'div' );
		document.body.appendChild( element );

		return ClassicTestEditor
			.create( element, {
				plugins: [ Font, ArticlePluginSet ]
			} )
			.then( newEditor => {
				editor = newEditor;
				model = editor.model;
			} );
	} );

	afterEach( () => {
		element.remove();

		return editor.destroy();
	} );

	describe( 'in-between font plugin features', () => {
		it( 'should render one span element for all types of font features', () => {
			setModelData( model,
				'<paragraph>' +
					'<$text fontColor="#123456" fontBackgroundColor="rgb(10,20,30)" fontSize="big" fontFamily="Arial">foo</$text>' +
				'</paragraph>'
			);

			if ( !env.isEdge ) {
				expect( editor.getData() ).to.equal(
					'<p>' +
						'<span ' +
							'class="text-big" ' +
							'style="font-family:Arial, Helvetica, sans-serif;background-color:rgb(10,20,30);color:#123456;"' +
						'>foo' +
						'</span>' +
					'</p>'
				);
			} else {
				// Edge sorts attributes of an element.
				expect( editor.getData() ).to.equal(
					'<p>' +
						'<span ' +
							'class="text-big" ' +
							'style="font-family:Arial, Helvetica, sans-serif;color:#123456;background-color:rgb(10,20,30);"' +
						'>foo' +
						'</span>' +
					'</p>'
				);
			}
		} );
	} );

	describe( 'between font plugin and other', () => {
		it( 'should render elements wrapped in proper order', () => {
			setModelData( model,
				'<paragraph>' +
					'<$text bold="true" linkHref="foo" fontColor="red" fontSize="big">foo</$text>' +
				'</paragraph>'
			);

			expect( editor.getData() ).to.equal(
				'<p>' +
					'<a href="foo">' +
						'<span class="text-big" style="color:red;">' +
							'<strong>foo</strong>' +
						'</span>' +
					'</a>' +
				'</p>'
			);
		} );
	} );
} );
