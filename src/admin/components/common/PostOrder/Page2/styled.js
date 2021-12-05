import styled from 'styled-components';

export const PostOrderPage2 = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding-bottom: 80px;
`;
export const ButtonFooterPost = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0px -1px 3px 0px #00000033;
`;
export const ButtonArea = styled.div`
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RadioArea = styled.div`
  display: flex;
  align-items: center;
  p {
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #303841;
    margin-left: 3px;
  }
  h5 {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #303841;
    margin-left: 3px;
  }
  h6 {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    color: #d72323;
    margin-left: 3px;
  }
`;
export const BodyPage2 = styled.div`
  width: 100%;
  padding: 15px 20px 0 20px;
`;
export const BackPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`;
export const BackArea = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  h1 {
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-align: left;
    margin-left: 10px;
    cursor: pointer;
  }
`;
export const RadioButtonGroup = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 15px;
`;
export const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RadioGroupItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  h6 {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
    margin-left: 5px;
  }
`;

export const ButtonGroup = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TableForm = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #dce0ea;
  border-right: 1px solid #dce0ea;
  overflow-x: auto;
  position: relative;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;
export const TittleTable = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  height: 70px;
  display: flex;
  align-items: center;
  border-left: 1px solid #dce0ea;
  border-bottom: 1px solid #dce0ea;
  background: white;
  width: 100%;
  min-width: 1671px;
`;
export const TittleItem = styled.div`
  width: ${(props) => props.width};
  min-width: ${(props) => props.minWidth};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.space ? 'space-between' : 'center')};
  align-items: center;
  border-right: 1px solid #dce0ea;
  padding: ${(props) => (props.space ? '5px 0' : '0 5px')};
  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.02em;
    text-align: center;
  }
`;
export const PostField = styled.div`
  width: 100%;
  min-width: 1671px;
  display: flex;
  flex-direction: column;

  max-height: 500px;
`;
