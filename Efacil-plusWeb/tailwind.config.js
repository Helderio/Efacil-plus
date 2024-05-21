/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFD700', // Dourado claro
          dark: '#9C27B0', // Roxo escuro
        },
        secondary: {
          light: '#9C27B0', // Roxo claro
          dark: '#6A1B9A', // Roxo escuro
        },
        contrast: {
          light: '#FFFFFF', // Branco para light mode
          dark: '#000000', // Preto para dark mode
        },
        // Cores de fundo para o modo claro
        'bg-primary-light': '#FFD700',
        'bg-secondary-light': '#9C27B0',
        'bg-contrast-light': '#FFFFFF',
        // Cores de fundo para o modo escuro
        'bg-primary-dark': '#9C27B0',
        'bg-secondary-dark': '#6A1B9A',
        'bg-contrast-dark': '#000000',
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  plugins: [],
};

