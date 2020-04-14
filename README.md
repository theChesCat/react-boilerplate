# React boilerplate

Everybody has one, here is mine.


## About this boilerplate

This boilerplate uses a small Node.js server using [Express](https://expressjs.com/) which serves the front-end application, and a small api.

The front-end application is built with [webpack](https://webpack.js.org/) and uses [React](https://fr.reactjs.org/) and [Redux](https://redux.js.org/). It also has a [Storybook](https://storybook.js.org/).


[Prettier](https://prettier.io/) is ready for formatting, [eslint](https://eslint.org/) for linting, and [Jest](https://jestjs.io/) + [Enzyme](https://enzymejs.github.io/) for unit and snapshot testing.



## Install and launch

### Quickstart

#### 1. Requirements

You will need `node` (v10 at least) and `npm` or `yarn` to launch this project.


#### 2. Install the project dependencies
```bash
yarn install
# or
npm install
```


#### 3. Run the app
```bash
yarn start
# or
npm run start
```

The app should open itself in a new browser window.

Default listening port is `:8080` but you can choose a custom port, for example :
```bash
yarn start --port=3000
# or
npm run start --port=3000
```

### How to use

#### 1. Entry files

- Server entry file is located in `src/server/index.js`
- Front-end entry file is located in `src/app/index.js`

#### 2. Project structure

- src
  - app
    - components
      - atoms
      - molecules
      - organisms
      - pages
    - store
      - actions
      - reducers
  - server

Redux `actions` and `reducers` are located in a `store/` folder.

React components are located in a `components/` folder. Components are organized following the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology.

#### 3. Config

`src/app/config.js` file contains config.

#### 4. Tests

Project is uses Jest and Enzyme. Available tests scripts :

```bash
yarn test
yarn test:coverage
# or
npm run test
npm run test:coverage
```

#### 5. Linter

Project uses eslint and prettier. Available lint scripts :

```bash
yarn lint
yarn prettier
yarn prettier:watch
# or
npm run lint
npm run prettier
npm run prettier:watch
```

#### 6. Storybook

Project uses storybook to run components independently from the project. You can check the Storybook with this script :

```bash
yarn storybook
# or
npm run storybook
```
