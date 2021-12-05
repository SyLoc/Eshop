import React from 'react';
import Checkbox from '.';

export default {
  title: 'form/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const PrimaryCheckbox = Template.bind({});

PrimaryCheckbox.args = {
  label: 'Apple',
  value: 'Apple',
  disabled: false,
};
