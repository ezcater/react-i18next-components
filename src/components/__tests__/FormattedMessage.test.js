import React from 'react';
import { mount } from 'enzyme';
import FormattedMessage from '../FormattedMessage';

describe('<FormattedMessage />', () => {
  describe('when the component is passed no child', () => {
    it('renders a fragment with the correct text', () => {
      const MOCKED_RETURN_VALUE = 'key: key options: {}';
      const wrapper = mount(<FormattedMessage id="key" />);

      expect(wrapper.contains(MOCKED_RETURN_VALUE)).toEqual(true);
    });

    it('renders a fragment with the correct text including options', () => {
      const MOCKED_RETURN_VALUE = `key: key options: ${JSON.stringify({
        some: 'value',
      })}`;
      const wrapper = mount(
        <FormattedMessage id="key" options={{ some: 'value' }} />
      );

      expect(wrapper.contains(MOCKED_RETURN_VALUE)).toEqual(true);
    });
  });

  describe('when the component is passed a function as a child', () => {
    it('renders the return of the function with the correct text', () => {
      const MOCKED_RETURN_VALUE = 'key: key options: {}';
      const wrapper = mount(
        <FormattedMessage id="key">{text => <p>{text}</p>}</FormattedMessage>
      );

      expect(wrapper.contains(<p>{MOCKED_RETURN_VALUE}</p>)).toEqual(true);
    });
  });
});
