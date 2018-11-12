import moment from 'moment';

const formatTime = (value, options = { format: 'LT' }) => {
  return moment(value).format(options.format);
};

export default formatTime;
