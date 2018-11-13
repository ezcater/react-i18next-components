import React from 'react';
import { mount } from 'enzyme';
import FormattedTime from '../FormattedTime';
import formatTime from '../../formatters/formatTime';

const EXPECTED_FORMAT = '1:00 PM';
const DATE_TIME_INPUT = '2017-10-23T13:08:05-04:00';

jest.mock('../../formatters/formatTime');
formatTime.mockImplementation(() => EXPECTED_FORMAT);

describe('<FormattedTime />', () => {
  describe('when the component is passed no child', () => {
    it('calls format with the correct arguments', () => {
      const wrapper = mount(
        <FormattedTime value={DATE_TIME_INPUT} format="LTS" />
      );

      expect(formatTime).toHaveBeenCalledWith(DATE_TIME_INPUT, {
        format: 'LTS',
        locale: 'en',
      });
    });

    it('renders a fragment with the correct formatting', () => {
      const wrapper = mount(<FormattedTime value={DATE_TIME_INPUT} />);

      expect(wrapper.contains(EXPECTED_FORMAT)).toEqual(true);
    });
  });

  describe('when the component is passed a function as a child', () => {
    it('renders the return of the function with the correct formatting', () => {
      const wrapper = mount(
        <FormattedTime value={DATE_TIME_INPUT}>
          {formatted => <p>{formatted}</p>}
        </FormattedTime>
      );

      expect(wrapper.contains(<p>{EXPECTED_FORMAT}</p>)).toEqual(true);
    });
  });
});
