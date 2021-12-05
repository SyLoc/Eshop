import styled from 'styled-components';

export const Area = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
`;
export const FieldSelect = styled.div`
  width: 100%;
  margin-top: ${(props) => props.marginTop};
`;
export const FeeField = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8px;
  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #303841;
    margin-right: 3px;
  }
  h6 {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #d72323;
    margin-right: 3px;
  }
`;
