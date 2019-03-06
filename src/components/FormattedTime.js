import React from 'react';
import { withNamespaces } from 'react-i18next';
import formatAbsoluteTime from '../formatters/formatAbsoluteTime';

const FormattedTime = ({
  value,
  format,
  i18n: { language },
  timezone,
  children,
}) => {
  const isRenderProp = children && typeof children === 'function';
  const translation = formatAbsoluteTime(value, {
    format,
    locale: language,
    timezone,
  });

  if (isRenderProp) {
    return children(translation);
  }

  return <React.Fragment>{translation}</React.Fragment>;
};

FormattedTime.defaultProps = {
  format: 'LT',
};

const FormattedTimeWrapper = withNamespaces()(FormattedTime);
FormattedTimeWrapper.displayName = 'FormattedTime';

export default FormattedTimeWrapper;
