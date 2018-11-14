import React from 'react';
import { withNamespaces } from 'react-i18next';
import formatAbsoluteTime from '../formatters/formatAbsoluteTime';

const FormattedDate = ({ value, format, i18n: { language }, children }) => {
  const isRenderProp = children && typeof children === 'function';
  const formatted = formatAbsoluteTime(value, { format, locale: language });

  if (isRenderProp) {
    return children(formatted);
  }

  return <React.Fragment>{formatted}</React.Fragment>;
};

FormattedDate.defaultProps = {
  format: 'LL',
};

const FormattedDateWrapper = withNamespaces()(FormattedDate);
FormattedDateWrapper.displayName = 'FormattedDate';

export default FormattedDateWrapper;
