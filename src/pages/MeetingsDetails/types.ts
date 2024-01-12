import { User } from "../FriendsList/types";

export type MeetingDetailsType = {
  address: string;
  date: string;
  id: string;
  members: Member[];
  title: string;
  settling: Settlement[]

};

export type Member = User & {
  isOwner : boolean
}

export type Settlement = {
  payer: User,
  receiver: User,
  amount: number
}


export type Position = {
  "name": string,
  "amount": number,
  "payers": string[]
}

export type Receipt = {
  title: string,
  positions: Position[]
}

export type GeneralReceiptInfo = {
  id: string,
  currency: string,
  totalAmount: number,
  title: string,
  owner: User
}
