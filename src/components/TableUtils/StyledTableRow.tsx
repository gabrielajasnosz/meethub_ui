import React from "react";
import { styled, TableRow } from "@mui/material";

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#EBF5FF",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
