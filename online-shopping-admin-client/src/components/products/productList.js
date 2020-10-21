import React from 'react';
import {
  TextField,
  Datagrid,
  List,
  EditButton,
  ShowButton,
} from 'admin-on-rest';
import FlatButton from 'material-ui/FlatButton';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import { ProductFilter } from './productFilter';

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
const ProductPagination = ({ page, perPage, total, setPage }) => {
  const nbPages = Math.ceil(total / perPage) || 1;
  return (
    nbPages > 1 && (
      <Toolbar>
        <ToolbarGroup>
          {page > 1 && (
            <FlatButton
              primary
              key='prev'
              label='Prev'
              icon={<ChevronLeft />}
              onClick={() => setPage(page - 1)}
            />
          )}
          {page !== nbPages && (
            <FlatButton
              primary
              key='next'
              label='Next'
              icon={<ChevronRight />}
              onClick={() => setPage(page + 1)}
              labelPosition='before'
            />
          )}
        </ToolbarGroup>
      </Toolbar>
    )
  );
};
export const ProductList = (props) => (
  <List {...props} filters={<ProductFilter />} perPage={5}>
    <Datagrid
      styles={datagridStyles}
      rowStyle={postRowStyle}
      bodyOptions={{ stripedRows: true, showRowHover: true }}
    >
      <TextField source='name' />
      <TextField source='price' />
      <TextField source='size' />
      <TextField source='description' />
      <EditButton />
      <ShowButton />
    </Datagrid>
  </List>
);
