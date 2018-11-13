import formatRelativeTime from '../formatRelativeTime';

const DATE_TIME_INPUT = '2017-10-23T13:08:05-04:00';
const testCases = [
  {
    options: undefined,
    expected: 'a year ago',
  },
];

describe('formatRelativeTime', () => {
  testCases.forEach(testCase => {
    describe(`when passed options: ${testCase.options}`, () => {
      it(`returns ${testCase.expected}`, () => {
        const formatted = formatRelativeTime(DATE_TIME_INPUT, testCase.options);

        expect(formatted).toEqual(testCase.expected);
      });
    });
  });
});
