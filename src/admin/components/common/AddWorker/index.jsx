import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import Button from '../Button';
import DatePicker from '../DatePicker';
import InputText from '../../Form/Input/inputText';
import { ReactComponent as BlackPlus } from '../../../images/svg/blackPlus.svg';
import { ReactComponent as Camera } from '../../../images/svg/camera.svg';
import { ReactComponent as Avatar } from '../../../images/svg/avatar.svg';
import { ReactComponent as RedPlus } from '../../../images/svg/redPlus.svg';
import Radio from '../Radio';
import WorkField from './WorkField';
import IconOfButton from '../Button/Icon';
import {
  PicField,
  RedHeader,
  PicGroup,
  PicItem,
  BlackHeader,
  PicBox,
  InfoGroup2Son,
  InfoGroup1,
  InfoGroup2,
  DateGroup,
  ImgGroup,
  InputGroup,
  AvatarArea,
  AvatarImg,
  CameraImg,
  Footer,
  Authority,
  BoxRadio,
  Assign,
  DayStart,
  WorkTime,
} from './styled';

const AddWorker = ({ visible, onCancel }) => (
  <Modal visible={visible} title="Thêm nhân viên" onCancel={onCancel} footer={[]} width="780px">
    <PicField>
      <RedHeader>Thông tin chung</RedHeader>
      <PicGroup>
        <InfoGroup1>
          <ImgGroup>
            <AvatarArea>
              <AvatarImg>
                <Avatar />
              </AvatarImg>
              <CameraImg>
                <Camera />
              </CameraImg>
            </AvatarArea>
            <h1>Ảnh đại diện</h1>
          </ImgGroup>
          <InputGroup>
            <InputText
              placeholder="Nhập tên nhân viên"
              label="Tên nhân viên *"
              width="100%"
              height="52px"
              marginBot="12px"
            />
            <InputText placeholder="Nhập sđt" label="SĐT" width="100%" height="52px" />
          </InputGroup>
        </InfoGroup1>
        <InfoGroup2>
          <InfoGroup2Son>
            <InputText placeholder="Nhập mật khẩu" label="Mật khẩu *" width="100%" height="52px" />
            <DateGroup>
              <h6>Ngày sinh</h6>
              <div>
                <DatePicker />
              </div>
            </DateGroup>
          </InfoGroup2Son>
          <InputText placeholder="Nhập địa chỉ" label="Địa chỉ" width="100%" height="52px" />
        </InfoGroup2>
      </PicGroup>
    </PicField>
    <PicField>
      <RedHeader>Hồ sơ nhân viên</RedHeader>
      <PicGroup>
        <PicItem>
          <BlackHeader>Chứng minh thư</BlackHeader>
          <PicBox>
            <BlackPlus />
            <h1>MẶT TRƯỚC</h1>
          </PicBox>
        </PicItem>
        <PicItem>
          <PicBox>
            <BlackPlus />
            <h1>MẶT SAU</h1>
          </PicBox>
        </PicItem>
        <PicItem>
          <BlackHeader>Sơ yếu lý lịch</BlackHeader>
          <PicBox>
            <BlackPlus />
            <h1>THÊM ẢNH</h1>
          </PicBox>
        </PicItem>
        <PicItem>
          <BlackHeader>Hồ sơ</BlackHeader>
          <PicBox>
            <BlackPlus />
            <h1>THÊM ẢNH</h1>
          </PicBox>
        </PicItem>
      </PicGroup>
    </PicField>
    <Footer>
      <Assign>
        <RedHeader>Phân công công việc</RedHeader>
        <DayStart>
          <BlackHeader>Ngày bắt đầu</BlackHeader>
          <DatePicker />
        </DayStart>
        <WorkTime>
          <BlackHeader>Thời gian làm việc</BlackHeader>
          <WorkField />
          <WorkField />
        </WorkTime>
        <Button buttonType="secondary" size="12px" width="140px" borderRadius="30px" padding="9px">
          <IconOfButton Icon={RedPlus} left>
            THÊM THỜI GIAN
          </IconOfButton>
        </Button>
      </Assign>
      <Authority>
        <BlackHeader>Chức năng được phép sử dụng</BlackHeader>
        <BoxRadio>
          <Radio typeRadio="secondary" />
          <p>Tổng quan Shop</p>
        </BoxRadio>
        <BoxRadio>
          <Radio typeRadio="secondary" />
          <p>Dòng tiền</p>
        </BoxRadio>
        <BoxRadio>
          <Radio typeRadio="secondary" />
          <p>Sản phẩm</p>
        </BoxRadio>
        <BoxRadio>
          <Radio typeRadio="secondary" />
          <p>Đơn hàng</p>
        </BoxRadio>
        <BoxRadio>
          <Radio typeRadio="secondary" />
          <p>Đăng đơn</p>
        </BoxRadio>
        <BoxRadio>
          <Radio typeRadio="secondary" />
          <p>Kho</p>
        </BoxRadio>
        <BoxRadio>
          <Radio typeRadio="secondary" />
          <p>Nhân viên</p>
        </BoxRadio>
        <BoxRadio>
          <Radio typeRadio="secondary" />
          <p>Khách hàng</p>
        </BoxRadio>
        <BoxRadio>
          <Radio typeRadio="secondary" />
          <p>Chats</p>
        </BoxRadio>
      </Authority>
    </Footer>
    <Button buttonType="primary" width="100%" borderRadius="30px" padding="14px 0">
      THÊM NHÂN VIÊN
    </Button>
  </Modal>
);
AddWorker.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
};
export default AddWorker;
