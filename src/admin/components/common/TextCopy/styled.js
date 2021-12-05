import styled from 'styled-components';
import { Typography } from 'antd';

const { Paragraph } = Typography;
export const TextCusTom = styled(Paragraph)`
  background: transparent;
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
  color: white;
  margin: 0 !important;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: left;
  color: white;
  .ant-typography-copy {
    height: 100%;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    border-left: 1px solid #868a96 !important;
    padding: 5px !important;
  }
`;
export const BoxContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5px;
  background: ${(props) => props.bgColor};
  padding: 4px 0 !important;
  box-sizing: border-box;
`;
export const CodeTitle = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-align: left;
    color: white;
  }
`;
