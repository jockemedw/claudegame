/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        level: {
          1: '#22c55e',
          2: '#3b82f6',
          3: '#8b5cf6',
          4: '#f59e0b',
          5: '#ef4444',
          6: '#ec4899',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-down': 'slideDown 0.25s ease-out',
      },
      keyframes: {
        fadeIn: { from: { opacity: 0, transform: 'translateY(8px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
        slideDown: { from: { opacity: 0, maxHeight: 0 }, to: { opacity: 1, maxHeight: '2000px' } },
      }
    },
  },
  plugins: [],
}
