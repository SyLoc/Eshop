import styled from 'styled-components';

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
export const BtnCustom = styled.button`
    background: '#F8F9FE';
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.1em;
    color: #969DAF;
    text-transform: uppercase;
    padding: 9px 16px;
    border: 1px dashed #DCE0EA;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 16px;
`

export const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    border: 1px solid #DCE0EA;
`