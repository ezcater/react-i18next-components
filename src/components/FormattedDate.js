import React from 'react';
import { withNamespaces } from 'react-i18next';
import formatDate from '../formatters/formatDate';

const FormattedDate = ({ value, format, i18n: { language }, children }) => {
  const isRenderProp = children && typeof children === 'function';
  const formatted = formatDate(value, { format, locale: language });

  if (isRenderProp) {
    return children(formatted);
  }

  return <React.Fragment>{formatted}</React.Fragment>;
};

const FormattedDateWrapper = withNamespaces()(FormattedDate);
FormattedDateWrapper.displayName = 'FormattedDate';

export default FormattedDateWrapper;
