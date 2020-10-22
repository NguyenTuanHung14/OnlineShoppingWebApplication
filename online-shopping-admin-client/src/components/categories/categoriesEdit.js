import React from 'react';
import {
  Create,
  TextInput,
  required,
  TabbedForm,
  SelectArrayInput,
  FormTab,
  ImageInput,
  ImageField,
  Edit,
  ReferenceInput,
  SelectInput,
  CheckboxGroupInput,
} from 'admin-on-rest';

import RichTextInput from 'aor-rich-text-input';

// const EditActions = ({ basePath, data, hasShow }) => (
//   <TopToolbar>
//     <CloneButton className='button-clone' basePath={basePath} record={data} />
//     {hasShow && <ShowButton basePath={basePath} record={data} />}
//   </TopToolbar>
// );
const choices = [
  { _id: 1, value: 'Còn hàng' },
  { _id: 1, value: 'Tạm hết hàng' },
];
export const CategoriesEdit = ({ ...props }) => {
  return (
    <Edit {...props}>
      <TabbedForm warnWhenUnsavedChanges>
        <FormTab label='Thông tin cơ bản'>
          <TextInput
            label='Tên loại sản phẩm'
            autoFocus
            source='name'
            validate={required}
          />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};
