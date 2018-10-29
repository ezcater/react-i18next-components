import React from 'react';
import { I18nextProvider } from 'react-i18next';
import getI18nInstance from '../utilities/getI18nInstance';

const I18nProvider = ({ children, resources }) => {
  return (
    <I18nextProvider i18n={getI18nInstance({ resources })}>
    {children}
    </I18nextProvider>
  )
}

export default I18nProvider;
