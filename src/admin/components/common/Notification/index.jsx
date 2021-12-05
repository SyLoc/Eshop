import { notification } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ReactComponent as CloseIcon } from '../../../assets/icons/close.svg';
import { ReactComponent as WarningIcon } from '../../../assets/icons/warning.svg';
import { ReactComponent as Success } from '../../../assets/icons/success.svg';
import { ReactComponent as NotificationIcon } from '../../../assets/icons/notification.svg';

const Notification = ({ error, success, notificationCheck, children }) => {
  const openNotification = () => {
    notification.open({
      description: (
        <WrapDesc>
          {error && <WarningIcon />}
          {success && <Success />}
          {notificationCheck && <NotificationIcon />}
          <Description>
            {error && <span style={{ color: '#EB5757' }}>Error: Message Text</span>}
            {success && <span style={{ color: '#07A717' }}>Success: Cuccess Text</span>}
            {notificationCheck && (
              <span style={{ color: '#F8982A' }}>Notification: Notification Text</span>
            )}
          </Description>
        </WrapDesc>
      ),
      style: {
        width: 579,
        padding: '2px 16px 12px 16px',
        background: `${
          error ? '#FFEDED' : (success && '#EDF7EE') || (notificationCheck && '#F9F2EA')
        }`,
      },
      duration: 3,
      closeIcon: (
        <div>
          <CloseIcon style={{ position: 'absolute', top: '-2px', right: '0' }} />
        </div>
      ),
    });
  };
  return <Content onClick={openNotification}>{children}</Content>;
};

const Content = styled.div`
  width: auto;
  height: auto;
  color: white;
`;
const WrapDesc = styled.div`
  display: flex;
  align-items: center;
`;

const Description = styled.span`
  margin-left: 15px;
  font-size: 14px;
  font-weight: 500;
`;

export default Notification;

Notification.propTypes = {
  error: PropTypes.bool,
  success: PropTypes.bool,
  notificationCheck: PropTypes.bool,
  children: PropTypes.element.isRequired,
};
