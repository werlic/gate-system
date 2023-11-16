/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.{html,js,ejs}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#16a879',

          secondary: '#730C07',

          accent: '#f7bc33',

          neutral: '#1e1f38',

          'base-100': '#fcfcfd',

          info: '#58add5',

          success: '#38e58c',

          warning: '#f4c03e',

          error: '#e23639',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
