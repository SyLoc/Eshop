import React from 'react';
import PropTypes from 'prop-types';
import { user } from '../mock-data';

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
  TypeOfAddress
} from './styled';
function Header({ toggle, title }) {
  const CloseMenu = () => {
    toggle();
  };
  return (
    <Wrap>
      <LeftContainer>
        <MenuIcon onClick={CloseMenu} />
        <Title>{title}</Title>
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
