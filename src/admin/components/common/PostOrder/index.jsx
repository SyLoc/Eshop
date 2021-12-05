import React, { useState } from 'react';
import SiderDemo from '../Layout';
import Page1 from './Page1';
import Page2 from './Page2/index';

import PostOrderPage from './styled';

const PostOrder = () => {
  const [page, setPage] = useState('page1');
  return (
    // active bằng với id ở mock-data
    <SiderDemo title="Đăng đơn" active="5">
      <PostOrderPage>
        {page === 'page1' ? <Page1 setPage={setPage} /> : ''}
        {page === 'page2' ? <Page2 setPage={setPage} /> : ''}
      </PostOrderPage>
    </SiderDemo>
  );
};
export default PostOrder;
