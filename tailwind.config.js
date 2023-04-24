/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      // sm: '480px',
      // md: '768px',
      // lg: '976px',
      // xl: '1440px',
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        // 1E293B  0F172A
        primary: "#6366F1",
        // background
        secondary: "#1E293B",
        // button
        accent: "#6366F1",
        // hover
        hover: "#307AF7",
        // paragraph
        paragraph: "#79879B",
        // title
        title: "#ff6700",
      },
      backgroundImage: {
        html: "url('../src/assets/tools/html.png')",
        css: "url('../src/assets/tools/css.png')",
        javascript: "url('../src/assets/tools/js.png')",
        bootstrap: "url('../src/assets/tools/bootstrap.png')",
        react: "url('../src/assets/tools/react.png')",
        csharp: "url('../src/assets/tools/csharp.png')",

        tailwind: "url('../src/assets/tools/tailwind.png')",
        wordpress: "url('../src/assets/tools/wordpress.png')",
        mysql: "url('../src/assets/tools/mysql.png')",
        git: "url('../src/assets/tools/git.png')",
        github: "url('../src/assets/tools/github.png')",
        figma: "url('../src/assets/tools/figma.png')",
      },
    },
  },
  plugins: [],
};
