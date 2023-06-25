import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-a': '#a3b18a'

      }
    },
  },
  plugins: [],
} satisfies Config

