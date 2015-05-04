/**
 * Generation of Sass styleguide for mixins, extends, functions.
 * Tool: SassDoc <http://sassdoc.com/>
 * @command: grunt sassdoc
 * ===============================
 */

module.exports = {
	default: {
		src: '<%= paths.src %>/sass/**/*.sass',
		options: {
			dest: 'doc/sass'
		}
	}
};