import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as Barcode } from '../../../../images/svg/barcode.svg';

const FinishForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #303841;
    margin: 5px 0;
  }
  h1 {
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #d72323;
    margin-bottom: 30px;
  }
  h2 {
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #303841;
  }
`;

const FinishDeli = ({ code }) => (
  <FinishForm>
    <Barcode />
    <p>Mã Bill</p>
    <h1>{code}</h1>
    <h2>
      Chúc mừng, bạn đã tạo phiếu xuất thành công! Hàng sẽ được chuyển tới bạn trong vòng 2-3 ngày
      làm việc
    </h2>
  </FinishForm>
);
FinishDeli.propTypes = {
  code: PropTypes.string,
};

export default FinishDeli;
