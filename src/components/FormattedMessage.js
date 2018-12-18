import React from 'react';
import { withNamespaces } from 'react-i18next';
import formatMessage from '../formatters/formatMessage';

const getTranslation = ({ t, id, options }) => {
  return t(id, {
    ...options,
    interpolation: { format: formatMessage },
  });
};

const FormattedMessage = ({ t, id, options, children }) => {
  const isRenderProp = children && typeof children === 'function';
  const translation = getTranslation({ t, id, options });

  if (isRenderProp) {
    return children(translation);
  }

  return <React.Fragment>{translation}</React.Fragment>;
};

const FormattedMessageWrapper = withNamespaces()(FormattedMessage);
FormattedMessageWrapper.displayName = 'FormattedMessage';

export default FormattedMessageWrapper;
