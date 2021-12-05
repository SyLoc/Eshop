/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import { Modal } from 'antd';

const size = {
  headerModalHeight: '50px',
};

export const CustomModal = styled(Modal)`
  .ant-modal {
    width: ${(props) => props.width};
  }
  .ant-modal-content {
    border-radius: ${({ theme }) => theme.borderRadius.base};
  }
  .ant-modal-header {
    background-color: #3a4750;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${size.headerModalHeight};
  }

  .ant-modal-header {
    display: ${(props) => (props.isheader ? 'flex' : 'none')};
  }

  .ant-modal-title {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 30px;
    letter-spacing: 0.02em;
    text-align: center;
  }

  .ant-modal-close-x {
    color: white;
    display: ${(props) => (props.closeButton ? props.closeButton : 'block')};
    width: 50px;
    height: 50px;
    line-height: 44px;

    &::before {
      content: '<';
      position: absolute;
      left: -454px;
      top: -4px;
      font-size: 18px;
      font-weight: 400;
      display: ${(props) => (props.isBack ? 'block' : 'none')};
    }

    & > span {
      display: ${(props) => (props.isBack ? 'none' : 'inline-block')};
    }
  }

  .ant-modal-body {
    padding: ${(props) => (props.padding ? props.padding : '20px')};
  }

  .ant-modal-footer {
    padding: ${(props) => (props.padding ? props.paddingFooter : ' 10px 20px')};
    text-align: center;
    border: none;
  }
`;
