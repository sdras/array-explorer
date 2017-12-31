# How to contribute

Thank you for stopping by the project! If you're interested in creating a language translation, please check out **Translations** below.

The mission of this project is to build the resource I would have wanted when I was first learning array methods, so some very opinionated choices have been made to keep in line with that idea, and some are controversial. One such example was not to include `Array.prototype.methodName()` and rather, simplify to `Array.methodName()`, as when I was learning I found it confusing. After polling a lot of people, I wasn't the only one, so this change was made.

This tool is not meant to be a replacement for documentation, but rather a way to quickly traverse and find what one needs. I value quick clarity and the ability to scan above all else. If you see a way that this can be improved, I appreciate contributions!

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# to build for the docs:
npm run build
# then rename `dist` to `docs` and remove the first slash `/static` from `static` in `index.html`
# then change the font paths in the css file from `/static` to `../../static`
```

## Submitting changes

Please send a pull request with a clear list of what you've done (read more about [pull requests](http://help.github.com/pull-requests/)).

## Translations

In `store`, you'll see many folders with language acronyms, each one has an `index.js` file and a `meta.json` file. Please make a copy of the `en` folder and translate the `index.js`, and give yourself credit in the `meta.json` file, and state the language.

Then in `store/index.js`, you will see a few places where you'll need to add your translation version.

In `src/locale`, you'll find another set of language folders, please duplicate the `en` folder and translate the `index.js` file.

Test that everything is working by running:

```
yarn
npm run dev
```

## Coding conventions

Start reading our code and you'll get the hang of it. I optimize for readability:

* I use prettier to format the javascript, two spaces
* I use single quotes or template literal backticks in the JS, double quotes in the HTML
* The meat of the content is in a Vuex store that is disseminated through the application, rather than being hardcoded into the components

Thank you!
Sarah Drasner
