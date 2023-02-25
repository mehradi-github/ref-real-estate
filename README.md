# The Real Estate
The Real Estate portal is built React and Tailwind CSS.
- [The Real Estate](#the-real-estate)
  - [Installing Requirements](#installing-requirements)
  - [Get started with Tailwind CSS](#get-started-with-tailwind-css)


## Installing Requirements
```bash
npx create-react-app ref-real-state --template typescript
git branch -m main
git pull origin main --allow-unrelated-histories
git push -u origin main
```
## Get started with Tailwind CSS
Install [Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app) with Create React App:
```bash
npm i -D tailwindcss@latest 
npx tailwindcss init

```
file tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

file index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
```bash
npm start
```

App.ts
```js
export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}
```


