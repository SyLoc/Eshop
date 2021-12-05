import styled from 'styled-components';

export const CartWrap = styled.div`
    padding: 10px;
    background-color: #ffffff;
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 100px;
        height: 100px;
        object-fit: cover;
    }
`

export const Content = styled.div`
    


    h2 {
        font-size: 2rem;
        color:var(--black);
        padding-top: 1rem;
    }

    p{
        font-size: 1.5rem;
        color:#666;
        padding:1rem 0;
    }
`