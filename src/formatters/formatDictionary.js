import formatMessage from './formatMessage';

const looksLikeATranslation = id => typeof id === 'string';

export default (t, ids, options = {}) => {
  const translations = {};
  Object.keys(ids).forEach(key => {
    if (looksLikeATranslation(ids[key]))
      translations[key] = formatMessage(t, ids[key], options[key]);
  });

  return translations;
};
