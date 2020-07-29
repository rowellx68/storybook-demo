import React from 'react';
import { mount } from 'enzyme';

import RouterWrapper from '__test-utils__/RouterWrapper';
import CollapsibleLink from 'components/CollapsibleSidebar/CollapsibleLink';

const options = {
  wrappingComponent: RouterWrapper,
};

const icons = ['las la-fw la-ship'];

describe('CollapsibleLink', () => {
  it('renders the link', () => {
    const component = mount(
      <CollapsibleLink
        expanded={false}
        icons={icons}
        label='Projects'
        to='/projects'
      />,
      options,
    );

    expect(component.exists('a')).toEqual(true);
  });

  it('renders the correct mark-up - collapsed', () => {
    const component = mount(
      <CollapsibleLink
        expanded={false}
        icons={icons}
        label='Projects'
        to='/projects'
      />,
      options,
    );

    expect(component).toMatchSnapshot();
  });

  it('renders the label', () => {
    const component = mount(
      <CollapsibleLink expanded={true} icons={icons} label='Projects' to='/' />,
      options,
    );

    expect(component).toContainReact(<span>Projects</span>);
  });

  it('renders the correct mark-up - expanded', () => {
    const component = mount(
      <CollapsibleLink
        expanded={true}
        icons={icons}
        label='Projects'
        to='/projects'
      />,
      options,
    );

    expect(component).toMatchSnapshot();
  });
});
