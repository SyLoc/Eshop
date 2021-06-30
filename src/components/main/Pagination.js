import React from 'react';
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'

import '../../css/pagination.css'

const Pagination = () => {
  return (
    <ul className="pagination home-products__pagination">
      <li className="pagination-item">
        <a href="/pagination" className="pagination-item__link">
          <i className="pagination-item__icon"><AiOutlineLeft/></i>
        </a>
      </li>

      <li className="pagination-item pagination-item--active"><a href="/pagination" className="pagination-item__link">1</a></li>
      <li className="pagination-item"><a href="/pagination" className="pagination-item__link">2</a></li>
      <li className="pagination-item"><a href="/pagination" className="pagination-item__link">3</a></li>
      <li className="pagination-item"><a href="/pagination" className="pagination-item__link">4</a></li>
      <li className="pagination-item"><a href="/pagination" className="pagination-item__link">5</a></li>
      <li className="pagination-item"><a href="/pagination" className="pagination-item__link">...</a></li>
      <li className="pagination-item"><a href="/pagination" className="pagination-item__link">14</a></li>
      
      <li className="pagination-item">
        <a href="/pagination" className="pagination-item__link">
          <i className="pagination-item__icon"><AiOutlineRight/></i>
        </a>
      </li>
    </ul>
  );
};

export default Pagination;