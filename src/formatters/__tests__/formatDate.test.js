import formatDate from '../formatDate';

const DATE_TIME_INPUT = '2017-10-23T13:08:05-04:00';
const testCases = [
  {
    options: undefined,
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
    options: { locale: 'fr' },
    expected: '23 octobre 2017',
  },
];

describe('formatDate', () => {
  testCases.forEach(testCase => {
    describe(`when passed options: ${testCase.options}`, () => {
      it(`returns ${testCase.expected}`, () => {
        const formatted = formatDate(DATE_TIME_INPUT, testCase.options);

        expect(formatted).toEqual(testCase.expected);
      });
    });
  });
});
