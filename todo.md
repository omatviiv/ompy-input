* component and demo improvements
  + use val useState hook for input value the way that DevTools show name
  + update demo page with default markup to present component features
  + layout enhancements and start building omtv-theme here
  + fix zoom out done by browser on mobile with vieport meta tag
    https://stackoverflow.com/questions/16387400/getting-the-right-font-size-on-every-mobile-device
  + use ch based media queries to switch between 1 and 2 column layouts
  * fix grid rows size for two columns layout
* use throttle/debounce to handle value update inside the input component
- implement component with label
- scp2 lodash vulnerability
  https://github.com/spmjs/node-scp2/issues/116
  https://github.com/spmjs/node-scp2/pull/123

# 0.0.2 -
+ Add onChange prop
+ test default theme
+ test watch npm script
+ theming support
+ publish demo npm script
+ more npmignores
+ move jest config to jest.config.js
+ write snapshot tests
+ configure jest
+ add styled-components
+ configure flow
+ move releases info into todo

# 0.0.1 - initial component version
Simplest possile input component
+ publish initial version
+ update docs with specific instructions for a component(s)
+ implement component
+ update package.json with project specific data


# Convention
Unordered list with:
- `*` means in progress items
- `-` means todo items
- `+` means completed items

Done section may contain releases, here is the example of todo.md file
```
* work currently in progress
- work that
- is planned
  - sub
  - items
- to be done in future

# 0.0.2 -
+ some items
+ not included in
+ any release yet

# 0.0.1 - initial component version, you can also put some summary
explaining what exactly this release contains
+ update package.json with project specific data
  name (unique on npmjs), description, repository, bugs and homepage urls
+ implement component
+ update docs with specific instructions for a component(s)
```
Here version 0.0.2 is not released yet but already contains some work.
