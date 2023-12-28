import React from "react";
import {
  Button,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Invite } from "../types";
import { answerFriendRequest } from "../../../services/FriendInvitationService";
import { INVITATION_STATUS } from "../../../utils/helpers";
import { StyledTableCell } from "../../../components/TableUtils/StyledTableCell";
import { StyledTableRow } from "../../../components/TableUtils/StyledTableRow";

export type InvitesProps = {
  invitations: Invite[];
};

export const Invites = ({ invitations }: InvitesProps) => {
  const acceptInvitation = (invitationId: string) => {
    answerFriendRequest(invitationId, {
      invitationAnswer: INVITATION_STATUS.ACCEPTED,
    }).then(() => {
      console.log("dupa");
    });
  };

  const rejectInvitation = (invitationId: string) => {
    answerFriendRequest(invitationId, {
      invitationAnswer: INVITATION_STATUS.DECLINED,
    }).then(() => {
      console.log("dupa");
    });
  };
  return (
    <div>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#4A6072", marginBottom: "40px" }}
      >
        Invites
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {["First name", "Last name", "Email", "Accept/Delete"].map(
                (header: string) => (
                  <StyledTableCell align="center">{header}</StyledTableCell>
                ),
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {invitations.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center">
                  {row.inviterUser.firstName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.inviterUser.lastName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.inviterUser.email}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      gap: "23px",
                    }}
                  >
                    <Button
                      onClick={() => {
                        acceptInvitation(row.id);
                      }}
                      color="success"
                      variant={"outlined"}
                      sx={{ fontWeight: "bold", height: "42px" }}
                    >
                      Accept
                    </Button>
                    <Button
                      onClick={() => {
                        rejectInvitation(row.id);
                      }}
                      color="error"
                      variant={"outlined"}
                      sx={{ fontWeight: "bold", height: "42px" }}
                    >
                      Reject
                    </Button>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
