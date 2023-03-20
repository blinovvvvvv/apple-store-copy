/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

const constants = {
	red: '#ed254c',
	yellow: '#f39642',
	black: '#000000',
	gray: '#7b7b7b',
	'light-gray': '#f9f5ff',
	white: '#ffffff',
	beige: '#f9e1ca',
	purple: '#6600df',
	blue: '#4c9ef1'
}

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,scss}',
		'./app/**/*.{js,ts,jsx,tsx,scss}'
	],
	theme: {
		colors: {},
		extend: {
			colors: {
				transparent: colors.transparent,
				...constants
			},
			fontSize: {
				xs: '0.82rem',
				sm: '1rem',
				base: '1.15rem',
				lg: '1.22rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2xl': '1.725rem',
				'3xl': '2.155rem',
				'4xl': '2.58rem',
				'5xl': '3.45rem',
				'6xl': '4.3rem',
				'7xl': '5.17rem',
				'8xl': '6.9rem',
				'9xl': '9.2rem'
			},
			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			}
		}
	},
	plugins: []
}
