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

### Commands available

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
