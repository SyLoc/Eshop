import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import noProductImg from '../../../assets/img/notProduct.png'
import {updateOrder} from '../../../actions/ActionWithProduct'
import {useDispatch} from 'react-redux'


const PurchaseItem = ({ prop }) => {
  const [openModal, setOpenModal] = useState(false)
  const [value, setValue] = useState(0)
  const [reason, setReason] = useState('')
  const dispatch = useDispatch();

  const handleClick = (item) => {
    setOpenModal(true)
    setValue(item)
  }

  const handleConfirm = (e) => { 
    e.preventDefault()
    if(reason){
      const newItem = {
        ...value,
        status: 'canceled',
        reason: reason
      }
      dispatch(updateOrder(newItem.id, newItem,(data) =>{
        if(data) setOpenModal(false)
      }))
    }
  }

  const handleChange = (e) =>{
    setReason(e.target.value)
  }

  if (prop.length === 0) {
    return (
      <div className='purchase-item-noProduct'>
        <img src={noProductImg} alt="" />
        <h1>Chưa có đơn hàng</h1>
      </div>
    )
  }

  return (
    <>
      {
        prop.map((item, index) => {
          return (
            <div key={index} className="purchase-item-wrap">
              {
                item.products.map(x => {
                  const { id, name, image, type, amount, priceOld, priceCurrent } = x
                  return (
                    <div key={id} className="purchase-item">
                      <div className="purchase-item__left">
                        <div className="purchase-item__image">
                          <div
                            style={{ backgroundImage: `url(${image})` }}
                            className="purchase-item__img" alt="" />
                        </div>
                        <Link to='/abc' className="purchase-item__info">
                          <div className="purchase-item__info-name">{name}</div>
                          <div className="purchase-item__info-type">loại: {type}</div>
                          <div className="purchase-item__info-quantity">x{amount}</div>
                        </Link>
                      </div>
                      <div className="purchase-item__right">
                        <div className='purchase-item__right-oldPrice'>₫{priceOld}</div>
                        <div className='purchase-item__right-currentPrice'>₫{priceCurrent}</div>
                      </div>
                    </div>
                  )
                })
              }
              <div className='purchase-item__extension'>
                <div className='purchase-item__extension-price'>Tổng số tiền: <span>₫{item.total.totalPrice}</span></div>
                {
                  item.status === 'unconfirmed' ? <button onClick={e => handleClick(item)} className='btn btn--primary'>HỦY ĐƠN HÀNG</button> :
                    <button className='btn btn--primary btn--disabled '>HỦY ĐƠN HÀNG</button>
                }
              </div>

            </div>
          )
        })
      }
      <section className={`modal ${openModal && 'modal--show'}`}>
        <div className="modal__overlay"></div>
        <div className="modal__body">
          <form className='modal-purchase' onSubmit={handleConfirm}>
            <h1 className='modal-purchase__title'>Chọn lý do hủy</h1>
            <div className='modal-purchase__content'>
              <div className='modal-purchase__item'>
                {/* defaultChecked='true' */}
                <input type="radio" name='getValue' onChange={handleChange} value='Muốn thay đổi địa chỉ' /><span>Muốn thay đổi địa chỉ</span>
              </div>
              <div className='modal-purchase__item'>
                <input type="radio" name='getValue' onChange={handleChange} value='Muốn thay đổi sản phẩm trong đơn hàng' /><span>Muốn thay đổi sản phẩm trong đơn hàng (size,màu sắc,số lượng...)</span>
              </div>
              <div className='modal-purchase__item'>
                <input type="radio" name='getValue' onChange={handleChange} value='Đổi ý, không muốn mua nữa' /><span>Đổi ý, không muốn mua nữa</span>
              </div>
              <div className='modal-purchase__item'>
                <input type="radio" name='getValue' onChange={handleChange} value='Khác' /><span>Khác</span>
              </div>
            </div>
            <div className='modal-purchase__buttons'>
              <button type='button' className='btn btn--normal auth-form__controls-back' onClick={e => setOpenModal(false)} >Trở lại</button>
              <button className={`btn btn--primary ${reason === '' && 'btn--disabled'}`}>Xác nhận</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};


export default PurchaseItem;