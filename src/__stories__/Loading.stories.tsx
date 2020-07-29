import React from 'react';
import { storiesOf } from '@storybook/react';

import { withEmotionGlobal } from '__stories__/decorators';
import 'line-awesome/dist/line-awesome/css/line-awesome.css';

import Loading from 'components/Loading';

storiesOf('Loading', module)
  .addDecorator(withEmotionGlobal)
  .add('Default', () => <Loading />)
  .add('Custom spinner', () => (
    <Loading>
      <i className='las la-fw la-compact-disc'></i>
    </Loading>
  ));
