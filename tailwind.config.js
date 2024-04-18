/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**.{html,ts}',
    './libs/core-data/src/lib/ui-login/lib/**',
    './apps/client/properties/navbar/**'
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
