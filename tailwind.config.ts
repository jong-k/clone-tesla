import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      backgroundImage: {
        "top-banner": "linear-gradient(90deg, #e4c678 0, #f2e5c2 50%, #e8d199 100%)",
      },
    },
    screens: {
      tablet: "600px",
      desktop: "1200px",
    },
  },
  plugins: [],
} satisfies Config;
