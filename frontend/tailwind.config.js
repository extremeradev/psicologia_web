/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Arial", "sans-serif"],
        serif: ["Montserrat", "Arial", "sans-serif"],
      },
      animation: {
        'fade-in': 'opacity-0 animate-fade-in-up 0.8s ease-out',
        'fade-up': 'fadeUp 0.7s ease-out forwards',

      },
    },
  },
  plugins: [],
};
