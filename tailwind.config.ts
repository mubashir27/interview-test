import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"], // use darkMode as a class to provide dark mode functionality in app
  theme: {
    extend: {
      colors: {
        gray: "#EBEEF6",
        "gray-dark": "#374151",
        dark: "#292F3A",
        white: "#FFFFFF",
        light: "#d8dfeb",
        "gray-light": "#6E7CA0",
        red: "#E9004F",
        "red-light": "#FDE6EE",
      },
    },
  },
  plugins: [],
};
export default config;
