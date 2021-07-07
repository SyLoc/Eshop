import React, {useState, useEffect} from 'react';
import "./modal.css"
import SignIn from './SignIn';
import SignUp from './SignUp';

import {
  CLOSE_MODAL
} from '../../constant/constants'

import { useDispatch, useSelector } from 'react-redux';

const Modal = () => {
  const [showModal, setShowModal] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)


  const openModal = useSelector(state => state.lo.openModal);
  const modalContent = useSelector(state => state.lo.modalContent);
  const dispatch = useDispatch();

  const closeModal = () =>{
    dispatch({type: CLOSE_MODAL})
    setShowModal(false)
    setShowSignIn(false)
    setShowSignUp(false)
  }

  const handleClick = () =>{
    setShowSignUp(!showSignUp)
    setShowSignIn(!showSignIn)
  }

  useEffect(() => {
    const handleOpenModal = (value) =>{
      if(openModal === true){
        setShowModal(true)
        if(value === 'signIn'){
          setShowSignIn(true)
        }
        if(value === 'signUp'){
          setShowSignUp(true) 
        }
      }
    }
    
    handleOpenModal(modalContent)
  }, [openModal,modalContent]);



  return (
    <section className={`modal ${showModal ? 'modal--show':null}`}>
      <div className="modal__overlay"></div>
      <div className="modal__body">
        
      <SignIn 
        showSignIn={showSignIn}
        closeModal={closeModal}
        handleClick={handleClick}
        />
      
      <SignUp 
        showSignUp={showSignUp}
        closeModal={closeModal}
        handleClick={handleClick}
        />
        
      </div>
    </section>
  );
};


export default Modal;