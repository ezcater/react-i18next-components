import moment from 'moment';
import { EN } from '../constants/locales';

const formatDate = (value, options = {}) => {
  const { locale = EN, format = 'LL' } = options;
  const instance = moment(value);

  instance.locale(locale);

  return instance.format(format);
};

export default formatDate;
