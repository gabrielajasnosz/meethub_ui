import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { MeetingComponent } from "../../components/MeetingsComponent/MeetingComponent";
import { Navbar } from "../../components/Navbar/Navbar";
import { useStorage } from "../../hooks/useStorage";

export const HomePage = () => {
  const { isLoggedIn } = useStorage();
  return (
    <>
      <Navbar />
      {isLoggedIn && (
        <>
          <MeetingComponent />
        </>
      )}
      <Footer />
    </>
  );
};
