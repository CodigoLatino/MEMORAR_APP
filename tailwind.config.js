module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.tsx", "./src/**/*.ts"],
    enabled: false, // disable purge in dev
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      nav: {
        light: '#a0d2eb',
        DEFAULT: '#a0d2eb',
        dark: '#a0d2eb',
      },
      back: {
        light: '#494d5f',
        DEFAULT: '#494d5f',
        dark: '#494d5f',
      },
      typo: {
        dark: '#e5eaf5',
        DEFAULT: '#494d5f',
        light: '#494d5f',
      },
      hovernav: {
        dark: '#8458b3',
        DEFAULT: '#8458b3',
        light: '#8458b3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
