import React from 'react';
import {
  ShowView,
  TextInput,
  required,
  TabbedShowLayout,
  Tab,
  TextField,
  RichTextField,
  useShowController,
} from 'admin-on-rest';

import RichTextInput from 'aor-rich-text-input';

export const ProductShow = (props) => {
  const controllerProps = useShowController(props);
  return (
    <ShowView {...props}>
      <TabbedShowLayout>
        <Tab label='Thông tin cơ bản'>
          <TextField label='Tên sản phẩm' source='name' />
          <TextField label='Giá' source='price' />
          <TextInput
            label='Size'
            autoFocus
            source='size'
            fullWidth={true}
            multiline={true}
            validate={required}
          />
          {/* 
          <ImageInput label='Hình ảnh' accept='image/*'>
            <ImageField />
          </ImageInput> */}
        </Tab>
        <Tab label='Mô tả'>
          <RichTextField
            source='description'
            validate={required}
            addLabel={false}
          />
        </Tab>
      </TabbedShowLayout>
    </ShowView>
  );
};
