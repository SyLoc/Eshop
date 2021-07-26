import React,{useState, useEffect} from 'react';
import {FaRegLightbulb} from 'react-icons/fa'
import {CgCloseO} from 'react-icons/cg'
import {useSelector} from 'react-redux'

import {addUser} from '../../actions/ActionWithProduct'

import { useDispatch } from 'react-redux';

import LoadingModal from './LoadingModal';
import FormSocials from './FormSocials';



const SignUp = ({closeModal, showSignUp, handleClick}) => {
  const [valueSignUp, setValueSignUp] = useState({email:'', password:'', re_password:''})
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const isLogin = useSelector(state => state.lo.isLogin);

  const dispatch = useDispatch();


  const onInputChange = (e) =>{
    setValueSignUp({
      ...valueSignUp,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmitSignUp = (e) =>{
    e.preventDefault()
    if(valueSignUp.email !== '' && valueSignUp.password !== "" && valueSignUp.re_password !== ""){
      if(valueSignUp.password !== valueSignUp.re_password){
        setMessage('Mật khẩu không trùng')
      }else{
        setLoading(true)
        const id_random = new Date().getTime().toString()
        const user = {
          id: id_random.substr(8),
          email: valueSignUp.email,
          password: valueSignUp.password,
          info:[{ 
            id:id_random.substr(10),
            name: '',
            phone: '',
            address: '',
            address_detail:''
          }],
          isAdmin: false,
          img:'',
          googleId:'',
          facebookId:''
        }
        dispatch(addUser(user))
        setValueSignUp({email:'',password:'',re_password:''})
        setMessage('')
        closeModal()
      }
    }
    else{
      setMessage('Hãy nhập đầy đủ thông tin')
    }
  }

  useEffect(() => {
    if(isLogin === true){
      setLoading(false)
    }
  }, [isLogin]);

  const closeForm = () =>{
    setMessage('')
    setValueSignUp({email:'', password:'', re_password:''})
    closeModal()
  }


  return (
    <div className='form-container'>
      {/* <!-- register form --> */}
      <form className={`auth-form ${showSignUp ? 'auth-form__signUp--show':null}`} onSubmit={handleSubmitSignUp}>
        <button type='button' onClick={closeForm} className='auth-form__btn-close'><i><CgCloseO/></i></button>
        <div className="auth-form__container">
          <div className="auth-form__header">
            <h3 className="auth-form__heading">Đăng ký</h3>
            <span onClick={handleClick} className="auth-form__switch-btn">Đăng nhập</span>
          </div>
          <div className="auth-form__form">
            <div className={`auth-form__form-message ${message !== '' ? 'auth-form__form-message--active' : null}`}><FaRegLightbulb/> {message}</div>
            <div className="auth-form__group">
              <input 
                name='email' 
                type="email" 
                className="auth-form__input"
                value={valueSignUp.email}
                onChange={onInputChange} 
                placeholder="Nhập email"/>
            </div>
            <div className="auth-form__group">
              <input 
                name="password" 
                type="password" 
                className="auth-form__input"
                value={valueSignUp.password}
                onChange={onInputChange} 
                placeholder="Nhập mật khẩu"/>
            </div>
            <div className="auth-form__group">
              <input 
                name='re_password'
                type="password" 
                className="auth-form__input"
                value={valueSignUp.re_password}
                onChange={onInputChange} 
                placeholder="Nhập lại mật khẩu"/>
            </div>
          </div>

          <div className="auth-form__aside">
            <p className="auth-form__policy-text">
              Bằng việc đăng ký, bạn đã đồng ý với Oshop về 
              <a href="/abc" className="auth-form__text-link"> Điều khoản dịch vụ &</a> 
              <a href="/abc" className="auth-form__text-link"> Chính sách bảo mật</a>
            </p>
          </div> 

          <div className="auth-form__controls">
            <button type='button' onClick={closeForm} className="btn btn--normal auth-form__controls-back">TRỞ LẠI</button>
            <button className="btn btn--primary">ĐĂNG KÝ</button>
          </div>
        </div>

        <FormSocials setLoading={setLoading} closeModal={closeModal} setMessage={setMessage}/>

        {/* <div className="auth-form__socials">
          <a href='facebook.com' className="btn btn--size-s auth-form__socials--facebook btn--with-icon">
            <i className="auth-form__socials-icon "><FaFacebookSquare/></i>
            <span className="auth-form__socials-title">Kết nối với facebook</span>
          </a>
          <a href='google.com' className="btn btn--size-s auth-form__socials--google btn--with-icon">
            <i className="auth-form__socials-icon "><FcGoogle/></i>
            <span className="auth-form__socials-title">Kết nối với google</span>
          </a>
        </div> */}
    </form> 
    { loading ? <LoadingModal/> : null}
  </div>
  );
};

export default SignUp;