import React from "react";

import PropTypes from "prop-types";

import { DatePicker as DatePickerBase } from "antd";

import { useController } from "react-hook-form";
import styled from "styled-components";

import { ReactComponent as WarningIcon } from "assets/images/icons/warning-icon.svg";

const dateFormat = "DD/MM/YYYY";

export const ErrorMessage = styled.div`
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

const { RangePicker } = DatePickerBase;

function DatePicker({ rangePicker, control, name, errorMessage, ...rest }) {
  const {
    field: { ...datePickerProps },
  } = useController({
    name,
    control,
  });

  return (
    <>
      {rangePicker ? (
        <RangePicker format={dateFormat} {...datePickerProps} {...rest} />
      ) : (
        <DatePickerBase format={dateFormat} {...datePickerProps} {...rest} />
      )}

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

DatePicker.propTypes = {
  rangePicker: PropTypes.bool,
  control: PropTypes.object,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default DatePicker;
