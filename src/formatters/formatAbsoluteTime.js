import moment from 'moment';
import momentTimezone from 'moment-timezone';
import { EN } from '../constants/locales';

const formatAbsoluteTime = (value, options = {}) => {
  const { locale = EN, format = 'LT', timezone } = options;

  if (timezone) {
    return momentTimezone(value)
      .tz(timezone)
      .format(`${format} z`);
  }

  const instance = moment(value);

  instance.locale(locale);

  return instance.format(format);
};

export default formatAbsoluteTime;
