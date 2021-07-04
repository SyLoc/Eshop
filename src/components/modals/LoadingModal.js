import React from 'react';
import './modal.css'

const LoadingModal = () => {
  return (
    <div className='overlay__modal-content'>
      <div className="spinner-3"></div>
    </div>
  );
};


export default LoadingModal;