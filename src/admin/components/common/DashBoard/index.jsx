import React from 'react';
import SiderDemo from '../Layout';
import DashBoardPage from './styled';
import Top from './Top/index';
import Bot from './Bot/index';

const DashBoard = () => (
  // active bằng với id ở mock-data
  <SiderDemo title="Tổng quan Shop" active="1">
    <DashBoardPage>
      <Top />
      <Bot />
    </DashBoardPage>
  </SiderDemo>
);
export default DashBoard;
