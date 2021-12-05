import React from 'react';
import PropTypes from 'prop-types';

import { useController } from 'react-hook-form';
import { CustomCheckbox, CustomCheckboxGroup, ErrorMessage } from '../CheckBox/styled';

import { ReactComponent as WarningIcon } from "assets/images/icons/warning-icon.svg";

const CheckBox = ({ group, disabled, onChange, control, name, errorMessage, options, ...rest }) => {
  const {
    field: { value, ...timePickerProps },
  } = useController({
    name,
    control,
  });

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
          {...timePickerProps}
          {...rest}
        />
        {errorMessage && <ErrorMessage>
            <span>
              <WarningIcon />
            </span>
            <p>{errorMessage}</p>
          </ErrorMessage>}
      </>
    );
  }
  return (
    <>
      <CustomCheckbox
        disabled={disabled}
        checked={value}
        onChange={() => {
          if (onchange) {
            onchange();
          }
        }}
        {...timePickerProps}
        {...rest}
      />

      {errorMessage && <ErrorMessage>
            <span>
              <WarningIcon />
            </span>
            <p>{errorMessage}</p>
          </ErrorMessage>}
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
