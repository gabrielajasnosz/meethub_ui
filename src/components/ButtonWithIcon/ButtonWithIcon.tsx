import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type ButtonWithIconProps = {
  label: string;
  onClick: () => void;
};

export const ButtonWithIcon = ({ onClick, label }: ButtonWithIconProps) => {
  return (
    <Button
      size="large"
      startIcon={<AddIcon style={{ fontSize: "25px" }} />}
      variant="outlined"
      sx={{ textTransform: "none", width: "245px" }}
      style={{ borderWidth: "2px", fontSize: "15px", fontWeight: "bold" }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
