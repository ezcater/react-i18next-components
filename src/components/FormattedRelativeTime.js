import React from 'react';
import formatRelativeTime from '../formatters/formatRelativeTime';

const FormattedRelativeTime = ({ value, options, children }) => {
  const isRenderProp = children && typeof children === 'function';
  const translation = formatRelativeTime(value, options);

  if (isRenderProp) {
    return children(translation);
  }

  return <React.Fragment>{translation}</React.Fragment>;
};

export default FormattedRelativeTime;
