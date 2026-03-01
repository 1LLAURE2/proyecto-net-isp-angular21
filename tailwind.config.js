module.exports = {
  darkMode: 'class', // toggle usando la clase .dark
  content: ["./src/**/*.{html,ts,css}"],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#E0E7FF",   // azul muy claro para claro
          dark: "#0F172A"       // azul muy oscuro para dark
        },
        card: {
          DEFAULT: "#FFFFFF",   // blanco para claro
          dark: "#1E293B"       // azul oscuro profundo para dark
        },
        text: {
          DEFAULT: "#1E293B",   // azul oscuro para claro
          dark: "#E0E7FF"       // azul muy claro para dark
        },
        primary: {
          DEFAULT: "#3B82F6",   // azul vivo para claro
          dark: "#60A5FA"       // azul celeste para dark
        },
        secondary: {
          DEFAULT: "#475569",   // gris azulado para claro
          dark: "#94A3B8"       // gris claro para dark
        }
      }
    }
  },
  plugins: [],
};
