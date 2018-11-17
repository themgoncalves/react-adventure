# ⛰ React Adventure
> **React high-ending architecture & patterns** ready for use. Made for big and small projects. _PWA Ready_.

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

For this reason we created the `React Adventure` in order to provide a **workable, maintainable and scalable environment overtime**,
built based on [React Adventure Pattern Proposal](https://github.com/themgoncalves/react-adventure-pattern-proposal),
providing a high-ending modular architecture with screen centric development for building SPAs with clean separation of concerns, high cohesion and maintainability.

![](./static/images/screens-shots/main.png)

## Features

| Feature        | Experimental or Beta  | For Development | For Production
| ------------- |:-------------:|:-------------:|:-------------:|
| [Progressive Web Application Ready](https://developers.google.com/web/progressive-web-apps/)     | ✖ | ✖ | ✔ |
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
| [Component Style Guide (React Styleguidist)](https://github.com/styleguidist/react-styleguidist)     | ✖ | ✔ | ✔ |
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
│   ├── application
│   │   └── settings.js                   # Application settings file
├── cypress                               # cypress E2E directory
│   ├── styleguidist
│   │   ├── styles                        # CSS styles to be loaded into the style guide
│   │   ├── wrappers
│   │   │   └──styled-components          # Wrappers for Styled-Components
│   │   │      └── ThemeWrapper.js        # Insert styled-components' theme into styleguidist env.
│   │   └── settings.js                     # Styleguidist config
│   ├── webpack
│   │   ├── config.dev.js                 # Webpack development config
│   │   ├── config.production.js          # Webpack production config
│   │   └── rules.js                      # Webpack rules
├── cypress                               # cypress E2E directory
├── node_modules
├── scripts                               # custom scripts (.sh)
│   └── server-check.sh                   # check if dev server is online
├── source                                # source folder
│   ├── app                               # app source
│   │   ├── components                    # react components (dumb components) for universal use
│   │   │   └── v1                        # component's version
│   │   │      ├── button                 # button component
│   │   │      ├── input                  # input component
│   │   │      └── loading                # loading screen component
│   │   │          ├── index.jsx
│   │   │          └── styles.js
│   │   ├── enhancers                     # class/function/method/property enhancers
│   │   │   ├── animate                   # @animate ⟶ screen entrance animation
│   │   │   │   └── index.jsx
│   │   │   ├── auth                      # @auth ⟶ require authentication for given component
│   │   │   │   └── index.jsx
│   │   │   └── bindme                    # @bindme ⟶ automatically bind function to the main scope (replaces this.fooBar.bind(this))
│   │   │       └── index.js
│   │   │   ├── loadable                  # custom react-loadable wrapper
│   │   │   │   └── index.js
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
│   │   ├── state                         # application data state
│   │   │   ├── actions                       # Redux Actions
│   │   │   │   ├── index.js                  # main actions
│   │   │   │   └── types.js                  # actions types
│   │   │   ├──reducers                   # Redux Reducer
│   │   │   │   ├── auth.js               # authentication reducer
│   │   │   │   └── index.js              # root reducer ⟶ combine all reducers
│   │   │   ├── sagas                     # sagas (redux-saga middleware)
│   │   │   │   ├── auth.js               # authentication saga
│   │   │   │   └── index.jsx             # root saga ⟶ export all sagas
│   │   │   ├── store
│   │   │   │   ├── index.js
│   │   │   │   ├── store.config.dev.js   # redux-store config for development
│   │   │   │   └── store.config.prod.js  # redux-store config for production
│   │   ├── styles                        # styles folder
│   │   │   ├── _vars.scss                # style-guide settings
│   │   │   ├── base.scss                 # global styles, e.g. body, html, etc.
│   │   │   ├── reset.scss                # css reset/reboot, imported from bootstrap
│   │   │   └── responsive-grid.scss      # bootstrap layout system import
│   │   ├── utils                         # global code snippets
│   │   │   └── index.js                  # application services
│   ├── application.jsx                   # index application file - main imports & setup
│   └── index.hbs                         # base application html
├── static
│   ├── images
│   └── robots.txt
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
| `styleguide` | start styleguidist server |
| `styleguide:build` | build styleguidist |
| `test` | start jest tests |
| `test:watch` | start jest tests & watch files for modifications |
| `test:coverage` | check the % of tests coverage |
| `test:e2e` | check the server status & start e2e tests |
| `test:e2e:open` | check the server status & open cypress |
| `test:e2e:record` | check the server status & start e2e tests in the `record` mode |
| `test:e2e:chrome` | check the server status & start e2e tests in the `chrome` mode |
| `test:e2e:headed` | check the server status & start e2e tests in the `headed` mode |

<br />

## Settings available

> To access the _application settings_ go to `configurations/application/settings.js`


| Property | Description | Default Value |
|---------| ----------- | ----------- |
| `version` | Application version | _current application version_ |
| `pwa` | Progressive Web Application | |
| `pwa.enabled` | Enable or Disable. Production Only | `true` |
| `pwa.serviceWorkerName` | Service Worker File Name | `service-worker.js` |
| `pwa.assetsManifest` | Assets Manifest File | |
| `pwa.assetsManifest.enabled` | Enable or Disable. Production Only| `false` |
| `pwa.assetsManifest.fileName` | Assets manifest file name | `assets-manifest.json` |

<br />

## Meta

### Author
**Marcos Gonçalves** – [LinkedIn](http://linkedin.com/in/themgoncalves/) – [Website](http://themgoncalves.com)

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
