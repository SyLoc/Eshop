import styled from 'styled-components';
import { Progress } from 'antd';

export const TopArea = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-bottom: 40px;
`;
export const TopField = styled.div`
  min-width: 1672px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding-bottom: 40px;

  border-bottom: 1px solid #dce0ea;
`;
export const SmallTop = styled.div`
  width: 25%;
  height: 508px;
  display: flex;
  flex-direction: column;
`;
export const BigTop = styled.div`
  width: 50%;
  height: 508px;
  margin: 0 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 3px 0px #00000033;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const HeaderBar = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #f8f8fb;
`;
export const HeaderBarItem = styled.div`
  height: 100%;
  padding: 0 24px;
  background: ${(props) => (props.active ? '#FFFFFF' : '#f8f8fb')};
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${(props) => (props.active ? '#303841' : '#868A96')};
`;
export const SmallChartBox = styled.div`
  width: 100%;
  height: 50%;
  margin-bottom: 20px;
  box-shadow: 0px 2px 3px 0px #00000033;
  background: #ffffff;
  border-radius: 5px;
  padding: 24px;
`;
export const ProgressBox = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  box-sizing: border-box;
`;
export const ProgressItem = styled.div`
  width: 50%;
  height: 100%;
  box-shadow: 0px 2px 3px 0px #00000033;
  margin-right: ${(props) => props.marginRight};
  background: #ffffff;
  border-radius: 5px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const BillGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 15px;
`;
export const BillGroupItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #303841;
    margin-left: 6px;
  }
`;

export const ChartArea = styled.div`
  width: 100%;
  flex-grow: 1;
  background: #ffffff;
  padding: 15px 25px;
`;
export const ProgressCustom = styled(Progress)`
  position: relative;
  .ant-progress-circle-trail {
    stroke: ${(props) => props.colorTrail};
  }
  .ant-progress-text {
    border-bottom: 1px solid #dce0ea;
    font-size: 21px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0.02em;
    text-align: center;
    width: auto;
    transform: translate(-50%, -30px);
    color: #303841;
  }
`;
export const ProgressStyle = styled.div`
  position: relative;
  width: auto;
  height: auto;
`;
export const PercentToFinish = styled.div`
  position: absolute;
  width: 50px;
  top: 50%;
  left: 50%;
  font-size: 21px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-align: center;
  color: #303841;
  transform: translateX(-50%);
`;
export const SalesBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;
export const Div1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 7px 0;
`;
export const Div2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const TitleSalesBox = styled.h1`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #868a96;
`;
export const BigH1 = styled.h1`
  font-size: 37px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-align: left;
  color: #303841;
  margin: 0;
`;
export const SmallH1 = styled.h1`
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #303841;
  margin: 0;
`;
export const GreenH1 = styled.h1`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  color: #07a717;
`;
