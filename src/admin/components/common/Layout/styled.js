import { Layout } from 'antd';

const { default: styled } = require('styled-components');

const { Sider } = Layout;

export const SiderCustom = styled(Sider)`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: auto;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  width: 210px;

  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;
export const HeaderWrap = styled.div`
  background-color: #ffffff;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const Wrap = styled(Layout)`
  position: relative;
  .ant-menu-item-selected {
    svg > path {
      fill: ${({ theme }) => theme.colors.blue};
    }
    color: ${({ theme }) => theme.colors.blue};
    background: #F4F7FF;
    position: relative;

    &::before{
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background: ${({ theme }) => theme.colors.blue};
    }

    a {
      color: ${({ theme }) => theme.colors.blue};
      opacity: 1;
    }
    a:hover {
      color: ${({ theme }) => theme.colors.blue};
      opacity: 1;
    }
  }
  .ant-menu-item {
    svg {
      width: 20px;
    }
    a:hover {
      color: ${({ theme }) => theme.colors.blue};
      opacity: 1;
    }
    display: flex;
    align-items: center;
  }
  .ant-menu-item:hover {
    color: ${({ theme }) => theme.colors.blue};
    svg > path {
      fill: ${({ theme }) => theme.colors.blue};
    }
  }
  .ant-menu-item:active {
    background-color: white !important;
  }
  .ant-menu-item-disabled,
  .ant-menu-submenu-disabled {
    cursor: default;
  }
  .item {
    display: flex;
    align-items: center;
    position: relative;
  }
  .item:before {
    position: absolute;
    content: '';
    width: 0px;
    height: 3px;
    top: 50%;
    left: -20px;
    transform: translate(0, -50%);
    transition: all 0.5s ease;
  }
  .item:hover:before {
    width: 30px;
    top: 50%;
    background-color: ${({ theme }) => theme.colors.blue};
  }
`;
export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

export const ButtonFake = styled.div`
  width: 162px;
  height: 36px;
  background: #eeeeee;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.15s;
  cursor: pointer;
  p {
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: 0em;
    text-align: left;
    color: #868a96;
    margin: 0;
    margin-left: 12px;
  }
  &:hover {
    background: #eeeeee;
  }
  &:active {
    transform: translateY(4px);
  }
`;

export const DemoWrap = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #F3F4FA;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const DemoContent = styled.div`

  h1{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.textColor};
  }

  p{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: ${({ theme }) => theme.colors.gray4};
  }
`
