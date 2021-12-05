import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  InputWrap,
  LabelInput,
  InputField,
  InputArea,
  BoxIcon,
  ErrorMessage,
  GroupIconBox,
} from "./style/Input/styled";
import { ReactComponent as Visible } from "assets/images/svg/visible.svg";
import { ReactComponent as Hidden } from "assets/images/svg/hidden.svg";
import { ReactComponent as Search } from "assets/images/svg/search.svg";

import { ReactComponent as IconInput } from "assets/images/svg/chat/Icon.svg";
import { ReactComponent as Photo } from "assets/images/svg/chat/Photo.svg";
import { ReactComponent as Tune } from "assets/images/svg/chat/Tune.svg";

import { ReactComponent as WarningIcon } from "assets/images/icons/warning-icon.svg";

const InputText = ({
  placeholder,
  typeInput,
  Icon,
  width,
  height,
  typeInfo,
  label,
  isSearch,
  marginTop,
  marginBot,
  inputName,
  onFocus,
  register,
  errorMessage,
  groupIcon,
  searchBonus,
  ...rest
}) => {
  const [show, setShow] = useState(false);
  const [font, setFont] = useState(false);
  const handleShowPass = () => {
    if (show) {
      setShow(false);
    }
    if (show === false) {
      setShow(true);
    }
  };
  const idInput = Math.ceil(Math.random() * 1234);
  return (
    <>
      <InputWrap
        marginTop={marginTop}
        marginBot={marginBot}
        width={width}
        {...rest}
      >
        {label && <LabelInput htmlFor={idInput}>{label}</LabelInput>}
        <InputField width={width} height={height} typeInfo={typeInfo} {...rest}>
          {Icon || isSearch ? (
            <BoxIcon>
              {Icon ? <Icon /> : ""}
              {isSearch ? <Search /> : ""}
            </BoxIcon>
          ) : (
            ""
          )}
          <InputArea
            onBlur={() => setFont(false)}
            font={font}
            id={idInput}
            name={inputName}
            Icon={Icon}
            placeholder={placeholder}
            type={
              typeInput === "password" && show === false ? "password" : "text"
            }
            isSearch={isSearch}
            {...register(inputName)}
            {...rest}
          />
          {typeInput === "password" ? (
            <BoxIcon onClick={handleShowPass}>
              {show ? <Visible /> : <Hidden />}
            </BoxIcon>
          ) : (
            ""
          )}
          {searchBonus && isSearch ? (
            <BoxIcon>
              <Tune />
            </BoxIcon>
          ) : (
            ""
          )}
          {groupIcon ? (
            <GroupIconBox>
              <IconInput />
              <Photo />
            </GroupIconBox>
          ) : (
            ""
          )}
        </InputField>
        {errorMessage ? (
          <ErrorMessage>
            {/* <span>
              <WarningIcon />
            </span> */}
            <p>{errorMessage}</p>
          </ErrorMessage>
        ) : (
          ""
        )}
      </InputWrap>
    </>
  );
};
export default InputText;

InputText.propTypes = {
  placeholder: PropTypes.string,
  typeInput: PropTypes.string,
  typeInfo: PropTypes.string,
  Icon: PropTypes.object,
  width: PropTypes.string,
  height: PropTypes.string,
  label: PropTypes.string,
  isSearch: PropTypes.bool,
  marginTop: PropTypes.string,
  marginBot: PropTypes.string,
  inputName: PropTypes.string,
  onFocus: PropTypes.func,
  register: PropTypes.any,
  errorMessage: PropTypes.any,
  groupIcon: PropTypes.bool,
  searchBonus: PropTypes.bool,
};
