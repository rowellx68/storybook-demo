import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import { withEmotionGlobal, withMemoryRouter } from '__stories__/decorators';
import 'line-awesome/dist/line-awesome/css/line-awesome.css';

import CollapsibleLink from 'components/CollapsibleSidebar/CollapsibleLink';

storiesOf('CollapsibleSidebar/CollapsibleLink', module)
  .addDecorator(withKnobs())
  .addDecorator(withEmotionGlobal)
  .addDecorator(withMemoryRouter)
  .addDecorator((story) => <div>{story()}</div>);
