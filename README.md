# The Real Estate
The Real Estate portal is built React and Tailwind CSS.
- [The Real Estate](#the-real-estate)
  - [Installing Requirements](#installing-requirements)
  - [Get started with Tailwind CSS](#get-started-with-tailwind-css)
    - [Animation](#animation)
    - [Arbitrary values](#arbitrary-values)


## Installing Requirements
```bash
npx create-react-app ref-real-state --template typescript
git branch -m main
git pull origin main --allow-unrelated-histories
git push -u origin main

# fortawesome
npm i @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons @fortawesome/react-fontawesome

```
## Get started with Tailwind CSS
Install [Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app) with Create React App:
```bash
npm i -D tailwindcss@latest @headlessui/react @heroicons/react 
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

```bash
npm start
# npx tailwindcss -i ./src/index.css -o ./dist/index.css --watch
```
### Animation
Utilities for [animating](https://tailwindcss.com/docs/animation) elements with CSS animations.
animate-none, animate-spin, animate-ping, animate-pulse, animate-bounce
```html
<svg class="animate-bounce w-6 h-6 ...">
  <!-- ... -->
</svg>
```
You can customize these values by editing theme.animation or theme.extend.animation in your tailwind.config.js file.
To add new animation @keyframes, use the keyframes section of your theme configuration:

```javascript
module.exports = {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }

       animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    }
  }
}
```
### Arbitrary values
If you need to use a one-off animation value that doesn’t make sense to include in your theme, use square brackets to generate a property on the fly using any arbitrary value.
```html
<div class="animate-[wiggle_1s_ease-in-out_infinite]">
  <!-- ... -->
</div>
```


Deploy React to Github Pages: [gh-pages](https://github.com/mehradi-github/ref-landingpage-photography#deploy-react-to-github-pages)