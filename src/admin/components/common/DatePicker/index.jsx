import React from 'react';

import PropTypes from 'prop-types';

import { DatePicker as DatePickerBase } from 'antd';

import styled from 'styled-components';

const dateFormat = 'DD/MM/YYYY';

const ErrorMessage = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primaryButtonColor};
  margin-top: 6px;
`;

const { RangePicker } = DatePickerBase;

function DatePicker({ rangePicker, control, name, errorMessage, ...rest }) {
  return (
    <>
      {rangePicker ? (
        <RangePicker format={dateFormat} {...rest} />
      ) : (
        <DatePickerBase format={dateFormat} {...rest} />
      )}

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
