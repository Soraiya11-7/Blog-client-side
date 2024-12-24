/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transformOrigin: {
        'center': 'center',
      },
      rotate: {
        'x-180': '180deg',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

