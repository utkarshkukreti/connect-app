# Topcoder Connect
###### Version 2.0.

This is the official **Topcoder Connect v2** repo, our customer appcliation using React, Redux, and Webpack. Read more about [Topcoder Connect](https://www.topcoder.com/what-can-you-do/) and what we do.


## Installation

We use the latest [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/package/npm), make sure you have the latest version of node. The easiest way is to download [nvm](https://github.com/creationix/nvm). We have a `.nvmrc` file in the root of the project, so you can just run `nvm use` to switch to the correct version of node.

Install dependencies by running the following in the root of the project:

- `npm i`
- **Note:** You must use npm 3. Type `npm -v` to ensure you have a 3.x version.

Alternatively you can use Facebook's [Yarn](https://yarnpkg.com) to manage the repo. It is stable enough and works with private repos (that the TC team uses). 

Run:

```
yarn
```
or

```
yarn install
```
and you'll have the repo.

## CLI Commands

*NOTE: botn npm and yarn can be used to perform the CLI commands*

- Add this line to your hosts file `127.0.0.1 local.topcoder-dev.com` ([Mac](https://www.tekrevue.com/tip/edit-hosts-file-mac-os-x/))([Linux]());
- Open the folder in Terminal and run `npm start` or `yarn start`;
- In your browser, go to `http://local.tocpoder-dev.com:3000/`.

**TESTS**

- Run tests with `npm test` or use `npm run test:watch` to rerun tests after files change
- To make sure your code passes linting: `npm run lint`
- To make sure your code passes linting: `npm run lint`
- To create the build: `npm run build`

-----

## Changes since v. 1

- Moved the webpack configuration under `~/src/config`
- Added aliases for most common locations
- Added Stylelint.io and Stylefmt
- Added CSS Modules support
- Added React-SVG-loader to load .svg resouces as react components
- Removed dependency on `webpack-config` repo
- Eliminated Coffeescript dependency
- Upgraded the Linting rules

## Upcomming changes

-  Implement a global styling system for all components, based on CSS Modules
-  Update webpack to latest production version (2.2)

-----

## Path aliases

We added aliases to `webpack.config`. This eliminates the error-prone path escapes `../../../` and improves code readability.

```javascript
alias: {
  config: path.join(dirname, './src/config'),
  actions: path.join(dirname, './src/actions'),
  components: path.join(dirname, './src/components')
}
```

Before:

```javascript
import {resource} from '../../config/constants'
```

After:

```javascript
import {resource} from 'config/constants'
```

## CSS modules

Temporary, the file must include `.m.scss` to be transformed as a CSS module. If you rewrite all styles to CSS modules tou can remove this prefix.

Open `http://localhost:3000/css` to see demo

Components:

- SampleCSSModule
- SampleSubCSSModule


## Blueprints

- Install redux cli `npm -g  redux-cli`
- Generate component:

```
redux g component MySampleComponent
```

It will create a component template with CSS modules.
If you don't need unit tests, you can remove `blueprints/component/files/src/components/__name__/__name__.spec.js`

## Code Style

We rely on AirBnB [JavaScript code style](https://github.com/airbnb/javascript), [CSS Modules](https://github.com/css-modules/css-modules), and [SASS oppinionated code style](https://sass-guidelin.es). Do not deviate from those.

**Common sense guidelines**:

- This is production code, not throw away prototype. Act as a member of the team, build your code to last, and be reused.
- Always comment your code, be verbouse. This code is constantly used by different people all over the world. Tell what your general idea was.
- Try to reuse components and existing resources. Stick to the architecture and guidelines.
- Do not redefine color variables.
- Write tests and verify. This saves a lot more time in production. Fixing a bug early is show to save tremendous time in production maintainance.
- Run JS and CSS Lints before you commit. StyleFMT would reformat your (S)CSS code in accordance to our standards.


### React

- Most components should be stateless and use the [functional component](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components) pattern
- If you need a stateful component, use [ES6 classes](http://facebook.github.io/react/docs/reusable-components.html#es6-classes)
- Always use [PropTypes](http://facebook.github.io/react/docs/reusable-components.html#prop-validation) for all props
- Use `classnames` for dynamic classes. See `ExampleComponent` for an example.

### JavaScript

- Make sure your variable names are easy to understand and descriptive. No acronyms, except for common ones like `i` or `err`.
- Use `lodash` and functional JavaScript if it makes the code clearer.
- Please use ES2015 syntax whenever possible
- Specific rules are enforced via `.eslintrc.json`
- Run `npm run lint` to check your code against the linter

#### Writing Tests
- `npm test` will run the current tests
- `npm run test:watch` will rerun tests when files change
- Place your test files in the same directory as the component it's testing
- Test files should be named `ComponentName.spec.js`
- Checkout the ExampleComponent directory in `/src/components`

### SCSS
<!--// To be revised-->
`Architecture is under active development`

  - We will use [react-css-modules](https://github.com/gajus/react-css-modules) to  style components
  - We rely on [Stylelint](http://stylelint.io) to fix our SCSS
  - Follow the recommendations from [SASS Guideline](https://sass-guidelin.es) which is an excellent source for SASS features
  - This project uses flexbox for layout
  - The use of any extra CSS libraries should be discussed with the team
  - SCSS Formatting: Run `npm run lint-style` to check your code against Stylelint
  - General requirements:
    - Use 2 spaces for indentation
    - Media queries should be nested inside the element
    - The react-css-modules is a step towards theming, which would require to use the `compose:` keyword and the global variables
    
```css
.box {
    width: 100px;
    height: 100px;
}
  
.empty {
    composes: box;
  
    background: #4CAF50;
}
  
.full {
    composes: box;
  
    background: #F44336;
}
```
  
This can be done in SASS as:
  
```css
%box {
    width: 100px;
    height: 100px;
}
  
.box-empty {
    @extend %box;
  
    background: #4CAF50;
}
  
.box-full {
    @extend %box;
  
    background: #F44336;
}
```
Read the [React Modules Documentation](https://github.com/gajus/react-css-modules#sass-scss-less-and-other-css-preprocessors)


## Recommended Developer Tools

### Syntax highlighting for ES6 and React JSX
- Install [babel](https://packagecontrol.io/packages/Babel) via the package manager in Sublime Text
- **Note:** Sublime Text 3 is required for this plugin
- Set the plugin as the default syntax for a particular extension
- Open a file with the `.js` extension
- Select `View` from the menu
- Then `Syntax -> Open all with current extension as...`
- Then `Babel -> JavaScript (Babel)`
- Repeat for any other extensions, e.g. `.jsx`

### Recommended Theme
- Install [Oceanic Next Color Theme](https://github.com/voronianski/oceanic-next-color-scheme) via the Sublime Text package manager.
- Add the following to `Sublime Text -> Preferences -> Settings-User` (`⌘ + ,` on Mac)

```JSON
{
  "color_scheme": "Packages/Oceanic Next Color Scheme/Oceanic Next.tmTheme",
  "theme": "Oceanic Next.sublime-theme"
}
```

### Automatic JavaScript linting in Sublime Text
- Install [SublimeLinter](http://sublimelinter.readthedocs.org/en/latest/installation.html) following the instructions under "Installing via Package Control"
- Install [SublimeLinter-eslint](https://github.com/roadhump/SublimeLinter-eslint) with the package manager. The package is called `SublimeLinter-contrib-eslint`

### Code expander
- Examples:
  - `div.cool-class` becomes `<div className="cool-class"></div>`
  - `a` becomes `<a href=""></a>`
- Install [Emmet](https://github.com/sergeche/emmet-sublime) via Sublime Text package manager
- Configure Emmet to work with React, e.g. classes expand to `className` instead of `class`
- Follow the instructions under [Get Emmet working](http://www.nitinh.com/2015/02/setting-sublime-text-react-jsx-development/)
  - **Note:** Add the last snippet of code to `reg_replace.sublime-settings` by navigating to  `Sublime Text -> Preferences -> Package Settings -> Reg Replace -> Settings-User`

## Contributing

### Pull Requests

To contribute to the repository, please create a feature branch off of the dev branch. Once you're finished working on the feature, make a pull request to merge it into dev. Please make sure that every pull request has passed the build checks, which appear just before the "Merge pull request" button in github.