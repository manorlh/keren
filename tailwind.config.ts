import type { Config } from "tailwindcss";

export default {
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
        primary: {
          DEFAULT: "#1a2744",
          foreground: "#ffffff",
          dark: "#0f1724",
        },
        secondary: {
          DEFAULT: "#6b7280",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#c9a962",
          foreground: "#1a2744",
          light: "#d4b978",
        },
        muted: {
          DEFAULT: "#f8f7f4",
          foreground: "#4b5563",
        },
        "muted-bg": "#f8f7f4",
        border: "#e5e5e5",
        input: "#e5e5e5",
        ring: "#c9a962",
      },
      fontFamily: {
        heading: ["var(--font-heebo)", "var(--font-rubik)", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
    },
  },
  plugins: [],
} satisfies Config;
