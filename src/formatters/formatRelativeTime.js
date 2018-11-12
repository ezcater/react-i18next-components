import moment from 'moment';

const formatRelativeTime = (value, options, locale) => {
  return moment()
    .locale(locale)
    .to(value);
};

export default formatRelativeTime;
