import React from 'react';
import { withNamespaces } from 'react-i18next';
import formatTime from '../formatters/formatTime';

const FormattedTime = ({ value, options, i18n: { language }, children }) => {
  const isRenderProp = children && typeof children === 'function';
  const translation = formatTime(value, options, language);

  if (isRenderProp) {
    return children(translation);
  }

  return <React.Fragment>{translation}</React.Fragment>;
};

const FormattedTimeWrapper = withNamespaces()(FormattedTime);
FormattedTimeWrapper.displayName = 'FormattedTime';

export default FormattedTimeWrapper;
