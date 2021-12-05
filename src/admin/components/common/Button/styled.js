import styled from 'styled-components';
import * as Theme from 'styles/theme';

const { colors, fontWeight } = Theme.default;

export const width = {
  auto: 'auto',
  wFull: '100%',
};

export const ButtonBase = styled.button`
  display: block;
  padding: ${(props) => props.padding};
  cursor: pointer;
  font-weight: ${fontWeight.extraBold};
  border-radius: ${(props) => props.borderRadius};
  border: none;
  color: ${colors.white};
  background-color: #007bff;
  text-transform: ${(props) => (props.textTransform === 'uppercase' ? 'uppercase' : '')};
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
  }
`;

export const ButtonGray = styled(ButtonBase)`
  color: ${colors.grayButtonColor};
  background-color: ${colors.white};
  width: ${(props) => props.width};
  position: relative;
  margin: ${(props) => props.margin};
  &:before {
    content: '';
    position: absolute;
    border-radius: ${(props) => props.borderRadius};
    border: ${(props) =>
      props.dashed === 'dashed'
        ? `1px dashed ${colors.grayButtonColor}`
        : `1px solid ${colors.grayButtonColor}`};
    left: 0;
    top: 0;
    width: calc(100% - 2px);
    height: 93%;
  }
  &:hover:before {
    border-width: 2px;
  }
  &:hover {
  }
  &:active {
    transform: translateY(1px);
  }
  &:disabled {
    background: ${colors.gray3};
    color: ${colors.white};
    opacity: 1 !important;
  }
`;

export const ButtonPrimary = styled(ButtonBase)`
  color: ${colors.white};
  background-color: ${colors.blueMain};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  /* border-radius: .5rem;
  border:.2rem solid ${colors.mainBlack}; */
  padding:.8rem 3rem;
  font-weight: bolder;
  font-size: 1.7rem;
  &:hover {
    opacity: ${(props) => (props.hover ? 1 : 0.8)};
    box-shadow: ${(props) => (props.hover ? 'none' : ' 0px 4px 6px 0px #4361ee8c')};
    background: ${(props) => (props.hover ? props.hover : '#4361EE')};
  }
  &:active {
    transform: translateY(1px);
    opacity: 1;
  }
  &:disabled {
    background: ${colors.gray3};
    color: ${colors.white};
  }
  &:hover:disabled {
    box-shadow: none;
    opacity: 1 !important;
    transform: none;
  }
`;

export const ButtonSecondary = styled(ButtonBase)`
  color: ${colors.primaryButtonColor};
  background-color: ${colors.white};
  width: ${(props) => props.width};
  position: relative;
  margin: ${(props) => props.margin};
  &:before {
    content: '';
    position: absolute;
    border-radius: ${(props) => props.borderRadius};
    border: 1px solid ${colors.primaryButtonColor};
    left: 0;
    top: 0;
    width: calc(100% - 2px);
    height: 93%;
  }
  &:hover:before {
    border-width: 2px;
  }
  &:active {
    transform: translateY(1px);
  }
  &:active:before {
    border-width: 2px;
  }
  &:disabled:before {
    border: none;
  }
  &:disabled {
    color: ${colors.gray3};
    background-color: ${colors.white};
    border: 1px solid ${colors.gray3};
  }
`;
