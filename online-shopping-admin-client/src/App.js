import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';

import Dashboard from './components/dashboard';
import { ProductList, ProductEdit, ProductCreate } from './components/products';
import {
  CategoriesCreate,
  CategoriesList,
  CategoriesEdit,
} from './components/categories';
import { restClient } from './dataProvider';

function App(props) {
  return (
    <Admin title='Trang quản lý' restClient={restClient} dashboard={Dashboard}>
      <Resource
        name='products'
        list={ProductList}
        create={ProductCreate}
        edit={ProductEdit}
        remove={Delete}
      />
      <Resource
        name='categories'
        list={CategoriesList}
        create={CategoriesCreate}
        edit={CategoriesEdit}
      />
    </Admin>
  );
}
export default App;
