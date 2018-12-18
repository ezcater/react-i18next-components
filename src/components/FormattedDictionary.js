import { withNamespaces } from 'react-i18next';

const looksLikeTranslation = value => typeof value === 'string';

const FormattedDictionary = ({ t, options = {}, children, ...ids }) => {
  const translations = {};

  Object.entries(ids).forEach(([key, value]) => {
    if (looksLikeTranslation(value))
      translations[key] = t(value, options[key] || {});
  });

  return children(translations);
};

const FormattedDictionaryWrapper = withNamespaces()(FormattedDictionary);
FormattedDictionaryWrapper.displayName = 'FormattedDictionary';

export default FormattedDictionaryWrapper;
