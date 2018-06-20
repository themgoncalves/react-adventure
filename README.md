# ⛰ React Adventure
> **React high-ending architecture & patterns** ready for use. Made for big and small projects.

[![Known Vulnerabilities][vulnerabilities-image]][vulnerabilities-url]
[![GitHub issues][issues-image]][issues-url]
[![GitHub stars][stars-image]][stars-url]
[![GitHub forks][forks-image]][forks-url]
[![Awesome][awesome-image]][awesome-url]
[![GitHub All Releases][releases-image]][releases-url]

<br />
<br />
<div align="center"><img src="./static/images/themgoncalves.png" alt="themgoncalves logo" /></div>
<br />
<br />

## Description

We all know the struggle about _Frontend patterns_, specially when it comes to big projects, it become a mess over the time.

For this reason we created the `React Adventure` in order to provide a **workable, maintainable and scalable environment overtime**, wrapped with the best *technological stack* and *patterns* available in the market.

![](./static/images/screens-shots/main.png)

## Features

| Feature        | Experimental or Beta  | For Development | For Production
| ------------- |:-------------:|:-------------:|:-------------:|
| [ES7 Decorators](https://github.com/tc39/proposal-decorators)     | ✔ | ✔ | ✖ |
| [Asynchronous Components Loading](https://github.com/jamiebuilds/react-loadable)     | ✖ | ✔ | ✔ |
| [Code Splitting & Chunks](https://webpack.js.org/configuration/optimization/)     | ✖ | ✔ | ✔ |
| [Custom chunks name for async requests](https://webpack.js.org/guides/code-splitting/)     | ✖ | ✔ | ✔ |
| [`prefetch` & `preload` ready](https://medium.com/webpack/link-rel-prefetch-preload-in-webpack-51a52358f84c)     | ✖ | ✔ | ✔ |
| [Decentralized Router Configuration](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config)     | ✔ | ✔ | ✔ |
| [Router State Synchronized with Redux](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)     | ✔ | ✔ | ✔ |
| [Document Head Manager (SEO)](https://github.com/nfl/react-helmet)     | ✖ | ✔ | ✔ |
| [Hashed files in Production build (e.g. `[name].[hash].bundle.js`)](https://webpack.js.org/configuration/output/#output-filename)     | ✖ | ✔ | ✖ |
| [Hoist JSX el. as value types in the highest scope](https://babeljs.io/docs/plugins/transform-react-constant-elements/)     | ✖ | ✔ | ✖ |
| [Subresource Integrity)](https://www.w3.org/TR/SRI/)      | ✖ | ✖ | ✔ |
| [SVG as React Component](https://github.com/smooth-code/svgr)     | ✖ | ✔ | ✖ |
| [Remove PropTypes from Production build](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types)     | ✖ | ✖ | ✔ |
| [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)     | ✖ | ✔ | ✖ |
| [Output fiiles Treemap](https://github.com/webpack-contrib/webpack-bundle-analyzer)     |  ✖ | ✔ | ✖ |
| [Assets compression served them with Content-Encoding](url)     | ✖ | ✖ | ✔ |
| [Style Guide Centralized & Globally available](https://www.styled-components.com/docs/advanced)     | ✖ | ✔ | ✔ |
| [HTML output minified](url)     | ✖ | ✔ | ✔ |
| [E2E Tests](https://www.cypress.io/)     | ✔ | ✔ | ✖ |
| [Snapshot testing](https://facebook.github.io/jest/docs/en/snapshot-testing.html)     | ✖ | ✔ | ✖ |
| [Code testing](https://facebook.github.io/jest/docs/en/snapshot-testing.html)     | ✖ | ✔ | ✖ |
| [Webpack 4 with Custom Configs (Dev & Prod.)](https://webpack.js.org/)     |  ✖ | ✔ | ✖ |
  [Redux with Custom Configs (Dev & Prod.)](https://redux.js.org/)     |  ✖ | ✔ | ✔ |
| [Redux Saga](https://github.com/redux-saga/redux-saga)     |  ✖ | ✔ | ✔ |
| [ES6 ready](http://es6-features.org/)     | ✖ | ✔ | ✖ |
| [ES7 ready](https://medium.freecodecamp.org/ecmascript-2016-es7-features-86903c5cab70)     | ✖ | ✔ | ✖ |
| [ES8 ready](https://hackernoon.com/es8-was-released-and-here-are-its-main-new-features-ee9c394adf66)     | ✖ | ✔ | ✖ |
| [React 16+](https://github.com/facebook/react/)     | ✖ | ✔ | ✔ |
| [styled-components](https://github.com/styled-components/styled-components)     | ✖ | ✔ | ✔ |
| [super-query](https://github.com/themgoncalves/super-query)     | ✖ | ✔ | ✔ |
| [Webpack Aliases transformation](https://github.com/sebinsua/babel-plugin-webpack-aliases)     | ✖ | ✔ | ✔ |
| [Loads environment vars from a `.env` file](https://github.com/motdotla/dotenv)     | ✖ | ✔ | ✖ |
| [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)     | ✖ | ✔ | ✖ |
| [Git Hooks (Prevent bad `git commit`, `git push`, or whatever you want)](https://github.com/typicode/husky)     | ✖ | ✔ | ✖ |
| [Image Compression](https://github.com/tcoopman/image-webpack-loader)     | ✖ | ✔ | ✔ |
| [Real time update](https://github.com/gaearon/react-hot-loader)     | ✖ | ✔ | ✖ |

<br />

## React Adventure Pattern

### Motivation

We all have or will work with outdated/monolith project, hard to code, maintain and to implement new stacks of technology.

Usually in those projects, we face **huge JavaScripts files**, sometimes with **over than 1MB**! This is a **huge issue**, especially for mobile uses.

According to [Sam Saccone from Google](https://www.youtube.com/watch?v=RWLzUnESylc), this file would take to be read by the browser on Samsung Galaxy S7 ~850 ms and Nexus 5 in **~1700 ms**!

Besides that, we would have *scalability penalty* for such environment, costing more server power ~~and money!~~ to deliver the same expected behavior.

In other words, this would be an unsustainable environment we would be facing, with our resources being drained each time more, and by resources, I mean both **financial** and **human**.

Because of such actual possibility, we build **React Adventure**.

> _The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy._
> ###### _Martin Luther King Jr._

<br />

### Goal

As Engineers, we're constantly looking for new ways to *improve* and *add new features* to our code **without have to refactor** it.

By this reason, we came up with this approach, which give us the ability to:

Paraphrasing Steve Krug:
> _"Making every component, function or screen self-evident is like having good lighting in a store: **it just makes everything seem better**."_

So we defined as a goal:

* Make every `component, function or screen self-evident`.
* To create a `readable` code.
* To `safely delete` legacy/unused code without effort or break the application.
* To `easily create or update` different part of the application, in the shortest possible time.
* Be able to `implement new techs with minimum refactory effort`.

### Structure Pattern

The bellow structure is the result of a several patterns studies and implementations over the time.

```sh
react-adventure
├── configuration                         # Configuration folder
│   ├── jest
│   │   ├── __mocks__
│   │   │   ├── file.js                   # file mock
│   │   │   ├── react.js                  # react mock
│   │   │   └── react-router-dom.js       # react-router-dom mock (BrowserRouter)
│   │   ├── helpers
│   │   │   └── theme.js                  # theme (_vars.scss) parsed into object
│   │   ├── setup.env.js                  # jest env setup
│   │   ├── setup.framework.js            # test framework jest setup
│   │   └── setup.styled-components.js    # styled-component custom render functions
│   ├── webpack
│   │   ├── webpack.config.dev.js         # Webpack development config
│   │   ├── webpack.config.production.js  # Webpack production config
│   │   └── webpack.rules.js              # Webpack rules
├── cypress                               # cypress E2E directory
├── node_modules
├── scripts                               # custom scripts (.sh)
│   └── server-check.sh                   # check if dev server is online
├── source                                # source folder
│   ├── app                               # app source
│   │   ├── actions                       # Redux Actions
│   │   │   ├── index.js                  # main actions
│   │   │   └── types.js                  # actions types
│   │   ├── components                    # react components (dumb components) for universal use
│   │   │   └── v1                        # component's version
│   │   │      ├── button                 # button component
│   │   │      ├── input                  # input component
│   │   │      └── loading                # loading screen component
│   │   │          ├── index.jsx
│   │   │          └── styles.js
│   │   ├── decorators                    # ES7 decorators
│   │   │   ├── animate                   # @animate ⟶ screen entrance animation
│   │   │   │   └── index.jsx
│   │   │   ├── auth                      # @auth ⟶ require authentication for given component
│   │   │   │   └── index.jsx
│   │   │   └── bindme                    # @bindme ⟶ automatically bind function to the main scope (replaces this.fooBar.bind(this))
│   │   │       └── index.js
│   │   ├── hoc
│   │   │   ├── loadable                  # custom react-loadable wrapper
│   │   │   │   └── index.js
│   │   ├── reducers                      # Redux Reducer
│   │   │   ├── auth.js                   # authentication reducer
│   │   │   └── index.js                  # root reducer ⟶ combine all reducers
│   │   ├── sagas                         # sagas (redux-saga middleware)
│   │   │   ├── auth.js                   # authentication saga
│   │   │   └── index.jsx                 # root saga ⟶ export all sagas
│   │   ├── screens                       # screen components
│   │   │   ├── errors                    # base screen name
│   │   │   │   └── not-found             # screen name
│   │   │   │       ├── route.js          # route configurations
│   │   │   │       ├── screen.jsx        # React Screen Component
│   │   │   │       └── styles.js         # component's styles
│   │   │   ├── home                      # screen component
│   │   │   │   ├── route.js              # route configurations
│   │   │   │   ├── screen.jsx            # React Screen Component
│   │   │   │   └── styles.js             # component's styles
│   │   │   ├── restricted
│   │   │   │   ├── route.js
│   │   │   │   ├── screen.jsx
│   │   │   │   └── styles.js
│   │   │   └── root
│   │   │       ├── route.js              # main app. route ⟶ import all used route into a main route
│   │   │       └── screen.jsx            # Root Component ⟶ application setup
│   │   ├── services
│   │   │   └── index.js                  # application services
│   │   ├── store
│   │   │   ├── index.js
│   │   │   ├── store.config.dev.js       # redux-store config for development
│   │   │   └── store.config.prod.js      # redux-store config for production
│   ├── styles                            # styles folder
│   │   ├── _vars.scss                    # style-guide settings
│   │   ├── base.scss                     # global styles, e.g. body, html, etc.
│   │   ├── reset.scss                    # css reset/reboot, imported from bootstrap
│   │   └── responsive-grid.scss          # bootstrap layout system import
│   ├── application.jsx                   # index application file - main imports & setup
│   └── index.hbs                         # base application html
├── static
│   ├── images
│   └── robots.txt
├── .babelrc
├── .eslintrc.yml
├── .gitattributes
├── .gitignore
├── .jshintrc
├── cypress.json
├── jsconfig.json
├── package.json
├── postcss.config.js
├── README.md
├── webpack.config.js
├── yarn.lock
├── yarn-error.log
```

Note that in the `components` folder, there's a folder called `v1`, which is to represent the current components versions.

## Asynchronous Component Preview

One of the `React Adventure` _features_ is the component loading by demand (asynchronous loading)., which give us the power of really small JavaScript files, splitted into chunks.

Take a peek on the _network_ tab and see the files being loaded by demand.

![](./static/images/screens-shots/app-network-demo.gif)

## Installation

Since we have experience some issues with NPM along the time, we strongly recomment the use of [YARN Package Manage](https://yarnpkg.com/en/);
#### Familiar with Git?

Clone this repository with the following commands:
```sh
> git clone https://github.com/themgoncalves/react-adventure.git
> cd react-adventure
```
<br />

#### Install the Dependencies

```sh
yarn install
```

<br />

#### Run the Application

```sh
yarn start
```

*Or With Webpack Dashboard*

```sh
yarn start:dev
```

<br />

#### Linting the code

```sh
yarn lint
```

<br />

#### Run the Tests Suites

**Jest**

```sh
yarn test
```
Or with `watch` options:

```sh
yarn test:watch
```

<br />

**E2E**

```sh
yarn test:e2e
```

<br />

## Commands available

| Command | Description |
|---------| ----------- |
| `build` | build the application for production |
| `start` | start the application |
| `start:dev` | start the application with Webpack Dashboard |
| `start:silence` | start the application with less output messages |
| `lint` | lint the application's code |
| `lint:fix` | lint the application's code & fix |
| `cypress` | start e2e tests with cypress |
| `cypress:open` | open cypress |
| `cypress:record` | start e2e tests with cypress in the record mode |
| `cypress:chrome` | start e2e tests with cypress in the chrome mode |
| `cypress:headed` | start e2e tests with cypress in the headed mode |
| `test` | start jest tests |
| `test:watch` | start jest tests & watch files for modifications |
| `test:coverage` | check the % of tests coverage |
| `test:e2e` | check the server status & start e2e tests |
| `test:e2e:open` | check the server status & open cypress |
| `test:e2e:record` | check the server status & start e2e tests in the `record` mode |
| `test:e2e:chrome` | check the server status & start e2e tests in the `chrome` mode |
| `test:e2e:headed` | check the server status & start e2e tests in the `headed` mode |

<br />

## Technological Stack

### Dependencies

| Frameworks        | Version       | description   |
| ----------------- |:-------------:| :-------------|
| [babel-polyfill](https://babeljs.io/docs/usage/polyfill/)      | 6.26.0 | This will emulate a full ES2015+ environment and is intended to be used in an application rather than a library/tool. This polyfill is automatically loaded when using babel-node. |
| [bootstrap](https://getbootstrap.com/)      | 4.1.1 | Build responsive, mobile-first projects on the web with the world's most popular front-end component library. |
| [polished](https://github.com/styled-components/polished)      | 1.9.2 | A lightweight toolset for writing styles in JavaScript |
| [history](https://github.com/ReactTraining/history)      | 4.7.2 | Manage session history with JavaScript |
| [lodash](https://lodash.com/)      | 4.17.10 | A modern JavaScript utility library delivering modularity, performance & extras. |
| [prop-types](https://github.com/facebook/prop-types)      | 15.6.1 | Runtime type checking for React props and similar objects |
| [react](https://github.com/facebook/react/)      | 16.3.2 | A declarative, efficient, and flexible JavaScript library for building user interfaces. |
| [react-dom](https://github.com/facebook/react/tree/master/packages/react-dom)      | 16.3.2 | This package serves as the entry point of the DOM-related rendering paths. It is intended to be paired with the isomorphic React, which will be shipped as `react` to npm. |
| [react-helmet](https://github.com/nfl/react-helmet)      | 5.2.0 | A document head manager for React - SEO |
| [react-loadable](https://github.com/jamiebuilds/react-loadable)      | 5.3.1 | right |
| [react-redux](https://github.com/reduxjs/react-redux)      | 5.3.1 | A higher order component for loading components with promises. |
| [react-router](https://github.com/ReactTraining/react-router)      | 4.2.0 | Declarative routing for React |
| [react-router-config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config)      | 1.0.0-beta.4 | Static route configuration helpers for React Router. |
| [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) | 4.2.2 |DOM bindings for [React Router](https://reacttraining.com/react-router/) |
| [react-router-redux](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux)      | 5.0.0-alpha.9 | Keep your state in sync with your router |
| [redux](https://redux.js.org/)      | 4.0.0 | Redux is a predictable state container for JavaScript apps. |
| [redux-logger](https://github.com/evgenyrodionov/redux-logger)      | 3.0.6 | Logger for Redux |
| [redux-saga](https://github.com/redux-saga/redux-saga)      | 0.16.0 | An alternative side effect model for Redux apps |
| [styled-components](https://github.com/styled-components/styled-components)      | 3.2.6 | Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress |
| [super-query](https://github.com/themgoncalves/super-query)      | 0.1.1 | A super media-query for styled-component. Intuitive and easy of use. |
<br />

### Development Dependencies

| Frameworks        | Version       | description  |
| ----------------- |:-------------:|:-------------|
| [babel](https://github.com/babel/babel/)  | 6.26.0 | Babel is a compiler for writing next generation JavaScript.  |
| [babel-core](https://github.com/babel/babel/tree/master/packages/babel-core)      | 6.26.3 | Babel compiler core.|
| [babel-eslint](https://github.com/babel/babel-eslint)      | 8.2.3 | A wrapper for Babel's parser used for ESLint  |
| [babel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest)      | 22.4.3 | Babel jest plugin |
| [babel-loader](https://github.com/babel/babel-loader)      | 7.1.4 | Webpack plugin for Babel |
| [babel-plugin-transform-class-properties](https://babeljs.io/docs/plugins/transform-class-properties/)      | 6.24.1 | Transforms class properties |
| [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)      | 1.3.4 | A plugin for Babel 6 that (mostly) replicates the old decorator behavior from Babel 5 |
| [babel-plugin-transform-react-constant-elements](https://babeljs.io/docs/plugins/transform-react-constant-elements/)      | 6.23.0 | Treat React JSX elements as value types and hoist them to the highest scope. |
| [babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types)      | 0.4.13 | Remove unnecessary React propTypes from the production build. |
| [babel-plugin-transform-runtime](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime)      | 6.23.0 | coExternalise references to helpers and built-ins, automatically polyfilling your code without polluting globals. (This plugin is recommended in a library/tool)de |
| [babel-plugin-webpack-alias](https://github.com/trayio/babel-plugin-webpack-alias)      | 2.1.2 | babel 6 plugin which allows to use webpack resolve options |
| [babel-preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)      | 1.6.1 | A Babel preset that compiles ES2015+ down to ES5 by automatically determining the Babel plugins and polyfills you need based on your targeted browser or runtime environments. |
| [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)      | 6.24.1 | Babel preset for all React plugins. |
| [babel-preset-stage-1](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-1)      | 6.24.1 | Babel preset for stage 1 plugins. |
| [babel-runtime](https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-runtime)      | 6.26.0 | Externalise references to helpers and built-ins, automatically polyfilling your code without polluting globals. (This plugin is recommended in a library/tool) |
| [compression-webpack-plugin](https://github.com/webpack-contrib/compression-webpack-plugin)      | 1.1.11 | Prepare compressed versions of assets to serve them with Content-Encoding |
| [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)      | 4.5.1 | Copy files and directories with webpack |
| [css-loader](https://github.com/webpack-contrib/css-loader)      | 0.28.11 | CSS Loader |
| [cypress](https://www.cypress.io/)      | 2.1.0 | E2E Test - Fast, easy and reliable testing for anything that runs in a browser. |
| [dotenv](https://github.com/motdotla/dotenv)      | 5.0.1 | Loads environment variables from .env for nodejs projects. |
| [enzyme](https://github.com/airbnb/enzyme)      | 3.3.0 | JavaScript Testing utilities for React |
| [enzyme-adapter-react-16](https://github.com/airbnb/enzyme)      | 1.1.1 | Enzyme adapter for `React 16` |
| [enzyme-to-json](https://github.com/adriantoine/enzyme-to-json)      | 3.3.3 | Snapshot test your Enzyme wrappers |
| [eslint](https://github.com/eslint/eslint)      | 4.19.1 | A fully pluggable tool for identifying and reporting on patterns in JavaScript |
| [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)      | 16.1.0 | This package provides Airbnb's .eslintrc as an extensible shared config. |
| [eslint-import-resolver-webpack](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack)      | 0.9.0 | Webpack-literate module resolution plugin for [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import). |
| [eslint-loader](https://github.com/webpack-contrib/eslint-loader)      | 2.0.0 | eslint loader (for webpack) |
| [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)      | 2.11.0 | ESLint plugin with rules that help validate proper imports. |
| [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)      | 6.0.3 | Static AST checker for a11y rules on JSX elements. |
| [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)      | 7.7.0 | React specific linting rules for ESLint |
| [expose-loader](https://github.com/webpack-contrib/expose-loader)      | 0.7.5 | Expose loader module for webpack |
| [extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)      | 4.0.0-beta.0 | Extracts text from bundle into a file |
| [file-loader](https://github.com/webpack-contrib/file-loader)      | 1.1.11 | A file loader for webpack |
| [html-webpack-include-assets-plugin](https://github.com/jharris4/html-webpack-include-assets-plugin)      | 1.0.4 | Add the ability to include assets based on a list of paths |
| [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)      | 3.2.0 | Simplifies creation of HTML files to serve your webpack bundles |
| [husky](https://github.com/typicode/husky)      | 1.0.0-rc.4 | Git hooks made easy |
| [identity-obj-proxy](https://github.com/keyanzhang/identity-obj-proxy)      | 3.0.0 | An identity object using ES6 proxies. Useful for mocking webpack imports like CSS Modules. |
| [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)      | 4.2.0 | Image loader module for webpack |
| [jest](https://github.com/facebook/jest)      | 22.4.3 | Delightful JavaScript Testing.  |
| [jest-styled-components](https://github.com/styled-components/jest-styled-components)      | 5.0.1 | Jest utilities for Styled Components |
| [node-sass](https://github.com/sass/node-sass)      | 4.9.0 | Node.js bindings to libsass |
| [npm-run-all](https://github.com/mysticatea/npm-run-all)      | 4.1.3 | A CLI tool to run multiple npm-scripts in parallel or sequential. |
| [postcss-loader](https://github.com/postcss/postcss-loader)      | 2.1.4 | PostCSS loader for webpack |
| [react-hot-loader](https://github.com/gaearon/react-hot-loader)      | 4.1.2 | Tweak React components in real time. |
| [react-test-renderer](https://github.com/facebook/react/tree/master/packages/react-test-renderer)      | 16.3.2 | Provides an experimental React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment. |
| [regenerator-runtime](https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime)      | 0.11.1 | Standalone runtime for Regenerator-compiled generator and `async` functions. |
| [sass-extract](https://github.com/jgranstrom/sass-extract)      | 2.1.0 | Extract structured variables from sass files |
| [sass-extract-js](https://github.com/adamgruber/sass-extract-js)      | 0.3.0 | Plugin for sass-extract to convert Sass variables into a plain JS object |
| [sass-extract-loader](https://github.com/jgranstrom/sass-extract-loader)      | 1.1.0 | Webpack loader for [sass-extract](https://github.com/jgranstrom/sass-extract). |
| [sass-loader](https://github.com/webpack-contrib/sass-loader)      | 7.0.1 | Compiles Sass to CSS |
| [style-loader](https://github.com/webpack-contrib/style-loader)      | 0.21.0 | code |
| [svgr](https://github.com/smooth-code/svgr)      | 1.9.1 | Adds CSS to the DOM by injecting a <> tag |
| [url-loader](https://github.com/webpack-contrib/url-loader)      | 1.0.1 | Loads files as `base64` encoded URL |
| [webpack](https://webpack.js.org/)      | 4.6.0 | code |
| [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)      | 2.11.1 | Webpack plugin and CLI utility that represents bundle content as convenient interactive zoomable treemap |
| [webpack-cleanup-plugin](https://github.com/gpbl/webpack-cleanup-plugin)      | 0.5.1 | Plugin for webpack to cleanup the output path |
| [webpack-cli](https://github.com/webpack/webpack-cli)      | 2.1.0 | Webpack's Command Line Interface |
| [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard)      | 1.1.1 | A CLI dashboard for webpack dev server |
| [webpack-dev-server](https://github.com/webpack/webpack-dev-server)      | 3.1.3 | Serves a webpack app. Updates the browser on changes. |
| [webpack-subresource-integrity](https://github.com/waysact/webpack-subresource-integrity)      | 1.1.0-rc.4 | [Subresource Integrity](https://www.w3.org/TR/SRI/) (SRI) is a security feature that enables browsers to verify that files they fetch (for example, from a CDN) are delivered without unexpected manipulation. |

<br />

## Meta

### Author
**Marcos Gonçalves** – [LinkedIn](http://linkedin.com/in/themgoncalves/) – [Website](http://www.themgoncalves.com)

### License
Distributed under the MIT license. [Click here](/.github/LICENSE) for more information.

[https://github.com/themgoncalves/react-adventure](https://github.com/themgoncalves/react-adventure)

## Contributing

1. Fork it (<https://github.com/themgoncalves/react-adventure/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am ':sparkles: Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request



<!-- Markdown link & img dfn's -->

[vulnerabilities-image]: https://snyk.io/test/github/themgoncalves/react-adventure/badge.svg
[vulnerabilities-url]: https://snyk.io/test/github/themgoncalves/react-adventure
[issues-image]: https://img.shields.io/github/issues/themgoncalves/react-adventure.svg
[issues-url]: https://github.com/themgoncalves/react-adventure/issues
[stars-image]: https://img.shields.io/github/stars/themgoncalves/react-adventure.svg
[stars-url]: https://github.com/themgoncalves/react-adventure/stargazers
[forks-image]: https://img.shields.io/github/forks/themgoncalves/react-adventure.svg
[forks-url]: https://github.com/themgoncalves/react-adventure/network
[awesome-image]: https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg
[releases-image]: https://img.shields.io/github/downloads/atom/atom/total.svg
[releases-url]: https://github.com/themgoncalves/react-adventure
[awesome-url]: https://github.com/themgoncalves/react-adventure
[wiki]: https://github.com/yourname/yourproject/wiki
