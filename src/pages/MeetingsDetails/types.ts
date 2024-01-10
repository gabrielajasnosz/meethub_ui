import { User } from "../FriendsList/types";

export type MeetingDetailsType = {
  address: string;
  date: string;
  id: string;
  members: Member[];
  title: string;
};

export type Member = User & {
  isOwner : boolean
}
