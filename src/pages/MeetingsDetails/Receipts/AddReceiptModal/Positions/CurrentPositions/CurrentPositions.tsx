import React from 'react';
import { Member, Position } from "../../../../types";
import "./CurrentPositions.scss";
import { StepIcon, Table, TableBody, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import { StyledTableCell } from "../../../../../../components/TableUtils/StyledTableCell";
import { StyledTableRow } from "../../../../../../components/TableUtils/StyledTableRow";
import InfoIcon from '@mui/icons-material/Info';

type CurrentPositionsProps = {
  positions: Position[],
  meetingMembers: Member[]
}

export const CurrentPositions = ({positions, meetingMembers}: CurrentPositionsProps) => {
  const getTooltip = (position: Position) => {
    let tooltip = '';
    position.payers.forEach((payer, index) => {
      const member = meetingMembers.find((member) => member.id === payer);
      if(index != position.payers.length -1){
        tooltip += member?.firstName + " " + member?.lastName + ", "
      } else {
        tooltip += member?.firstName + " " + member?.lastName
      }
    })
    return tooltip
  }
  return (
    <TableContainer sx={{ maxHeight: '300px', overflow: 'scroll'}}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            {["Name", "Amount", "Payers"].map(
              (header: string) => (
                <StyledTableCell align="center" width={"25%"}>
                  {header}
                </StyledTableCell>
              ),
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {positions.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center" width={"25%"}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center" width={"25%"}>
                {row.amount}
              </StyledTableCell>
              <StyledTableCell align="center" width={"25%"}>
                <Tooltip title={getTooltip(row)} placement={'top'}>
                  <InfoIcon />
                </Tooltip>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}