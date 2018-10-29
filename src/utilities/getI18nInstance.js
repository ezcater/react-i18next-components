import i18n from 'i18next';

const missingKeyHandler = (_lng, _ns, key) => {
  throw new Error(`Missing translation: ${key}`);
};

const getI18nInstance = ({ resources }) => {
  return i18n.init({
    fallbackLng: 'en',
    lng: 'en',
    missingKeyHandler,
    resources,
    interpolation: {
      escapeValue: false,
    },
    whitelist: ['en'],
  });
}

export default getI18nInstance;
