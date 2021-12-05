import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import Triangle from './Triangle';
import {
  CardBlockBox,
  CardBlockContent,
  CardBlockHeader,
  CardBlockBody,
  ItemHeader,
  WarningBox,
  ItemBody,
  Content,
  Pstatus,
  Pheader,
  FieldContent,
  ButtonGroup,
} from './styled';
import { ReactComponent as Warning } from '../../../images/svg/warning.svg';
import Label from '../../Form/label/index';
import GHTK from '../../../images/png/ghtk.png';
import GHN from '../../../images/png/ghn.png';
import Viettel from '../../../images/png/viettel.png';
import VNPT from '../../../images/png/vnpt.png';
import TextCopy from '../TextCopy';
import Button from '../Button';
import IconOfButton from '../Button/Icon';
import { ReactComponent as Chat } from '../../../images/svg/chat.svg';

const CardBlock = ({
  height,
  width,
  bgColor,
  marginTop,
  marginBot,
  code,
  product,
  quantity,
  cod,
  fee,
  name,
  phone,
  address,
  postman,
  status,
  date,
}) => {
  const postOffice = [
    { id: 'GHN', content: 'Giao hàng nhanh', img: GHN },
    { id: 'GHTK', content: 'Giao hàng tiết kiệm', img: GHTK },
    { id: 'Viettel', content: 'Viettel Post ', img: Viettel },
    { id: 'VNPT', content: 'VNPT Post', img: VNPT },
  ];
  const shipStatus = [
    { status: 'Chưa tiếp nhận', work: 'Dự kiến nhận hàng:', bgColor: '#D72323' },
    { status: 'Đã tiếp nhận', work: 'Dự kiến giao ngày:', bgColor: '#1748C6' },
    { status: 'Đã lấy hàng', work: 'Dự kiến giao ngày:', bgColor: '#0884DD' },
    { status: 'Đang giao hàng', work: 'Dự kiến nhận hàng:', bgColor: '#EE8B17' },
    { status: 'Đã giao hàng', work: 'Đã giao ngày:', bgColor: '#07A717' },
    { status: 'Đã đối soát', work: 'Đã giao ngày:', bgColor: '#00790C' },
    { status: 'Kiện vấn đề', work: 'Dự kiến hoàn ngày:', bgColor: '#B00F0F' },
    { status: 'Đang hoàn hàng', work: 'Dự kiến hoàn ngày:', bgColor: '#7A0404' },
    { status: 'Đã hoàn hàng', work: 'Hoàn hàng ngày:', bgColor: '#450000' },
    { status: 'Đang cập nhật', work: 'Dự kiến xong ngày:', bgColor: '#158383' },
  ];
  const choosePostMan = postOffice.find((x) => x.id === postman);
  const chooseShipStatus = shipStatus.find((x) => x.status === status);
  const codDot = new Intl.NumberFormat('de-DE').format(cod);
  const feeDot = new Intl.NumberFormat('de-DE').format(fee);
  return (
    <CardBlockBox marginTop={marginTop} marginBot={marginBot}>
      <Triangle direction="false" height={height} bgColor={bgColor} />
      <CardBlockContent height={height} width={width} bgColor={bgColor}>
        <CardBlockHeader>
          <ItemHeader width="24%">
            {code ? (
              <TextCopy width="226px" height="30px" content={code} bgColor="#6C757B" />
            ) : (
              <Spin />
            )}
          </ItemHeader>
          <ItemHeader width="20%">
            <Pheader>Người nhận</Pheader>
          </ItemHeader>
          <ItemHeader width="15%">
            <Pheader>Đơn vị vận chuyển</Pheader>
          </ItemHeader>
          <ItemHeader width="10%">
            <Pheader>Trạng thái</Pheader>
          </ItemHeader>
          <ItemHeader width="22%">
            <Pheader>Thao tác</Pheader>
            <WarningBox>
              <Warning />
              <Pheader>Báo lỗi</Pheader>
            </WarningBox>
          </ItemHeader>
        </CardBlockHeader>
        <CardBlockBody>
          <ItemBody width="24%">
            <Content fontWeight="500" textColor="#303841">
              {product || <Spin />}
            </Content>
            <FieldContent>
              <Content fontWeight="400" textColor="#303841">
                Số lượng:
              </Content>
              <Content fontWeight="500" textColor="#303841">
                {quantity || <Spin />}
              </Content>
            </FieldContent>
            <FieldContent>
              <FieldContent>
                <Content fontWeight="400" textColor="#303841">
                  CoD:
                </Content>
                <Content fontWeight="500" textColor="#303841">
                  {cod ? `${codDot} đ` : <Spin />}
                </Content>
              </FieldContent>
              <FieldContent>
                <Content fontWeight="400" textColor="#303841">
                  | Phí ship:
                </Content>
                <Content fontWeight="500" textColor="#303841">
                  {fee ? `${feeDot} đ` : <Spin />}
                </Content>
              </FieldContent>
            </FieldContent>
          </ItemBody>
          <ItemBody width="20%">
            <Content fontWeight="500" textColor="#303841">
              {name || <Spin />} / {phone || <Spin />}
            </Content>
            <Content fontWeight="400" textColor="#868A96">
              {address || <Spin />}
            </Content>
          </ItemBody>
          <ItemBody width="15%">
            {choosePostMan ? (
              <Label
                content={choosePostMan.content}
                img={choosePostMan.img}
                width="100%"
                height="32px"
              />
            ) : (
              <Spin />
            )}
            <a href=" # ">Đổi đơn vị vận chuyển</a>
          </ItemBody>
          <ItemBody width="10%">
            {chooseShipStatus ? (
              <Label
                content={chooseShipStatus.status}
                bgColor={chooseShipStatus.bgColor}
                width="100%"
                height="32px"
              />
            ) : (
              <Spin />
            )}
            {chooseShipStatus ? <h5>{chooseShipStatus.work}</h5> : <Spin />}
            <Pstatus>{date || <Spin />}</Pstatus>
          </ItemBody>
          <ItemBody width="22%">
            <ButtonGroup justify="space-between">
              <Button
                width="77px"
                buttonType="base"
                size="14px"
                borderRadius="14px"
                padding="7px 11px"
              >
                Sửa đơn
              </Button>
              <Button
                width="77px"
                buttonType="base"
                size="14px"
                borderRadius="14px"
                padding="7px 11px"
              >
                Lưu đơn
              </Button>
              <Button
                width="77px"
                buttonType="base"
                size="14px"
                borderRadius="14px"
                padding="7px 10px"
              >
                In đơn
              </Button>
              <Button
                width="77px"
                buttonType="base"
                size="14px"
                borderRadius="14px"
                padding="7px 10px"
              >
                Xóa
              </Button>
            </ButtonGroup>
            <ButtonGroup justify="flex-end">
              <Button
                buttonType="base"
                size="14px"
                width="100%"
                padding="7px 10px"
                textTransform="uppercase"
                borderRadius="14px"
              >
                <IconOfButton Icon={Chat} left>
                  Yêu cầu hỗ trợ
                </IconOfButton>
              </Button>
            </ButtonGroup>
          </ItemBody>
        </CardBlockBody>
      </CardBlockContent>
      <Triangle direction="true" height={height} bgColor={bgColor} />
    </CardBlockBox>
  );
};
CardBlock.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  bgColor: PropTypes.string,
  marginTop: PropTypes.string,
  marginBot: PropTypes.string,
  code: PropTypes.string,
  product: PropTypes.string,
  quantity: PropTypes.number,
  cod: PropTypes.number,
  fee: PropTypes.number,
  name: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.string,
  postman: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string,
};
export default CardBlock;
