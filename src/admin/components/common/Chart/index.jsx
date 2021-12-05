import React from 'react';
import PropTypes from 'prop-types';

import { WrapChart, ChartColumn, ChartLine, TitleEl } from './style';

const Chart = ({ label, typeChart = 'column', ...rest }) => {
  switch (typeChart) {
    case 'line':
      return (
        <WrapChart>
          <TitleEl>{label}</TitleEl>
          <ChartLine {...rest} />
        </WrapChart>
      );

    default:
      return (
        <WrapChart>
          <TitleEl>{label}</TitleEl>
          <ChartColumn {...rest} />
        </WrapChart>
      );
  }
};

Chart.propTypes = {
  label: PropTypes.string.isRequired,
  typeChart: PropTypes.string,
};

export default Chart;
