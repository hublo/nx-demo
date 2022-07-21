# Monorepo with demo apps

This is a monorepo containing two fronts, one in Angular, one in React and a small API in NestJS.
NX is used to manage this monorepo.
The challenge is to make a CI and deploy what is living in this repository.

## Nx Documentation

[Nx Documentation](https://nx.dev)

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## ☁ Nx Cloud

### Computation Caching in the Cloud

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

[Nx Cloud](https://nx.app/)

[Computation Caching Fundamentals](https://blog.nrwl.io/computation-caching-the-fundamentals-behind-nxs-lightning-fast-execution-dc761fe41eb8)

[Computation Caching with NX](https://nx.dev/latest/core-concepts/computation-caching)
