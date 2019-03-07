import formatAbsoluteTime from '../formatAbsoluteTime';

const DATE_TIME_INPUT = '2017-10-23T13:08:05-04:00';
const testCases = [
  {
    options: undefined,
    expected: '1:08 PM',
  },
  {
    options: { format: 'LT' },
    expected: '1:08 PM',
  },
  {
    options: { format: 'LTS' },
    expected: '1:08:05 PM',
  },
  {
    options: { locale: 'fr', format: 'LT' },
    expected: '13:08',
  },
  {
    options: { format: 'LL' },
    expected: 'October 23, 2017',
  },
  {
    options: { format: 'l' },
    expected: '10/23/2017',
  },
  {
    options: { format: 'L' },
    expected: '10/23/2017',
  },
  {
    options: { locale: 'fr', format: 'LL' },
    expected: '23 octobre 2017',
  },
  {
    options: { format: 'LT', timezone: 'America/Los_Angeles' },
    expected: '10:08 AM PDT',
  },
];

describe('formatAbsoluteTime', () => {
  testCases.forEach(testCase => {
    describe(`when passed options: ${testCase.options}`, () => {
      it(`returns ${testCase.expected}`, () => {
        const formatted = formatAbsoluteTime(DATE_TIME_INPUT, testCase.options);

        expect(formatted).toEqual(testCase.expected);
      });
    });
  });
});
