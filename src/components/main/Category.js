import React, {useState} from 'react';
import {FaList} from 'react-icons/fa'
import { category } from '../../link/linkList';

const Category = () => {

  const [idActive, setIdActive] = useState(1)

  const handleClick = (id) =>{
    setIdActive(id)
  }


  return (
    <article className="category">
      <h3 className="category__heading">
        <i className="category__heading-icon"><FaList/></i>
        Danh mục
      </h3>
      <ul className="category-list">
        {
          category.map((item) =>{
            const {id, text} = item
            return (
              <li key={id} className={`category-item ${id === idActive ? 'category-item--active' : null}`}>
                <button onClick={e => handleClick(id)}  className="category-item__btn">{text}</button>
              </li>
            )
          })
        }
      </ul>
    </article>
  );
};


export default Category;