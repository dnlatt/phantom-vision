// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-purple': '#3a0ca3',
      },
      blur: {
        150: '150px',
        120: '120px',
      },
      backgroundImage: {
        'gradient-button': 'linear-gradient(to top right, #BC3CD8 0%, #C54B8C 100%)',
        // Or if you need the specific stops from the client box:
        'gradient-testimonial-card': 'linear-gradient(to bottom, #B936F5 0%, #AA14F0 100%)',
        // Or for the Awesome Exp header:
        'gradient-awesome-exp': 'linear-gradient(90deg, #A259FF, #FF62D2)',
      }
    },
  },
  plugins: [],
}
export default config;
