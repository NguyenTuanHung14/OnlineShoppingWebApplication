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
import { Container, Row, Col } from 'react-bootstrap';
import RichTextInput from 'aor-rich-text-input';
export const ProductCreate = (props) => {
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
          <SelectArrayInput
            label='Size'
            source='size'
            choices={[
              { id: '1', name: 'M' },
              { id: '2', name: 'L' },
              { id: '3', name: 'XL' },
              { id: '4', name: 'XL' },
            ]}
          />

          <ImageInput source='images' label='Hình ảnh' accept='image/*'>
            <ImageField source='src' />
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
