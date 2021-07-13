import React from 'react';
import '../../index.css'
import {AiFillCheckCircle} from 'react-icons/ai'
import {TiWarningOutline} from 'react-icons/ti'

const NotifiModal = ({text,type}) => {
  return (
    <section className='modal modal--show'>
      <div className="modal__overlay modal__overlay-bg-transparent"></div>
      <div className="modal__body">
        <div className='notifications'>
          {
            type === 'successful' ? <i style={{color:'#00BFA5'}} className='notifications-icon'><AiFillCheckCircle/></i> : null
          }
          {
            type === 'warning' ? <i style={{color:'var(--primary-color)'}} className='notifications-icon'><TiWarningOutline/></i> : null
          }
          
          <div className='notifications-text'>{text}</div>
        </div>
      </div>
    </section>
  );
};

export default NotifiModal;