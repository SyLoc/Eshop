import React from 'react';
import { Link } from 'react-router-dom'

const Notifications = () => {
  return (
    <main className="container grid">
      <section className="grid__row container__content">
        <div className="grid__column-2">
          <div>
            <Link to='/user/account'>tài khoản của tôi</Link>
            <Link to='/user/purchase'>đơn mua</Link>
            <Link to='/user/notifications'>thông báo</Link>
          </div>
        </div>
        <div className="grid__column-10">
          <h2>this is account page</h2>
        </div>
      </section>
      {/* <Footer/> */}
    </main>
  );
};


export default Notifications;