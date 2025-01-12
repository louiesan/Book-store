/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Book_store/*.html"],
  theme: {
    extend: {
      boxShadow: {
        'bk': '1px 1px 12px -1px cadetblue',
      },
      screens: {
        "sm": "450px"
      },
    },
  },
  plugins: [],
}

