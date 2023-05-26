/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      body: ['Saira', 'Helvetica', 'Arial', 'sans-serif'],
      display: ['Gruppo', 'Helvetica', 'sans-serif'],
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1680px',
    },
    colors: {
      transparent: 'transparent',
      black: '#212934',
      white: '#FBFEFF',
      gray: {
        50: '#f6f7f8',
        100: '#ebecee',
        200: '#dbdde2',
        300: '#c2c7ce',
        default: '#9ca3af', // default
        500: '#8e94a3',
        600: '#7d8293',
        700: '#707385',
        800: '#5e616f',
        900: '#4e505a',
      },
      primary: {
        // polo-blue - azul
        '50': '#f2f6fb',
        '100': '#e7f0f8',
        '200': '#d3e2f2',
        '300': '#b8cee9',
        '400': '#9bb4de',
        '500': '#8fa4d6',
        '600': '#697cc2',
        '700': '#5868aa',
        '800': '#4a5889',
        '900': '#404b6f',
        '950': '#262c40',
      },
      secondary: {
        //'gorse': {
        '50': '#fefee8',
        '100': '#ffffc2',
        '200': '#fffa89',
        '300': '#fff157',
        '400': '#fde012',
        '500': '#ecc506',
        '600': '#cc9a02',
        '700': '#a36e05',
        '800': '#86560d',
        '900': '#724611',
        '950': '#432505',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [],
};
