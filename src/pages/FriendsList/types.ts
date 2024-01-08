export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
};

export type Invite = {
  id: string;
  status: string;
  sentDate: string;
  inviterUser: User;
};
