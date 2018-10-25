# react-i18next-components
A collection of React components and utilities to simplify react-i18next

## I18nextProvider
Import the provider and wrap your app at the top level with the I18nextProvider.

```jsx
import { I18nextProvider } from 'react-i18next';
import App from './App'; // your entry page
​
ReactDOM.render(
  <I18nextProvider>
    <App />
  </I18nextProvider>,
  document.getElementById('app')
);
```

## FormattedMessage
### Standalone
```jsx
import FormattedMessage from 'react-i18next-components';

<FormattedMesage id="path.to.key" />
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
