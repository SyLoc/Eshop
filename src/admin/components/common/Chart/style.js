import { Line, Column } from '@ant-design/charts';
import styled from 'styled-components';

export const WrapChart = styled.div`
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 27px;
`;

export const ChartColumn = styled(Column)``;

export const ChartLine = styled(Line)``;

export const TitleEl = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 25px;
`;
