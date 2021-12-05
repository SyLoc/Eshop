import React from 'react';
import { Line } from '@ant-design/charts';

const SmallChart = () => {
  const data = [
    { year: '0h', value: 3 },
    { year: '2h', value: 4 },
    { year: '4h', value: 3.5 },
    { year: '6h', value: 5 },
    { year: '8h', value: 4.9 },
    { year: '10h', value: 6 },
    { year: '12h', value: 7 },
    { year: '14h', value: 9 },
    { year: '16h', value: 13 },
    { year: '18h', value: 6 },
    { year: '20h', value: 7 },
    { year: '22h', value: 9 },
    { year: '24h', value: 13 },
  ];

  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    lineStyle: {
      stroke: '#D72323',
    },
    point: {
      shape: 'circle',
      style: {
        fill: 'white',
        stroke: '#D72323',
        lineWidth: 2,
      },
    },
    xAxis: {
      line: { style: { stroke: 'white' } },
      grid: { line: { style: { stroke: 'white' } } },
    },
    yAxis: {
      grid: { line: { style: { stroke: 'white' } } },
    },
  };
  return <Line {...config} />;
};
export default SmallChart;
