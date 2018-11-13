import React from 'react';
import { withNamespaces } from 'react-i18next';
import formatDate from '../formatters/formatDate';

const FormattedDate = ({ value, options, i18n: { language }, children }) => {
  const isRenderProp = children && typeof children === 'function';
  const translation = formatDate(value, options, language);

  if (isRenderProp) {
    return children(translation);
  }

  return <React.Fragment>{translation}</React.Fragment>;
};

const FormattedDateWrapper = withNamespaces()(FormattedDate);
FormattedDateWrapper.displayName = 'FormattedDate';

export default FormattedDateWrapper;
