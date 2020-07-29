import React from 'react';
import { action, withActions } from '@storybook/addon-actions';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { withEmotionGlobal } from '__stories__/decorators';
import 'line-awesome/dist/line-awesome/css/line-awesome.css';

import AsyncButton from 'components/AsyncButton';

storiesOf('AsyncButton', module)
  .addDecorator(withActions())
  .addDecorator(withKnobs())
  .addDecorator(withEmotionGlobal)
  .add('Default', () => (
    <AsyncButton disabled={false} onClick={action('onClick')}>
      Upload
    </AsyncButton>
  ))
  .add('Disabled', () => (
    <AsyncButton disabled={true} onClick={action('onClick')}>
      Upload
    </AsyncButton>
  ))
  .add('Custom Icon', () => (
    <AsyncButton
      disabled={true}
      icon={select(
        'icon',
        ['las la-compact-disc', 'las la-spinner', 'las la-circle-notch'],
        'las la-compact-disc',
      )}
      onClick={action('onClick')}>
      Upload
    </AsyncButton>
  ))
  .add('Dynamic', () => (
    <AsyncButton
      disabled={boolean('disabled', false)}
      onClick={action('onClick')}>
      {text('buttonText', 'Upload')}
    </AsyncButton>
  ));
