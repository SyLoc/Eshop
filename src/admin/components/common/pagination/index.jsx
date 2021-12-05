import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CustomPagination, PaginationField } from './styled';

const Pagi = ({ total, marginTop, marginBot, ...rest }) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <PaginationField marginTop={marginTop} marginBot={marginBot}>
      <CustomPagination total={total} current={page} onChange={handlePageChange} {...rest} />
    </PaginationField>
  );
};
Pagi.propTypes = {
  total: PropTypes.number,
  marginTop: PropTypes.string,
  marginBot: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
export default Pagi;
