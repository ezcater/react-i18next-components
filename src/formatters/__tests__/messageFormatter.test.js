import messageFormatter from '../messageFormatter';

const UMFORMATTED_VALUE = 'hello';

describe('messageFormatter', () => {
  describe('when passed a string to format', () => {
    it('returns the string back', () => {
      const message = messageFormatter(UMFORMATTED_VALUE);

      expect(message).toEqual(UMFORMATTED_VALUE);
    });
  })
});
