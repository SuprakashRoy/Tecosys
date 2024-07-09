/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6B21A8', // Purple
        background: '#000000', // Black background
        card: '#1F1B24', // Darker background for cards
        accent: '#818CF8', // Light purple for accents
        textPrimary: '#E5E7EB', // Light gray for text
      },
    },
  },
  plugins: [],
}