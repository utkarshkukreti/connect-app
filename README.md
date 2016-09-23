# Topcoder Connect
###### Version 2.0.31

This is the official **Topcoder Connect v2** repo, our customer appcliation using React, Redux, and Webpack. Read more about [Topcoder Connect](https://www.topcoder.com/what-can-you-do/) and what we do.

## Installation

We use node 6.x and npm 3.x, make sure you have the latest version of node. The easiest way is to download [nvm](https://github.com/creationix/nvm). We have a `.nvmrc` file in the root of the project, so you can just run `nvm use` to switch to the correct version of node.

Install dependencies by running the following in the root of the project:
 - `npm i`
 - **Note:** You must use npm 3. Type `npm -v` to ensure you have a 3.x version.

## NPM Commands
- To run locally, run `npm start` and head to `http://localhost:3000/projects/`
- Run tests with `npm test` or use `npm run test:watch` to rerun tests after files change
- To make sure your code passes linting: `npm run lint`
- To create the build: `npm run build`


## Code Style

***Checkout the code and comments in `src/components/ExampleComponent` for an example React component, `.scss` file, and tests.***

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
	  
```
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
  
```
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
```
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