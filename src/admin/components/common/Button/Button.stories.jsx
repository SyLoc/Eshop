import React from 'react';

import Button from '.';
import * as Theme from '../../../styles/theme';

const { fontSize, borderRadius } = Theme.default;

export default {
  title: 'form/control/Button',
  component: Button,
  argTypes: {
    buttonType: {
      options: ['primary', 'secondary', 'gray'],
      control: { type: 'select' },
    },
    width: {
      options: ['100%', 'auto'],
      control: { type: 'radio' },
    },
    size: {
      options: [
        fontSize.base,
        fontSize.lg,
        fontSize.md,
        fontSize.sm,
        fontSize.xl,
        fontSize.xs,
        fontSize.xxl,
        fontSize.xxxl,
      ],
      control: { type: 'select' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
    dashed: {
      options: ['dashed', 'none'],
      control: { type: 'select' },
    },
    onClick: { action: 'click' },
  },
};

const TemplateButton = (args) => <Button {...args} />;

export const MasterButton = TemplateButton.bind({});

MasterButton.args = {
  buttonType: 'primary',
  size: fontSize.base,
  width: '100%',
  padding: '10px 24px',
  textTransform: 'uppercase',
  borderRadius: borderRadius.lg,
  dashed: 'none',
  children: 'đăng nhập',
};
