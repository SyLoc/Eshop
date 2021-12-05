import React from 'react';
import Chart from '.';

export default {
  title: 'form/Chart',
  component: Chart,
  argTypes: {
    label: { control: 'text' },
    typeChart: {
      options: ['column', 'line'],
      control: { type: 'select' },
    },
  },
};

const data = [
  {
    name: 'Nhập',
    value: 95,
  },
  {
    name: 'Xuất',
    value: 75,
  },
  {
    name: 'Tồn',
    value: 32,
  },
  {
    name: 'Đang giao',
    value: 9,
  },
  {
    name: 'Trả về',
    value: 5,
  },
];

const config = {
  data,
  width: 600,
  height: 407,
  xField: 'name',
  yField: 'value',
  maxColumnWidth: 36,
  color: function color(_ref) {
    const { name } = _ref;
    if (name === 'Nhập') {
      return '#0EAF0A';
    }
    if (name === 'Xuất') {
      return '#E5A708';
    }
    if (name === 'Tồn') {
      return '#D72323';
    }
    if (name === 'Đang giao') {
      return '#20D3DE';
    }
    if (name === 'Trả về') {
      return '#435DD8';
    }
  },

  yAxis: {
    grid: {
      line: {
        style: {
          stroke: '#DCE0EA',
          lineWidth: 2,
          lineDash: [7, 5],
          cursor: 'pointer',
        },
      },
    },
  },
};

const Template = (args) => <Chart {...config} {...args} />;

export const ChartColumn = Template.bind({});
ChartColumn.args = {
  label: 'Xu hướng hàng',
  typeChart: 'column',
};

export const LineColumn = Template.bind({});
LineColumn.args = {
  label: 'Biểu đồ',
  typeChart: 'line',
};
