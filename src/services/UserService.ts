import { SERVICE_URL } from "../utils/helpers";

export type SignInFormType = {
  email?: string;
  password?: string;
};

export type SignUpFormType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobileNumber?: string;
  password?: string;
};
const PREFIX = "/meethub/users";

export const signIn = (formData: SignInFormType) =>
  fetch(SERVICE_URL + PREFIX + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      const token = data.token;
      localStorage.setItem("token", token);
      window.location.href = "/";
    })
    .catch((error) => console.error(error));

export const signUp = (formData: SignUpFormType) =>
  fetch(SERVICE_URL + PREFIX + "/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then((response) => response.json());
