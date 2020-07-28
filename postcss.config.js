module.exports = () => ({
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-viewport-height-correction'),
    require('autoprefixer'),
  ],
});
