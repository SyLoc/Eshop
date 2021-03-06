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
        <SelectInput label="T??? kho" placeholder="Ch???n Kho" />
      </FieldSelect>
      <FieldSelect marginTop="20px">
        <SelectInput label="T???i kho" placeholder="Ch???n Kho" />
      </FieldSelect>
      <SelectDeliField>
        <LabelFakeSelect>S???n ph???m xu???t</LabelFakeSelect>
        <SelectDeli>
          <FakeSelect onClick={handleOpen}>
            <FakePlaceHolder>Ch???n s???n ph???m</FakePlaceHolder>
            {!open ? <BlackDown /> : <RedUp />}
          </FakeSelect>
          {open ? (
            <FakeSelectOption>
              <FakeField>
                <InputText isSearch width="100%" height="40px" placeholder="Nh???p t??n s???n ph???m" />
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
                  TH??M S???N PH???M
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
        <SelectInput placeholder="Ch???n h??nh th???c chuy???n h??ng" label="H??nh th???c chuy???n h??ng" />
      </FieldSelect>
      <FieldSelect marginTop="20px">
        <SelectInput
          options={Post}
          placeholder="Ch???n ????n v??? v???n chuy???n"
          label="????n v??? v???n chuy???n"
        />
      </FieldSelect>
      <FeeField>
        <p>Ph?? ship ?????c t??nh:</p>
        <h6>16000</h6>
        <p>??</p>
      </FeeField>
    </Area>
  );
};
export default WareHouseForm;
