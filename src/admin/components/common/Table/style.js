import styled from 'styled-components';
import { Table as TableBase } from 'antd';

const TableX = styled(TableBase)`
  .ant-table-thead > tr > th {
    background-color: ${({ theme }) => theme.colors.bgGray1};
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.dark};
  }

  .ant-table-tbody > tr > td {
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.dark};
  }

  .ant-table-row:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.bgGray2};
  }

  .ant-table-cell { 
    text-align: center;
    text-transform: none;
  }

  .ant-table-cell:nth-child(2) {
    text-align: left;
  }

  .ant-pagination {
    display: none;
  }

  .ant-table-thead>tr>th{
    height: 60px;
    background: ${({ theme }) => theme.colors.blue2};
    color: ${({ theme }) => theme.colors.white};
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    border-left: 1px solid ${({ theme }) => theme.colors.gray6};
  }
`;

export default TableX;
