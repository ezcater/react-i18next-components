import moment from 'moment';

const formatRelativeTime = (value, options = {}) => {
  const { locale = 'en', format } = options;
  const instance = moment();

  instance.locale(locale);

  return instance.to(value);
};

export default formatRelativeTime;
