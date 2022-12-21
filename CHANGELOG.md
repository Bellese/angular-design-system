## [5.3.9](https://github.com/Bellese/angular-design-system/compare/v5.3.8...v5.3.9) (2022-12-21)


### Bug Fixes

* **chip-filter.component.html:** Move aria-live to first item to help with JAWS compatibility. ([f705509](https://github.com/Bellese/angular-design-system/commit/f705509c2ec565e1457bc5d5b3040f3b732a74f0))

## [5.3.8](https://github.com/Bellese/angular-design-system/compare/v5.3.7...v5.3.8) (2022-12-20)


### Bug Fixes

* **chip-filter.component.html:** Add aria text to signal when providers load after search is complete ([c1aabbe](https://github.com/Bellese/angular-design-system/commit/c1aabbe2a1b42f326dc167bccaeef083779077db))
* **chip-filter.component.html:** Use variable to determine if text box is selected ([7865c8d](https://github.com/Bellese/angular-design-system/commit/7865c8d7aa83bb2620b380621fd2a7ee756b022f))

## [5.3.7](https://github.com/Bellese/angular-design-system/compare/v5.3.6...v5.3.7) (2022-12-05)


### Bug Fixes

* **choice:** set aria-checked to match checked ([#350](https://github.com/Bellese/angular-design-system/issues/350)) ([4c454f9](https://github.com/Bellese/angular-design-system/commit/4c454f9f99b08a1b6cd28ab9fbc47cab037f11ff))

## [5.3.6](https://github.com/Bellese/angular-design-system/compare/v5.3.5...v5.3.6) (2022-12-05)


### Bug Fixes

* **text-field:** revert ([#343](https://github.com/Bellese/angular-design-system/issues/343)) role=alert changed to aria-live polite, label includes title ([#346](https://github.com/Bellese/angular-design-system/issues/346)) ([42f8c1c](https://github.com/Bellese/angular-design-system/commit/42f8c1c0c50b8b05b7471b3b407232926842424e))

## [5.3.5](https://github.com/Bellese/angular-design-system/compare/v5.3.4...v5.3.5) (2022-11-21)


### Bug Fixes

* **text-field:** role=alert changed to aria-live polite, label includes title ([#343](https://github.com/Bellese/angular-design-system/issues/343)) ([3bf2934](https://github.com/Bellese/angular-design-system/commit/3bf2934b2c59c38387df436ad25a4c4d2f37530e))

## [5.3.4](https://github.com/Bellese/angular-design-system/compare/v5.3.3...v5.3.4) (2022-11-18)


### Bug Fixes

* **text-field:** multiline required and aria-required ([#342](https://github.com/Bellese/angular-design-system/issues/342)) ([0c33a50](https://github.com/Bellese/angular-design-system/commit/0c33a50d5811b130cc6451219e3fd670dc2fd0c6))

## [5.3.3](https://github.com/Bellese/angular-design-system/compare/v5.3.2...v5.3.3) (2022-10-28)


### Bug Fixes

* **panel, button:** responsive icon, title spacing. Higher contrast button ([#336](https://github.com/Bellese/angular-design-system/issues/336)) ([093847a](https://github.com/Bellese/angular-design-system/commit/093847a1443fed03af7980d580c79333a9828465))

## [5.3.2](https://github.com/Bellese/angular-design-system/compare/v5.3.1...v5.3.2) (2022-10-19)


### Bug Fixes

* **chip-filter.component.ts, chip-filter.component.html:** update ARIA text & fix focus issues. ([28d6c76](https://github.com/Bellese/angular-design-system/commit/28d6c76f920b4d6c5f56ae983edcdf2d6eb3dbc0))
* **chip-filter.component.ts, chip-filter.component.html:** update keys that control multi-select. ([9d9e111](https://github.com/Bellese/angular-design-system/commit/9d9e111f13210eff8aa6fbcd183b651e23ab7614))

## [5.2.2](https://github.com/Bellese/angular-design-system/compare/v5.2.1...v5.2.2) (2022-10-11)


### Bug Fixes

* **chip-filter.component.html, chip-filter.component.ts, chip-filter.component.scss:** highlighting providers with arrow keys working. ([db2e854](https://github.com/Bellese/angular-design-system/commit/db2e8541ebdfb087cce2c12e7a7dafbffd10e806))
* **chip-filter.component.html, chip-filter.component.ts:** all functionality working. ([cc6e370](https://github.com/Bellese/angular-design-system/commit/cc6e370b0670917e6d94673187f7b67b8010f5aa))
* **chip-filter.component.html, chip-filter.component.ts:** entering search txt box with arrows working. ([ff53c0b](https://github.com/Bellese/angular-design-system/commit/ff53c0bc27d28cfa79fbd13ea2dde56808dff5d2))
* **chip-filter.component.html, chip-filter.component.ts:** scrolling in dropDown with arrows working. ([2a508d3](https://github.com/Bellese/angular-design-system/commit/2a508d38ca9b66d23cb6414bfff8b40472f8e16f))
* **chip-filter.component.ts:** add constant focus item values. ([ebdc3ad](https://github.com/Bellese/angular-design-system/commit/ebdc3ad727515035ccd783e3d9ac2b81cb37b6de))
* **chip-filter.component.ts:** add search const for onFilterTextChange. ([abc8244](https://github.com/Bellese/angular-design-system/commit/abc82440a79a876faaacaf74c00dba5834833778))
* **chip-filter:** remove typo in tabindex value ([c657c34](https://github.com/Bellese/angular-design-system/commit/c657c34a98b5719d65baa0bd0238e85d0906f501))

## [5.2.1](https://github.com/Bellese/angular-design-system/compare/v5.2.0...v5.2.1) (2022-09-23)


### Bug Fixes

* **ci:** trigger release ([#332](https://github.com/Bellese/angular-design-system/issues/332)) ([b26c55c](https://github.com/Bellese/angular-design-system/commit/b26c55c52c8e2c00c6ebd5985c62ad0b2a04aa98))

## [5.2.0](https://github.com/Bellese/angular-design-system/compare/v5.1.1...v5.2.0) (2022-09-09)


### Features

* **table:** support tooltips in table-data component ([aaf8ee6](https://github.com/Bellese/angular-design-system/commit/aaf8ee62e5352d763c91609aff96edb5d3637c0d))

## [5.1.1](https://github.com/Bellese/angular-design-system/compare/v5.1.0...v5.1.1) (2022-08-26)


### Bug Fixes

* **DataTestDirective:** fix build, publish by adding public_api export ([#329](https://github.com/Bellese/angular-design-system/issues/329)) ([2afdf33](https://github.com/Bellese/angular-design-system/commit/2afdf337b0ffe1700a678880a8e8c854d8d32ab4))

## [5.1.0](https://github.com/Bellese/angular-design-system/compare/v5.0.2...v5.1.0) (2022-08-25)


### Features

* **DataTestDirective:** using hqrDataTest in HTML templates sets data-test attribute ([#328](https://github.com/Bellese/angular-design-system/issues/328)) ([9bcca36](https://github.com/Bellese/angular-design-system/commit/9bcca36d1526cd0b8c0b7b2391c99fca87ec7b19))

## [5.0.2](https://github.com/Bellese/angular-design-system/compare/v5.0.1...v5.0.2) (2022-08-03)


### Bug Fixes

* **app-choice:** remove setValue function to work better with formly ([#325](https://github.com/Bellese/angular-design-system/issues/325)) ([0061b70](https://github.com/Bellese/angular-design-system/commit/0061b703fdacec6a5fe6881cd356ffa886d16b57))

## [5.0.1](https://github.com/Bellese/angular-design-system/compare/v5.0.0...v5.0.1) (2022-07-05)


### Bug Fixes

* **app-drop-down:** 508 / a11y - aria-describedby, aria-selected ([9dc110f](https://github.com/Bellese/angular-design-system/commit/9dc110f869d976cf17d0bf1a069042efe2440c0a))

## [5.0.0](https://github.com/Bellese/angular-design-system/compare/v4.4.6...v5.0.0) (2022-04-20)


### ⚠ BREAKING CHANGES

* Upgrade Angular from 11 to 13

Co-authored-by: Marc Celestini <mcelestini@bellese.io>

### Features

* Angular 13 Upgrade ([#321](https://github.com/Bellese/angular-design-system/issues/321)) ([39669af](https://github.com/Bellese/angular-design-system/commit/39669af250095553801e4a21cb0d3293381b949a))

### [4.4.6](https://github.com/Bellese/angular-design-system/compare/v4.4.5...v4.4.6) (2022-04-13)


### Bug Fixes

* **app-button:** prevent inverse button color modification ([#320](https://github.com/Bellese/angular-design-system/issues/320)) ([170231e](https://github.com/Bellese/angular-design-system/commit/170231e475137c1f6073e06179c06ab797a0956f))

### [4.4.5](https://github.com/Bellese/angular-design-system/compare/v4.4.4...v4.4.5) (2022-04-13)


### Bug Fixes

* **app-button:** hardcode colors ([#319](https://github.com/Bellese/angular-design-system/issues/319)) ([0089c55](https://github.com/Bellese/angular-design-system/commit/0089c55a1de69c3229545df168c6d9e60e5075f6))

### [4.4.4](https://github.com/Bellese/angular-design-system/compare/v4.4.3...v4.4.4) (2022-04-13)


### Bug Fixes

* **app-button:** add missing cms design system package ([#318](https://github.com/Bellese/angular-design-system/issues/318)) ([f1c5d5a](https://github.com/Bellese/angular-design-system/commit/f1c5d5adac73cbf0244fb24c45c9be51821c036c))

### [4.4.3](https://github.com/Bellese/angular-design-system/compare/v4.4.2...v4.4.3) (2022-04-13)


### Bug Fixes

* **app-button:** improve button accessibility ([#317](https://github.com/Bellese/angular-design-system/issues/317)) ([e8daaf8](https://github.com/Bellese/angular-design-system/commit/e8daaf8c23e7fe0c0c1d9da21406653703eb3251))

### [4.4.2](https://github.com/Bellese/angular-design-system/compare/v4.4.1...v4.4.2) (2022-04-06)


### Bug Fixes

* **app-modal-shell:** update modal header ([#315](https://github.com/Bellese/angular-design-system/issues/315)) ([b3403bb](https://github.com/Bellese/angular-design-system/commit/b3403bb3a5b9228bde16c7353e45d88899014ab6))

### [4.4.1](https://github.com/Bellese/angular-design-system/compare/v4.4.0...v4.4.1) (2022-03-24)


### Bug Fixes

* **app-panel:**  508 / a11y - avoid button nesting, fix screen reader confusion ([#311](https://github.com/Bellese/angular-design-system/issues/311)) ([7d917ed](https://github.com/Bellese/angular-design-system/commit/7d917eda66c8e8b2456869bcd7db8ac44f7aff6f))

## [4.4.0](https://github.com/Bellese/angular-design-system/compare/v4.3.0...v4.4.0) (2022-01-31)


### Features

* **card-cluster, tabs, table:** better ARIA support ([#305](https://github.com/Bellese/angular-design-system/issues/305)) ([e3c5a7e](https://github.com/Bellese/angular-design-system/commit/e3c5a7e35ded8d33c47250ac2e019517dceae63e))

## [4.3.0](https://github.com/Bellese/angular-design-system/compare/v4.2.3...v4.3.0) (2021-09-23)


### Features

* **card-cluster:** add new param to card cluster model to change styling of main card title. add story ([#295](https://github.com/Bellese/angular-design-system/issues/295)) ([f1ba955](https://github.com/Bellese/angular-design-system/commit/f1ba95561db9f7368be59522eccfcb9436aa4379))

### [4.2.3](https://github.com/Bellese/angular-design-system/compare/v4.2.2...v4.2.3) (2021-08-13)


### Bug Fixes

* **dropdown-component:** if no default selection was passed into the component, the first option is supposed to be selected, but that broke due to the recent formly/angular-forms integration ([3f34d22](https://github.com/Bellese/angular-design-system/commit/3f34d22433b44118f2dd73b83d8480ee23decb8f))

### [4.2.2](https://github.com/Bellese/angular-design-system/compare/v4.2.1...v4.2.2) (2021-08-12)


### Bug Fixes

* **semantic-release:** removes publish to npm step from semantic-release and adds a publish workflow that will publish to npm when new releases are created ([d5f8924](https://github.com/Bellese/angular-design-system/commit/d5f8924800ec40df17b677effaba8f15c5b855db))

### [4.2.1](https://github.com/Bellese/angular-design-system/compare/v4.2.0...v4.2.1) (2021-08-11)


### Bug Fixes

* **linting:** linted file to trigger ci build ([2d4f950](https://github.com/Bellese/angular-design-system/commit/2d4f950eb8b8dc6e773542454a7ab25dc199c856))

## [4.2.0](https://github.com/Bellese/angular-design-system/compare/v4.1.1...v4.2.0) (2021-08-11)


### Features

* **main.ts:** fixed linting issues in a file to trigger a ci build ([0b393b1](https://github.com/Bellese/angular-design-system/commit/0b393b1f9ff0bb775f1b6b8f86279e98b248e1f6))

### [4.1.1](https://github.com/Bellese/angular-design-system/compare/v4.1.0...v4.1.1) (2021-08-11)


### Bug Fixes

* **semantic-release:** fixes exec publish command ([23e49b1](https://github.com/Bellese/angular-design-system/commit/23e49b19ed59fb1fc426307b216e9bf9bd1a8fdb))

## [4.1.0](https://github.com/Bellese/angular-design-system/compare/v4.0.9...v4.1.0) (2021-08-11)


### Features

* **security-updates:** updated storybook, npm audit fix, npm update ([6b73df8](https://github.com/Bellese/angular-design-system/commit/6b73df8c648b25263d173c5140b638e9cd8920e7))
* **semantic-release:** adds semantic-release configuration ([eab833b](https://github.com/Bellese/angular-design-system/commit/eab833b13c29a200a4aaa867a0b801dbe9428527))
* **semantic-release:** resets changelog to force recreation ([058c294](https://github.com/Bellese/angular-design-system/commit/058c294114c1f18073a7f6ecb8a5a750b18a217f))
