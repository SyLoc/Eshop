import React, {useRef, useState, useEffect} from 'react';
import axios from 'axios'
// import {Image} from 'cloudinary-react'
import imgLoading from '../../../assets/img/loading.gif'
import { useSelector, useDispatch } from 'react-redux';
import {UpdateUser} from '../../../actions/ActionWithProduct'

const UploadImage = ({infoUser}) => {
  const [imageSelected, setImageSelected] = useState("")
  const [imageUrl, setImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const infoCustomer = useSelector(state => state.lo.infoCustomer);
  const dispatch = useDispatch();
  const elInput = useRef();

  const chooseFile = () =>{
    elInput.current.click()
  }

  const handleSaveImage = () =>{
    const newUser = {
      ...infoUser,
      img: imageUrl
    }

    dispatch(UpdateUser(infoUser.id,newUser))
    setImageUrl('')
  }


  const handleChange = (file) => {
    if(file.type === 'image/jpeg' || file.type === 'image/png'){
      if(file.size < 100000){
        setImageSelected(file)
      }else{
        alert('xin hãy chọn ảnh có dung lượng nhỏ hơn')
      }
    }else{
      alert('xin hãy chọn file có đuôi .jpeg, .png')
    }
  }

  useEffect(() => {
    if(imageSelected){
      setLoading(true)
      const formData = new FormData()
      formData.append("file", imageSelected)
      formData.append("upload_preset", "fvrnrroz")

      axios.post("https://api.cloudinary.com/v1_1/dy8145o0x/image/upload", formData)
        .then(response => {
          setImageUrl(response.data.url)
          setLoading(false)
        })
    }
  }, [imageSelected]);


  return (
    <div className="account-content__body-right">
      {
        loading ? <img className="account-content__body-right__img" src={imgLoading} alt="" />:
        <img className="account-content__body-right__img" src={`${imageUrl ? imageUrl : infoCustomer.img}`} alt="" />
      }
      {
        imageUrl ? <button onClick={handleSaveImage} style={{marginTop: '10px'}} className='btn btn--primary'>Lưu</button> :
        <button onClick={chooseFile} className='btn btn--normal account-content__body-right--btn'>chọn ảnh</button>
      }
      <div className="account-content__body-right__title">
        Dụng lượng file tối đa 1 MB<br />
        Định dạng:.JPEG, .PNG
      </div>
      <input style={{ display: 'none' }} ref={elInput} type="file" onChange={e => handleChange(e.target.files[0])} />

    </div>
  ); 
};


export default UploadImage;