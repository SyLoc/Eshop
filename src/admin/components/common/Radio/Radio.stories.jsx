import React from 'react';
import Radio from './index';

export default {
  title: 'form/Radio',
  component: Radio,
  argTypes: {
    typeRadio: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    color: {
      options: ['#D72323', '#9643D8', '#f3d107', '#2b0dd6'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Radio {...args} />;

export const PrimaryRadio = Template.bind({});

PrimaryRadio.args = {
  typeRadio: 'primary',
  color: '#D72323',
  defaultChecked: true,
};
