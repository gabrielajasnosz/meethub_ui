import { styled, TableCell, tableCellClasses } from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#1976D2 !important",
    fontWeight: "bold",
    fontSize: "16px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "#4A6072",
    padding: 0,
    height: "55px",
  },
}));
