import React from 'react';
import { withNamespaces } from 'react-i18next';
import messageFormatter from './formatters/messageFormatter';

const getTranslation = ({t, id, options}) => {
  return t(id, {
    ...options,
    interpolation:  {format: messageFormatter}
  });
}

const FormattedMessage = ({ t, id, options, children }) => {
  const isRenderProp = children && typeof children === 'function';
  const translation = getTranslation({ t, id, options });

  if(isRenderProp) {
    return children(translation)
  }

  return <span>{translation}</span>;
}

const FormattedMessageWrapper = withNamespaces()(FormattedMessage);
FormattedMessageWrapper.displayName = 'FormattedMessage';

export default FormattedMessageWrapper;
