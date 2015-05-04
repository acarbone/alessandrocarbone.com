/**
 * Copy
 * ===============================
 */

module.exports = {
	dev: {
		expand: true,
		cwd: '<%= paths.src %>/fonts/',
		src: '**',
		dest: '<%= paths.tmp %>/fonts/',
		filter: 'isFile'
	},
	dist: {
		expand: true,
		cwd: '<%= paths.src %>/fonts/',
		src: '**',
		dest: '<%= paths.dist %>/fonts/',
		filter: 'isFile'
	}
};