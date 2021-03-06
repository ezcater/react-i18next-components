import React from 'react';
import { withNamespaces } from 'react-i18next';
import formatRelativeTime from '../formatters/formatRelativeTime';

const FormattedRelativeTime = ({ value, i18n: { language }, children }) => {
  const isRenderProp = children && typeof children === 'function';
  const translation = formatRelativeTime(value, {
    locale: language,
  });

  if (isRenderProp) {
    return children(translation);
  }

  return <React.Fragment>{translation}</React.Fragment>;
};

const FormattedRelativeTimeWrapper = withNamespaces()(FormattedRelativeTime);
FormattedRelativeTimeWrapper.displayName = 'FormattedRelativeTime';

export default FormattedRelativeTimeWrapper;
