import React from 'react';
import {
  TextField,
  Datagrid,
  List,
  EditButton,
  ShowButton,
} from 'admin-on-rest';

import { ProductFilter } from './productFilter';
export const ProductList = (props) => (
  <List {...props} filters={<ProductFilter />}>
    <Datagrid>
      <TextField source='name' />
      <TextField source='price' />
      <TextField source='size' />
      <TextField source='description' />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);
