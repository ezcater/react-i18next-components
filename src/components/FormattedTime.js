import React from 'react';
import formatTime from '../formatters/formatTime';
import { withNamespaces } from 'react-i18next';

const FormattedTime = ({ value, options, i18n: { lng }, children }) => {
  const isRenderProp = children && typeof children === 'function';
  const translation = formatTime(value, options, lng);

  if (isRenderProp) {
    return children(translation);
  }

  return <React.Fragment>{translation}</React.Fragment>;
};

export default withNamespaces()(FormattedTime);
