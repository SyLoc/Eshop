import React from 'react';
import PropTypes from 'prop-types';
import TriangleBox from './styled';

const Triangle = ({ direction, height, bgColor }) => (
  <TriangleBox direction={direction} height={height} bgColor={bgColor}>
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </TriangleBox>
);
Triangle.propTypes = {
  direction: PropTypes.string,
  height: PropTypes.string,
  bgColor: PropTypes.string,
};
export default Triangle;
