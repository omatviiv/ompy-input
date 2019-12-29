import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Component, { thm } from 'componnt/bare';

describe('Component', () => {
  it('renders with value', () => {
    const wrapper = shallow(<Component value='test' />);
    expect(wrapper).toMatchSnapshot();
  });
  describe('theme', () => {
    it('BareInput', () => {
      const wrapper = renderer.create(<thm.BareInput />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
