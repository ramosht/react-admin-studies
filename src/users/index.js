import React from "react";
import { Datagrid, EmailField, List, TextField } from "react-admin";
import { UrlField } from "../components/UrlField";

export const Users = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        <TextField source="phone" />
        <UrlField target="_blank" source="website" />
        <TextField label="City" source="address.city" />
      </Datagrid>
    </List>
  );
};
