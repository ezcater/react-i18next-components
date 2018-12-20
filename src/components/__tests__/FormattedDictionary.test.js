import React from 'react';
import { mount } from 'enzyme';
import FormattedDictionary from '../FormattedDictionary';

describe('<FormattedDictionary />', () => {
  describe('when the component is passed a function as a child', () => {
    it('renders the return of the function with the correct text', () => {
      const MOCKED_RETURN_VALUE =
        'key: name.key options: {} - key: header.key options: {}';
      const wrapper = mount(
        <FormattedDictionary name="name.key" header="header.key">
          {({ name, header }) => (
            <p>
              {name} - {header}
            </p>
          )}
        </FormattedDictionary>
      );

      expect(wrapper.contains(<p>{MOCKED_RETURN_VALUE}</p>)).toEqual(true);
    });

    it("doesn't include non-string params that may be provided by wrapping components", () => {
      const MOCKED_RETURN_VALUE =
        'key: name.key options: {} - key: header.key options: {}';
      const wrapper = mount(
        <FormattedDictionary
          name="name.key"
          header="header.key"
          something={{ bad: 'value' }}
        >
          {({ name, header, something }) => (
            <p>
              {name} - {header}
              {something}
            </p>
          )}
        </FormattedDictionary>
      );

      expect(wrapper.contains(<p>{MOCKED_RETURN_VALUE}</p>)).toEqual(true);
    });

    it('handles options being passed', () => {
      const MOCKED_RETURN_VALUE = `key: name.key options: {} - key: header.key options: ${JSON.stringify(
        { num: 4 }
      )}`;

      const wrapper = mount(
        <FormattedDictionary
          name="name.key"
          header="header.key"
          options={{ header: { num: 4 } }}
        >
          {({ name, header }) => (
            <p>
              {name} - {header}
            </p>
          )}
        </FormattedDictionary>
      );

      expect(wrapper.contains(<p>{MOCKED_RETURN_VALUE}</p>)).toEqual(true);
    });
  });
});
