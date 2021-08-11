import React, { useState, useEffect, useRef } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md'


const AccountItem = ({num, getValue}) => {
  const [openSelect, setOpenSelect] = useState(false)
  const [value, setValue] = useState(1)
  const [number, setNumber] = useState(1)
  
  const ref = useRef();
  useOnClickOutside(ref, () => setOpenSelect(false));

  useEffect(() => {
    if(num.start === 1){
      setNumber(num.end)
    }else{
      setNumber(num.end - num.start + 1)
      setValue(num.start)
    }
  }, [number, num]);

  useEffect(() => {
    getValue(value)
  }, [value, getValue]);

  const handleChoose = (value) =>{
    setValue(value)
    setOpenSelect(false)
  }

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
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }

  return (
    <div ref={ref} className={`dropdown ${openSelect && 'dropdown--show'}`}>
      <div onClick={e => setOpenSelect(!openSelect)} className='dropdown__overlay'></div>
      <input className="dropdown-input" type="text" value={value} readOnly />
      <button className="dropdown-btn"><MdKeyboardArrowDown /></button>
      <div className="dropdown-content">
        {
          [...Array(number)].map((x, index) => {
            return <div key={index} onClick={e => handleChoose(index + num.start)}>{index + num.start}</div>
          })
        }
      </div>
    </div>
  );
};


export default AccountItem;