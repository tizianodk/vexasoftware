/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#05060E',
        surface: '#0B0E1A',
        'surface-2': '#11142B',
        border: 'rgba(148, 163, 214, 0.14)',
        blue: {
          DEFAULT: '#2F6BFF',
          bright: '#5B8CFF',
          dim: '#1A3A8F',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          bright: '#A78BFA',
        },
        cyan: {
          DEFAULT: '#00E5FF',
        },
        ink: {
          DEFAULT: '#F4F6FF',
          muted: '#9AA3C0',
          dim: '#5C6489',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'linear-gradient(to bottom, transparent, #05060E)',
        'aurora': 'radial-gradient(60% 50% at 20% 20%, rgba(47,107,255,0.22), transparent 60%), radial-gradient(50% 40% at 85% 15%, rgba(139,92,246,0.18), transparent 60%), radial-gradient(40% 40% at 60% 90%, rgba(0,229,255,0.10), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(47,107,255,0.45)',
        'glow-violet': '0 0 40px -8px rgba(139,92,246,0.45)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'wa-breathe': 'wa-breathe 2.8s ease-in-out infinite',
        'wa-ring': 'wa-ring 2.8s ease-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'wa-breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.06)' },
        },
        'wa-ring': {
          '0%': { transform: 'scale(1)', opacity: 0.55 },
          '100%': { transform: 'scale(1.9)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
