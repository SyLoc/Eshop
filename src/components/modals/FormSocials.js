import React, {useState, useEffect} from 'react';
// import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import {useDispatch, useSelector} from 'react-redux'
import {FaFacebookSquare} from 'react-icons/fa'

import {
  LOGIN
}from '../../constant/constants'
import { addUser } from '../../actions/ActionWithProduct';


const FormSocials = ({closeModal, setMessage}) => {

  const dispatch = useDispatch();
  const [users, setUsers] = useState([])
  const userList = useSelector(state => state.lo.users);

  // const responseFacebook = (res) =>{
  //   console.log("login result:", res)
  // }
  
  // const componentClicked = (data) =>{
  //   console.warn(data)
  // }

  useEffect(() => {
    setUsers(userList)
  }, [userList]);
  

  const responseGoogle = (response) =>{
    try {
      let login = false
      const data = response.profileObj
      users.forEach((item) =>{
        if(item.googleId === data.googleId){
          login = true
          const user = {
            id: item.id,
            name: data.name,
            email: data.email,
            img: data.imageUrl
          }
          dispatch({type: LOGIN, payload: user})
          closeModal()
        }
      })
      if(login === false){
        const id_random = new Date().getTime().toString()
        const user = {
          id: id_random.substr(8),
          email: data.email,
          password: '',
          name: data.name,
          phone: '',
          address: '',
          isAdmin: false,
          img: data.imageUrl,
          googleId: data.googleId,
          facebookId:''
        }
        dispatch(addUser(user))
        closeModal()
      }
    } catch (error) {
      console.log('error @123: ', error)
    }
  }

  const handleClickFB = () =>{
    setMessage('Đăng nhập bằng fb đang bị lỗi, mời bạn đăng nhập bằng phương thức khác!')
  }



  return (
    <div className="auth-form__socials">
      <button type='button' onClick={handleClickFB} className="btn auth-form__socials--facebook">
        <i className="auth-form__socials-icon "><FaFacebookSquare/></i>
        <span className="auth-form__socials-title">Đăng nhập với Facebook</span>
      </button>
      {/* <FacebookLogin
        appId="344457380599359"
        autoLoad={true}
        fields="name, email, picture"
        onClick={componentClicked}
        callback={responseFacebook}
      /> */}
      <GoogleLogin
        className='btn-login-google'
        clientId="402496708879-dc1e99l33btevm0mnd60qnhuog1mon5o.apps.googleusercontent.com"
        buttonText='Đăng nhập với Google'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};


export default FormSocials;