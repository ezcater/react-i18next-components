import formatMessage from '../formatMessage';

const UNFORMATTED_VALUE = 'hello';

describe('formatMessage', () => {
  describe('when passed a string to format', () => {
    it('returns the string back', () => {
      const message = formatMessage(UNFORMATTED_VALUE);

      expect(message).toEqual(UNFORMATTED_VALUE);
    });
  });
});
