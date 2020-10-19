import * as React from 'react';
import { ReferenceInput, SelectInput, TextInput, Filter } from 'admin-on-rest';
export const ProductFilter = (props) => (
  <Filter {...props}>
    <TextInput label='Tìm kiếm' source='q' alwaysOn />
    <ReferenceInput
      label='Tên hàng hóa'
      source='id'
      reference='product'
      allowEmpty
    >
      <SelectInput optionText='name' />
    </ReferenceInput>
  </Filter>
);
