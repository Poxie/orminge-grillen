import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#fff',
        secondary: '#F2F2F2',
        tertiary: '#E1E1E1',
        quaternary: '#DADADA',
      },
      textColor: {
        primary: '#0f172a',
        muted: '#475569',
        light: '#fff',
      },
    },
  },
  plugins: [],
};
export default config;
