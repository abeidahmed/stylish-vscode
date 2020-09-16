const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        ...defaultTheme.boxShadow,
        'teal-lg':
          '0 10px 15px -3px rgba(49, 151, 149, 0.1), 0 4px 6px -2px rgba(49, 151, 149, 0.05)',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'focus-within'],
    borderWidth: ['responsive', 'first'],
  },
  plugins: [require('@tailwindcss/ui')],
};
