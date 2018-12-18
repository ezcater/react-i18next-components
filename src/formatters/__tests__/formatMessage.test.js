import formatMessage from '../formatMessage';

const UNFORMATTED_VALUE = 'hello';
const T = id => id;

describe('formatMessage', () => {
  describe('when passed a string to format', () => {
    it('returns the translated string back', () => {
      const message = formatMessage(T, UNFORMATTED_VALUE);

      expect(message).toEqual(UNFORMATTED_VALUE);
    });
  });
});
