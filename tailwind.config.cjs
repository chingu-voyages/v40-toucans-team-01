/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
    './*.{html,js,jsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      bakerSans: [
        '"Segoe UI"',
        '"Work Sans"',
        '-apple-system',
        'BlinkMacSystemFont',
        'Roboto',
        'Oxygen-Sans',
        'Ubuntu',
        'Cantarell',
        '"Helvetica Neue"',
        'sans-serif'
      ],
      bakerMono: ['Monaco', 'Menlo', 'Consolas', '"Courier New"', 'monospace'],
      bakerOrator: ['OratorStd', 'monospace']
    },
    screens: {
      xsm: '400px',
      // => @media (min-width: 400px) { ... }

      msm: '448px',
      // => @media (min-width: 448px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      xmd: '992px',
      // => @media (min-width: 992px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      mlg: '1200px',
      // => @media (min-width: 1200px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      gridTemplateAreas: {
        layout: [
          'search sidebar',
          'recipe-key sidebar',
          'popular-recipes sidebar'
        ]
      },
      gridTemplateColumns: {
        layout: '1fr 300px'
      }
    }
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('tw-elements/dist/plugin')
  ]
};
