import React from 'react';
import { Link } from 'react-router-dom'
import { sidebar } from '../../link/linkList'

const Sidebar = ({ infoCustomer, numActive, setNumActive }) => {

  return (
    <div className='purchase__sidebar'>
      <div className="purchase__sidebar-profile">
        <img
          src={infoCustomer.img}
          className="purchase__sidebar-img"
          alt="avata" />
        <div className="purchase__sidebar-name">{infoCustomer.name}</div>

      </div>
      <ul className='purchase__sidebar-list'>
        {
          sidebar.map(x => {
            const {id, icon, text, url} = x
            return (
              <li key={id} className={`purchase__sidebar-item ${numActive===id && 'purchase__sidebar-item--active'}`}>
                <i className='purchase__sidebar-icon' >{icon}</i>
                <Link onClick={e => setNumActive(id)} className='purchase__sidebar-item__link' to={url}>{text}</Link>
              </li>
            )
          })
        }

      </ul>
    </div>
  );
};


export default Sidebar;