import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

type ButtonWithIconProps = {
  label: string;
  onClick: () => void;
  backgroundColor?: string;
  width?: string;
};

export const ButtonWithIcon = ({
  onClick,
  label,
  backgroundColor,
  width,
}: ButtonWithIconProps) => {
  return (
    <Button
      size="large"
      startIcon={<AddIcon style={{ fontSize: "25px" }} />}
      variant="outlined"
      sx={{
        textTransform: "none",
        backgroundColor: backgroundColor,
        width: width || "245px",
      }}
      style={{ borderWidth: "2px", fontSize: "15px", fontWeight: "bold" }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
