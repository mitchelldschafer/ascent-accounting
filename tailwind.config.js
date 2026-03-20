/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0E14',
        amber: '#C99B3A',
        slateWhite: '#F0F2F5',
        graphite: '#1E2028',
        nearWhite: '#F8FAFB',
        primary: '#0B0E14',
        accent: '#C99B3A',
        background: '#F0F2F5',
        surface: '#F8FAFB',
        text: '#1E2028',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        ui: ['Inter', 'sans-serif'],
        drama: ['"DM Serif Display"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
