import styled from 'styled-components';

export const CardBlockBox = styled.div`
  min-width: 1370px;
  display: flex;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0')};
  margin-bottom: ${(props) => (props.marginBot ? props.marginBot : '0')};
`;
export const CardBlockContent = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.bgColor};
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 0 0 rgba(0, 0, 0, 0.1);
`;
export const CardBlockHeader = styled.div`
  width: 100%;
  height: calc(100% / 3);
  border-bottom: 1px dashed #dce0ea;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardBlockBody = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 15px;
`;
export const ItemHeader = styled.div`
  height: 30px;
  width: ${(props) => props.width};
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Pheader = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: 18px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #868a96;
`;
export const ItemBody = styled.div`
  height: 100%;
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  a {
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 18px;
    letter-spacing: 0.02em;
    text-align: left;
    margin-top: 6px;
    color: #868a96;
    text-decoration: underline;
  }
  h5 {
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #868a96;
    margin-top: 6px;
  }
`;
export const Pstatus = styled.p`
  font-size: 14px;
  font-style: italic;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #868a96;
`;
export const WarningBox = styled.div`
  display: flex;
  align-items: center;
  margin-right: 13px;
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    line-height: 20px;
    letter-spacing: 0.02em;
    text-align: left;
    margin-left: 5px;
  }
`;
export const Content = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  line-height: 22px;
  letter-spacing: 0.02em;
  text-align: left;
  margin-bottom: 6px;
  color: ${(props) => props.textColor};
  margin-right: 3px;
`;
export const FieldContent = styled.div`
  display: flex;
`;
export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: flex-start;
`;
