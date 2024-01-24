import React from "react";
import { Table, TableBody, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Settlement } from "../types";
import { StyledTableCell } from "../../../components/TableUtils/StyledTableCell";
import { StyledTableRow } from "../../../components/TableUtils/StyledTableRow";
import "./Settlements.scss"

export type SettlementsProps = {
  settlements: Settlement[];
}

export const Settlements = ({settlements} : SettlementsProps) => {
  return (
    <div className={'settlements'}>
      <Typography variant={"h6"} sx={{ color: "#4A6072", fontWeight: "bold", marginBottom: '30px' }}>
        Settlements
      </Typography>
      <TableContainer>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {["Who", "To whom", "How much"].map(
                (header: string) => (
                  <StyledTableCell align="center" width={"25%"}>
                    {header}
                  </StyledTableCell>
                ),
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {settlements.map((row: Settlement) => (
              <StyledTableRow key={row.payer.id}>
                <StyledTableCell align="center">
                  {row.payer.firstName} {row.payer.lastName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.receiver.firstName} {row.receiver.lastName}
                </StyledTableCell>
                <StyledTableCell align="center" sx={{ fontWeight: 'bold', color: '#1976D2 !important'}}>
                  {row.amount}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
