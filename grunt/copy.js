/**
 * Copy
 * ===============================
 */

module.exports = {
	dev: {
		expand: true,
		cwd: '<%= paths.dist %>/components/',
		src: '**',
		dest: '<%= paths.tmp %>/components/',
		filter: 'isFile'
	}
};