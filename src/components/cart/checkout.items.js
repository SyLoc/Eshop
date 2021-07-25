import React from 'react';

const CheckoutItems = ({carts}) => {

  const covert = (value) => {
    const arr = (value + '000').split('')
    let count = 0;
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
      count++;
      if (count === 3) {
        count = 0;
        if (i !== 0) {
          result.unshift('.' + arr[i])
        } else {
          result.unshift(arr[i])
        }
      } else {
        result.unshift(arr[i])
      }
    }
    return result.join('')
  }


  const convertStr = (str) => {
    let arr = str.split('.')
    arr.pop()
    return arr.join('')
  }

  let itemsPrice = carts.reduce((a,b) => a + convertStr(b.priceCurrent) * b.amount, 0)
  let shippingPrice = itemsPrice >= 2000 ? 0.000 : 40.000
  let totalPrice = itemsPrice + shippingPrice
  itemsPrice = covert(itemsPrice)
  shippingPrice = covert(shippingPrice)
  totalPrice = covert(totalPrice)

  return (
    <div className="checkout__main-body">
      <div className='checkout__main-body-header'>
        <div className='checkout__main-body-header-left'>
          <h3>Sản phẩm</h3>
        </div>
        <div className='checkout__main-body-header-right'>
          <span>Loại</span>
          <span>Đơn giá</span>
          <span>Số lượng</span>
          <span>Thành tiền</span>
        </div>
      </div>
      <div className='checkout__main-body__list'>
        {
          carts.map(item => {
            const { id, name, image, priceCurrent, amount, type } = item
            
            let total = convertStr(priceCurrent) * amount
            total = covert(total)

            return (
              <div key={id} className="checkout__main-body__item">
                <div className='checkout__main-body__list-left'>
                  <img className='checkout__main-body__list-left__img' src={image} alt="" />
                  <span className='checkout__main-body__list-left__name'>{name}</span>
                </div>
                <div className='checkout__main-body__list-right'>
                  <span>{type}</span>
                  <span>₫{priceCurrent}</span>
                  <span>{amount}</span>
                  <span>₫{total}</span>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className='checkout__main-body__footer'>
        <div className='checkout__main-body__footer-list'>
          <div className='checkout__main-body__footer-item'>
            <span>Tổng tiền hàng:</span>
            <span>₫{itemsPrice}</span>
          </div>
          <div className='checkout__main-body__footer-item'>
            <span>Phí vận chuyển:</span>
            <span>₫{shippingPrice}</span>
          </div>
          <div className='checkout__main-body__footer-item'>
            <span>Tổng thanh toán:</span>
            <span className='main-body__footer-item--highlight'>₫{totalPrice}</span>
          </div>
        </div>
        <div className='body__footer-item-btn'>
          <button className='btn btn--primary'>Đặt hàng</button>
        </div>
      </div>
    </div>
  );
};


export default CheckoutItems;