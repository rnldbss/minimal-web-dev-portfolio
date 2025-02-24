/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      fontSize: {
        // @link https://utopia.fyi/type/calculator?c=320,17,1.2,1240,18,1.618,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12
        xs: "clamp(0.4297rem, 0.845rem + -0.5359vw, 0.7378rem)",
        sm: "clamp(0.6953rem, 0.9515rem + -0.3306vw, 0.8854rem)",
        base: "clamp(1.0625rem, 1.0408rem + 0.1087vw, 1.125rem)",
        lg: "clamp(1.275rem, 1.0853rem + 0.9483vw, 1.8203rem)",
        xl: "clamp(1.53rem, 1.0378rem + 2.4612vw, 2.9452rem)",
        "2xl": "clamp(1.836rem, 0.8171rem + 5.0944vw, 4.7653rem)",
        "3xl": "clamp(2.2032rem, 0.2877rem + 9.5774vw, 7.7102rem)",
        "4xl": "clamp(2.6438rem, -0.7757rem + 17.0979vw, 12.4751rem)",
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
