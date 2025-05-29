module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        righteous: ['Righteous', 'sans-serif']
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "spin-slow": "spin 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0) rotate(0deg)" },
          "50%": { transform: "translate(10px, 5px) rotate(5deg)" },
        },
      },
    },
  },
  plugins: [],
}
