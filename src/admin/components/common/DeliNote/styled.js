import styled, { css } from 'styled-components';

export const KindDeli = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: auto;
  margin-bottom: 20px;
`;
export const Kind = styled.div`
  width: 50%;
  height: 30px;
  border-bottom: ${(props) => (props.active ? '3px solid #D72323' : '1px solid #dce0ea;')};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #868a96;
  cursor: pointer;
  transition: 0.15s;
  ${(props) =>
    props.active &&
    css`
      color: #d72323;
    `}
`;
