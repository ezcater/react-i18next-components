import React from 'react';
import formatTime from '../formatters/formatTime';

const FormattedTime = ({ value, options, children }) => {
  const isRenderProp = children && typeof children === 'function';
  const translation = formatTime(value, options);

  if (isRenderProp) {
    return children(translation);
  }

  return <React.Fragment>{translation}</React.Fragment>;
};

export default FormattedTime;
