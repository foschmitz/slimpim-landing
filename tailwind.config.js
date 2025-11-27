/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2B4C7E',
          hover: '#1e3557',
          light: '#F6F7F9'
        },
        secondary: {
          DEFAULT: '#6C7A89',
          hover: '#4A5563'
        },
        accent: {
          DEFAULT: '#00B5C4',
          hover: '#009DAB'
        },
        background: '#F6F7F9',
        text: '#1E1E1E'
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Poppins', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      spacing: {
        18: '4.5rem',
        88: '22rem'
      },
      maxWidth: {
        '8xl': '88rem'
      },
      keyframes: {
        'slide-up': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' }
        },
        'modal-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' }
        }
      },
      animation: {
        'slide-up': 'slide-up 0.3s ease-out',
        'modal-in': 'modal-in 0.3s ease-out'
      }
    }
  },
  plugins: []
};
