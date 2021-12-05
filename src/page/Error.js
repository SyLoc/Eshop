import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import Loading from '../components/Loading';


const style = {
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'center'
}

const Error = ({ path='/' }) => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[]);

  if(loading){
    return(
      <>
        <Loading/>
      </>
    )
  }

  return (
    <section style={style} className='section-center' >
      <div>
        <h1>This is Error Page</h1>
        <Link className='btn' to={path}> Back home</Link>
      </div>
    </section>
  );
};


export default Error;