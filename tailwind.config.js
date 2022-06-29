const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
            fontFamily: {
                sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            ...defaultTheme.colors,
            red: colors.red,
            yellow: colors.yellow,
            green: colors.green,
            blue: colors.sky,
            purple: colors.purple,
            gray: colors.slate,
            dark: colors.zinc,
            darkest: '#1e1e1e',
            white: '#fff',
            black: '#000',
            transparent: 'transparent',
			primary: colors.zinc,
			accent: colors.emerald,
        },
        screens: {
            'xs': '360px',
            'st': '375px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            '3xl': '1920px',
            '2k': '2560px',
            '4k': '3840px',
            '8k': '7680px',
        }
	},

	darkMode: 'class',

	plugins: [],
}