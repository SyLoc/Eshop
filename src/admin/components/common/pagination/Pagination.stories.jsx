import React from 'react';
import Page from './index';

export default {
  title: 'Component/Page',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const PrimaryPage = Template.bind({});

PrimaryPage.args = {
  total: 300,
  marginTop: '15px',
  marginBot: '15px',
  width: '40px',
  height: '40px',
};
