import moment from 'moment';

const formatDate = (value, options = { format: 'LL' }, locale) => {
  return moment(value)
    .locale(locale)
    .format(options.format);
};

export default formatDate;
