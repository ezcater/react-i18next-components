import moment from 'moment';
import { EN } from '../constants/locales';

const formatTime = (value, options = {}) => {
  const { locale = EN, format = 'LT' } = options;
  const instance = moment(value);

  instance.locale(locale);

  return instance.format(format);
};

export default formatTime;
