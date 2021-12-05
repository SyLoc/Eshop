import React from "react";
import PropTypes from "prop-types";

import {
  ButtonGray,
  ButtonPrimary,
  ButtonSecondary,
  ButtonBase,
} from "./styled";

function Button({
  buttonType,
  children,
  size,
  width,
  disabled,
  textTransform,
  padding,
  borderRadius,
  dashed,
  margin,
  ...rest
}) {
  switch (buttonType) {
    case "gray":
      return (
        <ButtonGray
          size={size}
          width={width}
          disabled={disabled}
          textTransform={textTransform}
          padding={padding}
          borderRadius={borderRadius}
          dashed={dashed}
          margin={margin}
          {...rest}
        >
          {children}
        </ButtonGray>
      );

    case "primary":
      return (
        <ButtonPrimary
          size={size}
          width={width}
          disabled={disabled}
          textTransform={textTransform}
          padding={padding}
          borderRadius={borderRadius}
          dashed={dashed}
          margin={margin}
          {...rest}
        >
          {children}
        </ButtonPrimary>
      );

    case "secondary":
      return (
        <ButtonSecondary
          size={size}
          width={width}
          disabled={disabled}
          textTransform={textTransform}
          padding={padding}
          borderRadius={borderRadius}
          dashed={dashed}
          margin={margin}
          {...rest}
        >
          {children}
        </ButtonSecondary>
      );

    default:
      return (
        <ButtonBase
          size={size}
          textTransform={textTransform}
          padding={padding}
          borderRadius={borderRadius}
          margin={margin}
          {...rest}
        >
          {children}
        </ButtonBase>
      );
  }
}

export default Button;

Button.propTypes = {
  buttonType: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  width: PropTypes.string,
  disabled: PropTypes.bool,
  textTransform: PropTypes.any,
  padding: PropTypes.string,
  borderRadius: PropTypes.any,
  dashed: PropTypes.string,
};
