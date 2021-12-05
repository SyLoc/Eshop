import React, { useState } from 'react';
import Index from '../../../WarehouseOverview';
import { data, dataSelect, information } from '../../../WarehouseOverview/data';
import { ReactComponent as RedDot } from '../../../../images/svg/redDot.svg';
import { ReactComponent as GreenDot } from '../../../../images/svg/greenDot.svg';
import { ReactComponent as BlueDot } from '../../../../images/svg/blueDot.svg';
import { ReactComponent as YellowDot } from '../../../../images/svg/yellowDot.svg';
import { ReactComponent as GreenIncrease } from '../../../../images/svg/GreenIncrease.svg';
import SmallChart from '../Charts/SmallChart';
import BigChart from '../Charts/BigChart';
import {
  TopField,
  SmallTop,
  BigTop,
  HeaderBar,
  HeaderBarItem,
  SmallChartBox,
  ProgressBox,
  ProgressItem,
  BillGroup,
  BillGroupItem,
  ChartArea,
  ProgressCustom,
  ProgressStyle,
  PercentToFinish,
  SalesBox,
  Div1,
  Div2,
  TitleSalesBox,
  BigH1,
  SmallH1,
  GreenH1,
  TopArea,
} from './styled';

const Top = () => {
  const [active, setActive] = useState('chart1');
  return (
    <TopArea>
      <TopField>
        <SmallTop>
          <SmallChartBox>
            <SalesBox>
              <TitleSalesBox>Tổng doanh thu</TitleSalesBox>
              <Div1>
                <BigH1>9.950.869.598</BigH1>
                <SmallH1>vnđ</SmallH1>
              </Div1>
              <Div2>
                <GreenIncrease />
                <GreenH1>15%</GreenH1>
              </Div2>
            </SalesBox>
            <SmallChart />
          </SmallChartBox>
          <ProgressBox>
            <ProgressItem marginRight="20px">
              <ProgressStyle>
                <ProgressCustom
                  type="circle"
                  percent={80}
                  strokeWidth="12"
                  colorTrail="#d64a4a"
                  strokeColor="#37C120"
                />
                <PercentToFinish>20%</PercentToFinish>
              </ProgressStyle>
              <BillGroup>
                <BillGroupItem>
                  <GreenDot />
                  <h1>ĐH Thành công</h1>
                </BillGroupItem>
                <BillGroupItem>
                  <RedDot />
                  <h1>ĐH hoàn</h1>
                </BillGroupItem>
              </BillGroup>
            </ProgressItem>
            <ProgressItem>
              <ProgressStyle>
                <ProgressCustom
                  type="circle"
                  percent={80}
                  strokeWidth="12"
                  colorTrail="#F89E18"
                  strokeColor="#435DD8"
                />
                <PercentToFinish>20%</PercentToFinish>
              </ProgressStyle>
              <BillGroup>
                <BillGroupItem>
                  <BlueDot />
                  <h1>Tỉ lệ chốt đơn</h1>
                </BillGroupItem>
                <BillGroupItem>
                  <YellowDot />
                  <h1>Tỉ lệ hủy</h1>
                </BillGroupItem>
              </BillGroup>
            </ProgressItem>
          </ProgressBox>
        </SmallTop>
        <BigTop>
          <HeaderBar>
            <HeaderBarItem onClick={() => setActive('chart1')} active={active === 'chart1'}>
              Xu hướng đơn hàng
            </HeaderBarItem>
            <HeaderBarItem onClick={() => setActive('chart2')} active={active === 'chart2'}>
              Dòng tiền hàng
            </HeaderBarItem>
            <HeaderBarItem onClick={() => setActive('chart3')} active={active === 'chart3'}>
              Xu hướng khách hàng
            </HeaderBarItem>
          </HeaderBar>
          <ChartArea>{active === 'chart1' ? <BigChart /> : ''}</ChartArea>
        </BigTop>
        <SmallTop>
          <Index
            percent={35}
            shelfStatus="9679/19865"
            information={information}
            data={data}
            dataSelect={dataSelect}
          />
        </SmallTop>
      </TopField>
    </TopArea>
  );
};
export default Top;
