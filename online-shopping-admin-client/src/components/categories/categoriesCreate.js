import React from 'react';
import {
  Create,
  TextInput,
  required,
  TabbedForm,
  SelectArrayInput,
  ReferenceInput,
  FormTab,
  ImageInput,
  ImageField,
  SelectInput,
  CheckboxGroupInput,
} from 'admin-on-rest';
import RichTextInput from 'aor-rich-text-input';

export const CategoriesCreate = ({ ...props }) => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
