module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#C72200',   // your main accent
          red: '#c20000ff',     // deep red
          black: '#0A0A0A',     // dark background
          lightgray: '#8b8a8aff', // 👈 new soft gray for footer or sections
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
