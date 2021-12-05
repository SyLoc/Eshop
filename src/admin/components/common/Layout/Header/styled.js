import styled from 'styled-components';

import { ReactComponent as Menu } from '@assets/icons/menu1.svg';
import { ReactComponent as Messages } from '@assets/icons/messages.svg';
import { ReactComponent as Notification } from '@assets/icons/notification-1.svg';
import { ReactComponent as DownArrow } from '@assets/icons/dow-arrow.svg';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.padding.pdHeader};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 16px;
  margin-left: 15px;
  cursor: default;
  position: relative;

  &::before{
    position: absolute;
    content: "";
    top: 0;
    right: -24px;
    width: 1px;
    height: 100%;
    background-color: #EDF0F5;
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`

export const Tab = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.active ? '#4361EE' : '#1A2542'};
  padding: 8px 12px;
  position: relative;
  cursor: pointer;

  &::before{
    position: absolute;
    content: "";
    bottom: -8px;
    right: 0;
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.active && '#4361EE'};
  }
`

export const MenuIcon = styled(Menu)`
  cursor: pointer;
`;
export const MessagesIcon = styled(Messages)`
  margin-right: 15px;
`;
export const NotificationIcon = styled(Notification)`
  margin-right: 15px;
`;
export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MessagesContainer = styled.div`
  position: relative;
`;
export const NotificationContainer = styled.div`
  position: relative;
`;
export const NotificationOfMessages = styled.div`
  position: absolute;
  text-align: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  padding: 2px 0 2px 1px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.primaryButtonColor};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: 10%;
  right: 30%;
`;
export const NotificationOfNotification = styled.div`
  position: absolute;
  text-align: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  padding: 2px 0 2px 1px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.primaryButtonColor};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: 10%;
  right: 30%;
`;

export const AccountContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: red;
  img {
    object-fit: cover;
  }
`;

export const Account = styled.div`
  margin-left: 10px;
`;

export const Address = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
  flex: 1;
`;

export const TypeOfAddress = styled.span`
  font-size: 10px;
  color: '#303841';
`;

export const DownArrowIcon = styled(DownArrow)`
  margin-left: 10px;
  cursor: pointer;
`;