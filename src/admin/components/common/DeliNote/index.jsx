import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import Modal from '../Modal';
import AddressForm from './Address/Address';
import WareHouseForm from './WareHouse/WareHouse';
import FinishDeli from './Finish/FinishDeli';
import { KindDeli, Kind } from './styled';

const DeliNote = ({ visible, onCancel }) => {
  const [kind, setKind] = useState('address');
  const handleCancel = () => {
    onCancel();
    setKind('address');
  };
  return (
    <Modal
      visible={visible}
      onCancel={handleCancel}
      title={kind === 'finish' ? 'Thành công' : 'Tạo phiếu xuất'}
      footer={[]}
    >
      {kind !== 'finish' ? (
        <KindDeli>
          <Kind onClick={() => setKind('address')} active={kind === 'address'}>
            Xuất hàng tới địa chỉ
          </Kind>
          <Kind onClick={() => setKind('warehouse')} active={kind === 'warehouse'}>
            Xuất hàng sang kho khác
          </Kind>
        </KindDeli>
      ) : (
        ''
      )}
      {kind === 'address' ? <AddressForm /> : ''}
      {kind === 'warehouse' ? <WareHouseForm /> : ''}
      {kind === 'finish' ? <FinishDeli code="001563598369" /> : ''}
      {kind !== 'finish' ? (
        <Button
          onClick={() => setKind('finish')}
          buttonType="primary"
          width="100%"
          borderRadius="30px"
          padding="15px 0"
        >
          TẠO PHIẾU XUẤT
        </Button>
      ) : (
        ''
      )}
    </Modal>
  );
};
DeliNote.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
};
export default DeliNote;
