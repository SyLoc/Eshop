import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

function IconOfButton({ Icon, children, left, right }) {
  return (
    <Container>
      {left && <Icon style={{ marginRight: '5px' }} />}

      <span>{children}</span>

      {right && <Icon style={{ marginLeft: '5px' }} />}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default IconOfButton;

IconOfButton.propTypes = {
  Icon: PropTypes.any.isRequired,
  children: PropTypes.string.isRequired,
  left: PropTypes.bool,
  right: PropTypes.bool,
};
