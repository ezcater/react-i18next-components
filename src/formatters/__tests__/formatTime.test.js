import formatTime from '../formatTime';

const DATE_TIME_INPUT = '2017-10-23T13:08:05-04:00';
const testCases = [
  {
    options: undefined,
    expected: '1:08 PM',
  },
  {
    options: { format: 'LTS' },
    expected: '1:08:05 PM',
  },
  {
    options: { locale: 'fr' },
    expected: '13:08',
  },
];

describe('formatTime', () => {
  testCases.forEach(testCase => {
    describe(`when passed options: ${testCase.options}`, () => {
      it(`returns ${testCase.expected}`, () => {
        const formatted = formatTime(DATE_TIME_INPUT, testCase.options);

        expect(formatted).toEqual(testCase.expected);
      });
    });
  });
});
