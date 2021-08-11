import React, {useState, useEffect} from 'react';
import Purchase from '../components/user/Purchase';
import Footer from '../components/footer/Footer'
import Profile from '../components/user/Profile';
import Sidebar from '../components/user/sidebar';
import Notifications from '../components/user/Notifications';

import {useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'

const User = () => {
  const infoCustomer = useSelector(state => state.lo.infoCustomer);
  const users = useSelector(state => state.lo.users);
  const [value, setValue] = useState(0)
  const [infoUser, setInfoUser] = useState({})

  const { url } = useParams();
  const arr = [<Profile infoUser={infoUser}/>, <Purchase/>, <Notifications/>]
  

  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem('login'))
    const userCurrent = users.find(x => x.idUser === user.id)
    setInfoUser(userCurrent)
  }, [users])



  useEffect(() => {

    switch (url) {
      case 'profile':
        setValue(0)
        break;
      case 'purchase':
        setValue(1)
        break;
      case 'notifications':
        setValue(2)
        break;
      default: 
        setValue(0)
        break;
    }
  }, [url]);

  return (
    <main className="container grid">
      <section className="grid__row container__content">
        <div className="grid__column-2">
          <Sidebar 
            infoCustomer={infoCustomer}
            numActive={value}
            setNumActive={setValue}
          />
        </div>
        <div className="grid__column-10">
        {
          arr[value]
        }
        </div>
      </section>
      <Footer/>
    </main>
  );
};

export default User;