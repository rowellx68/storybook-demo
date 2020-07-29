import React from 'react';
import { mount } from 'enzyme';

import RouterWrapper from '__test-utils__/RouterWrapper';
import CollapsibleSidebar from 'components/CollapsibleSidebar/CollapsibleSidebar';

const options = {
  wrappingComponent: RouterWrapper,
};

const links = [
  {
    icons: ['las la-fw la-home'],
    label: 'Home',
    to: '/',
  },
];

describe('CollapsibleSidebar', () => {
  it('renders aside', () => {
    const component = mount(<CollapsibleSidebar links={links} />, options);

    expect(component.exists('aside')).toEqual(true);
  });

  it('renders the correct mark-up - collapsed', () => {
    const component = mount(<CollapsibleSidebar links={links} />, options);

    expect(component).toMatchSnapshot();
  });

  it('renders link label - expanded', () => {
    const component = mount(<CollapsibleSidebar links={links} />, options);

    component.find('button').simulate('click');

    expect(component).toContainReact(<span>Home</span>);
  });

  it('renders the correct mark-up - expanded', () => {
    const component = mount(<CollapsibleSidebar links={links} />, options);

    component.find('button').simulate('click');

    expect(component).toMatchSnapshot();
  });
});
