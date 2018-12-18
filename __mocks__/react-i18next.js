export const withNamespaces = () => Component => {
  Component.defaultProps = {
    ...Component.defaultProps,
    t: (id, { interpolation, ...args }) =>
      `key: ${id} options: ${JSON.stringify(args)}`,
    i18n: {
      language: 'en',
    },
  };
  return Component;
};
