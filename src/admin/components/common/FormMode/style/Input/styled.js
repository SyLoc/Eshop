import styled, { css } from 'styled-components';

export const height = {
  sm: '34px',
  base: '44px',
  medium: '48px',
  lg: '52px',
};
export const width = {
  full: '100%',
};

export const InputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBot};
  width: ${(props) => props.width};
  margin-right: ${(props) => props.marginRight};
`;
export const LabelInput = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #303841;
  margin-bottom: 8px;
  cursor: pointer;
`;
export const InputField = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  border: ${(props) =>
    props.background !== "none" ? " 1px solid #dce0ea" : "none"};
  border-radius: 5px;
  overflow: hidden;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "5px"};
  background: ${(props) => (props.background ? props.background : "white")};
  padding: ${(props) => (props.padding ? props.padding : "0")};
  &:hover {
    box-shadow: ${(props) =>
      props.background !== "none" ? " 0px 4px 8px 0px #33333340" : "none"};
  }

  ${(props) =>
    props.typeInfo === 'number' &&
    css`
      border: 1px solid #303841;
    `}
  ${(props) =>
    props.value &&
    props.typeInfo === 'number' &&
    css`
      border: 1px solid #d72323;
    `}
    ${(props) =>
    props.wrong &&
    css`
      border: 1px solid #d72323;
    `}

    input[type='number'] {
    -moz-appearance:textfield;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`;
export const BoxIcon = styled.div`
  width: 48px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const InputArea = styled.input`
  flex-grow: 1;
  font-family: 'Roboto';
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  font-style: normal;
  background: ${(props) => (props.background ? 'none' : 'white')};
  font-weight: ${(props) => (props.font ? 700 : 400)};
  padding: ${(props) => (props.inputPadding ? props.inputPadding : '0 16px')};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '20px')};
  letter-spacing: 0em;
  text-align: left;
  color: ${(props) => (props.textColor ? props.textColor : '#868a96')};

  &::placeholder {
    font-family: 'Roboto';
    font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
    font-style: normal;
    font-weight: ${(props) =>
      props.placeholderFontWeight ? props.placeholderFontWeight : '400 !important'};
    line-height: ${(props) => (props.lineHeight ? props.lineHeight : '20px')};
    letter-spacing: 0em;
    text-align: left;
    color: ${(props) => (props.placeholderColor ? props.placeholderColor : '#868a96')};
    letter-spacing: 0em;
    opacity: ${(props) => (props.placeholderOpacity ? props.placeholderOpacity : '1')};
  }
  &:focus {
    color: ${(props) => (props.textColor ? props.textColor : '#303841')};
  }

  ${(props) =>
    props.Icon &&
    css`
      padding: 0;
    `}

  ${(props) =>
    props.isSearch === true &&
    css`
      padding: 0;
    `} 
  ${(props) =>
    props.typeInfo === 'number' &&
    css`
      font-family: 'Roboto';
      font-size: 21px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0.02em;
      text-align: center;
      width: 20px;
      height: 30px;
    `}
    ${(props) =>
    props.value &&
    css`
      color: #303841;
    `}
    ${(props) =>
    props.wrong &&
    css`
      font-weight: 700;
    `}
`;

export const ErrorMessage = styled.div`
  display: flex;
  gap: 4px;
  height: max-content;
  margin-top: 10px;
  align-items: center;

  & > p {
    color: ${({ theme }) => theme.colors.red};
    font-style: italic;
    font-size: 14px;
  }

  & > span {
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const GroupIconBox = styled.div`
  margin-right: 20px;
  svg {
    margin-left: 10px;
    cursor: pointer;
  }
`;
