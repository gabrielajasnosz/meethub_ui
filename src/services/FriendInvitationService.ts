import { INVITATION_STATUS, JWT_PREFIX, SERVICE_URL } from "../utils/helpers";

export type InviteFriendRequest = {
  invitedUserEmail?: string;
};

export type AnswerFriendRequest = {
  invitationAnswer?: INVITATION_STATUS;
};

const PREFIX = "/meethub/friend-invitations";

export const inviteFriend = (request: InviteFriendRequest) =>
  fetch(SERVICE_URL + PREFIX + "/invite", {
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

export const getInvitations = () =>
  fetch(SERVICE_URL + PREFIX, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: JWT_PREFIX + localStorage.getItem("token"),
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Something went wrong");
    }
  });

export const answerFriendRequest = (
  invitationId: string,
  request: AnswerFriendRequest,
) =>
  fetch(SERVICE_URL + PREFIX + "/" + invitationId, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: JWT_PREFIX + localStorage.getItem("token"),
    },
    body: JSON.stringify(request),
  }).then((response) => {
    if (response.ok) {
      return {};
    } else {
      throw new Error("Something went wrong");
    }
  });
