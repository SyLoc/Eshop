import styled from 'styled-components';

export const BotArea = styled.div`
  width: 100%;
  overflow-x: auto;
`;
export const BotField = styled.div`
  min-width: 1672px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 40px;
  box-sizing: border-box;
`;
export const BotBox = styled.div`
  width: calc(100% / 3);
  height: 469px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 2px 3px 0px #00000033;
  background: white;
  margin: ${(props) => (props.margin ? props.margin : '')};
`;
export const HeaderBox = styled.div`
  width: 100%;
  height: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  border-bottom: 1px solid #dce0ea;
  h1 {
    font-size: 19px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #303841;
  }
`;
export const HeaderWithIcon = styled.div`
  display: flex;
`;
export const OverViewCustomerBox = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 11px;
  padding: 0 25px;
`;
export const OverViewProductBox = styled.div`
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-top: 17px;
  padding: 0 8px 0 25px;
`;
export const OverViewProduct = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: 375px;
  overflow-y: auto;
  padding-right: 8px;
`;
export const OverViewField = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: ${(props) => (!props.noBorder ? '1px solid #DCE0EA' : '')};
  h5 {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #303841;
  }
`;
export const NumberOverView = styled.div`
  display: flex;
  align-items: center;
  h6 {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-align: left;
  }
`;
export const NumberCircle = styled.div`
  padding: 3px 8px;
  border-radius: 20px;
  background: rgba(215, 35, 35, 0.15);
  color: #d72323;
  margin-left: 8px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: left;
`;
export const BoxDatePicker = styled.div`
  height: 100%;
  width: 140px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
