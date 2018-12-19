import formatDictionary from '../formatDictionary';

const UNFORMATTED_DICTIONARY = {
  header: 'panel.header',
  subheader: 'panel.subheader',
};
const T = id => id;

describe('formatDictionary', () => {
  describe('when passed a class to format', () => {
    it('returns the translated class back', () => {
      const translated = formatDictionary(T, UNFORMATTED_DICTIONARY);

      expect(translated).toEqual(UNFORMATTED_DICTIONARY);
    });
  });
});
