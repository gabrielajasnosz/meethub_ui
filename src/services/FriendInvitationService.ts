import { INVITATION_STATUS, JWT_PREFIX, SERVICE_URL } from "../utils/helpers";

export type InviteFriendRequest = {
    email?: string;
};

export type AnswerFriendRequest = {
    invitationId?: string;
    invitationAnswer?: INVITATION_STATUS
};

const PREFIX = "/meethub/friend-invitations";

export const inviteFriendRequest = (request: InviteFriendRequest) =>
    fetch(SERVICE_URL + PREFIX, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": JWT_PREFIX + localStorage.getItem("token")
        },
        body: JSON.stringify(request)
    })
        .then((response) => response.json());

export const answerFriendRequest = (request: AnswerFriendRequest) =>
    fetch(SERVICE_URL + PREFIX + "/" + request.invitationId, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": JWT_PREFIX + localStorage.getItem("token")
        },
        body: JSON.stringify({
            invitationAnswer: request.invitationAnswer
        })
    })
        .then((response) => response.json())
        .catch((error) => console.error(error));