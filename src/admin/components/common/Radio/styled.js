import styled from 'styled-components';
import { Radio } from 'antd';

export const RadioCustom = styled(Radio)`
  .ant-radio-inner {
    width: 20px;
    height: 20px;
    border-color: ${({ theme }) => theme.colors.blue};
  }

  .ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-input:focus + .ant-radio-inner {
    border-color: ${({ theme }) => theme.colors.blue};
  }

  .ant-radio-inner::after {
    position: absolute;
    top: 4px;
    left: 4px;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.blue};
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: ${({ theme }) => theme.colors.blue};
  }
  .ant-radio-checked::after {
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }

  .ant-radio-input:focus + .ant-radio-inner {
    box-shadow: 0 0 0 3px #5b9ef17a;
  }
`;

export const RadioGroupCustom = styled(Radio.Group)`
  display: flex;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  display: block;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primaryButtonColor};
  margin-top: 6px;
`;
