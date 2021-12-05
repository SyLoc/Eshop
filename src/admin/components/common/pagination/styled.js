import styled from 'styled-components';
import { Pagination } from 'antd';

export const PaginationField = styled.div`
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBot};
`;
export const CustomPagination = styled(Pagination)`
  .ant-pagination {
    display: flex;
    justify-content: center;
  }
  .ant-pagination-options {
    display: none;
  }
  .ant-pagination-item-link {
    border: none;
  }
  .ant-pagination-item {
    height: ${(props) => props.width};
    width: ${(props) => props.height};
    border: 1px solid #dce0ea;
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    a {
      font-size: ${({ theme }) => theme.fontSize.sm};
      font-style: normal;
      font-weight: ${({ theme }) => theme.fontWeight.regular};
      line-height: 20px;
      letter-spacing: 0em;
      text-align: center;
      color: #303841;
    }

    &:hover {
      a {
        font-weight: ${({ theme }) => theme.fontWeight.bold};
      }
    }
  }
  .ant-pagination-item-active {
    background: ${({ theme }) => theme.colors.blueMain};
    a {
      color: white;
    }
  }
`;
