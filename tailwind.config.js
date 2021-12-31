module.exports = {
  mode: 'jit',
  purge: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: [],
  theme: {
    extend: {
      spacing: {
        '1': '1px',
      },
    },
  },
  plugins: [],
  variants: {
    display: ["group-hover"]
  },
}
