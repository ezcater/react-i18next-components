import React from 'react';
import formatDate from '../formatters/formatDate';

const FormattedDate = ({ value, options, i18n: { lng }, children }) => {
  const isRenderProp = children && typeof children === 'function';
  const translation = formatDate(value, options, locale);

  if (isRenderProp) {
    return children(translation);
  }

  return <React.Fragment>{translation}</React.Fragment>;
};

export default FormattedDate;
