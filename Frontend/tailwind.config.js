/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaria: "#0077b6", // Azul oceano
        secundaria: "#f4d58d", // Bege areia
        terciaria: "#2a9d8f", // Verde savana
        destaque: "#e76f51", // Laranja pôr-do-sol
        fundo: "#ffffff", // Branco neutro
        texto: "#333333", // Texto escuro
      },
    },
  },
  plugins: [],
};
