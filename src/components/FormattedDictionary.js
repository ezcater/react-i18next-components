import { withNamespaces } from 'react-i18next';
import formatDictionary from '../formatters/formatDictionary';

const FormattedDictionary = ({ t, options = {}, children, i18n, ...ids }) =>
  children(formatDictionary(t, ids, options));

const FormattedDictionaryWrapper = withNamespaces()(FormattedDictionary);
FormattedDictionaryWrapper.displayName = 'FormattedDictionary';

export default FormattedDictionaryWrapper;
