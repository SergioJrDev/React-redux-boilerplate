import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
const Button = ({text}) => <button>{text || 'Text default'}</button>

storiesOf('Button', module)
  .add('without text', () => (
    <Button />
  ))
  .add('with text', () => (
    <Button text='Hello button!' />
  ));