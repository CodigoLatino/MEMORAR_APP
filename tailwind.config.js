module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.tsx", "./src/**/*.ts"],
    enabled: false, // disable purge in dev
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
