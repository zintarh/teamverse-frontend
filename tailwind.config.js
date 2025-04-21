module.exports = {
  purge: [],
  darkMode: false,
  // or 'media' or 'class'
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      extend: {
        colors: {
          background: 'var(--background)',
          foreground: 'var(--foreground)',
          'border-primary': 'var(--border-primary)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
