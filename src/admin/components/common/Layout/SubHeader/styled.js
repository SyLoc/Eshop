import styled from 'styled-components';

import { ReactComponent as Setting } from '@assets/icons/setting.svg';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.padding.pdHeader};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const SettingIcon = styled(Setting)`
  cursor: pointer;
`;

export const SubHeaderLeft = styled.div`
  display: flex;
`

export const WrapInput = styled.div`
  display: flex;
  border-right: 1px solid #DCE0EA;
  align-items: center;
  min-width: 245px;

  & input {
    height: 100%;
    margin-left: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray1};

    &::placeholder{
      color: ${({ theme }) => theme.colors.gray5};
    }
  }
`
export const WrapDate = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid #DCE0EA;
  padding: 0 24px;
  height: 100%;

  span{
    margin: 0 13px;
  }
`
export const DateContent = styled.div`
  display: flex;
  align-items: center;

  h2{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.gray4};
    margin-right: 8px;
  }
`
