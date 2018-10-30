import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

const missingKeyHandler = (_lng, _ns, key) => {
  throw new Error(`Missing translation: ${key}`);
};

const configureI18n = ({ resources, lng = 'en' }) => {
  return i18n.use(reactI18nextModule).init({
    fallbackLng: 'en',
    lng,
    missingKeyHandler,
    resources,
    interpolation: {
      escapeValue: false,
    },
    whitelist: ['en'],
  });
};

export default configureI18n;
