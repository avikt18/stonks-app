/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'green': "#00d964",
        'green-sec': "#E8F3E7",
        'red-sec': "#F8E5E5",
        'red': "#FF0000",
        'dark': "#212121",
      },
      textColor: {
        'sec': 'rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
