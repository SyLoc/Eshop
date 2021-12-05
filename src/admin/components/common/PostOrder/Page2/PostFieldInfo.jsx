import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import IconOfButton from '../../Button/Icon';
import { TittleItem } from './styled';
import InputText from '../../../Form/Input/inputText';
import Radio from '../../Radio';
import SelectInput from '../../Select';
import Button from '../../Button';
import { ReactComponent as SmallPlusRound } from '../../../../images/svg/SmallPlusRound.svg';
import { ReactComponent as DoubleArrow } from '../../../../images/svg/DoubleArrow.svg';
import { ReactComponent as CloseRound } from '../../../../images/svg/CloseRound.svg';

const PostFieldWrap = styled.div`
  min-width: auto;
  display: flex;
  align-items: center;
  border-left: 1px solid #dce0ea;
  border-bottom: 1px solid #dce0ea;
  z-index: 0;
`;
const SelectGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const SelectGroup2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
const PostFieldInfo = ({ checked, number }) => {
  const a = 1;
  return (
    <PostFieldWrap>
      {checked ? (
        <TittleItem width="2%" height="124px" minWidth="33px">
          <Radio checked={checked} />
        </TittleItem>
      ) : (
        ''
      )}
      <TittleItem width="2%" height="124px" space minWidth="33px">
        <DoubleArrow />
        <p>{number}</p>
        <CloseRound />
      </TittleItem>
      <TittleItem width="5%" height="124px" minWidth="78px">
        <InputText width="100%" table />
      </TittleItem>
      <TittleItem width={checked ? '7%' : '9%'} height="124px" minWidth="154px">
        <InputText width="100%" placeholder="Tên khách hàng" table />
      </TittleItem>
      <TittleItem width="6%" height="124px" minWidth="104px">
        <InputText width="100%" placeholder="SĐT" table />
      </TittleItem>
      <TittleItem width="17%" height="124px" minWidth="290px">
        <InputText width="100%" placeholder="Nhập địa chỉ" table />
        <SelectGroup>
          <SelectInput label=" " placeholder="Chọn" height="24px" width="129px" fontSize="11px" />
          <SelectInput label=" " placeholder="Chọn" height="24px" width="129px" fontSize="11px" />
        </SelectGroup>
        <SelectGroup>
          <SelectInput label=" " placeholder="Chọn" height="24px" width="129px" fontSize="11px" />
          <SelectInput label=" " placeholder="Chọn" height="24px" width="129px" fontSize="11px" />
        </SelectGroup>
      </TittleItem>
      <TittleItem width="11%" height="124px" minWidth="180px">
        <InputText width="100%" marginBot="5px" placeholder="Chọn sản phẩm" table />
        <SelectGroup2>
          <Button buttonType="secondary" padding="5px 10px" borderRadius="20px">
            <IconOfButton Icon={SmallPlusRound} left>
              THÊM SP
            </IconOfButton>
          </Button>
        </SelectGroup2>
      </TittleItem>
      <TittleItem width="3%" height="124px" minWidth="44px">
        <InputText width="100%" table />
      </TittleItem>
      <TittleItem width="3%" height="124px" minWidth="50px">
        <InputText width="100%" table />
      </TittleItem>
      <TittleItem width="5%" height="124px" minWidth="85px">
        <InputText width="100%" table />
      </TittleItem>
      <TittleItem width="5%" height="124px" minWidth="85px">
        <InputText width="100%" table />
      </TittleItem>
      <TittleItem width="10%" height="124px" minWidth="170px">
        <InputText width="100%" placeholder="Ghi chú" table />
        <SelectGroup2>
          <SelectInput
            label=" "
            placeholder="Chọn sẵn"
            height="24px"
            width="98px"
            fontSize="11px"
          />
        </SelectGroup2>
      </TittleItem>
      <TittleItem width="7%" height="124px" minWidth="108px">
        <SelectInput label=" " placeholder="Chọn kho" height="24px" width="92px" fontSize="11px" />
      </TittleItem>
      <TittleItem width="11%" height="124px" minWidth="190px">
        <SelectInput
          label=" "
          placeholder="Chọn đơn vị giao"
          height="24px"
          width="160px"
          fontSize="11px"
        />
      </TittleItem>
      <TittleItem width="6%" height="124px" minWidth="87px">
        <SelectInput label=" " placeholder="Chọn" height="24px" width="77px" fontSize="11px" />
      </TittleItem>
    </PostFieldWrap>
  );
};
PostFieldInfo.propTypes = {
  checked: PropTypes.bool,
  number: PropTypes.number,
};
export default PostFieldInfo;
