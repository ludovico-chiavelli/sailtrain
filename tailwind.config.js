/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // brand red
        bRed: '#D42323',
        bGreen: '#84C067',
        bBeige: '#FFE3CD',
      },
    },
  },
  plugins: [],
}
