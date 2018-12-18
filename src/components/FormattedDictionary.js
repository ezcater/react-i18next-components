import { withNamespaces } from 'react-i18next';
import formatMessage from '../formatters/formatMessage';

const looksLikeTranslation = value => typeof value === 'string';

const getTranslation = ({ t, id, options }) => {
  return t(id, {
    ...options,
    interpolation: { format: formatMessage },
  });
};

const FormattedDictionary = ({ t, options = {}, children, ...ids }) => {
  const translations = {};

  Object.keys(ids).forEach(key => {
    if (looksLikeTranslation(ids[key]))
      translations[key] = getTranslation({
        t,
        id: ids[key],
        options: options[key] || {},
      });
  });

  return children(translations);
};

const FormattedDictionaryWrapper = withNamespaces()(FormattedDictionary);
FormattedDictionaryWrapper.displayName = 'FormattedDictionary';

export default FormattedDictionaryWrapper;
