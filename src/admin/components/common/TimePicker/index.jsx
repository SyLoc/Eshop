import React from 'react';
import PropTypes from 'prop-types';
import { TimePicker as CustomTimePicker } from 'antd';

import { useController } from 'react-hook-form';
import styled from 'styled-components';

const ErrorMessage = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primaryButtonColor};
  margin-top: 6px;
`;

const timeFormat = 'HH:mm';

function TimePicker({ control, name, errorMessage, ...rest }) {
  return (
    <>
      <CustomTimePicker format={timeFormat} {...rest} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
}

TimePicker.propTypes = {
  control: PropTypes.object,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default TimePicker;
