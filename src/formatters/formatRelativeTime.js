import moment from 'moment';

const formatRelativeTime = (value, options, locale) => {
  const instance = moment();
  instance.locale(locale);

  return instance.to(value);
};

export default formatRelativeTime;
