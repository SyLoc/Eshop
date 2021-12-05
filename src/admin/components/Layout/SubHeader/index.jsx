import React, {useState} from 'react';
import {
  SettingIcon,
  Wrap,
  SubHeaderLeft,
  WrapInput,
  WrapDate,
  DateContent,
} from './styled';
import { ReactComponent as Search } from 'assets/images/icons/icon-search.svg';
import { ReactComponent as Date } from 'assets/images/icons/icon-date.svg';

const SubHeader = () => {
  return (
    <Wrap>
      <SubHeaderLeft>
        <WrapInput>
          <Search />
          <input 
            type="text" 
            placeholder="Search Customer"
          />
        </WrapInput>
        <WrapDate>
          <DateContent>
            <h2>Date</h2>
            <h2>2021/6/22</h2>
            <Date/>
          </DateContent>
          <span>-</span>
          <DateContent>
            <h2>To</h2>
            <h2>2021/7/22</h2>
            <Date/>
          </DateContent>
        </WrapDate> 
      </SubHeaderLeft>
      <SettingIcon />
    </Wrap>
  );
}

export default SubHeader;
