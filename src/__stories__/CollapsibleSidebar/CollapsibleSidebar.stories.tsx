import React from 'react';
import { storiesOf } from '@storybook/react';
import { withActions } from '@storybook/addon-actions';

import { withEmotionGlobal, withMemoryRouter } from '__stories__/decorators';
import 'line-awesome/dist/line-awesome/css/line-awesome.css';

import CollapsibleSidebar from 'components/CollapsibleSidebar/CollapsibleSidebar';

const links = [
  {
    icons: ['las la-fw la-home'],
    label: 'Home',
    to: '/',
  },
  {
    icons: ['las la-fw la-chart-area'],
    label: 'Dashboard',
    to: '/dashboard',
  },
  {
    icons: ['las la-fw la-graduation-cap'],
    label: 'Learn',
    to: '/learn',
  },
];

const container = {
  display: 'flex',
  height: '100%',
};

const child = {
  flex: '1',
};

storiesOf('CollapsibleSidebar/CollapsibleSidebar', module)
  .addDecorator(withActions())
  .addDecorator(withEmotionGlobal)
  .addDecorator(withMemoryRouter)
  .addDecorator((story) => (
    <div style={container}>
      {story()}
      <div style={child}></div>
    </div>
  ))
  .add('Default', () => <CollapsibleSidebar links={links} />);
