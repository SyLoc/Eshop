import React,{useState, useEffect} from 'react';
import {FaFacebookSquare} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import {CgCloseO} from 'react-icons/cg'
import {getAll_User} from '../../actions/ActionWithProduct'

import { useDispatch } from 'react-redux';
import {
  LOGIN
}from '../../constant/constants'


const SignIn = ({closeModal, showSignIn, handleClick, setLoading}) => {

  const [valueSignIn, setValueSignIn] = useState({email:'', password:''})
  const dispatch = useDispatch();

  const onchangeInputSignIn = (e) =>{
    setValueSignIn({
      ...valueSignIn,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = (e) =>{
    e.preventDefault()
    if(valueSignIn.email !== '' && valueSignIn.password !== ''){
      setLoading(true)
      getAll_User()
        .then((res) => {
          setLoading(false)
          console.log(res.data)
          const arr = res.data
          let loginFail = true
          arr.map((item) =>{
            if(item.email === valueSignIn.email && item.password === valueSignIn.password){
              alert('dang nhap thanh cong')
              closeModal()
              loginFail = false
            }
          })
          if(loginFail){
            alert("dang nhap thanh bai, xin moi nhap lai")
          }
        })
    }else{
      alert('hay nhap day du cac truong')
    }
  }

  useEffect(() => {
    let login = localStorage.getItem('login')
    if(login){
      login = JSON.parse(localStorage.getItem('login'))
      dispatch({type: LOGIN, payload:login})
    }
  }, []);

  return (
    <>
      {/* <!-- login form --> */}
      <form className={`auth-form ${ showSignIn ? 'auth-form__signIn--show':null}`} onSubmit={handleSubmit}>
        <button type='button' onClick={closeModal} className='auth-form__btn-close'><i><CgCloseO/></i></button>
        <div className="auth-form__container">
          <div className="auth-form__header">
            <h3 className="auth-form__heading">Đăng nhập</h3>
            <span onClick={handleClick} className="auth-form__switch-btn">Đăng ký</span>
          </div>
          <div className="auth-form__form">
            <div className="auth-form__group">
              <input 
                type="email" 
                name='email'
                className="auth-form__input" 
                placeholder="Nhập email" 
                value={valueSignIn.email}
                onChange={onchangeInputSignIn}
                />
            </div>
            <div className="auth-form__group">
              <input 
                type="password" 
                name='password'
                className="auth-form__input" 
                placeholder="Nhập mật khẩu" 
                value={valueSignIn.password}
                onChange={onchangeInputSignIn}
              />
            </div>
          </div>

          <div className="auth-form__aside">
            <p className="auth-form__help">
              <a href="/abc" className="auth-form__text-link">Quên Mật Khẩu</a> &
              <a href="/abc" className="auth-form__text-link"> Cần trợ giúp ?</a>
            </p>
          </div>

          <div className="auth-form__controls">
            <button onClick={handleClick} className="btn btn--normal auth-form__controls-back">TRỞ LẠI</button>
            <button className="btn btn--primary">ĐĂNG NHẬP</button>
          </div>
        </div>

        <div className="auth-form__socials">
          <a href='facebook.com' className="btn btn--size-s auth-form__socials--facebook btn--with-icon">
            <i className="auth-form__socials-icon "><FaFacebookSquare/></i>
            <span className="auth-form__socials-title">Kết nối với facebook</span>
          </a>
          <a href='google.com' className="btn btn--size-s auth-form__socials--google btn--with-icon">
            <i className="auth-form__socials-icon "><FcGoogle/></i>
            <span className="auth-form__socials-title">Kết nối với google</span>
          </a>
        </div>
      </form>
    </>
  );
};

export default SignIn;