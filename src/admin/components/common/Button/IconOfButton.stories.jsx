import React from 'react';

import Button from '.';
import IconOfButton from './Icon';
import * as Theme from '../../../styles/theme';

import { ReactComponent as leftArrow } from '../../../assets/icons/left-arrow.svg';

const { fontSize, borderRadius } = Theme.default;

export default {
  title: 'form/control/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'click' },
  },
};

export const ButtonIcon = (args) => (
  <Button
    buttonType="primary"
    size={fontSize.sm}
    width="auto"
    padding="8px 24px"
    textTransform="uppercase"
    borderRadius={borderRadius.xl}
  >
    <IconOfButton {...args}>Tiếp tục</IconOfButton>
  </Button>
);

ButtonIcon.args = {
  Icon: leftArrow,
  left: true,
  right: false,
};
