import React from 'react';
import { Line } from '@ant-design/charts';
import { BigData } from '../Data';

const BigChart = () => {
  const config = {
    data: BigData,
    height: 400,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    legend: { position: 'bottom' },
    color: function color(_ref) {
      const { name } = _ref;
      if (name === 'Giao thành công') {
        return '#0EAF0A';
      }
      if (name === 'Đơn delay, hủy, trả') {
        return '#D72323';
      }
      if (name === 'Đơn tạo trong ngày') {
        return '#435DD8';
      }
      if (name === 'Đang giao') {
        return '#E5A708';
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
  return <Line {...config} />;
};
export default BigChart;
