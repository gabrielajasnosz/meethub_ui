import React, { useState } from "react";
import "./YourFriends.scss";
import {
  IconButton,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ButtonWithIcon } from "../../../components/ButtonWithIcon/ButtonWithIcon";
import { AddFriendModal } from "../AddFriendModal/AddFriendModal";
import { User } from "../types";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledTableRow } from "../../../components/TableUtils/StyledTableRow";
import { StyledTableCell } from "../../../components/TableUtils/StyledTableCell";

export type YourFriendsProps = {
  friendsList: User[];
};

export const YourFriends = ({ friendsList }: YourFriendsProps) => {
  const [isModalOpened, setModalOpened] = useState<boolean>(false);
  return (
    <div className={"your-friends-container"}>
      <div className={"your-friends-container__header"}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#4A6072" }}>
          Your friends
        </Typography>
        <ButtonWithIcon
          label={"Add friend"}
          onClick={() => {
            setModalOpened(true);
          }}
        />
        <AddFriendModal
          isOpened={isModalOpened}
          closeModal={() => setModalOpened(false)}
        />
      </div>
      {friendsList.length === 0 ? (
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <Typography variant={"subtitle1"} sx={{ fontStyle: "italic" }}>
            No friends yet
          </Typography>
        </div>
      ) : (
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                {["First name", "Last name", "Email", "Delete"].map(
                  (header: string) => (
                    <StyledTableCell align="center" width={"25%"}>
                      {header}
                    </StyledTableCell>
                  ),
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {friendsList.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="center" width={"25%"}>
                    {row.firstName}
                  </StyledTableCell>
                  <StyledTableCell align="center" width={"25%"}>
                    {row.lastName}
                  </StyledTableCell>
                  <StyledTableCell align="center" width={"25%"}>
                    {row.email}
                  </StyledTableCell>
                  <StyledTableCell align="center" width={"25%"}>
                    <IconButton aria-label="delete">
                      <DeleteIcon sx={{ color: "#1976D2" }} />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
