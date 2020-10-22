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

const choices = [
  { _id: 1, value: 'Còn hàng' },
  { _id: 1, value: 'Tạm hết hàng' },
];

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
          <SelectInput
            label='Tình trạng'
            source='status'
            choices={choices}
            optionText='value'
            optionValue='value'
          />
          <TextInput
            label='URL hình ảnh'
            autoFocus
            source='images'
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
          <ReferenceInput
            label='Loại sản phẩm'
            source='category'
            reference='categories'
          >
            <SelectInput optionText='name' />
          </ReferenceInput>
          <ImageInput
            source='images'
            label='Vui lòng chọn hình'
            accept='image/*'
          >
            <ImageField source='src' title='title' />
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
