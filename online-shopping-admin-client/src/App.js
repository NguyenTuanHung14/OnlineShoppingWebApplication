import React from 'react';
import { Admin, Resource } from 'admin-on-rest';

import Dashboard from './components/dashboard';
import { ProductList, ProductCreate } from './components/products';
import { restClient } from './dataProvider';
function App() {
  return (
    <Admin title='Trang quản lý' restClient={restClient} dashboard={Dashboard}>
      <Resource name='products' list={ProductList} create={ProductCreate} />
    </Admin>
  );
}

export default App;
