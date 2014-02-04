define(function (require) {
	'use strict';

	describe('Date and time', function () {
		var MarkdownTaxonomy = require('ft/taxonomy/markdowntaxonomy').MarkdownTaxonomy,
			Taxonomies = require('ft/core/taxonomies'),
			Editor = require('ft/core/editor').Editor,
			taxonomy = Taxonomies.taxonomy({
				foldingtext: true,
				multimarkdown: true,
				gitmarkdown: true,
				criticMarkup: true
			}, 'markdown'),
			editor;

		beforeEach(function () {
			editor = new Editor('', taxonomy);
		});

		afterEach(function () {
			editor.removeAndCleanupForCollection();
		});

		it('should toggle empty lines', function () {
			editor.replaceSelection('a\nb\nc');
			editor.performCommand('toggle empty lines');
			expect(editor.textContent()).toEqual('a\n\nb\n\nc');
			editor.performCommand('toggle empty lines');
			expect(editor.textContent()).toEqual('a\nb\nc');
		});
	});
});