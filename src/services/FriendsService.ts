import { JWT_PREFIX, SERVICE_URL } from "../utils/helpers";

export type FriendListEntry = {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  mobileNumber?: string;
};

const PREFIX = "/meethub/friends";

export const getFriendsList = () =>
  fetch(SERVICE_URL + PREFIX, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: JWT_PREFIX + localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
