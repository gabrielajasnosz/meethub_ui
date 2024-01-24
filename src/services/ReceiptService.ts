import { JWT_PREFIX, SERVICE_URL } from "../utils/helpers";
import { Receipt } from "../pages/MeetingsDetails/types";

const PREFIX = "/meethub/bills";

export type ReceiptRequest = Receipt & {
  meetingId: string
}

export const getReceipts = (meetingId: string) =>
    fetch(SERVICE_URL + PREFIX + `?meetingId=${meetingId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: JWT_PREFIX + localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));

export const addReceipt = (receipt: ReceiptRequest) => {
  return fetch(SERVICE_URL + PREFIX, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: JWT_PREFIX + localStorage.getItem("token"),
    },
    body: JSON.stringify(receipt),
  }).then((response) => {
    if (response.ok) {
      return {};
    }
  });
};
