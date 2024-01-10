import { JWT_PREFIX, SERVICE_URL } from "../utils/helpers";

export type MembershipRequest = {
  meetingId: string,
  invitedUserId: string
};


const PREFIX = "/meethub/member";

export const addMember = (request: MembershipRequest) =>
  fetch(SERVICE_URL + PREFIX, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: JWT_PREFIX + localStorage.getItem("token"),
    },
    body: JSON.stringify(request),
  }).then((response) => {
    if (response.status !== 500) {
      return response.status;
    } else {
      throw new Error("Something went wrong");
    }
  });
