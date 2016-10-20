/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import Home from './Home';

function setup() {
  const props = {
    onChange: () => {},
  };

  return shallow(<Home {...props} />);
}
describe('<Home />', () => {
  it('it render one header', () => {
    const wrapper = setup();
    expect(wrapper.find('h1').length).toBe(1);
  });
});
