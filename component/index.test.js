import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Component, { defaultTheme } from 'componnt';

describe('Component', () => {
  it('renders with value', () => {
    const wrapper = shallow(<Component value='test' />);
    expect(wrapper).toMatchSnapshot();
  });
  describe('defaultTheme', () => {
    it('Input', () => {
      const wrapper = renderer.create(<defaultTheme.Input />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
