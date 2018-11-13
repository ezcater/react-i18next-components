import moment from 'moment';

const formatTime = (value, options = {}) => {
  const { locale = 'en', format = 'LT' } = options;
  const instance = moment(value);

  instance.locale(locale);

  return instance.format(format);
};

export default formatTime;
