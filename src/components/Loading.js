import React from 'react';
import '../css/loading.css'

const Loading = () => {
  return (
    <section className="overlay">
      <div className="overlay-main">
        {/* <div class="shapes-5"></div> */}
        <div className="spinner-7"></div>
      </div>
    </section>
  );
};

export default Loading;