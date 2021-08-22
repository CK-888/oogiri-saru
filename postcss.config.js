module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  plugins: [
    require('postcss-100vh-fix'),
    require('autoprefixer')
  ]
}
