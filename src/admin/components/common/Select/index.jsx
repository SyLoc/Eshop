import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import styled from 'styled-components';

const colourStyles = {
  option: (styles, { isDisabled, isFocused }) => ({
    ...styles,
    backgroundColor: 'none',
    color: isFocused ? '#333333' : '#999999',
    cursor: isDisabled ? 'no-drop' : 'pointer',
    '&:active': {
      backgroundColor: 'white',
    },
  }),
  control: (base, { selectProps: { typeFlexSelect, height, width } }) => ({
    ...base,
    cursor: 'pointer',
    fontSize: '16px',
    height: height || '',
    width: width || '',
    '&:hover': {
      boxShadow: '0px 4px 8px rgba(51, 51, 51, 0.25)',
      borderColor: '#333333',
    },
    border: typeFlexSelect ? 'none' : '1px solid #DCE0EA',
    // boxShadow: !state.hasValue ? 'none' : '0 0 0 1px #333333',
    boxShadow: 'none',
  }),
  indicatorSeparator: () => ({}),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen && 'rotate(180deg)',
    svg: {
      fill: '#333333',
    },
  }),
  singleValue: (base) => ({}),
  placeholder: (base, { selectProps: { fontSize } }) => ({
    ...base,

    fontSize,
    color: '#C1C1C1',
  }),
};

const SelectInput = ({
  data,
  label,
  typeFlexSelect,
  errorMessage,
  fontWeightOfLabel,
  control,
  name,
  ...rest
}) => (
  <>
    <div
      style={{
        display: `${typeFlexSelect ? 'flex' : 'block'}`,
        alignItems: `${typeFlexSelect ? 'center' : ''}`,
        whiteSpace: 'nowrap',
      }}
    >
      {label && (
        <LabelSelect typeFlexSelect={typeFlexSelect} fontWeight={fontWeightOfLabel}>
          {label}
        </LabelSelect>
      )}
      <div style={{ marginTop: '8px', marginLeft: `${typeFlexSelect ? '10px' : '0'}` }}>
        <Select
          options={data}
          typeFlexSelect={typeFlexSelect}
          styles={colourStyles}
          isSearchable={false}
          isOptionDisabled={(option) => option.disabled}
          {...rest}
        />
      </div>
      {errorMessage && <LabelError>{errorMessage}</LabelError>}
    </div>
  </>
);
const LabelSelect = styled.label`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;
const LabelError = styled.span`
  display: block;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primaryButtonColor};
  margin-top: 6px;
`;

export default SelectInput;

SelectInput.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  fontWeightOfLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  typeFlexSelect: PropTypes.bool,
  control: PropTypes.object,
  name: PropTypes.string,
};
