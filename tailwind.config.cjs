/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
    fontFamily: {
      'din-thin': ['DIN Round W05 Light', 'sans-serif'],
			'din': ['DIN Round W05 Regular', 'sans-serif'],
			'din-m': ['DIN Round W05 Medium', 'sans-serif'],
			'din-bold': ['DIN Round W05 Bold', 'sans-serif'],
			'din-black': ['DIN Round W05 Black', 'sans-serif'],
			'mono': ['Courier New'],
    },
		extend: {
			boxShadow: {
        DEFAULT: '0 var(--shadow-depth) theme(colors.primary);',
				'lg': '0 5px theme(colors.primary);',
				'warn': '0 var(--shadow-depth) theme(colors.red.900);',
				'tertiary': '0 var(--shadow-depth) theme(colors.blue.900);',
				'success': '0 var(--shadow-depth) theme(colors.green.900);'
      },
			colors: {
				primary: "rgb(var(--color-primary) / <alpha-value>)",
				secondary: "rgb(var(--color-secondary) / <alpha-value>)",
				tertiary: "rgb(var(--color-tertiary) / <alpha-value>)",
				medium: "rgb(var(--color-medium) / <alpha-value>)",
				warn: "rgb(var(--color-warn) / <alpha-value>)",
				highlight: "rgb(var(--color-highlight) / <alpha-value>)",
				success: "rgb(var(--color-success) / <alpha-value>)",
				transparent: "transparent",
				current: "currentColor",
				white: "rgb(var(--color-white) / <alpha-value>)"
			}
		},
	},
	plugins: [],
}
