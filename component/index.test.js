import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Component, { theme } from 'componnt';

describe('Component', () => {
  it('renders with value', () => {
    const wrapper = shallow(<Component value='test' />);
    expect(wrapper).toMatchSnapshot();
  });
  describe('theme', () => {
    it('Input', () => {
      const wrapper = renderer.create(<theme.Input />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
