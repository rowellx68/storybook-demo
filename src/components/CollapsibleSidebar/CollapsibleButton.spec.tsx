import React from 'react';
import { mount } from 'enzyme';

import CollapsibleButton from 'components/CollapsibleSidebar/CollapsibleButton';

const icons = [
  'las la-fw la-angle-double-left',
  'las la-fw la-angle-double-right',
];

describe('CollapsibleButton', () => {
  it('renders the correct element - collapsed mark-up', () => {
    const component = mount(
      <CollapsibleButton
        expanded={false}
        onClick={() => null}
        icon={icons[0]}
        expandIcon={icons[1]}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  it('renders the correct element - expanded', () => {
    const component = mount(
      <CollapsibleButton
        expanded={true}
        onClick={() => null}
        icon={icons[0]}
        expandIcon={icons[1]}
      />,
    );

    expect(component).toMatchSnapshot();
  });
});
