import styled from 'styled-components';

export const PostOrderPage1 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
`;
export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 50px;
`;
export const ButtonDiv = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  margin: ${(props) => props.margin};
  box-sizing: border-box;
  background: white;
  box-shadow: 0px 2px 3px 0px #00000033;
`;
export const ButtonInner = styled.div`
  width: 100%;
  height: 100%;
  border: 1px dashed #dce0ea;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: white;
  h1 {
    font-size: ${(props) => props.fontSize};
    font-style: normal;
    font-weight: 500;
    line-height: 34px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #303841;
    margin-left: 10px;
  }
  &:hover {
    background: #f5f4f489;
  }
`;
export const TitleGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid #dce0ea;
  margin-bottom: 25px;
  h1 {
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #303841;
    margin-bottom: 15px;
  }
`;
export const OrderFormMade = styled.div`
  width: 100%;
  min-height: 108px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 2px 3px 0px #00000033;
  border-left: 3px solid #d72323;
  margin-bottom: 15px;
  background: white;
  padding: 0 25px;
  svg {
    cursor: pointer;
  }
`;
export const OrderFormMadeInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  h1 {
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #303841;
    margin-bottom: 8px;
  }
`;
export const OrderFormMadeContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  p {
    display: block;
    width: 65%;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-align: left;
    margin-left: 10px;
  }
`;
