import React from 'react';
import CardBlock from './index';

export default {
  title: 'commom/Card-Block',
  component: CardBlock,
};

const Template = (args) => <CardBlock {...args} />;

export const TextCardBlock = Template.bind({});

TextCardBlock.args = {
  height: '167px',
  width: '1370px',
  bgColor: 'white',
  code: '#MD00098673',
  product: 'Khăn choàng thổ cẩm',
  quantity: 1,
  cod: 14540000,
  fee: 16500,
  name: 'Vũ Quang Hưng',
  phone: '0979419599',
  address: 'Đà Nẵng , Đường 2 Tháng 9, Quận Hải Châu, Đà Nẵng',
  postman: 'GHN',
  status: 'Đã giao hàng',
  date: '15/09/2021',
};
