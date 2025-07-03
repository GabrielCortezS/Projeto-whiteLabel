/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslategray: '#2F4F4F',
        springgreen: '#00FF7F',
        palegreen: '#98FB98',
        lightgreen: '#90EE90',
        primaryDark: '#1a1a1a', // ✅ Adicione esta linha
      },
      animation: {
        'fade-down': 'fadeDown 0.3s ease-out',
      },
      keyframes: {
        fadeDown: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
