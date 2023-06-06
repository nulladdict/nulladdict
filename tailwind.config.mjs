import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      typography: ({ theme }) => ({
        custom: {
          css: {
            "--tw-prose-invert-body": theme("colors.purple[300]"),
            "--tw-prose-invert-headings": theme("colors.pink[300]"),
            "--tw-prose-invert-lead": theme("colors.purple[300]"),
            "--tw-prose-invert-links": theme("colors.pink[200]"),
            "--tw-prose-invert-bold": theme("colors.pink[300]"),
            "--tw-prose-invert-counters": theme("colors.purple[400]"),
            "--tw-prose-invert-bullets": theme("colors.purple[600]"),
            "--tw-prose-invert-hr": theme("colors.purple[700]"),
            "--tw-prose-invert-quotes": theme("colors.purple[200]"),
            "--tw-prose-invert-quote-borders": theme("colors.purple[700]"),
            "--tw-prose-invert-captions": theme("colors.purple[400]"),
            "--tw-prose-invert-code": theme("colors.pink[300]"),
            "--tw-prose-invert-pre-code": theme("colors.purple[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.purple[600]"),
            "--tw-prose-invert-td-borders": theme("colors.purple[700]"),
          },
        },
      }),
    },
  },
  plugins: [typography],
};
