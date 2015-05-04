/**
 * Parker CSS <https://github.com/katiefenn/parker>
 * ===============================
 */

module.exports = {
	dist: {
		options: {},
		src: ['<%= paths.dist %>/css/screen.css']
	},
	dev: {
		options: {},
		src: ['<%= paths.tmp %>/css/screen.css']
	}
};