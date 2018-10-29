import React from 'react';
import {mount} from 'enzyme';
import FormattedMessage from '../components/FormattedMessage';
import mockI18nextWithValue from '../../test/mockI18nextWithValue';

const MOCKED_RETURN_VALUE = 'hello';

jest.mock('react-i18next', () => ({
  withNamespaces: () => Component => {
    Component.defaultProps = { ...Component.defaultProps, t: () => MOCKED_RETURN_VALUE };
    return Component;
  },
}));

describe('<FormattedMessage />', () => {
  describe('when the component is passed no child', () => {
    it('renders a fragment with the correct text', () => {
      const wrapper = mount(<FormattedMessage id="key" />);
      
      expect(wrapper.contains(
        <span>{MOCKED_RETURN_VALUE}</span>
      )).toEqual(true);
    });
  });

  describe('when the component is passed a function as a child', () => {
    it('renders the return of the function with the correct text', () => {
      const wrapper = mount(
        <FormattedMessage id="key">
          {text => <p>{text}</p>}
        </FormattedMessage>
      );

      expect(wrapper.contains(
        <p>{MOCKED_RETURN_VALUE}</p>
      )).toEqual(true);
    })
  });
})
