import React from 'react';
import { List,
         Datagrid,
         ReferenceField,
         TextField,
         EditButton,
         Edit,
         SimpleForm,
         ReferenceInput,
         TextInput,
         SelectInput,
         Create,
         Filter
       } from 'react-admin';

const PostFilter = props => (
    <Filter {...props}>
        <TextInput label={'Search'} source={'q'}  alwaysOn />
        <ReferenceInput label={"User"} reference={'users'} source={'userId'} alwaysEmpty >
            <SelectInput optionText={'name'}/>
        </ReferenceInput>
    </Filter>
);


export const PostList = props => (
  <List filters={<PostFilter/>} {...props}>
    <Datagrid>
        <TextField  source={'id'} />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <EditButton/>
    </Datagrid>
   </List>
 );

const PostTitle = ({ record }) => {
    return (
      <span>{ record ? `Post ${record.title}` : '' }</span>
    );
}

export const PostEdit = props => (
    <Edit title={<PostTitle/>} {...props}>
        <SimpleForm>
            <TextInput source={'id'}/>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);


export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Create>
);