# react-i18next-components

A collection of React components and utilities to simplify react-i18next.

## Getting Started

### configureI18n

First you'll need to configure the initialization of the i18n React provider. We provide some defaults on top of the i18next configuration but you can override any property as necessary. Options and their defaults can be found [here](https://www.i18next.com/overview/configuration-options).

In all cases you'll need to pass in a language resource file for `en`, but you can add more languages as needed. Reference on how locale files should be structured can be found [here](https://www.i18next.com/misc/json-format).

The call to `configureI18n` must be made before the use of any formatting component.

```jsx
import { configureI18n } from 'react-i18next';
import App from './App'; // your entry page
import ​en from './locales/en';

const App extends React.Component {
  componentWillMount() {
    configureI18n({
      resources: {
        en,
      }
    })
  }

  render() {
    // ...
  }
}
);
```

## Formatting components

### Standalone

```jsx
import FormattedMessage from 'react-i18next-components';

<FormattedMesage id="path.to.key" />;
```

### Render prop

```jsx
import FormattedMessage from 'react-i18next-components';

<FormattedMesage id="path.to.key">
  {text => (
    <input placeholder={text} />
  )}
</FormattedMessage>
```
