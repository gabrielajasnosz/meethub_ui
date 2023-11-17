import React, { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type RouteGuardProps = {
  children: ReactElement;
};

export const RouteGuard = ({ children }: RouteGuardProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!hasJWT()) {
      navigate("/sign-in");
    }
  });

  const hasJWT = () => !!localStorage.getItem("token");

  return <>{children}</>;
};

export default RouteGuard;
