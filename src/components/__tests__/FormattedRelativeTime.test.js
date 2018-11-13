import React from 'react';
import { mount } from 'enzyme';
import FormattedRelativeTime from '../FormattedRelativeTime';
import formatRelativeTime from '../../formatters/formatRelativeTime';

const EXPECTED_FORMAT = 'a year ago';
const DATE_TIME_INPUT = '2017-10-23T13:08:05-04:00';

jest.mock('../../formatters/formatRelativeTime');
formatRelativeTime.mockImplementation(() => EXPECTED_FORMAT);

describe('<FormattedRelativeTime />', () => {
  describe('when the component is passed no child', () => {
    it('calls format with the correct arguments', () => {
      const wrapper = mount(<FormattedRelativeTime value={DATE_TIME_INPUT} />);

      expect(formatRelativeTime).toHaveBeenCalledWith(DATE_TIME_INPUT, {
        locale: 'en',
      });
    });

    it('renders a fragment with the correct formatting', () => {
      const wrapper = mount(<FormattedRelativeTime value={DATE_TIME_INPUT} />);

      expect(wrapper.contains(EXPECTED_FORMAT)).toEqual(true);
    });
  });

  describe('when the component is passed a function as a child', () => {
    it('renders the return of the function with the correct formatting', () => {
      const wrapper = mount(
        <FormattedRelativeTime value={DATE_TIME_INPUT}>
          {formatted => <p>{formatted}</p>}
        </FormattedRelativeTime>
      );

      expect(wrapper.contains(<p>{EXPECTED_FORMAT}</p>)).toEqual(true);
    });
  });
});
