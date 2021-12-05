import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ButtonPost from '../Page1/ButtonPost';
import { ReactComponent as SmallPlusRound } from '../../../../images/svg/SmallPlusRound.svg';
import Radio from '../../Radio';
import Button from '../../Button';
import IconOfButton from '../../Button/Icon';
import { ReactComponent as Car } from '../../../../images/svg/Car.svg';
import { ReactComponent as Save } from '../../../../images/svg/Save.svg';
import { ReactComponent as Print } from '../../../../images/svg/Print.svg';
import { ReactComponent as RemoveIcon } from '../../../../images/svg/RemoveIcon.svg';
import { ReactComponent as BlackLeft } from '../../../../images/svg/BlackLeft.svg';
import {
  PostOrderPage2,
  ButtonFooterPost,
  ButtonArea,
  RadioArea,
  BodyPage2,
  BackPage,
  BackArea,
  RadioButtonGroup,
  RadioGroup,
  RadioGroupItem,
  ButtonGroup,
  TableForm,
  TittleTable,
  TittleItem,
  PostField,
} from './styled';
import PostFieldInfo from './PostFieldInfo';

const Page2 = ({ setPage }) => {
  const [checked, setChecked] = useState(false);
  const [number, setNumber] = useState([]);
  const tableRef = useRef();
  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollTop = tableRef.current.scrollHeight;
    }
  }, [number]);

  return (
    <PostOrderPage2>
      <BodyPage2>
        <BackPage>
          <BackArea onClick={() => setPage('page1')}>
            <BlackLeft />
            <h1>Mẫu tạo sẵn</h1>
          </BackArea>
        </BackPage>
        <RadioButtonGroup>
          <RadioGroup>
            <RadioGroupItem>
              <Radio />
              <h6>Chọn tất cả(6)</h6>
            </RadioGroupItem>
            <RadioGroupItem>
              <Radio />
              <h6>Sản phẩm lỗi(4)</h6>
            </RadioGroupItem>
            <RadioGroupItem>
              <Radio checked={checked} onClick={() => setChecked(!checked)} />
              <h6>Hợp lệ(2)</h6>
            </RadioGroupItem>
          </RadioGroup>
          <ButtonGroup>
            <Button buttonType="secondary" padding="10px 20px" borderRadius="20px">
              LỌC KHÁCH HÀNG
            </Button>
            <Button buttonType="secondary" padding="10px 20px" borderRadius="20px">
              THIẾT LẬP SẴN
            </Button>
          </ButtonGroup>
        </RadioButtonGroup>
        <TableForm ref={tableRef}>
          <TittleTable>
            {checked ? <TittleItem width="2%" height="100%" minWidth="33px" /> : ''}
            <TittleItem width="2%" height="100%" minWidth="33px">
              <p>STT</p>
            </TittleItem>
            <TittleItem width="5%" height="100%" minWidth="78px">
              <p>Mã ĐH Riêng</p>
            </TittleItem>
            <TittleItem width={checked ? '7%' : '9%'} height="100%" minWidth="154px">
              <p>Tên khách hàng</p>
            </TittleItem>
            <TittleItem width="6%" height="100%" minWidth="104px">
              <p>SĐT</p>
            </TittleItem>
            <TittleItem width="17%" height="100%" minWidth="290px">
              <p>Địa chỉ</p>
            </TittleItem>
            <TittleItem width="11%" height="100%" minWidth="180px">
              <p>Tên Sản phẩm</p>
            </TittleItem>
            <TittleItem width="3%" height="100%" minWidth="44px">
              <p>Số lượng</p>
            </TittleItem>
            <TittleItem width="3%" height="100%" minWidth="50px">
              <p>Khối lượng (kg)</p>
            </TittleItem>
            <TittleItem width="5%" height="100%" minWidth="85px">
              <p>Giá trị hàng</p>
            </TittleItem>
            <TittleItem width="5%" height="100%" minWidth="85px">
              <p>Tiền CoD</p>
            </TittleItem>
            <TittleItem width="10%" height="100%" minWidth="170px">
              <p>Ghi chú</p>
            </TittleItem>
            <TittleItem width="7%" height="100%" minWidth="108px">
              <p>Kho hàng</p>
            </TittleItem>
            <TittleItem width="11%" height="100%" minWidth="190px">
              <p>Đơn vị vận chuyển</p>
            </TittleItem>
            <TittleItem width="6%" height="100%" minWidth="87px">
              <p>Trả ship</p>
            </TittleItem>
          </TittleTable>
          <PostField>
            {number.map((x) => (
              <PostFieldInfo number={x} checked={checked} />
            ))}
          </PostField>
        </TableForm>
      </BodyPage2>
      <ButtonPost
        width="100%"
        height="50px"
        Icon={SmallPlusRound}
        content="THÊM ĐƠN HÀNG"
        fontSize="16px"
        onClick={() => setNumber((number) => [...number, number.length + 1])}
      />
      {checked ? (
        <ButtonFooterPost>
          <ButtonArea>
            <Button buttonType="primary" padding="10px 15px" borderRadius="20px">
              <IconOfButton Icon={Car} left>
                YÊU CẦU GIAO HÀNG
              </IconOfButton>
            </Button>
            <Button buttonType="secondary" padding="10px 15px" borderRadius="20px">
              <IconOfButton Icon={Save} left>
                LƯU ĐƠN
              </IconOfButton>
            </Button>
            <Button buttonType="secondary" padding="10px 15px" borderRadius="20px">
              <IconOfButton Icon={Print} left>
                IN ĐƠN
              </IconOfButton>
            </Button>
            <Button buttonType="secondary" padding="10px 15px" borderRadius="20px">
              <IconOfButton Icon={RemoveIcon} left>
                XÓA ĐƠN
              </IconOfButton>
            </Button>
          </ButtonArea>
          <RadioArea>
            <Radio />
            <p>Tôi đã đọc và đồng ý với</p>
            <h5>Điều khoản và quy định</h5>
            <p>của</p>
            <h6>Boxgo</h6>
          </RadioArea>
        </ButtonFooterPost>
      ) : (
        ''
      )}
    </PostOrderPage2>
  );
};
Page2.propTypes = {
  setPage: PropTypes.func,
};
export default Page2;
