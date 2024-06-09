/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        nav: "#f9f9f9", // Light cream
        page: "#f9f9f9", // Same as nav for consistency
        card: "#e0e0e0", // Light gray for cards
        "card-hover": "#d4d4d4", // Slightly darker for hover effect
        "default-text": "#333333", // Dark gray for text
        "default-text-icon": "#333333", // Darker shade for icons
        "blue-accent": "#87ceeb", // Light blue accent
        "blue-accent-hover": "#00bfff", // Hover blue
        "button-bg": "#8ac6d1", // Button background color
        "button-hover": "#56b4d3", // Button hover color
        "input-bg": "#ffffff", // Input background color
        "input-border": "#cccccc", // Input border color
      },
    },
  },
  plugins: [],
};
