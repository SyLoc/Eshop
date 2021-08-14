import React, {useState } from 'react';
import Carousel from 'react-elastic-carousel'

const img1 = 'https://cf.shopee.vn/file/dad4b00d805cb3482aea43cf030ee1e2_tn'
const img2 = 'https://donghotuanhung.com/wp-content/uploads/2019/05/nuoc-hoa-black-red-1.jpg'
const img3 = 'https://file.hstatic.net/1000379579/file/untitled-1_78d3b1b4be9f4c92b5a7c6baeb32e573.png'
const img4 = 'https://dncosmetics.vn/wp-content/uploads/2017/05/nuoc-hoa-chanel-chance-mau-hong-50ml-xuat-xu-phap.jpg'
const img5 = 'https://admin.vuahanghieu.com/upload/product/2020/06/nuoc-hoa-nam-christian-dior-sauvage-edp-dam-chat-hien-dai-100ml-5eec8f69593c6-19062020171153.jpg'


const breakPoints = [
  { width: 1, itemsToShow: 4, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];

const ImageContainer = ({ image }) => {
  const [hover, setHover] = useState(0)
  const imageList = [image, img1, img2, img3, img4, img5]

  return (
    <div className="singleProduct__container-img">
      <div className='singleProduct__container-img-header'>
        <div className='singleProduct__container-single-img'
          style={{ backgroundImage: `url(${imageList[hover]})` }}
        ></div>
      </div>
      <div className="singleProduct__container-list-img">
        {/* <button className="singleProduct__container-list__btn singleProduct__container-list--btnLeft">
          <i className='singleProduct__container-list__btn-icon'><RiArrowLeftSLine /></i>
        </button> */}
        <div className="singleProduct__container-list-img__wrap">
          <Carousel breakPoints={breakPoints}>
            {
              imageList.map((image, index) => {
                return (
                  <img
                    key={index}
                    className={`singleProduct__container-img-item ${hover === index && 'img-item--active'}`}
                    src={image}
                    alt=""
                    onMouseEnter={e => setHover(index)}
                  />
                )
              })
            }
          </Carousel>
        </div>
        {/* <button className="singleProduct__container-list__btn singleProduct__container-list--btnRight">
          <i className='singleProduct__container-list__btn-icon'><RiArrowRightSLine /></i>
        </button> */}
      </div>
    </div>
  );
};


export default ImageContainer;