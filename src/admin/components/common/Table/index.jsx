import React from 'react';
import PropTypes from 'prop-types';
import TableX from './style';

const Table = ({ dataSource, columns, ...rest }) => (
  <>
    <TableX dataSource={dataSource} columns={columns} bordered {...rest} />
  </>
);

Table.propTypes = {
  dataSource: PropTypes.array,
  columns: PropTypes.array.isRequired,
};

export default Table;
