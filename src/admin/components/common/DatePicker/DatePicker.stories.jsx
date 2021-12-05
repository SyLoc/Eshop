import React from 'react';
import DatePicker from '.';

export default {
  title: 'form/DatePicker',
  component: DatePicker,
};

const Template = (args) => <DatePicker {...args} />;

export const PrimaryDatePicker = Template.bind({});

DatePicker.args = {};
