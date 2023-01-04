# Tailwind CSS 셋팅

```bash
npm install -D tailwindcss postcss autoprefixer
```

## tailwind.config 수정

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## globals.css 수정

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
