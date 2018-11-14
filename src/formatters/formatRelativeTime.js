import moment from 'moment';
import { EN } from '../constants/locales';

const formatRelativeTime = (value, options = {}) => {
  const { locale = EN } = options;
  const instance = moment();

  instance.locale(locale);

  return instance.to(value);
};

export default formatRelativeTime;
