import React, { useEffect, useState } from "react";
import { getFriendsList } from "../../services/FriendsService";
import "./FriendsList.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { YourFriends } from "./YourFriends/YourFriends";
import { Invites } from "./Invites/Invites";
import { Footer } from "../../components/Footer/Footer";
import { getInvitations } from "../../services/FriendInvitationService";
import { User } from "./types";

export const FriendsList = () => {
  const [friendsList, setFriendsList] = useState<User[]>([]);
  const [invitations, setInvitations] = useState([]);

  useEffect(() => {
    getFriendsList().then((r) => setFriendsList(r));

    getInvitations().then((r) => setInvitations(r));
  }, []);

  return (
    <>
      <Navbar />
      <div className={"friends-container"}>
        <YourFriends friendsList={friendsList} />
        <Invites invitations={invitations} />
      </div>
      <Footer />
    </>
  );
};
