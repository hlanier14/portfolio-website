/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors (light mode defaults, use dark: variants in components)
        'primary': {
          main: '#2563eb',      // blue-600 (light)
          hover: '#1d4ed8',     // blue-700 (light)
          active: '#1e40af',    // blue-800 (light)
          text: '#ffffff',
          DEFAULT: '#2563eb',
        },
        // Secondary colors
        'secondary': {
          main: '#2563eb',      // blue-600 (light)
          hover: '#3b82f6',     // blue-500 (light)
          active: '#1d4ed8',     // blue-700 (light)
          text: '#ffffff',
          DEFAULT: '#2563eb',
        },
        // Background colors
        'background': {
          default: '#ffffff',   // white (light)
          dark: '#1f2937',      // dark mode background (was gray-800)
          'dark-darker': '#111827', // darker dark mode background (was gray-900)
          secondary: '#f9fafb',  // gray-50 (light)
          tertiary: '#f3f4f6',   // gray-100 (light)
          DEFAULT: '#ffffff',
        },
        // Surface colors
        'surface': {
          default: '#ffffff',   // white (light)
          dark: '#374151',      // dark mode surface (was gray-700)
          elevated: '#f9fafb',   // gray-50 (light)
          border: '#e5e7eb',     // gray-200 (light)
          'border-dark': '#374151', // dark mode border (was gray-700)
          'border-hover': '#d1d5db', // gray-300 (light)
          DEFAULT: '#ffffff',
        },
        // Text colors (uses CSS variables for dark mode support)
        'text': {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
          inverse: 'var(--text-inverse)',
          DEFAULT: 'var(--text-primary)',
        },
        // Border colors
        'border': {
          default: '#e5e7eb',    // gray-200 (light)
          hover: '#d1d5db',      // gray-300 (light)
          focus: '#111827',      // gray-900 (light)
          DEFAULT: '#e5e7eb',
        },
        // Status colors
        'status': {
          success: '#16a34a',      // green-600 (light)
          error: '#dc2626',      // red-600 (light)
          warning: '#d97706',      // amber-600 (light)
          info: '#2563eb',      // blue-600 (light)
        },
      },
      boxShadow: {
        'theme': '0 1px 2px rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.06)',
        'theme-dark': '0 1px 2px rgba(0,0,0,0.2), 0 2px 8px rgba(0,0,0,0.3)',
      },
      borderRadius: {
        'theme-sm': '0.5rem',
        'theme-md': '0.75rem',
        'theme-lg': '1rem',
      },
    },
  },
  plugins: [],
}
