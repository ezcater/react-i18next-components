import formatMessage from './formatMessage';

export default (t, ids, options = {}) => {
  const translations = {};
  Object.keys(ids).forEach(
    key => (translations[key] = formatMessage(t, ids[key], options[key]))
  );

  return translations;
};
