import React from "react";
import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import LauchIcon from "@mui/icons-material/Launch";

export const UrlField = ({ source }) => {
  const record = useRecordContext();

  return (
    <Link
      href={`https://www.${record[source]}`}
      target="_blank"
      rel="noreferrer"
      sx={{ textDecoration: "none" }}
    >
      {record[source]}

      <LauchIcon
        sx={{ width: "0.675rem", height: "0.675rem", marginLeft: 1 }}
      />
    </Link>
  );
};
