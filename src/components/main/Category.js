import React, {useState} from 'react';
import {FaList} from 'react-icons/fa'
import { category } from '../../link/linkList';
const Category = () => {

  const [idActive, setIsActive] = useState(1)

  const setCategory = (id) =>{
    setIsActive(id)
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
            const {id, text, url} = item
            return (
              <li onClick={e => setCategory(id)} key={id} className={`category-item ${id === idActive ? 'category-item--active' : null}`}>
                <a href={url}  className="category-item__btn">{text}</a>
              </li>
            )
          })
        }
      </ul>
    </article>
  );
};


export default Category;