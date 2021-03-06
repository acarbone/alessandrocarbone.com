/**
 * Tasks
 */

module.exports = {
	'default': [
		'output_twig:dist',
		'newer:imagemin:dist',
		'newer:sass:dist',
		'newer:autoprefixer:dist',
		'copy:dist'
	],
	'dev': [
		'output_twig:dev',
		'sass:dev',
		'autoprefixer:dev',
		'copy:dev',
		'browserSync',
		'watch'
	],
	'css-analysis': [
		'csslint:dist',
		'parker:dist'
	],
	'css-analysis:dev': [
		'csslint:dev',
		'parker:dev'
	],
};