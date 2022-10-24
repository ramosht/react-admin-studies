import React from "react";
import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
} from "react-admin";

const filters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" reference="users" />,
];

export const Posts = () => {
  return (
    <List filters={filters}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="users" />
        <TextField source="title" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
