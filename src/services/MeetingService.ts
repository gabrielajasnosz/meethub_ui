import { JWT_PREFIX, SERVICE_URL } from "../utils/helpers";

export type UserResponse = {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  mobileNumber?: string;
};

export type CreateMeetingRequest = {
  title?: string;
  address?: string;
  date?: string;
};

export type MeetingEntry = {
  id?: string;
  title?: string;
  address?: string;
  date: string;
  owner?: UserResponse;
};

const PREFIX = "/meethub/meetings";

export const getMeetings = () =>
  fetch(SERVICE_URL + PREFIX, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: JWT_PREFIX + localStorage.getItem("token"),
    },
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));

export const createMeeting = (meeting: CreateMeetingRequest) => {
  const formattedMeeting = {
    ...meeting,
    date: new Date(meeting.date!).toISOString(),
  };
  return fetch(SERVICE_URL + PREFIX, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: JWT_PREFIX + localStorage.getItem("token"),
    },
    body: JSON.stringify(formattedMeeting),
  }).then((response) => response.json());
};
