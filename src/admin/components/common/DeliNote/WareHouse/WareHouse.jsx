import React, { useState } from 'react';
import SelectInput from '../../Select';
import { Area, FieldSelect, FeeField } from '../Address/AddressStyled';
import FieldQuantiy from '../ItemCom/FieldQuantity';
import { ReactComponent as RedUp } from '../../../../images/svg/smallUp.svg';
import { ReactComponent as BlackDown } from '../../../../images/svg/blackDown.svg';
import { ReactComponent as Close } from '../../../../images/svg/close.svg';
import InputText from '../../../Form/Input/inputText';
import Button from '../../Button';
import DataProduct, { Post } from '../data';
import Product from '../ItemCom/ProductSelect';
import {
  SelectDeliField,
  LabelFakeSelect,
  FakePlaceHolder,
  SelectDeli,
  FakeSelect,
  FakeSelectOption,
  FakeOptionList,
  FakeField,
  FakeFieldList,
  ChosenProductList,
  ChosenProduct,
} from './WareHouseStyled';

const WareHouseForm = () => {
  const [open, setOpen] = useState(false);
  const [chosen, setChosen] = useState([]);
  const [realChosen, setRealChosen] = useState([]);
  const [showChosen, setShowChosen] = useState(false);
  const addProduct = (x) => {
    setChosen((chosen) => [...chosen, x]);
  };
  const removeProduct = (x) => {
    const index = chosen.indexOf(x);
    setChosen((chosen) => [...chosen.slice(0, index), ...chosen.slice(index + 1)]);
  };
  const removeRealChosen = (x) => {
    const index = realChosen.indexOf(x);
    setRealChosen((realChosen) => [...realChosen.slice(0, index), ...realChosen.slice(index + 1)]);
    const index1 = chosen.indexOf(x);
    setChosen((chosen) => [...chosen.slice(0, index1), ...chosen.slice(index1 + 1)]);
  };
  const handleFakeSelect = () => {
    setOpen(false);
    setRealChosen(chosen);
    if (chosen.length > 0) {
      setShowChosen(true);
    }
  };
  const handleOpen = () => {
    if (open) {
      setOpen(false);
      setShowChosen(true);
    }
    if (!open) {
      setOpen(true);
      setShowChosen(false);
    }
  };
  const filterDataProduct = DataProduct.filter((x) => !realChosen.includes(x.name));
  return (
    <Area>
      <FieldSelect marginTop="0">
        <SelectInput label="Từ kho" placeholder="Chọn Kho" />
      </FieldSelect>
      <FieldSelect marginTop="20px">
        <SelectInput label="Tới kho" placeholder="Chọn Kho" />
      </FieldSelect>
      <SelectDeliField>
        <LabelFakeSelect>Sản phẩm xuất</LabelFakeSelect>
        <SelectDeli>
          <FakeSelect onClick={handleOpen}>
            <FakePlaceHolder>Chọn sản phẩm</FakePlaceHolder>
            {!open ? <BlackDown /> : <RedUp />}
          </FakeSelect>
          {open ? (
            <FakeSelectOption>
              <FakeField>
                <InputText isSearch width="100%" height="40px" placeholder="Nhập tên sản phẩm" />
              </FakeField>
              <FakeFieldList>
                <FakeOptionList>
                  {filterDataProduct.map((x) => (
                    <Product
                      name={x.name}
                      inWare={x.inWare}
                      addProduct={(x) => addProduct(x)}
                      outWare={x.outWare}
                      removeProduct={(x) => removeProduct(x)}
                    />
                  ))}
                </FakeOptionList>
              </FakeFieldList>
              <FakeField>
                <Button
                  buttonType="primary"
                  onClick={handleFakeSelect}
                  borderRadius="30px"
                  width="100%"
                  padding="14px 0"
                >
                  THÊM SẢN PHẨM
                </Button>
              </FakeField>
            </FakeSelectOption>
          ) : (
            ''
          )}
        </SelectDeli>
      </SelectDeliField>
      {showChosen ? (
        <ChosenProductList>
          {realChosen.map((x) => (
            <ChosenProduct>
              <p>
                {realChosen.indexOf(x) + 1}.{x}
              </p>
              <Close onClick={() => removeRealChosen(x)} />
            </ChosenProduct>
          ))}
        </ChosenProductList>
      ) : (
        ''
      )}
      <FieldQuantiy />
      <FieldSelect marginTop="20px">
        <SelectInput placeholder="Chọn hình thức chuyển hàng" label="Hình thức chuyển hàng" />
      </FieldSelect>
      <FieldSelect marginTop="20px">
        <SelectInput
          options={Post}
          placeholder="Chọn đơn vị vận chuyển"
          label="Đơn vị vận chuyển"
        />
      </FieldSelect>
      <FeeField>
        <p>Phí ship ước tính:</p>
        <h6>16000</h6>
        <p>đ</p>
      </FeeField>
    </Area>
  );
};
export default WareHouseForm;
