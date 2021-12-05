import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { user, data } from '../mock-data';

import {
  LeftContainer,
  MenuIcon,
  MessagesContainer,
  MessagesIcon,
  NotificationContainer,
  NotificationIcon,
  NotificationOfMessages,
  NotificationOfNotification,
  RightContainer,
  Title,
  Wrap,
  AccountContainer,
  Avatar,
  Account,
  Address,
  DownArrowIcon,
  TypeOfAddress,
  Tabs,
  Tab
} from './styled';
import { useLocation } from 'react-router';
function Header({ toggle }) {
  const location = useLocation();
  const [title, setTitle] = useState('')
  const CloseMenu = () => {
    toggle();
  };
  useEffect(() => {
    const path = data.find((item) => item.path === location.pathname);
    setTitle(path?.title)
  }, [location.pathname])
  return (
    <Wrap>
      <LeftContainer>
        <MenuIcon onClick={CloseMenu} />
        <Title>{title}</Title>
        <Tabs>
          <Tab active={true}>Dashbroad</Tab>
          <Tab>Management</Tab>
        </Tabs>
      </LeftContainer>
      <RightContainer>
        <NotificationContainer>
          <NotificationIcon />
          <NotificationOfNotification>3</NotificationOfNotification>
        </NotificationContainer>
        <AccountContainer>
              <Avatar>
                <img src={user.avatar} alt="avatar" />
              </Avatar>
              <Account>
                <Address>
                  {user.email}
                  <DownArrowIcon />
                </Address>
                <TypeOfAddress>{user.emailType}</TypeOfAddress>
              </Account>
          </AccountContainer>
      </RightContainer>
    </Wrap>
  );
}

export default Header;

Header.propTypes = {
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
