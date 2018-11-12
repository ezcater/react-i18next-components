import React from 'react';
import formatRelativeTime from '../formatters/formatRelativeTime';

const FormattedRelativeTime = ({ value, options, i18n: { lng }, children }) => {
  const isRenderProp = children && typeof children === 'function';
  const translation = formatRelativeTime(value, options, lng);

  if (isRenderProp) {
    return children(translation);
  }

  return <React.Fragment>{translation}</React.Fragment>;
};

export default FormattedRelativeTime;
