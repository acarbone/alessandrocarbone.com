'use strict';

module.exports = function(grunt) {
	require('time-grunt')(grunt);
	require('load-grunt-config')(grunt, {
		// auto grunt.initConfig 
		init: true,

		// data passed into config.  Can use with <%= paths.dist %> 
		data: {
			/**
			 * Project Paths Configuration
			 * ===============================
			 */
			paths: {
				dist: 'dist',// Production ready HTML templates and Assets
				src: 'src',// Sources - Twig Templates and Assets 
				templates: '<%= paths.src %>/templates',// Template sources
				tmp: 'dev',// Temporary files for Grunt local server
			}
		},

		loadGruntTasks: {
			pattern: 'grunt-*',
			config: require('./package.json'),
			scope: 'devDependencies'
		}
	});
		//@TODO: implement CSS styleguide generator
		/*
			https://github.com/indieisaconcept/grunt-styleguide
			https://github.com/kneath/kss
			https://www.npmjs.com/package/grunt-kss
			http://mikefowler.me/2013/10/14/static-styleguides-kss-node/
			http://trulia.github.io/hologram/
		*/
};