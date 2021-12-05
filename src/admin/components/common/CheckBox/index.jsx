import React from 'react';
import PropTypes from 'prop-types';

import { useController } from 'react-hook-form';
import { CustomCheckbox, CustomCheckboxGroup, ErrorMessage } from './styled';

const CheckBox = ({ group, disabled, onChange, control, name, errorMessage, options, ...rest }) => {
  if (group) {
    return (
      <>
        <CustomCheckboxGroup
          options={options}
          disabled={disabled}
          onChange={() => {
            if (onchange) {
              onchange();
            }
          }}
          {...rest}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </>
    );
  }
  return (
    <>
      <CustomCheckbox
        disabled={disabled}
        onChange={() => {
          if (onchange) {
            onchange();
          }
        }}
        {...rest}
      />

      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </>
  );
};

export default CheckBox;

CheckBox.propTypes = {
  group: PropTypes.bool,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  control: PropTypes.object,
  name: PropTypes.string,
  errorMessage: PropTypes.string,
};
