import React from 'react';
import { IconButton, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { StyledTableCell } from "../../../../components/TableUtils/StyledTableCell";
import { StyledTableRow } from "../../../../components/TableUtils/StyledTableRow";
import { Member } from "../../types";
import DeleteIcon from '@mui/icons-material/Delete';

type MembersTableProps = {
  members: Member[]
}

export const MembersTable = ({ members }: MembersTableProps) => {

  return (
    <>
      {members.length === 0 ? (
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <Typography variant={"subtitle1"} sx={{ fontStyle: "italic" }}>
            No members
          </Typography>
        </div>
      ) : (
        <TableContainer>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                {["Friend", "Delete"].map(
                  (header: string) => (
                    <StyledTableCell align="center" width={"25%"}>
                      {header}
                    </StyledTableCell>
                  ),
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((row: Member) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="center" width={"50%"}>
                    {row.firstName} {row.lastName}
                  </StyledTableCell>
                  <StyledTableCell align="center" width={"50%"}>
                    <IconButton
                      color="inherit"
                      onClick={() => {}}
                      aria-label="close"
                      size="large"
                    >
                      <DeleteIcon color={'primary'} />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}