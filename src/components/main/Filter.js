import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {FaAngleDown,FaAngleLeft,FaAngleRight,FaCheck} from 'react-icons/fa'

import {FILTER_LABEL, FILTER_PRICE} from '../../constant/constants'

const Filter = () => {
  const [turnOnPopular, setTurnOnPopular] = useState(true)
  const [turnOnNew, setTurnOnNew] = useState(false)
  const [turnOnSell, setTurnOnSell] = useState(false)
  const [priceLowtoHigh, setPriceLowtoHigh] = useState(false)
  const [priceHightoLow, setPriceHightoLow] = useState(false)
  const [priceLabel, setPriceLabel] = useState('Giá')
  const dispatch = useDispatch();

  const handleFilter = (label) =>{
    let newFilter = {
      type: FILTER_LABEL,
      payload: `${label}`
    }
    dispatch(newFilter)

    setPriceLowtoHigh(false)
    setPriceHightoLow(false)
    setPriceLabel('Giá')

    if( label === 'popular'){
      setTurnOnNew(false)
      setTurnOnSell(false)
      setTurnOnPopular(true)
    }
    if( label === 'new'){
      setTurnOnPopular(false)
      setTurnOnSell(false)
      setTurnOnNew(true)
    }
    if( label === 'sell'){
      setTurnOnNew(false)
      setTurnOnPopular(false)
      setTurnOnSell(true)
    }
  }

  const handleFilterPrice = (label) =>{
    let newFilter = {
      type: FILTER_PRICE,
      payload: `${label}`
    }
    dispatch(newFilter)

    setTurnOnNew(false)
    setTurnOnSell(false)
    setTurnOnPopular(false)

    if(label ==='LowtoHigh'){
      setPriceHightoLow(false)
      setPriceLowtoHigh(true)
      setPriceLabel('Giá: Thấp đến cao')
    }
    if(label ==='HightoLow'){
      setPriceLowtoHigh(false)
      setPriceHightoLow(true)
      setPriceLabel('Giá: Cao đến thấp')
    }
  }

  return (
    <article className="home-filter">
      <span className="home-filter__label">Sắp xếp theo</span>
      <button onClick={() => handleFilter('popular')} 
        className={`home-filter__btn btn ${turnOnPopular ? 'btn--primary': null }`}
      >Phổ biến</button>

      <button onClick={() => handleFilter('new')} 
        className={`home-filter__btn btn ${turnOnNew ? 'btn--primary': null }`}
      >Mới nhất</button>

      <button onClick={() => handleFilter('sell')} 
        className={`home-filter__btn btn ${turnOnSell ? 'btn--primary': null }`}
      >Bán chạy</button>

      <div className="select-input">
        <span style={{
          color: `${priceLabel === 'Giá' ? "#333" : "#EE4D2D"}`
        }} className="select-input__label">{priceLabel}</span>
        <i className="select-input-icon"><FaAngleDown/></i>

        <ul className="select-input__list">
          <li className={`select-input__item ${priceLowtoHigh ? 'select-input__item--active' : null}`}>
            <button onClick={() => handleFilterPrice('LowtoHigh')} className="select-input__item-btn">Giá: Thấp đến cao</button>
            <i className="select-input__item-icon"><FaCheck/></i>
          </li>
          <li className={`select-input__item ${priceHightoLow ? 'select-input__item--active' : null}`}>
            <button onClick={() => handleFilterPrice('HightoLow')} className="select-input__item-btn">Giá: Cao đến thấp</button>
            <i className="select-input__item-icon"><FaCheck/></i>
          </li>
        </ul>
      </div>

      <div className="home-filter__page">
        <span className="home-filter__page-num">
          <span className="home-filter__page-current">1</span>
          / 14
        </span>

        <div className="home-filter__page-control">
          <a href="/about" className="home-filter__page-btn home-filter__page-btn--disabled">
            <i className="home-filter__page-btn-icon"><FaAngleLeft/></i>
          </a>
          <a href="/about" className="home-filter__page-btn">
            <i className="home-filter__page-btn-icon"><FaAngleRight/></i>
          </a>
        </div>
      </div>
    </article>
  );
};


export default Filter;