import React from "react";
import PropTypes from "prop-types";

import { useController } from "react-hook-form";
import { RadioCustom, RadioGroupCustom } from "../Radio/styled";
import styled from "styled-components";

import { ReactComponent as WarningIcon } from "assets/images/icons/warning-icon.svg";

const ErrorMessage = styled.div`
  display: flex;
  gap: 4px;
  height: max-content;
  margin-top: 10px;
  align-items: center;

  & > p {
    color: ${({ theme }) => theme.colors.primaryButtonColor};
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

const Radio = ({
  group,
  valueItem,
  disabled,
  options,
  control,
  name,
  errorMessage,
  ...rest
}) => {
  const {
    field: { value, onChange, ...radioProps },
  } = useController({
    name,
    control,
  });

  if (group) {
    return (
      <>
        <RadioGroupCustom
          {...radioProps}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((item, i) => (
            <RadioCustom key={i} value={item.value}>
              {item.label}
            </RadioCustom>
          ))}
        </RadioGroupCustom>
        {errorMessage && (
          <ErrorMessage>
            <span>
              <WarningIcon />
            </span>
            <p>{errorMessage}</p>
          </ErrorMessage>
        )}
      </>
    );
  }

  return (
    <>
      <RadioCustom
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        value={valueItem}
        {...radioProps}
        {...rest}
      />
      {errorMessage && (
        <ErrorMessage>
          <span>
            <WarningIcon />
          </span>
          <p>{errorMessage}</p>
        </ErrorMessage>
      )}
    </>
  );
};

Radio.propTypes = {
  group: PropTypes.bool,
  valueItem: PropTypes.any,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  control: PropTypes.object,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default Radio;
