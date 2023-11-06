/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',

      'body-bg': '#f6f6f6',
      'header-bg': '#eee',
      'top-act-group': '#fff',
      'top-act-group-shadow': '#ededf6',
      'top-act-group-separate': '#EDEDF6',
      'header-shadow': 'rgba(237, 237, 246, 0.2)',
      dropdown: '#fff',
      'dropdown-shadow': 'rgba(200, 200, 200, 0.4)',
      'top-menu-border': '#d2d1d6',
      'menu-card': '#fff',
      'item-card': '#fff',

      'dark-body-bg': '#292e39',
      'dark-header-bg': '#171c28',
      'dark-top-act-group': '#292e39',
      'dark-top-act-group-shadow': 'rgba(0, 0, 0, 0.2)',
      'dark-top-act-group-separate': '#ededf6',
      'dark-header-shadow': '#2d3441',
      'dark-dropdown-bg': '#2d3441',
      'dark-dropdown-shadow': 'rgba(23, 28, 40, 0.4))',
      'dark-top-menu-border': '#171c28',
      'dark-menu-card': '#292e39',
      'dark-item-card': '#171c28',
    },
    screens: {
      xxl: { max: '1400px' },
      xl: { max: '1200px' },
      lg: { max: '992px' },
      md: { max: '768px' },
      sm: { max: '576px' },
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
  },
  plugins: [],
};
