/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-flow': 'gradient-flow 8s ease infinite',
      },
      keyframes: {
        'gradient-flow': {
          '0%': {
            'background-size': '200% 200%',
            'background-position': '0% 50%',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': '100% 50%',
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': '0% 50%',
          },
        },
      },
    },
  },
  plugins: [],
}
