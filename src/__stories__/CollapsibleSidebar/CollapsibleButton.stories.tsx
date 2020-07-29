import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, withActions } from '@storybook/addon-actions';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import { withEmotionGlobal } from '__stories__/decorators';
import 'line-awesome/dist/line-awesome/css/line-awesome.css';

import CollapsibleButton from 'components/CollapsibleSidebar/CollapsibleButton';

storiesOf('CollapsibleSidebar/CollapsibleButton', module)
  .addDecorator(withActions())
  .addDecorator(withKnobs())
  .addDecorator(withEmotionGlobal)
  .add('Collapsed', () => (
    <CollapsibleButton
      expanded={false}
      icon='las la-fw la-ship'
      onClick={action('onClick')}
    />
  ))
  .add('Expanded', () => (
    <CollapsibleButton
      expanded={true}
      icon='las la-fw la-ship'
      label='Projects'
      onClick={action('onClick')}
    />
  ))
  .add('Dynamic', () => (
    <CollapsibleButton
      expanded={boolean('Expanded', true)}
      icon='las la-fw la-ship'
      label='Projects'
      onClick={action('onClick')}
    />
  ));
