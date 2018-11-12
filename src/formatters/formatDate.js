import moment from 'moment';

const formatDate = (value, options = { format: 'LL' }) => {
  return moment(value).format(options.format);
};

export default formatDate;
