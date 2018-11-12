import moment from 'moment';

const formatDate = (value, options = { format: 'LL' }, locale) => {
  const instance = moment();
  instance.locale(locale);

  return instance.format(options.format);
};

export default formatDate;
