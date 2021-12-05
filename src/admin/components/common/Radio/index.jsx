import React from 'react';
import PropTypes from 'prop-types';
import { RadioCustom, RadioGroupCustom, ErrorMessage } from './styled';

const Radio = ({ group, valueItem, disabled, options, control, name, errorMessage,checked,setChecked, ...rest }) => {
  if (group) {
    return (
      <>
        <RadioGroupCustom>
          {options.map((item, i) => (
            <RadioCustom key={i} value={item.value}>
              {item.label}
            </RadioCustom>
          ))}
        </RadioGroupCustom>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </>
    );
  }

  return (
    <>
      <RadioCustom disabled={disabled} value={valueItem} checked={checked} onClick={()=> setChecked(!checked)} {...rest} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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
  checked: PropTypes.bool,
  setChecked :PropTypes.func,
};

export default Radio;
