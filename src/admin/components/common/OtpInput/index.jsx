import React from "react";
import PropTypes from "prop-types";

import * as S from "./styled";

const OtpInput = ({ width = "52px", height = "52px", ...props }) => {
  return <S.OtpInputCustom width={width} height={height} {...props} />;
};

OtpInput.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default OtpInput;
