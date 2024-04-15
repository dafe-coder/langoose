import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.slate,
			green: colors.emerald,
			purple: colors.violet,
			yellow: colors.amber,
			pink: colors.fuchsia,
			blue: {
				50: '#F9FAFB',
				100: '#E1EFFF',
				200: '#B9D1ED4D',
				300: '#1A75FF0D',
				400: '#B9D1ED',
				500: '#1A75FF',
				600: '#1A75FF'
			}
		}
	},
	plugins: []
}
export default config
