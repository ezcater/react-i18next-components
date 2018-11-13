import moment from 'moment';

const formatDate = (value, options = { format: 'LL' }, locale) => {
  const instance = moment(value);
  instance.locale(locale);

  return instance.format(options.format);
};

export default formatDate;
