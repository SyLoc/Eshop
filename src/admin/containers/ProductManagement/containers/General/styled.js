import styled from 'styled-components';
import Table from 'admin/components/common/Table';

export const TextName = styled.div`
    color: #4361EE;
    min-width: 150px;
`

export const TextPercent = styled.div`
    color: ${(props) =>  props.percent <= 90 ? '#F8982A' : '#07A717'};
`

export const TableWrap = styled.div`
    width: 100%;
    overflow-x: auto;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.11);
    border-radius: 5px;
    margin-bottom: 20px;
` 

export const TableCustom = styled(Table)`

    .ant-table-thead>tr>th{
        height: 60px;
        background: #526084;
        color: #ffffff;
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        border-left: 1px solid #717B97;
    }
    
`
export const Actions = styled.div`
    display: flex;
    align-items: center;
    min-width: 100px;
    justify-content: center;

    & button:first-child{
        margin-right: 10px;
    }

    & button {
        background: none;
        border: none;
        cursor: pointer;
    }
`
