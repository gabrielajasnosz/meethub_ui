import React, { ReactElement } from "react";
import "./StartPageLayout.scss";

type StartPageProps = {
  children: ReactElement;
};

export const StartPageLayout = ({ children }: StartPageProps) => (
  <div className="start-page-layout">
    <div className="start-page-layout__content">{children}</div>
  </div>
);
