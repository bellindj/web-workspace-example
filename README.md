# Example NX Workspace with React App, Component Library, Storybook Docs
## Steps to create this:
1. `npx create-nx-workspace --preset=react`
2. Install NX globally (`yarn global add nx` or `npm install -g nx`)
3. Create example libs:
    - `npx nx g @nrwl/react:lib shared-components`
    - `npx nx g @nrwl/react:lib app-domain-1`
    - `npx nx g @nrwl/react:lib app-domain-2`
4. Create example components
    - `npx nx g @nrwl/react:component button --project=shared-components --export`
    - `npx nx g @nrwl/react:component app-specific-widget-1 --project=app-domain-1 --export`
    - `npx nx g @nrwl/react:component app-specific-widget-2 --project=app-domain-2 --export`
5. Add storybook for component library
    - `yarn add --dev @nrwl/storybook`
    - `nx g @nrwl/react:storybook-configuration shared-components`

## What is this?

This is an NX workspace monorepo that can contain many web apps with some shared code and some domain specific code. Web apps can be React, Vue, Angular, etc.

## What is here?

1. A react app: my-react-app
2. Multiple libs:
  - shared-components: this is a shared lib meant to be used by multiple apps. This will contain generic components
  - app-domain-1: this is an app-specific lib which will likely only ever be used by 1 app. Pieces could be broken off of it in the future if it ever needs to be shared further.
  - app-domain-2: this is another app-specific lib which will likely only ever be used by 1 app. Pieces could be broken off of it in the future if it ever needs to be shared further.
3. A storybook instance for the shraed-component library to document the components there. Notice that the button component at libs/shared-components/src/lib/button has a button.stories.tsx file. This is the storybook documentation and each component will just get its own .stories.tsx file with all the iterations of the component.

## How to use?

NX is a CLI tool with lots of command to generate new libs, apps, components, etc. Use the CLI to generate new pieces to make it as easy as possible to automate all the configuration.

## Quick Commands

1. Run react app: `nx serve my-react-app`
2. Run storybook (component library documentation): `nx run shared-components:storybook`

## How to migrate an existing app to this workspace?

1. Step 1 - move entire React app into my-react-app & make sure it runs
2. Step 2 - start to split out components & pieces into separate libs, domain specific libs & shared libs
3. Step 3 - eventually, contents of app (my-react-app) should be widdled down to app config & routes (i.e. react-router routes in app.tsx that pull in all the components/pages from other libs and that's it)

- In the end, apps will be simple app configuration + routes, libs will be both shared component libs (meant for any app if you were to have 2 or more apps in this repo), and domain specific libs that are likely only specific to an app. The app specific components still go into libs to segment out your app and leverage nx's affected commands to only build/test what is changed rather than re-build & re-test entire app every time something changes.

## Other commands

1. Test react app: `nx test my-react-app`
2. Build react app `nx build my-react-app`
3. Use affected commands to avoid re-test/re-build of certain libs/apps that don't change: `yarn run affected:test`, `yarn run affected:build`, etc - see package.json for all commands.



## Boilerplate stuff from NX

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@base11/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
