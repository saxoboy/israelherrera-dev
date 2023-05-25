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
      body: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      display: ['Cinzel', 'Helvetica', 'sans-serif'],
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
        // Bondi Blue
        50: '#ecfffe',
        100: '#d0fdfb',
        200: '#a6fbfa',
        300: '#69f7f6',
        400: '#24e8ec',
        500: '#08ccd2',
        default: '#0aa6b3', // Default
        700: '#0f828f',
        800: '#166874',
        900: '#175762',
      },
      secondary: {
        // Olive Green - verde
        50: '#f8f7ed',
        100: '#f0efd7',
        200: '#e2e2b4',
        300: '#ccce88',
        default: '#b0b352', // default
        500: '#999e44',
        600: '#787d33',
        700: '#5c612a',
        800: '#4a4e26',
        900: '#404324',
      },
      tertiary: {
        // sunglo - rojo
        50: '#fdf3f3',
        100: '#fbe8e8',
        200: '#f7d4d6',
        300: '#f1b0b4',
        default: '#e46f78', // default
        500: '#db5865',
        600: '#c6384d',
        700: '#a62a40',
        800: '#8c253b',
        900: '#782337',
      },
      sanJuan: {
        50: '#f4f6fb',
        100: '#e9ecf5',
        200: '#cdd7ea',
        300: '#a1b4d8',
        400: '#6f8ec1',
        500: '#4d6faa',
        600: '#3b578e',
        default: '#334a7a', // Default
        800: '#2b3d61',
        900: '#283552',
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
