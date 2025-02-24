/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        accent: {
          primary: "#2bc2c2",
          secondary: "#E43C13", //"#BAF400",
        },
        on: {
          level: {
            0: "#435358",
            "0-dark": "#FAFCF8",
          },
          accent: {
            primary: "#121212",
            secondary: "#435358",
          },
        },
        level: {
          0: "#f3f6f7",
          1: "#e6e8e980",
          2: "#d8dbdb80",
          3: "#cbcdce80",
          4: "#bec0c080",
          5: "#b1b3b380",
          "0-dark": "#050e14", //Base background, used for large, non-interactive surfaces.
          "1-dark": "#20252980", // Subtle elevation for small containers like buttons and cards.
          "2-dark": "#373c4080", // Slightly more elevation for interactive elements.
          "3-dark": "#50555880", // Used for modals, dialogs, and primary interactive elements.
          "4-dark": "#6b6f7280", // Higher elevation for important interactive elements.
          "5-dark": "#878a8c80", // Used for hover states, focus indicators, and highly interactive elements.
        },
      },
    },

    fontFamily: {
      jakarta: ["Jakarta", "sans serif"],
      michroma: ["Michroma", "sans serif"],
      "pp-neue-montreal": ["PP Neue Montreal", "sans serif"],
      anek: ["Anek", "sans serif"],
    },
  },

  darkMode: ["class"],

  plugins: [],
};
