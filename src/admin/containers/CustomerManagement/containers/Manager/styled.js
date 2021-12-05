import styled from 'styled-components';


export const ImageWrap = styled.div`
    margin: 40px auto;
    width: 100px;

    & img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
`

export const resMessage = styled.p`
    color: ${({theme}) => theme.colors.green};
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
    line-height: 20px;
`

export const NoteWrap = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;

    & label{
        font-family: Roboto;
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 20px;
        color: #303841;

    }

    & textarea{
        border: 1px solid #dce0ea;
        border-radius: 5px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: #1A2542;
        outline: none;
        padding: 14px 16px;
    }
`