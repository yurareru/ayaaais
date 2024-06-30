import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('/assets/main.jpg')",
        'grad': 'linear-gradient(90deg, #b449489f 0%, #5b51799f 100%)'
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      colors:{
        'header': '#4a4d54',
        'paragraph': '#898b91'
      },
      boxShadow: {
        glow: '0px 0px 16px 4px rgba(255,255,255,0.2)',
        'b-glow': '0px 8px 16px 4px rgba(255,255,255,0.2)',
      },
    }
  },
  plugins: []
}
