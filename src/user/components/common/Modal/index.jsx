import React from 'react';
import PropTypes from 'prop-types';
import { CustomModal } from './styled';

const Modal = ({isheader = true, title, children, visible, onCancel, footer = null, isBack, ...rest }) => (
  <div>
    <CustomModal
      isheader={isheader}
      isBack={isBack}
      title={title}
      visible={visible}
      onCancel={onCancel}
      footer={footer}
      {...rest}
    >
      {children}
    </CustomModal>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  footer: PropTypes.array,
  isBack: PropTypes.bool,
  isheader: PropTypes.bool,
};

export default Modal;
