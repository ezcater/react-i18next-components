import moment from 'moment';

const formatRelativeTime = (value, options) => {
  return moment().to(value);
};

export default formatRelativeTime;
