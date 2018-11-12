import React from 'react';
import formatDate from '../formatters/formatDate';

const FormattedDate = ({ value, options, children }) => {
  const isRenderProp = children && typeof children === 'function';
  const translation = formatDate(value, options);

  if (isRenderProp) {
    return children(translation);
  }

  return <React.Fragment>{translation}</React.Fragment>;
};

export default FormattedDate;
