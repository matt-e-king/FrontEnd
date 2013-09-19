/*
 * grunt-mcompile
 * https://github.com/JohnCashBB/grunt-mcompile
 *
 * Copyright (c) 2013 John Cashmore
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function (grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('mcompile', 'Your task description goes here.', function () {
		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			templateRoot: '',
			dataRoot: ''
		});
		var cheerio = require('cheerio'),
			mustache = require("mustache"),
			error = false;
		// Iterate over all specified file groups.
		this.files.forEach(function (f) {
			// Concat specified files.
			f.src.forEach(function (filename) {
				if (grunt.file.exists(filename)) {
					if (!grunt.file.isDir(filename)) {
						var source = grunt.file.read(filename, {
							encoding: null
						});

						var $ = cheerio.load(source);

						$('[data-mustacheTemplate]')
							.each(function (i, item) {

								if (grunt.file.exists(options.templateRoot + $(this).attr('data-mustacheTemplate'))) {
									if (!grunt.file.isDir(options.templateRoot + $(this).attr('data-mustacheTemplate'))) {
										var template = cheerio.load(grunt.file.read(options.templateRoot + $(this).attr('data-mustacheTemplate'), {
												encoding: null
											}))
											.html();


											var view = {};


											if ($(this).attr('data-mustacheData') !== 'undefined') {
												if (grunt.file.exists($(this).attr('data-mustacheData'))) {
													if (!grunt.file.isDir($(this).attr('data-mustacheData'))) {

														view = JSON.parse(
															grunt.file.read($(this).attr('data-mustacheData'), {
																encoding: null
															}));

													}
												} else {
													grunt.log.error('Data file "' + $(this).attr('data-mustacheData') + '" not found.');
													error = true;
													return false;

												}
											}
										var data = mustache.render(template, view);


										$(this)
											.removeAttr('data-mustacheTemplate')
											.removeAttr('data-mustacheData')
											.replaceWith(data);


										grunt.file.write(f.dest + '/' + filename, $.html());

									}
								} else {
									grunt.log.error('Template file "' + options.templateRoot + $(this).attr('data-mustacheTemplate') + '" not found.');
									error = true;
									return false;

								}
							});


					}
				} else {
					grunt.log.warn('Source file "' + filename + '" not found.');
					error = true;
					//warnings = true;
					return false;
				}
			});
			if(error) {
				return false;
			}
		});
		if(error) {
			return false;
		}

	});

};
