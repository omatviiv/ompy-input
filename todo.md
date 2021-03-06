[//]: # (cmt):
[//]: # (stg&cmt):
- update to ompy-theme
- demo page: show theme picker for a component
- scp2 lodash vulnerability
  https://github.com/spmjs/node-scp2/issues/116
  https://github.com/spmjs/node-scp2/pull/123

# 0.0.3 - 
+ npm audit fix
+ move to ompy-input
+ webpack to show only warnings and errors
+ fix rest in args
+ use rest prop instead className since it will inclue all extra props
  like event handlers, className and others
+ add className prop to support extending style with styled components
+ make BareInput a default exported component
+ init Input component + init demo for it
+ make BareInput a 'secondary' export
+ upgrade to omtv-theme@4.0.1

# 0.0.2 - fxes and improvements
+ publish release
+ move demo/theme into omtv-theme repo
+ use debounce to handle value update inside the input component
+ component and demo improvements
  + use val useState hook for input value the way that DevTools show name
  + update demo page with default markup to present component features
  + layout enhancements and start building omtv-theme here
  + fix zoom out done by browser on mobile with vieport meta tag
    https://stackoverflow.com/questions/16387400/getting-the-right-font-size-on-every-mobile-device
  + use ch based media queries to switch between 1 and 2 column layouts
  + fix grid rows size for two columns layout
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
