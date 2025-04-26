module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'border-primary': 'var(--border-primary)',
      },
      backgroundImage: {
        'island': "url('/image.svg')",
      },
    },
  },
  plugins: [],
};
