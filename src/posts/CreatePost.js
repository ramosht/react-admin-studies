import React from "react";
import {
  Create,
  ReferenceInput,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
} from "react-admin";

const ToolbarCustom = () => (
  <Toolbar>
    <SaveButton alwaysEnable />
  </Toolbar>
);

export const CreatePost = () => {
  return (
    <Create>
      <SimpleForm toolbar={<ToolbarCustom />}>
        <TextInput source="title" />
        <ReferenceInput source="userId" reference="users" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Create>
  );
};
