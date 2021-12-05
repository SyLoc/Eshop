import styled from 'styled-components';
import { Checkbox } from 'antd';

// eslint-disable-next-line import/prefer-default-export
export const CustomCheckbox = styled(Checkbox)`
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.colors.blue};
  }
  .ant-checkbox-input:focus + .ant-checkbox-inner,
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.colors.blue};
  }
  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-inner {
    background-color: ${({ theme }) => theme.colors.blue};
    border-color: ${({ theme }) => theme.colors.blue};
  }
  .ant-checkbox-checked:after {
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const CustomCheckboxGroup = styled(Checkbox.Group)`
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.colors.blue};
  }
  .ant-checkbox-input:focus + .ant-checkbox-inner,
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner {
    border-color: ${({ theme }) => theme.colors.blue};
  }
  .ant-checkbox-checked .ant-checkbox-inner,
  .ant-checkbox-indeterminate .ant-checkbox-inner {
    background-color: ${({ theme }) => theme.colors.blue};
    border-color: ${({ theme }) => theme.colors.blue};
  }
  .ant-checkbox-checked:after {
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }
  .ant-checkbox-indeterminate .ant-checkbox-inner::after {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  gap: 4px;
  height: max-content;
  margin-top: 10px;
  align-items: center;

  & > p {
    color: ${({ theme }) => theme.colors.primaryButtonColor};
    font-style: italic;
    font-size: 14px;
  }

  & > span {
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
