# vue 3 + Typescript + Vite 3.0 Boilerplate
Lightweight and quick starter Pack

# :bulb: Requirement
- Over node 16

# :newspaper: Feature
- Vue 3
- Typescript
- Vite 3.0
- PNPM Package manager
- [Vite Pwa plugin](https://vite-plugin-pwa.netlify.app/) for pwa
- Test modules are installed
  - [Cypress](): E2E test
  - [vitest](): Unit test
- Collaborative Develop Environment
  - [Husky 8](https://github.com/typicode/husky)
  - [eslint]()
- Many icons
  - [carbon icons](https://carbondesignsystem.com/guidelines/icons/library/): Icons
  - [material icon]('https://fonts.google.com/icons): Icons
- Design libraries
  - [sass/scss]()
  - [Tailwind](https://tailwindcss.com/)
- Mange statement wth [pinia](https://pinia.vuejs.org/)
- Route system [vue-router-v4](https://router.vuejs.org/)
- [vue-i18n](https://kazupon.github.io/vue-i18n/) for Internationalization
- Vue hooks [vue-use](https://github.com/antfu/vueuse) provides useful utilities to vue project
- Handle SEO meta in head [vueuse/head](https://github.com/vueuse/head)
- Assist to develop conveniently 
  - [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import): Auto-importing
  
## Recommended
> Following packages is not installed. Consider packages based on your project before install.
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md): Markdown support
- [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages): File based pages
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components): make components to global component automatically
- [Vite SSG](https://github.com/antfu/vite-ssg): Static-site generator
- [animate.css](): class based animation collection

# :rocket: Getting Started
## Dev
```shell
pnpm run dev
```
## Build
```shell
pnpm run build
```
## Eslint
```shell
pnpm run eslint:fix
```
## Unit Test
```shell
pnpm run test
```
## Unit test with ui
```shell
pnpm run test:ui
```
## E2E test
```shell
pnpm run test:e2e
```

# :hammer: Default settings
## Vite
| key                 | value | Description                                                                                                             |
|---------------------|-------|-------------------------------------------------------------------------------------------------------------------------|
| reactivityTransform | false | Because of errors in typescript, Do change it true <br>[link](https://vuejs.org/guide/extras/reactivity-transform.html) |

## Vite PWA
| key   | value             | Description |
|-------|-------------------|-------------|
| name  | Vue3-boilerplate  | Name of app |

## Tailwind
| key       | value | Description                               |
|-----------|-------|-------------------------------------------|
| darkmode  | class | Add class "tw-dark" to HTML for dark mode |
| prefix    | tw-   | Add "tw-" as prefix (tw-bg-red-500)       |
| important | True  | Make all tailwind with !important         |
### Color config
| key       | Description           |
|-----------|-----------------------|
| main      | main color for target |
| 100 ~ 900 | color stream          |
| text      | text color for target |
### Brand Colors
| key       | Description                          |
|-----------|--------------------------------------|
| primary   | primary                              |
| secondary | secondary                            |
| accent    | accent                               |
| positive  | use it for positive or success       |
| negative  | use it for negative, danger or error |
| info      | use if for information               |
| warning   | use if for warning                   |

# :file_folder: Directory Structure
```text
├─ node_modules/
├─ .husky                       # Contains husky config
├─ config/                      # Contains config files for project
├─ cypress/                     # Contains cypress test files
├─ public/
├─ scripts/                     # Contains script files
├─ src/
│  ├─ assets/                   # Assets for renderer.
│  ├─ components/               # Contain global components.
│  ├─ locales/                  # i18n, locales.
│  │   ├─ langs/                # supported language collection.
│  │   ├─ index.ts/             # i18n config.
│  ├─ router/                   # Router.
│  │   ├─ routes/               # Modularized routes.
│  │   ├─ index.ts/             # router config.
│  ├─ store/                    # Pinina or vue-store.
│  │   ├─ modules/              # Modularized store.
│  │   ├─ index.ts/             # store config.
│  ├─ styles/                   # Global Styles.
│  │   ├─ libs/                 # Contains styles for libraries 
│  ├─ types/                    # Contains types.
│  ├─ utils/                    # Contain utilities.
│  ├─ views/                    # Contain View pages.
│  ├─ main.ts                   # vue3 main file.
│  ├─ App.vue                   # App.vue.
├─ tests/                       # Contains test files
├─ index.html                   # Index html.
├─ .gitignore                   # gitignore.
├─ vite.config.ts               # Vite config.
├─ vitest.config.ts             # Vitest config.
├─ tsconfig.json                # Specific TypeScript config.
├─ .eslintrc.js                 # Eslint.
├─ .eslintignore                # eslint ignore config.
├─ package.json 
├─ tsconfig.node.json           # Root file TypeScript config generated by Vite CLI.
├─ README.md    
```

# Views and Routes 
```
├─ Layout/                      # Layout collection.
├─ Home/                        # index page.
├─ WhatEverName/                # WhatEverName link page
```

# :tada: Before start
## Remove
- views/examples
- router/routes
- "exampleRoutes" in index.ts router folder

# :postbox: Refs
- [vitesse](https://github.com/antfu/vitesse)
- [vueye](https://github.com/boussadjra/vueye)
- [vue2-admin-template](https://github.com/PanJiaChen/vue-element-admin)

# TODO
- Home page
  - Feature 
  - About
- Simple Example pages
- i18n for footer
- Documentation
