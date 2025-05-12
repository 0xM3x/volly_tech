module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Black accent
        secondary: "#ffffff", // White base
        text: "#000000", // Default text color
        background: "#ffffff", // Page background
        muted: "#f5f5f5", // Light gray backgrounds
      },
    },
  },
  plugins: [],
};
