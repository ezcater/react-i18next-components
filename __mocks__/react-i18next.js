const MOCKED_RETURN_VALUE = 'hello';

export const withNamespaces = () => Component => {
  Component.defaultProps = {
    ...Component.defaultProps,
    t: () => MOCKED_RETURN_VALUE,
    i18n: {
      language: 'en',
    },
  };
  return Component;
};
