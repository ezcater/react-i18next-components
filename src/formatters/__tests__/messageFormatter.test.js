import messageFormatter from '../messageFormatter';

const UNFORMATTED_VALUE = 'hello';

describe('messageFormatter', () => {
  describe('when passed a string to format', () => {
    it('returns the string back', () => {
      const message = messageFormatter(UNFORMATTED_VALUE);

      expect(message).toEqual(UNFORMATTED_VALUE);
    });
  });
});
