module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#4C2B21',
      },
      fontFamily: {
        courier: ['"Courier New"', 'monospace'], 
        teko:['Teko', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
