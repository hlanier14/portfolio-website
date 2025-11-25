/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Accent / Highlight Blue */
        primary: {
          main: "#3b82f6",       // blue-500 (bright highlight)
          hover: "#2563eb",      // blue-600
          active: "#1e40af",     // blue-800
          text: "#ffffff",
          DEFAULT: "#3b82f6",
        },

        /* Supporting Blue palette */
        secondary: {
          main: "#2563eb",
          hover: "#3b82f6",
          active: "#1d4ed8",
          text: "#ffffff",
          DEFAULT: "#2563eb",
        },

        /* Dark Mode Background System (New Defaults) */
        background: {
          default: "#1f1f1f",       // dark gray
          dark: "#181818",          // deeper gray
          "dark-darker": "#111111", // nearly black
          secondary: "#2a2a2a",     // panel/section backgrounds
          tertiary: "#333333",      // subtle raised layer
          DEFAULT: "#1f1f1f",
        },

        /* Surface / Cards / Borders for Dark UI */
        surface: {
          default: "#2a2a2a",        // card surface
          dark: "#242424",           // slightly darker
          elevated: "#303030",       // for elevated cards
          border: "#3f3f3f",
          "border-dark": "#4b4b4b",
          "border-hover": "#5c5c5c",
          DEFAULT: "#2a2a2a",
        },

        /* Text Colors on Dark Background */
        text: {
          primary: "#f3f4f6",      // gray-100
          secondary: "#d1d5db",    // gray-300
          tertiary: "#9ca3af",     // gray-400
          inverse: "#111827",
          DEFAULT: "#f3f4f6",
        },

        /* Borders */
        border: {
          default: "#3f3f3f",
          hover: "#5c5c5c",
          focus: "#3b82f6",       // blue highlight focus
          DEFAULT: "#3f3f3f",
        },

        /* Status Colors (kept similar) */
        status: {
          success: "#22c55e",
          error: "#ef4444",
          warning: "#f59e0b",
          info: "#3b82f6",
        },
      },

      boxShadow: {
        theme: "0 1px 2px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.4)",
        "theme-dark": "0 1px 2px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.6)",
      },

      borderRadius: {
        "theme-sm": "0.5rem",
        "theme-md": "0.75rem",
        "theme-lg": "1rem",
      },
    },
  },
  plugins: [],
};
