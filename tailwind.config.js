/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // files Tailwind scans for classes
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 1.2s linear infinite',
        'fade-delay': 'fadeIn 0.3s ease-in 0.4s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
      },
    },
  },
}
