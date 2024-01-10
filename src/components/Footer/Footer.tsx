import { Typography } from "@mui/material";
import "./Footer.scss";

export const Footer = () => (
  <footer className={"footer"}>
    <div className={"footer__logo"} />
    <Typography color="white" variant={"subtitle2"}>
      Wszelkie prawa zastrzeżone
    </Typography>
  </footer>
);
