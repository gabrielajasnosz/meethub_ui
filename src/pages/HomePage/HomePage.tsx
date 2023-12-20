import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { FriendsListComponent } from "../../components/FriendsList/FirendsListComponent";
import { MeetingComponent } from "../../components/MeetingsComponent/MeetingComponent";
import { Navbar } from "../../components/Navbar/Navbar";

export const HomePage = () => {
  return <>
    <Navbar />
    <FriendsListComponent />
    <MeetingComponent />
    <Footer />
  </>;
};
