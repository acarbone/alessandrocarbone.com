/**
 * Twig templates.
 * Warning: The Twig plugin does not support some Twig functions: macros/filters creation...
 * @TODO: Understand if not supported Twig functions are bugs. 
 * ===============================
 */

module.exports = {
	options: {
		docroot: '<%= paths.templates %>/',
	},
	dist: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.templates %>/',
				src: ['**/*.twig', '!includes/*.twig', '!layouts/*.twig'],
				dest: '<%= paths.dist %>/',
				ext: '.html'
			}
		]
	},
	dev: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.templates %>/',
				src: ['**/*.twig', '!includes/*.twig', '!layouts/*.twig'],
				dest: '<%= paths.tmp %>/',
				ext: '.html'
			}
		]
	}
};