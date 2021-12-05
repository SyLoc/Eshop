import React from 'react';
import styled from 'styled-components';
import InputText from '../../../Form/Input/inputText';
import SelectInput from '../../Select';

const FieldBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const BoxSelect = styled.div`
  width: 32%;
`;
const FieldQuantiy = () => (
  <FieldBox>
    <BoxSelect>
      <InputText width="100%" height="50px" label="Số lượng" placeholder="Nhập số lượng" />
    </BoxSelect>
    <BoxSelect>
      <InputText width="100%" height="50px" label="Khối lượng x Số lượng" />
    </BoxSelect>
    <BoxSelect>
      <SelectInput label="Sản phẩm xuất" />
    </BoxSelect>
  </FieldBox>
);
export default FieldQuantiy;
