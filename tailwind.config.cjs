/** @type {import('tailwindcss').Config} */
import { transform } from '@astrojs/compiler';

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: {
	files: ['./src/**/*.{astro,svelte}'],
  },
  theme: {
    colors: {
	  ...colors,
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
	  black: '#000000',
      primary: {
		'50': '#f4f2ff',
		'100': '#e9e8ff',
		'200': '#d6d4ff',
		'300': '#bab1ff',
		'400': '#9785ff',
		'500': '#7857ff',
		'600': '#6330f7',
		'700': '#561ee3',
		'800': '#4718bf',
		'900': '#3b169c',
		'950': '#230b6a',
	  },
	  secondary: {
		'50': '#f3f5fb',
		'100': '#e4e7f5',
		'200': '#d0d6ed',
		'300': '#afbce1',
		'400': '#8998d1',
		'500': '#6c7ac5',
		'600': '#5960b7',
		'700': '#4e51a7',
		'800': '#444489',
		'900': '#3a3c6e',
		'950': '#323257',
	  },
	  'light-red': {
		DEFAULT: '#f83b3b',
		'50': '#fff1f1',
		'100': '#ffe1e1',
		'200': '#ffc7c7',
		'300': '#ffa0a0',
		'400': '#ff5757',
		'500': '#f83b3b',
		'600': '#e51d1d',
		'700': '#c11414',
		'800': '#a01414',
		'900': '#841818',
		'950': '#480707',
	  },
	  'orangey-yellow': {
		DEFAULT: '#f98d07',
		'50': '#fffaeb',
		'100': '#fff0c6',
		'200': '#ffde88',
		'300': '#ffc84a',
		'400': '#ffb01f',
		'500': '#f98d07',
		'600': '#dd6702',
		'700': '#b74606',
		'800': '#94350c',
		'900': '#7a2c0d',
		'950': '#461502',
	  },
	  'green-teal': {
		DEFAULT: '#00bd97',
		'50': '#eafff8',
		'100': '#cdfeeb',
		'200': '#a0fadd',
		'300': '#63f2cc',
		'400': '#25e2b6',
		'500': '#00bd97',
		'600': '#00a483',
		'700': '#00836d',
		'800': '#006757',
		'900': '#005549',
		'950': '#00302a',
	  },
	  'cobalt-blue': {
		DEFAULT: '#415dff',
		'50': '#eaf3ff',
		'100': '#d9e8ff',
		'200': '#bad3ff',
		'300': '#90b4ff',
		'400': '#6488ff',
		'500': '#415dff',
		'600': '#202fff',
		'700': '#1520ed',
		'800': '#1622d0',
		'900': '#1a2595',
		'950': '#0f1357',
	  },
	  'dark-cyan': {
		DEFAULT: '#3f7d65',
		'50': '#f1f8f5',
		'100': '#ddeee4',
		'200': '#bedccc',
		'300': '#93c2ac',
		'400': '#64a388',
		'500': '#3f7d65',
		'600': '#316a55',
		'700': '#275545',
		'800': '#214438',
		'900': '#1c382f',
		'950': '#0f1f1a',
	},
    },
    fontFamily: {
      sans: ['Hanken Grotesk', 'sans-serif'],
	  fraunces: ['Fraunces', 'serif'],
	  montserrat: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
	  xs: ['0.75rem', '1rem'],
	  sm: ['0.875rem', '1.25rem'],
	  base: ['1rem', '1.75rem'],
	  lg: ['1.125rem', '2rem'],
	  xl: ['1.25rem', '2.125rem'],
	  '2xl': ['1.5rem', '2rem'],
	  '3xl': ['1.875rem', '2.375rem'],
	  '4xl': ['2.25rem', '2.75rem'],
	  '5xl': ['3rem', '3.5rem'],
	  '6xl': ['3.75rem', '4.25rem'],
    },
  },
  safelist: [
	{
	  pattern: /grid-cols-+/,
	  variants: ['sm', 'md', 'lg', 'xl', 'xxl'],
	},
	{
		pattern: /gap-+/,
		variants: ['sm', 'md', 'lg', 'xl', 'xxl'],
	},
  ],
};
