import styled from 'styled-components';

export const SelectDeliField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;
export const LabelFakeSelect = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #303841;
  margin-bottom: 8px;
`;
export const FakePlaceHolder = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #868a96;
`;
export const SelectDeli = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #dce0ea;
  border-radius: 5px;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 4px 8px 0px #33333340;
  }
`;
export const FakeSelect = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;
  background: #f8f8f8;
  overflow: hidden;
`;
export const FakeSelectOption = styled.div`
  width: 100%;
  padding: 13px 0 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #dce0ea;
`;
export const FakeOptionList = styled.div`
  width: 100%;
  overflow-y: auto;
  height: 300px;
  margin-bottom: 20px;
`;
export const FakeField = styled.div`
  width: 100%;
  padding: 0 16px;
  margin-bottom: 7px;
`;
export const FakeFieldList = styled.div`
  width: 100%;
  padding-left: 16px;
`;
export const ChosenProductList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const ChosenProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-align: left;
  }
  svg {
    cursor: pointer;
  }
`;
