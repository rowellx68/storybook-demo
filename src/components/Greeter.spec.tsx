import React from 'react';
import { mount } from 'enzyme';
import FakeTimers from '@sinonjs/fake-timers';

import Greeter from 'components/Greeter';

describe('Greeter', () => {
  it('renders the correct greeting - morning', () => {
    const clock = FakeTimers.install({ now: new Date(1577876400000) });

    const component = mount(<Greeter name='John' />);

    const h1 = component.find('h1');

    const expected = <h1>Good morning, John!</h1>;

    expect(h1).toContainReact(expected);
    expect(component).toMatchSnapshot();

    clock.uninstall();
  });

  it('renders the correct greeting - afternoon', () => {
    const clock = FakeTimers.install({ now: new Date(1577890800000) });

    const component = mount(<Greeter name='John' />);

    const h1 = component.find('h1');

    const expected = <h1>Good afternoon, John!</h1>;

    expect(h1).toContainReact(expected);
    expect(component).toMatchSnapshot();

    clock.uninstall();
  });

  it('renders the correct greeting - evening', () => {
    const clock = FakeTimers.install({ now: new Date(1577908800000) });

    const component = mount(<Greeter name='John' />);

    const h1 = component.find('h1');

    const expected = <h1>Good evening, John!</h1>;

    expect(h1).toContainReact(expected);
    expect(component).toMatchSnapshot();

    clock.uninstall();
  });
});
