import React from 'react';
import { mount } from 'enzyme';
import FormattedDate from '../FormattedDate';
import formatAbsoluteTime from '../../formatters/formatAbsoluteTime';

const EXPECTED_FORMAT = 'October 23, 2017';
const DATE_TIME_INPUT = '2017-10-23T13:08:05-04:00';

jest.mock('../../formatters/formatAbsoluteTime');
formatAbsoluteTime.mockImplementation(() => EXPECTED_FORMAT);

describe('<FormattedDate />', () => {
  describe('when the component is passed no child', () => {
    it('calls format with the correct arguments with the default', () => {
      const wrapper = mount(<FormattedDate value={DATE_TIME_INPUT} />);

      expect(formatAbsoluteTime).toHaveBeenCalledWith(DATE_TIME_INPUT, {
        format: 'LL',
        locale: 'en',
      });
    });

    it('calls format with the correct arguments with a passed in format', () => {
      const wrapper = mount(
        <FormattedDate value={DATE_TIME_INPUT} format="l" />
      );

      expect(formatAbsoluteTime).toHaveBeenCalledWith(DATE_TIME_INPUT, {
        format: 'l',
        locale: 'en',
      });
    });

    it('renders a fragment with the correct formatting', () => {
      const wrapper = mount(<FormattedDate value={DATE_TIME_INPUT} />);

      expect(wrapper.contains(EXPECTED_FORMAT)).toEqual(true);
    });
  });

  describe('when the component is passed a function as a child', () => {
    it('renders the return of the function with the correct formatting', () => {
      const wrapper = mount(
        <FormattedDate value={DATE_TIME_INPUT}>
          {formatted => <p>{formatted}</p>}
        </FormattedDate>
      );

      expect(wrapper.contains(<p>{EXPECTED_FORMAT}</p>)).toEqual(true);
    });
  });
});
