/** css-density-demo: 9/28 portfolio house style (Michroma + IBM Plex, turquoise #0B8A8F on cream). */
module.exports = {
  content: ["./index.html", "./src/js/**/*.js"],
  corePlugins: { preflight: false },
  // Plain words in the JS (el.hidden, filter(), etc.) must not become utilities.
  blocklist: ["hidden", "visible", "filter", "static", "block", "fixed", "table"],
  theme: {
    extend: {
      colors: {
        "ink": {
                "DEFAULT": "#1c1916",
                "soft": "#5c564e"
        },
        "teal": {
                "DEFAULT": "#0B8A8F",
                "deep": "#087277"
        },
        "paper": "#f3eee4"
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        display: ['Michroma', '"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
