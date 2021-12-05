import React from 'react';
import DatePicker from '../../DatePicker';
import { ReactComponent as BigUpGreen } from '../../../../images/svg/bigUpGreen.svg';
import { ReactComponent as BigDownRed } from '../../../../images/svg/bigDownRed.svg';
import Customer, { Product1 } from '../Data';
import ProductSell from './ProductSell';
import {
  BotField,
  BotBox,
  HeaderBox,
  HeaderWithIcon,
  OverViewCustomerBox,
  OverViewProductBox,
  OverViewProduct,
  OverViewField,
  NumberOverView,
  NumberCircle,
  BoxDatePicker,
  BotArea,
} from './styled';

const Bot = () => (
  <BotArea>
    <BotField>
      <BotBox>
        <HeaderBox>
          <h1>Tổng quan khách hàng</h1>
          <BoxDatePicker>
            <DatePicker />
          </BoxDatePicker>
        </HeaderBox>
        <OverViewCustomerBox>
          {Customer.map((x) => (
            <OverViewField noBorder={x.noBorder}>
              <h5>{x.title}</h5>
              <NumberOverView>
                <h6>{x.number}</h6>
                <NumberCircle>{x.increase}</NumberCircle>
              </NumberOverView>
            </OverViewField>
          ))}
        </OverViewCustomerBox>
      </BotBox>
      <BotBox margin="0 20px">
        <HeaderBox>
          <HeaderWithIcon>
            <BigUpGreen />
            <h1>TOP 10 Sản phẩm bán chạy nhất</h1>
          </HeaderWithIcon>
        </HeaderBox>
        <OverViewProductBox>
          <OverViewProduct>
            {Product1.map((x) => (
              <ProductSell data={x} />
            ))}
          </OverViewProduct>
        </OverViewProductBox>
      </BotBox>
      <BotBox>
        <HeaderBox>
          <HeaderWithIcon>
            <BigDownRed />
            <h1>TOP 10 Sản phẩm hoàn</h1>
          </HeaderWithIcon>
        </HeaderBox>
        <OverViewProductBox>
          <OverViewProduct>
            {Product1.map((x) => (
              <ProductSell data={x} />
            ))}
          </OverViewProduct>
        </OverViewProductBox>
      </BotBox>
    </BotField>
  </BotArea>
);
export default Bot;
