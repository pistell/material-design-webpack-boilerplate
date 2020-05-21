# Material Design Webpack Boilerplate

[![Dependabot badge](https://flat.badgen.net/dependabot/pistell/material-design-webpack-boilerplate?icon=dependabot)](https://dependabot.com/)

A lightweight foundation for your next Material Design based frontend project.

### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

- ES6 Support via [babel](https://babeljs.io/) (>=7.8.4)
- SASS Support (with @use) via [sass-loader](https://github.com/jtangelder/sass-loader)
- Linting via [eslint-loader](https://github.com/MoOx/eslint-loader) with AirBnB config
- Webpack (>=4.41.6)
- Material Design Components (>=6.0.0)

---

## Notes

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.

Since Webpack is finicky with adding images, I have included an example on how to do it within index.js. Here are the steps:

1. Add the image files to the src/img folder
2. Import them in the index.js file

`import myLogo from './src/img/logo.png';`

3. Construct a new image

`const x = new Image(width, height);`

4. Add the new image's source as the imported image

`"x.src = myLogo;`

5. Append the new image to the div that you want

`document.querySelector('.logoCell').appendChild(x);`
