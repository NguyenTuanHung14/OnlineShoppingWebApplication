import React from 'react';
import {
  ArrayInput,
  AutocompleteInput,
  BooleanInput,
  Create,
  DateInput,
  FormDataConsumer,
  NumberInput,
  ReferenceInput,
  SaveButton,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
  Toolbar,
  required,
  FileInput,
  FileField,
} from 'admin-on-rest';

export const ProductCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm
        //toolbar={<PostCreateToolbar />}
        validate={(values) => {
          const errors = {};
          ['name', 'price'].forEach((field) => {
            if (!values[field]) {
              errors[field] = 'Required field';
            }
          });

          if (values.price < 0) {
            errors.price = 'Should be grather 0';
          }

          return errors;
        }}
      >
        <TextInput label='Tên sản phẩm' autoFocus source='name' />
        <TextInput
          Label='Giá'
          source='price'
          fullWidth={true}
          multiline={true}
        />
      </SimpleForm>
    </Create>
  );
};
