import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Radio from '../../Radio';

const ProductField = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #dce0ea;
  padding-left: 7px;
`;
const ProductContent = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h6 {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #303841;
  }
`;
const ProductStatus = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  p {
    color: #303841;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-align: left;
    margin-right: 3px;
  }
`;
const Product = ({ name, inWare, outWare, addProduct, removeProduct }) => {
  const [checked, setChecked] = useState(false);
  const handleChecked = () => {
    setChecked(!checked);
    if (!checked) {
      addProduct(name);
    }
    if (checked) {
      removeProduct(name);
    }
  };
  return (
    <ProductField>
      <Radio checked={checked} typeRadio="secondary" onChecked={handleChecked} />
      <ProductContent>
        <h6>{name}</h6>
        <ProductStatus>
          <p>Tồn:</p>
          <p>{inWare} SP</p>
          <p>| Đang chuyển:</p>
          <p>{outWare} SP</p>
        </ProductStatus>
      </ProductContent>
    </ProductField>
  );
};
Product.propTypes = {
  name: PropTypes.string,
  inWare: PropTypes.number,
  outWare: PropTypes.number,
  addProduct: PropTypes.func,
  removeProduct: PropTypes.func,
};
export default Product;
