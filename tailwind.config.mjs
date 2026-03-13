/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: '#292524',
            a: {
              color: '#4f46e5',
              '&:hover': { color: '#3730a3' },
              textDecoration: 'none',
            },
            'h1, h2, h3': {
              fontFamily: 'Georgia, serif',
            },
          },
        },
      },
    },
  },
  plugins: [],
};
