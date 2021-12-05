import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import styled from "styled-components";

import { useController } from "react-hook-form";

import { ReactComponent as WarningIcon } from "assets/images/icons/warning-icon.svg";

const colourStyles = {
  option: (styles, { isDisabled, isFocused }) => ({
    ...styles,
    backgroundColor: "none",
    color: isFocused ? "#333333" : "#999999",
    cursor: isDisabled ? "no-drop" : "pointer",
    "&:active": {
      backgroundColor: "white",
    },
  }),
  control: (base, { selectProps: { typeFlexSelect, height, width } }) => ({
    ...base,
    cursor: "pointer",
    fontSize: "16px",
    height: height || "",
    width: width || "",
    "&:hover": {
      boxShadow: "0px 4px 8px rgba(51, 51, 51, 0.25)",
      borderColor: "#333333",
    },
    borderColor: '#dce0ea !important',
    border: typeFlexSelect ? "none" : "1px solid #dce0ea",
    // boxShadow: !state.hasValue ? 'none' : '0 0 0 1px #333333',
    boxShadow: "none",
  }),
  indicatorSeparator: () => ({}),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    transform: state.selectProps.menuIsOpen && "rotate(180deg)",
    svg: {
      fill: "#333333",
    },
  }),
  singleValue: (base, { selectProps: { fontSize } }) => ({
    ...base,
    paddingLeft: "8px",
    fontSize: fontSize,
    overflow: "visible",
  }),
  placeholder: (base, { selectProps: { fontSize } }) => ({
    ...base,

    fontSize: fontSize,
    color: "#868A96",
    padding: '8px',
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
  asyncSelect = false,
  promiseOptions,
  marginTop = "2px",
  ...rest
}) => {
  const {
    field: { ...selectProps },
  } = useController({
    name,
    control,
  });
  return (
    <>
      <div
        style={{
          display: `${typeFlexSelect ? "flex" : "block"}`,
          alignItems: `${typeFlexSelect ? "center" : ""}`,
          whiteSpace: "nowrap",
        }}
      >
        {label && (
          <LabelSelect
            typeFlexSelect={typeFlexSelect}
            fontWeight={fontWeightOfLabel}
          >
            {label}
          </LabelSelect>
        )}
        <div
          style={{
            marginTop: `${marginTop}`,
            marginLeft: `${typeFlexSelect ? "10px" : "0"}`,
          }}
        >
          {asyncSelect ? (
            <AsyncSelect
              options={data}
              typeFlexSelect={typeFlexSelect}
              styles={colourStyles}
              isSearchable={false}
              isOptionDisabled={(option) => option.disabled}
              cacheOptions
              defaultOptions
              loadOptions={promiseOptions}
              {...selectProps}
              {...rest}
            />
          ) : (
            <Select
              options={data}
              typeFlexSelect={typeFlexSelect}
              styles={colourStyles}
              isSearchable={false}
              isOptionDisabled={(option) => option.disabled}
              {...selectProps}
              {...rest}
            />
          )}
        </div>
        {errorMessage && (
          <ErrorMessage>
            {/* <span>
              <WarningIcon />
            </span> */}
            <p>{errorMessage}</p>
          </ErrorMessage>
        )}
      </div>
    </>
  );
};
const LabelSelect = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #303841;
`;
export const ErrorMessage = styled.div`
  display: flex;
  gap: 4px;
  height: max-content;
  margin-top: 10px;
  align-items: center;

  & > p {
    color:#F44336;
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

export default SelectInput;

SelectInput.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  fontWeightOfLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  typeFlexSelect: PropTypes.bool,
  control: PropTypes.object,
  name: PropTypes.string,
  promiseOptions: PropTypes.func,
  marginTop: PropTypes.string,
};
