/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        primarybgimage:
          "linear-gradient(180deg, #EB4B19 14.63%, #C03C12 100%)",
        "radial-hero":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))",
      },
      boxShadow: {
        primaryshadow: '0px 9px 30px 0px rgba(231, 74, 25, 0.39)',
      },
    },
  },
  plugins: [],
};
