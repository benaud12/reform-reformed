module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        "brand-light": "#91cdd2",
        "brand-primary": "#2495b3",
        "brand-dark": "#0d2738",
        "brand-dark10": "rgba(0, 0, 0, 0.1)",
        "brand-dark20": "rgba(0, 0, 0, 0.2)",
        "brand-dark60": "rgba(0, 0, 0, 0.6)",
      },
    },
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [],
};
