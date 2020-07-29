import React from 'react';
import { mount } from 'enzyme';

import Loading from 'components/Loading';

describe('Loading', () => {
  it('renders correct icon class', () => {
    const wrapper = mount(<Loading />);

    expect(wrapper.exists('.la-sync')).toEqual(true);
  });

  it('renders the correct mark-up', () => {
    const wrapper = mount(<Loading />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders the correct mark-up with custom spinner', () => {
    const wrapper = mount(
      <Loading>
        <i className='las la-fw la-cog'></i>
      </Loading>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
