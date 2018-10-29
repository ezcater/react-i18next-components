import React from 'react';
import { withNamespaces } from 'react-i18next';

const FormattedMessage = ({ id, options, children, t }) => {
  const isRenderProp = children && typeof children === 'function';

  if(isRenderProp) {
    children(t(id, options))
  }

  return <React.Fragment>{t(id, options)}</React.Fragment>;
}

const FormattedMessageWrapper = withNamespaces()(FormattedMessage);
FormattedMessageWrapper.displayName = 'FormattedMessage';

export default FormattedMessageWrapper;
