// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'premium-pink': '#E43071',   // Premium Pink
        'grey-copy': '#424242',      // Grey Copy
        'pink-subtle': '#FFDAE7',    // Pink Subtle
        'pink-hover': '#BE285E',     // Pink Hover
        'dark-disabled': '#D37899',  // Dark Disabled
        'light-grey': '#F2F3F8',     // Light Grey
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: ["70px", { lineHeight: "77px", fontWeight: "800", letterSpacing: "0" }],
        h2: ["60px", { lineHeight: "66px", fontWeight: "800", letterSpacing: "0" }],
        h3: ["48px", { lineHeight: "53px", fontWeight: "600", letterSpacing: "0" }],
        h4: ["40px", { lineHeight: "44px", fontWeight: "800", letterSpacing: "0" }],
        h5: ["38px", { lineHeight: "42px", fontWeight: "600", letterSpacing: "0" }],

        subtitle: ["18px", { lineHeight: "37px", fontWeight: "800", letterSpacing: "0" }],
        body: ["16px", { lineHeight: "37px", fontWeight: "800", letterSpacing: "0" }],
        link: ["16px", { lineHeight: "37px", fontWeight: "600", letterSpacing: "0" }],
      },
      borderRadius: {
        'btn': '40px',
      },
    },
  },
  plugins: [],
};
