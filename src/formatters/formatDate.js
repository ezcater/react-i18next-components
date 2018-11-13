import moment from 'moment';

const formatDate = (value, options = {}) => {
  const { locale = 'en', format = 'LL' } = options;
  const instance = moment(value);

  instance.locale(locale);

  return instance.format(format);
};

export default formatDate;
