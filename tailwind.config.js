/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0C0C0C',
        'bg-secondary': '#121212',
        'bg-tertiary': '#1A1A1A',
        'text-primary': '#D7E2EA',
        'text-secondary': 'rgba(215,226,234,0.6)',
        'text-tertiary': 'rgba(215,226,234,0.4)',
        'border-subtle': 'rgba(215,226,234,0.15)',
        'border-card': 'rgba(215,226,234,0.2)',
        'accent': '#7CFFB2',
        'accent-dim': 'rgba(124,255,178,0.3)',
        'accent-glow': 'rgba(124,255,178,0.15)',
      },
      fontFamily: {
        'display': ['Kanit', 'sans-serif'],
        'sans': ['Kanit', 'sans-serif'],
      },
      fontSize: {
        'huge': ['clamp(4rem, 12vw, 12rem)', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
        'giant': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'mega': ['clamp(2.5rem, 6vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.01em' }],
        'big': ['clamp(2rem, 4.5vw, 4.5rem)', { lineHeight: '1.05' }],
      },
      animation: {
        'marquee-left': 'marquee-left 40s linear infinite',
        'marquee-right': 'marquee-right 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
