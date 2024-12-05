import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

// Define the addVariablesForColors plugin
const addVariablesForColors = plugin(function ({ addBase, theme }) {
  const colors = theme("colors");

  // Flatten colors (handles nested colors objects)
  const flattenColors = (colors: Record<string, any>, prefix = ""): Record<string, string> =>
    Object.entries(colors).reduce((acc, [key, value]) => {
      if (typeof value === "object" && value !== null) {
        // If value is an object, recursively flatten
        Object.assign(acc, flattenColors(value, `${prefix}${key}-`));
      } else {
        // Otherwise, it's a color value
        acc[`${prefix}${key}`] = value;
      }
      return acc;
    }, {});

  // Flatten all colors from the theme
  const flattenedColors = flattenColors(colors);

  // Convert to CSS variables
  const cssVariables = Object.fromEntries(
    Object.entries(flattenedColors).map(([key, val]) => [`--${key}`, val])
  );

  // Add the CSS variables to :root
  addBase({
    ":root": cssVariables,
  });
});

const config: Config = {
  darkMode: ["class"], // Enable dark mode via class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animatePlugin, addVariablesForColors], // Add the plugin for color variables
};

export default config;
