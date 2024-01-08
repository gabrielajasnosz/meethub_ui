import React, { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStorage } from "../../hooks/useStorage";

type RouteGuardProps = {
  children: ReactElement;
};

export const RouteGuard = ({ children }: RouteGuardProps) => {
  const navigate = useNavigate();
  const { isLoggedIn } = useStorage();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/sign-in");
    }
  }, [isLoggedIn]);

  return <>{children}</>;
};

export default RouteGuard;
