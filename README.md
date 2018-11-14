# react-i18next-components

A collection of React components and utilities to simplify react-i18next.

## Getting Started:

### configureI18n

First you'll need to configure the initialization of the i18n React provider. We provide some defaults on top of the i18next configuration but you can override any property as necessary. Options and their defaults can be found [here](https://www.i18next.com/overview/configuration-options).

Reference on how locale files should be structured can be found [here](https://www.i18next.com/misc/json-format).

The call to `configureI18n` must be made before the use of any formatting component.

```jsx
import { configureI18n } from 'react-i18next-components';
import App from './App'; // your entry page
import ​en from './locales/en';

const App extends React.Component {
  componentWillMount() {
    configureI18n({
      lng: 'en',
      resources: {
        en: {
          translation: en
        },
      }
    })
  }

  render() {
    // ...
  }
}
);
```

## How to use:

All formatting elements can either be used by themeselves which will render a React fragment with the formatted content or with the render prop pattern to inject formatting into elements like text inputs.

### Use as standalone component:

```jsx
import FormattedMessage from 'react-i18next-components';

<FormattedMesage id="path.to.key" />;
```

### Use with render prop:

```jsx
import FormattedMessage from 'react-i18next-components';

<FormattedMesage id="path.to.key">
  {text => (
    <input type="text" placeholder={text} />
  )}
</FormattedMessage>
```

## Components:

### FormattedMessage

Given an `id` prop which indicates the path to the translation in your language file, the component will render the correct translation.

| Prop Name | Type   |
| --------- | ------ |
| id        | String |
| options   | Object |

```jsx
import { FormattedMessage } from 'react-i18next-components';

<FormattedMesage id="path.to.hello" />;

// "Hello"

<FormattedMesage id="path.to.hello" options={{ name: 'Alec' }} />;

// "Hello Alec"
```

### FormattedDate

Given a `value` prop in any timestamp format, the component will render a formatted date or time in any format supported by moment.js. By default this component will render a date.

| Prop Name | Type                                                                                                  |
| --------- | ----------------------------------------------------------------------------------------------------- |
| value     | Any string supported by [moment.js](https://momentjs.com/docs/#/parsing/).                            |
| format    | Any localized format string supported by [moment.js](https://momentjs.com/docs/#/displaying/format/). |

```jsx
import { FormattedDate } from 'react-i18next-components';

<FormattedDate value={Date.now()} />;

// "December 1, 2018"

<FormattedDate value={Date.now()} format="l" />;

// "12/01/2018"

<FormattedDate value={Date.now()} format="LLL" />;

// "December 1, 2018 1:08 PM"
```

### FormattedTime

Given a `value` prop in any timestamp format, the component will render a formatted date or time in any format supported by moment.js. This component is similar to `FormattedDate` but it's default will be to render a time instead of a date.

| Prop Name | Type                                                                                                  |
| --------- | ----------------------------------------------------------------------------------------------------- |
| value     | Any string supported by [moment.js](https://momentjs.com/docs/#/parsing/).                            |
| format    | Any localized format string supported by [moment.js](https://momentjs.com/docs/#/displaying/format/). |

```jsx
import { FormattedTime } from 'react-i18next-components';

<FormattedTime value={Date.now()} />;

// "5:00 PM"

<FormattedTime value={Date.now()} format="LTS" />;

// "5:00:00 PM"
```

### FormattedRelativeTime

Given a `value` prop in any timestamp format, the component will render a human readable string displaying the relative time to the current time regardless of whether it's in the past or future. This string will automatically be translated based on the locale passed to `lng` on initialization.

| Prop Name | Type                                                                       |
| --------- | -------------------------------------------------------------------------- |
| value     | Any string supported by [moment.js](https://momentjs.com/docs/#/parsing/). |

```jsx
import { FormattedRelativeTime } from 'react-i18next-components';

<FormattedRelativeTime value={1544227200} />;

// "in 7 days"
```

## Contributing

### Install locally:

This will install all dependencies and linting hooks.

```
npm install
```

### Run tests:

We use a Jest test runner with enzyme.

```
npm test
```

### Run locally:

Running this will spin up a local webpack server that watches for changes and will automatically rebuild the project for you.

```
npm start
```

### Run locally against another project:

1. Navigate into your application and make sure all existing depdencies are installed.

```sh
cd my-app
npm install
```

2. Link the local version of the library to your application so that npm points to your local version rather than the app's `node_modules` folder.

```sh
npm link ../path/to/react-i18next-components
```

3. Add the library to your apps dependency list in it's `package.json`, the version number should reflect the version in your local version of the library. Note, attempting to run `npm install` at this point may fail if the added version hasn't been published to the npm repository.

```js
// ...
dependencies: {
  "react-i18next-components": "@latest",
}
// ...
```

4. Import the components you want to test in your app.

```jsx
import { FormattedMessage } from 'react-i18next-components';

// ...
const MyComponent = () => {
  return <FormattedMessage />;
};
```

5. When you're finished developing you can unlink the project to re-point to the remote version of the package.

```sh
cd my-app
npm unlink ../path/to/react-i18next-components
```
