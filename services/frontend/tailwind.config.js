/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      boxShadow: {
        custom: '0 10px 25px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
