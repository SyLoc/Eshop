import React from 'react';
import {FaList} from 'react-icons/fa'

const Category = () => {
  return (
    <article className="category">
      <h3 className="category__heading">
        <i className="category__heading-icon"><FaList/></i>
        Danh mục
      </h3>
      
      <ul className="category-list">
        <li className="category-item category-item--active">
          <a href="/home" className="category-item__link">Tất cả sản phẩm</a>
        </li>
        <li className="category-item">
          <a href="/home" className="category-item__link">Thời trang nam</a>
        </li>
        <li className="category-item">
          <a href="/home" className="category-item__link">Thời trang nữ</a>
        </li>
        <li className="category-item">
          <a href="/home" className="category-item__link">Phụ kiện nam - nữ</a>
        </li>
        <li className="category-item">
          <a href="/home" className="category-item__link">Dụng cụ trang điểm</a>
        </li> 
        <li className="category-item">
          <a href="/home" className="category-item__link">Đồ điện tử</a>
        </li>
      </ul>
    </article>
  );
};


export default Category;