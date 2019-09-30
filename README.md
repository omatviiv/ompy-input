Text input component.

# Install
```
npm i omtv-react-input
```

# Use
```
import Input from 'omtv-react-input';

<Input value='some default input' />
```

Component is not bundled or compiled, It is provided in raw form as is
(see `component/` folder).
The project that is going to use this component should bundle and
complie component itself, here are the instructions for webpack and babel:
```webpack.config.js
module.exports = {
  ...
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'node_modules/omtv-react-input'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            ...
          },
        },
      },
    ],
  },
  ...
};
```
You can also use [omtv-template-react](https://github.com/omatviiv/omtv-template-react)
for your project, it's webpack/babel config is compatible with this approach.

# Static type checking
Component contains [Flow Comment Types](https://flow.org/en/docs/types/comments/)
that allows either to use flow static typechecking or simply ignore it.

# Improve
1. Install dependencies `npm i`.
2. Start webpack dev server for demo project `npm run demo`.
3. Improve component.
