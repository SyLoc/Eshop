import React from 'react';
import InputText from '../../../Form/Input/inputText';
import SelectInput from '../../Select';
import FieldQuantiy from '../ItemCom/FieldQuantity';
import { Area, FieldSelect, FeeField } from './AddressStyled.js';

const AddressForm = () => (
  <Area>
    <FieldSelect marginTop="0">
      <SelectInput label="Sản phẩm xuất" />
    </FieldSelect>
    <FieldQuantiy />
    <FieldSelect marginTop="20px">
      <SelectInput label="Hình thức chuyển hàng" />
    </FieldSelect>
    <FieldSelect marginTop="20px">
      <SelectInput label="Đơn vị vận chuyển" />
    </FieldSelect>
    <FeeField>
      <p>Phí ship ước tính:</p>
      <h6>16000</h6>
      <p>đ</p>
    </FeeField>
    <InputText
      marginTop="20px"
      width="100%"
      height="50px"
      label="Người nhận"
      placeholder="Nhập tên người nhận"
    />
    <InputText
      width="100%"
      height="50px"
      label="Số điện thoại"
      placeholder="Nhập số điện thoại"
      marginTop="20px"
    />
    <InputText
      width="100%"
      height="50px"
      label="Địa chỉ nhận hàng"
      placeholder="Nhập Địa chỉ nhận hàng"
      marginTop="20px"
    />
  </Area>
);
export default AddressForm;
