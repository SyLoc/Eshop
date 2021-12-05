import styled from 'styled-components';

export const PicField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 24px;
  border-bottom: 1px solid #dce0ea;
  margin-bottom: 24px;
`;
export const RedHeader = styled.h1`
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #d72323;
`;
export const PicGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;
  margin-top: 20px;
`;
export const PicItem = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const BlackHeader = styled.h1`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #303841;
  margin-bottom: 12px;
`;
export const PicBox = styled.div`
  width: 100%;
  height: 124px;
  border: 1px dashed #868a96;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  h1 {
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    color: #868a96;
    margin-top: 20px;
    margin-bottom: 26px;
  }
  svg {
    cursor: pointer;
  }
`;
export const InfoGroup2Son = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  box-sizing: border-box;
  margin-bottom: 12px;
`;
export const InfoGroup1 = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-right: 10px;
`;
export const InfoGroup2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const DateGroup = styled.div`
  width: 100%;
  margin-left: 10px;
  h6 {
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 8px;
  }
  div {
    height: 52px;
  }
`;
export const ImgGroup = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 15px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-align: left;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const AvatarArea = styled.div`
  width: 123px;
  height: 123px;
  position: relative;
  display: flex;
  align-items: flex-end;
  border-radius: 50%;
  overflow: hidden;
`;
export const AvatarImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #dce0ea;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.4;
`;
export const CameraImg = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #dce0ea;
  cursor: pointer;
  z-index: 100000;
  transition: 0.2s;
  &:hover {
    background: #c7cbd4;
  }
`;
export const Footer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
`;
export const Authority = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 23px 0 20px 31px;
  box-shadow: 0px 2px 0px 0px #d72323 inset;
  border-radius: 5px;
  background: #f8f8f8;
`;
export const BoxRadio = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-align: left;
    margin-left: 10px;
  }
`;
export const Assign = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const DayStart = styled.div`
  width: 323px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 24px;
  margin-bottom: 27px;
`;
export const WorkTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;
