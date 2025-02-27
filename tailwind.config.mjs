/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      fontSize: {
        // @link https://utopia.fyi/type/calculator?c=320,17,1.2,1240,16,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
        xs: "clamp(0.72rem, 0.7441rem + -0.031vw, 0.7378rem)",
        sm: "clamp(0.8854rem, 0.8803rem + 0.0254vw, 0.9rem)",
        base: "clamp(0.9375rem, 1.106rem + -0.2174vw, 1.0625rem)",
        lg: "clamp(1.275rem, 1.2293rem + 0.2283vw, 1.4063rem)",
        xl: "clamp(1.53rem, 1.4508rem + 0.3962vw, 1.7578rem)",
        "2xl": "clamp(1.836rem, 1.7103rem + 0.6283vw, 2.1973rem)",
        "3xl": "clamp(2.2032rem, 2.0142rem + 0.945vw, 2.7466rem)",
        "4xl": "clamp(2.6438rem, 2.3693rem + 1.3728vw, 3.4332rem)",
      },
      colors: {
        transparent: "transparent",
        accent: {
          primary: "#2bc2c2",
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
      cal: ["Cal", "sans serif"],
    },
  },

  darkMode: ["class"],

  plugins: [],
};
