import { jwtDecode } from "jwt-decode";

type StorageType = {
  isLoggedIn: boolean;
  signIn: (data: { token: any }) => void;
  getUserName: () => string | null
};

export const useStorage = (): StorageType => {
  const hasJWT = () => !!localStorage.getItem("token");

  const signIn = (data: { token: any }) => {
    const token = data.token;
    localStorage.setItem("token", token);
    window.location.href = "/";
  };

  const getUserName = () => {
    const token = localStorage.getItem("token");
    //@ts-ignore
    return !!localStorage.getItem("token") ? jwtDecode(token!).firstName : null;
  }

  return { isLoggedIn: hasJWT(), signIn, getUserName };
};
