import React from 'react';
import { mount } from 'enzyme';

import RouterWrapper from '__test-utils__/RouterWrapper';
import MainNav from 'components/MainNav';

const options = {
  wrappingComponent: RouterWrapper
};

describe('MainNav', () => {
  it('renders the nav', () => {
    const component = mount(<MainNav />, options);

    expect(component.exists('nav')).toEqual(true);
  });

  it('renders the correct mark-up', () => {
    const component = mount(<MainNav />, options);

    expect(component).toMatchSnapshot();
  });
});
