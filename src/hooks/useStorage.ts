type StorageType = {
  isLoggedIn: boolean;
  signIn: (data: { token: any }) => void;
};

export const useStorage = (): StorageType => {
  const hasJWT = () => !!localStorage.getItem("token");

  const signIn = (data: { token: any }) => {
    const token = data.token;
    localStorage.setItem("token", token);
    window.location.href = "/";
  };

  return { isLoggedIn: hasJWT(), signIn };
};
