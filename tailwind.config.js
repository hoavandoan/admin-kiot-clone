module.exports = {
  important: 'body',
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          '100': '#EBF8FF',
          '200': '#dcf4fc',
          '300': '#90CDF4',
          '400': '#63B3ED',
          '500': '#0090da',
          '600': '#0076b9',
          '700': '#0067a2',
          '800': '#00588b',
          '900': '#004872',
        }
      }
    },
    fontFamily: {
      display: ['Helvetica', 'Arial', 'sans-serif'],
      body: ['Helvetica', 'Arial', 'sans-serif'],
      sans: ['Helvetica', 'Arial', 'sans-serif'],
    }
  },
  variants: {},
  plugins: [],
}
