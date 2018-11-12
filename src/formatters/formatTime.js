import moment from 'moment';

const formatTime = (value, options = { format: 'LT' }, locale) => {
  return moment(value)
    .locale(locale)
    .format(options.format);
};

export default formatTime;
