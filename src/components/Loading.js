import React from 'react';
import '../css/loading.css'

const Loading = () => {
  return (
    <section className="modal modal--show">
      <div className="modal__overlay modal__overlay--bg-white">
        <div className="modal__body">
          {/* <div class="shapes-5"></div> */}
          <div className="spinner-7"></div>  
        </div>
      </div>
    </section>
  );
};

export default Loading;