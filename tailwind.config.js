/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // 1. Personalizar colores
      colors: {
        primary: '#f3f5f0',  
        secondary: '#9333EA',  

      },
      
      // 2. Añadir tipografías personalizadas
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      
      // 3. Modificar el sistema de espaciado (padding/margin)
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      
      // 4. Configurar breakpoints personalizados
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      },
    },
  },
  
  // 5. Variantes personalizadas
  variants: {
    extend: {
      backgroundColor: ['active', 'group-hover'],
    },
  },
  
  plugins: [],
}

