import React from 'react';
import SelectInput from '.';
import CITIES from '../../../containers/Lam/mock-data';
import * as Theme from '../../../styles/theme';

const { fontWeight } = Theme.default;

export default {
  title: 'form/Select',
  component: SelectInput,
};

const Template = (args) => <SelectInput {...args} />;

export const PrimarySelect = Template.bind({});

PrimarySelect.args = {
  placeholder: 'Tất cả',
  data: CITIES,
  label: 'Kho hàng',
  fontWeightOfLabel: fontWeight.regular,
  typeFlexSelect: false,
  errorText: 'Không được để trống',
};
