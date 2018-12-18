import { withNamespaces } from 'react-i18next';

const looksLikeTranslation = value => typeof value === 'string';

const FormattedDictionary = ({ t, options = {}, children, ...ids }) => {
  const translations = {};

  Object.keys(ids).forEach(key => {
    if (looksLikeTranslation(ids[key]))
      translations[key] = t(ids[key], options[key] || {});
  });

  return children(translations);
};

const FormattedDictionaryWrapper = withNamespaces()(FormattedDictionary);
FormattedDictionaryWrapper.displayName = 'FormattedDictionary';

export default FormattedDictionaryWrapper;
