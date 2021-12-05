import React from 'react';
import PropTypes from 'prop-types';
import { ButtonDiv, ButtonInner } from './styled';

const ButtonPost = ({ Icon, width, height, content, margin, onClick, fontSize }) => (
  <ButtonDiv width={width} height={height} margin={margin}>
    <ButtonInner onClick={onClick} fontSize={fontSize}>
      <Icon />
      <h1>{content}</h1>
    </ButtonInner>
  </ButtonDiv>
);
ButtonPost.propTypes = {
  Icon: PropTypes.shape,
  width: PropTypes.string,
  height: PropTypes.string,
  content: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  fontSize: PropTypes.string,
};
export default ButtonPost;
