/**
 * Simple test shader
 */

const BasicShader = {

	name: 'BasicShader',

	uniforms: {},

	vertexShader: /* glsl */`

		void main() {

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */`

		void main() {

			gl_FragColor = vec4( 1.0, 0.25, 0.0, 1.0 );

		}`

};

export { BasicShader };