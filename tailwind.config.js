/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      extend: {
        colors: {
          background: 'var(--background)',
          foreground: 'var(--foreground)',
          mute: 'var(--mute)',
          'border-primary': 'var(--border-primary)',
          'secondary-background': 'var(--secondary-background)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
