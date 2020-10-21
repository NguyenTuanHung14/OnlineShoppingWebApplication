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
} from 'admin-on-rest';

import RichTextInput from 'aor-rich-text-input';
export const ProductCreate = ({ ...props }) => {
  return (
    <Create {...props}>
      <TabbedForm warnWhenUnsavedChanges>
        <FormTab label='Thông tin cơ bản'>
          <TextInput
            label='Tên sản phẩm'
            autoFocus
            source='name'
            validate={required}
          />
          <TextInput
            label='Giá'
            autoFocus
            source='price'
            fullWidth={true}
            multiline={true}
            validate={required}
          />
          {/* <TextInput
            label='Size'
            autoFocus
            source='size'
            fullWidth={true}
            multiline={true}
            validate={required}
          /> */}
          <SelectArrayInput
            label='Size'
            source='size'
            choices={[
              { id: 'M', name: 'M' },
              { id: 'L', name: 'L' },
              { id: 'XL', name: 'XL' },
            ]}
          />

          <ImageInput label='Hình ảnh' accept='image/*'>
            <ImageField />
          </ImageInput>
        </FormTab>
        <FormTab label='Mô tả'>
          <RichTextInput
            source='description'
            validate={required}
            addLabel={false}
          />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};
