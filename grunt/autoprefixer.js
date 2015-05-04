/**
 * Autoprefixer - CSS vendor prefix auto generation
 * ===============================
 */

module.exports = {
	dist: {
		options:{
			browsers: ['last 10 version', 'ie >= 8']
		},
		files: {
			'<%= paths.dist %>/css/screen.css': '<%= paths.dist %>/css/screen.css'
		},
	},
	dev: {
		options:{
			browsers: ['last 10 version', 'ie >= 8']
		},
		files: {
			'<%= paths.tmp %>/css/screen.css': '<%= paths.tmp %>/css/screen.css'
		},
	}
};