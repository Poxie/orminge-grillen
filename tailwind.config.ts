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
        't-primary': '#0f172a',
      },
      textColor: {
        primary: '#0f172a',
        muted: '#475569',
        light: '#fff',
      },
      width: {
        main: '1100px',
      },
      maxWidth: {
        main: '90%',
      },
      borderColor: {
        primary: '#fff',
        secondary: '#F2F2F2',
        tertiary: '#E1E1E1',
        quaternary: '#DADADA',
        't-primary': '#0f172a',
      },
      backgroundImage: {
        lines: 'linear-gradient(to right, #C4C4C4 33%, rgba(255,255,255,0) 0%)',
      },
      padding: {
        section: '5.25rem 0',
      },
    },
  },
  plugins: [],
};
export default config;
