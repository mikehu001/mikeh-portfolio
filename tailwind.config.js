/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          50: '#eef4ff',
          100: '#d9e5ff',
          600: '#2f5fd0',
          700: '#2449a3',
        },
      },
    },
  },
  plugins: [],
}
