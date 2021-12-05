import styled from 'styled-components';

export const Layout = styled.div`
    width: 100%;
`

export const Tabs = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & div:first-child{
        border-top-left-radius: 10px;
    }

    & div:last-child{
        border-top-right-radius: 10px;
    }
`

export const Item = styled.div`
    padding: 16px 30px;
    background: #ffffff;
    position: relative;
    cursor: pointer;
    
    & h2 {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: ${(props) => props.active ? ' #4361EE' : '#1A2542'};
    }

    &::before{
        position: absolute;
        bottom: -3px;
        left: 0;
        content: "";
        height: 3px;
        width: 100%;
        background: ${(props) => props.active ? ' #4361EE' : null};
    }
`

export const Content = styled.div`
    margin-top: 3px;
    background: #ffffff;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.11);
    border-radius: 0px 10px 10px 10px;
    padding: 45px 70px;
`
