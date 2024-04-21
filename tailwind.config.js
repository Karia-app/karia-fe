/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**.{html,ts}',
    './apps/client/properties/navbar/**',
    './libs/core-data/src/lib/login/lib/**',
    './libs/core-data/src/lib/register/lib/**',
    './libs/core-data/src/lib/ui-forgot-password/lib/**',
    './apps/client/properties/home/carousel/**',
    './apps/client/properties/home/**',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
