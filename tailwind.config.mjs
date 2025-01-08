/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      colors: {
      "background-light": '#f3f6f7',
      "background-dark": '#213335',
      "body-light": '#435156',   
      "body-lighter": '#7b8589', 
      "body-dark": '#e7eef0',
      "heading-light": '#435358',   
      "heading-dark": '#e7eef0',
      accent: '#5BD1D7',
      primary:"#b0bbbe"

    }},

    fontFamily: {
      jakarta: ["Jakarta", "sans serif"],
      michroma: ["Michroma", "sans serif"],
      "pp-neue-montreal": ["PP Neue Montreal", "sans serif"]
    },

    maxWidth: {
        'line-length-optimal': '50em', // Optimal for readability
      },

    
  },

  darkMode: ["class"],

  plugins: [],
};
