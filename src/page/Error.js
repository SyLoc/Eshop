import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import Loading from '../components/Loading';


const Error = () => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  },[]);

  if(loading){
    return(
      <>
        <Loading/>
      </>
    )
  }

  return (
    <section className='section-center' >
      <h1>This is Error Page</h1>
      <Link className='btn' to='/'> Back home</Link>
    </section>
  );
};


export default Error;