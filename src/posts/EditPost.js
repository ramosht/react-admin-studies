import React from "react";
import { Edit, ReferenceInput, SimpleForm, TextInput } from "react-admin";
import { PostTitle } from "./PostTitle";

export const EditPost = () => {
  return (
    <Edit title={<PostTitle />}>
      <SimpleForm>
        <TextInput source="title" />
        <ReferenceInput source="userId" reference="users" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Edit>
  );
};
