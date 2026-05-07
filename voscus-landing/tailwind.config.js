/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#e1e8f0',
          200: '#c3d1e1',
          300: '#a5bad2',
          400: '#8799b3',
          500: '#1a2d4d',
          600: '#162844',
          700: '#12213b',
          800: '#0e1a32',
          900: '#0a1229',
        },
        ink: {
          50: '#f7f8f7',
          100: '#e9ece8',
          200: '#d1d8d3',
          300: '#aebaae',
          400: '#7b8d80',
          500: '#4f6758',
          600: '#32483d',
          700: '#22342d',
          800: '#14251f',
          900: '#0b1714',
        },
        signal: {
          50: '#fff7e6',
          100: '#fee9b8',
          200: '#f9d16d',
          300: '#efb12f',
          400: '#d68d12',
          500: '#a9650c',
        },
        teal: {
          50: '#eefdfa',
          100: '#cff8ef',
          200: '#9debdc',
          300: '#5ed5c3',
          400: '#2ab5a6',
          500: '#138d83',
          600: '#0d6f69',
          700: '#0c5854',
          800: '#0b4543',
          900: '#083331',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
        slideInRight: 'slideInRight 0.5s ease-out forwards',
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s infinite',
      },
      boxShadow: {
        glow: '0 0 20px rgba(26, 45, 77, 0.1)',
        'glow-lg': '0 0 40px rgba(26, 45, 77, 0.15)',
      },
    },
  },
  plugins: [],
};
