import React from 'react';
import {
  TextField,
  Datagrid,
  List,
  EditButton,
  ShowButton,
  DeleteButton,
  ChipField,
} from 'admin-on-rest';

const postRowStyle = (record, index) => ({
  backgroundColor: record.nb_views >= 500 ? '#efe' : 'white',
});
const datagridStyles = {
  table: {},
  tbody: {},
  tr: {},
  header: {
    th: {},
    'th:first-child': {}, // special style for the first header column
  },
  cell: {
    td: {},
    'td:first-child': {}, // special style for the first column
  },
};

export const CategoriesList = (props) => (
  <List {...props} perPage={5}>
    <Datagrid
      rowStyle={postRowStyle}
      bodyOptions={{ stripedRows: true, showRowHover: true }}
    >
      <TextField label='Id' source='id' />
      <ChipField label='Tên loại sản phẩm' source='name' />

      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);
