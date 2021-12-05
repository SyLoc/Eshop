import React from 'react';
import { Button } from 'antd';
import Notification from '.';

export default {
  title: 'Component/Notification',
  component: Notification,
};

const Template = (args) => (
  <Notification {...args}>
    <Button type="primary">Open Notification</Button>
  </Notification>
);

export const PrimaryNotification = Template.bind({});

PrimaryNotification.args = {
  error: true,
  success: false,
  notificationCheck: false,
};
