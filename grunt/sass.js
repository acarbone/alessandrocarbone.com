/**
 * SASS Preprocessor
 * ===============================
 */

module.exports = {
	dist: {
		options: {
			style: 'compressed',
			sourcemap: 'none'
		},
		files: {
			'<%= paths.dist %>/css/screen.css': '<%= paths.src %>/sass/screen.sass'
		}
	},
	dev: {
		options: {
			sourcemap: 'auto'
		},
		files: {
			'<%= paths.tmp %>/css/screen.css': '<%= paths.src %>/sass/screen.sass'
		}
	}
};