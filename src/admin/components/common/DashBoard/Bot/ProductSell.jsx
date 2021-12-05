import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../../Button';

const ProductItem = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 17px;
  margin-bottom: ${(props) => (props.noMargin ? '' : '17px')};
  border-bottom: 1px solid #dce0ea;
`;
const ProductItemSon = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 60px;
    width: 60px;
    border-radius: 5px;
    object-fit: cover;
    margin-right: 16px;
  }
`;
const ProductItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  div {
    display: flex;
  }
`;
const NameProduct = styled.h2`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: left;
`;
const PProduct = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-align: left;
  margin-right: 3px;
`;
const MainContent = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.02em;
  text-align: left;
  color: ${(props) => props.textColor};
  margin-right: 3px;
`;
const ProductSell = ({ data }) => (
  <ProductItem noMargin={data.noMargin}>
    <ProductItemSon>
      <img src={data.img} alt="Loading" />
      <ProductItemContent>
        <NameProduct>{data.name}</NameProduct>
        <div>
          <MainContent textColor="#D72323">{data.price}</MainContent>
          <PProduct>vnđ</PProduct>
        </div>
        <div>
          <PProduct>Mã sản phẩm:</PProduct>
          <MainContent textColor="#303841">{data.code}</MainContent>
        </div>
      </ProductItemContent>
    </ProductItemSon>
    <Button buttonType="gray" padding="6px 10px" borderRadius="20px">
      Xem sản phẩm
    </Button>
  </ProductItem>
);
ProductSell.propTypes = {
  data: PropTypes.object,
};
export default ProductSell;
