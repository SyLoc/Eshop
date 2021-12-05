import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as PlusRound } from '../../../../images/svg/PlusRound.svg';
import { ReactComponent as RedUpload } from '../../../../images/svg/RedUpload.svg';
import GHN from '../../../../images/png/ghn.png';
import GHTK from '../../../../images/png/ghtk.png';
import FormOrder from './FormOrder';
import { PostOrderPage1, ButtonGroup, TitleGroup } from './styled';
import ButtonPost from './ButtonPost';

const Page1 = ({ setPage }) => (
  <PostOrderPage1>
    <ButtonGroup>
      <ButtonPost
        Icon={PlusRound}
        width="calc(100%/3)"
        height="115px"
        content="Tạo đơn lẻ"
        fontSize="28px"
      />
      <ButtonPost
        Icon={PlusRound}
        margin="0 20px"
        width="calc(100%/3)"
        height="115px"
        content="Tạo mẫu đăng"
        onClick={() => setPage('page2')}
        fontSize="28px"
      />
      <ButtonPost
        Icon={RedUpload}
        width="calc(100%/3)"
        height="115px"
        content="Tải đơn từ Excel"
        fontSize="28px"
      />
    </ButtonGroup>
    <TitleGroup>
      <h1>Mẫu đơn đã lưu</h1>
    </TitleGroup>
    <FormOrder
      tittle="Mẫu tạo sẵn"
      img={GHTK}
      content="Giao hàng tiết kiệm"
      mainContent="Khách trả ship •"
    />
    <FormOrder
      tittle="Tên mẫu đăng 1"
      img={GHN}
      content="Giao hàng nhanh"
      mainContent="Page: Khăn choàng thổ cẩm • Bài viết: Tổng hợp mẫu khăn cho mùa hè sôi động • SP: Khăn choàng thổ cẩm • Khách trả ship"
    />
  </PostOrderPage1>
);
Page1.propTypes = {
  setPage: PropTypes.func,
};
export default Page1;
