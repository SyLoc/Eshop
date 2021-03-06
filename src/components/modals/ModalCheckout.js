import axios from 'axios';
import React, { useState,useEffect,useRef} from 'react';
import {TiDelete} from 'react-icons/ti'
import {FaSortDown, FaSortUp} from 'react-icons/fa'
import LoadingModal from './LoadingModal';
import {useDispatch, useSelector} from 'react-redux'
import {UpdateUser} from '../../actions/ActionWithProduct'


const api = 'https://thongtindoanhnghiep.co/api'

const ModalCheckout = ({ setShowModal }) => {
  const [state, setState] = useState({
    name: '',
    phone: '',
    address: '',
    address_detail: '' 
  })
  const [address, setAddress] = useState({
    province:'',
    district:'',
    ward:''
  })
  const [arrAddress, setArrAddress] = useState([])
  const [focused, setFocused] = useState(false)
  const [numActive, setNumActive] = useState(1)
  const [addValue, setAddValue] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMiss, setErrorMiss] = useState(false)

  const dispatch = useDispatch();
  const ref = useRef();
  useOnClickOutside(ref, () => setFocused(false));
  const user = useSelector(state => state.lo.users);

  // Hook
  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(addValue && errorMiss === false){
      const userCurrent = JSON.parse(localStorage.getItem('login'))
      let infoUser = user.find(x => x.idUser === userCurrent.id)

      const Info = {
        name_2:state.name,
        phone:state.phone.slice(1,state.phone.length),
        address: addValue,
        address_detail: state.address_detail
      }
      infoUser = {
        ...infoUser,
        ...Info
      }

      dispatch(UpdateUser(infoUser.id,infoUser))
      reset()
      setShowModal(false)
    }else{
      console.log('khong the submit')
      setErrorMiss(true)
    }
  }

  const onFocus = () => {
    address.ward === '' ? setFocused(true) : setFocused(false)
  }

  const reset = () =>{
    setState({name: '',phone: '',address: '',address_detail: ''})
    handleDelete()
  }

  useEffect(() => {
    if(focused === false){
      if((address.province !== '' && address.district === '') || (address.district !== '' && address.ward === '')){
        setErrorMiss(true)
      }else{
        setErrorMiss(false)
      }
    }
  }, [address,focused]);

  const handleCloseModal = () =>{
    reset()
    setShowModal(false)
  }
  
  const handleDelete = () =>{
    setAddress({province:'',district:'',ward:''})
    setNumActive(1)
    getProvince()
  }

  const onChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const getProvince = async() =>{
    setLoading(true)
    axios.get(`${api}/city`)
      .then(res => {
        setArrAddress(res.data.LtsItem)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getProvince()
  }, []);

  const getDistrict = async(num) =>{
    setLoading(true)
    axios.get(`${api}/city/${num}/district`)
      .then(res => {
        setArrAddress(res.data)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }

  const getWard = async(num) =>{
    setLoading(true)
    axios.get(`${api}/district/${num}/ward`)
      .then(res => {
        setArrAddress(res.data)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }

  const getName = (id,name) =>{
    setNumActive(numActive + 1)
    if(address.province === ''){
      setAddress({...address,province:name})  
      getDistrict(id)
    }else{
      if(address.district === ''){
        setAddress({...address,district:name})
        getWard(id)
      }else if(address.ward === ''){
        setAddress({...address,ward:name})
        setFocused(false)
        setNumActive(1)
      }
    }
  }
  

  useEffect(() => {
    const arr = [address.province , address.district , address.ward]
    const newArr = []
    for(let i = 0; i < arr.length; i++){
      if(arr[i] !== ''){
        newArr.push(arr[i])
      }
    }
    setAddValue(newArr.join(','))
  }, [address]);

  return (
    <div className="modal__body">
      <form className='modal-checkout__content' onSubmit={handleSubmit}>
        <h2 className='modal-checkout__content-title'>Th??m ?????a ch???</h2>
        <div className="modal-checkout__content__group modal-checkout__content__group-1">
          <div className={`modal-checkout__content__group-wrap ${state.name === '' ? null : 'placeholder--active'}`}>
            <div className='modal-checkout__content__group__placeholder'>H??? v?? t??n</div>
            <input
              className='modal-checkout__content__group-1__input'
              name='name'
              type="text"
              placeholder='H??? v?? t??n'
              value={state.name}
              onChange={onChangeInput}
              required
            />
          </div>
          <div className={`modal-checkout__content__group-wrap ${state.phone === '' ? null : 'placeholder--active'}`}>
            <div className='modal-checkout__content__group__placeholder'>S??? ??i???n tho???i</div>
            <input
              className='modal-checkout__content__group-1__input'
              name='phone'
              type="text"
              placeholder='S??? ??i???n tho???i'
              value={state.phone}
              onChange={onChangeInput}
              required
            />
          </div>
        </div>
        <div className='modal-checkout__content__group'>
          <div className={`modal-checkout__content__group-wrap ${ errorMiss && 'content__group--error'} ${addValue === '' ? null : 'placeholder--active'}`}>
            {/* content__group--error */}
            <div className='modal-checkout__content__group__placeholder'>T???nh/th??nh ph???, Qu???n/Huy???n, Ph?????ng/X??</div>
            <input
              onFocus={onFocus}
              className='modal-checkout__content__group-2-input'
              name='address'
              type="text"
              value={addValue}
              placeholder='T???nh/th??nh ph???, Qu???n/Huy???n, Ph?????ng/X??'
              onChange={onChangeInput}
              readOnly
              />
              <div className='modal-checkout__content-btn__container'>
                <button type='button' onClick={handleDelete} className={`modal-checkout__content-btn content--btn_delete ${ addValue !== '' && 'content--btn-show'}`}><TiDelete/></button>
                {
                  focused ? (<button type='button' onClick={e => setFocused(false)} className='modal-checkout__content-btn content--btn_up'><FaSortUp/></button>) :
                  (<button type='button' className='modal-checkout__content-btn content--btn_down'><FaSortDown/></button>)
                }
              </div>


            <div ref={ref} className={`content__group-2_modal-wrap ${focused && 'modal-wrap--show'}`}>
              <div className='content__group-2_modal'>
                <div className='content__group-2_modal-header'>
                  <div className={`content__group-2_modal-header-item ${numActive === 1 && 'modal-header-item--active'} `}>T???nh/th??nh ph???</div>
                  <div className={`content__group-2_modal-header-item ${numActive === 2 && 'modal-header-item--active'} `}>Qu???n/Huy???n</div>
                  <div className={`content__group-2_modal-header-item ${numActive === 3 && 'modal-header-item--active'} `}>Ph?????ng/X??</div>
                </div>
                <div className='content__group-2_modal-body'>
                  {
                    loading ? <LoadingModal/> :
                    arrAddress.map((item) =>{
                      const {ID, Title} = item
                      return (
                        <div key={ID} onClick={e => getName(ID,Title)}  className='content__group-2_modal-body-item'>{Title}</div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='modal-checkout__content__group'>
          <div className={`modal-checkout__content__group-wrap ${state.address_detail === '' ? null : 'placeholder--active'}`}>
            <div className='modal-checkout__content__group__placeholder'>?????a ch??? c??? th???</div>
            <input
              className='modal-checkout__content__group-3-input'
              placeholder='?????a ch??? c??? th???'
              name="address_detail"
              type="text"
              value={state.address_detail}
              onChange={onChangeInput}
              required
            />
          </div>
        </div>

        <div className='modal-checkout__content__group'>
          <img className='modal-checkout__content__group-img' src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2018/08/Google-Maps.jpeg?fit=950%2C475&ssl=1" alt="" />
        </div>

        <div className="auth-form__controls auth-form__controls--size-s">
          <button type='button' onClick={handleCloseModal} className="btn btn--normal auth-form__controls-back">TR??? L???I</button>
          <button className="btn btn--primary">HO??N TH??NH</button>
        </div>
      </form>
    </div>
  );
};


export default ModalCheckout;