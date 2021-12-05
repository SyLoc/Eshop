import OtpInput from "react-otp-input";
import styled from "styled-components";

export const OtpInputCustom = styled(OtpInput)`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 5px;
  padding: 16px;
  border: 1px solid #d72323;

  font-family: Roboto;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.02em;
  text-align: center;

  &:hover {
    box-shadow: 0px 8px 19px 0px #00000024;
  }
`;
