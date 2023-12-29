import React from "react";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import { useStorage } from "../../hooks/useStorage";
import { Meetings } from "../Meetings/Meetings";

export const HomePage = () => {
  const { isLoggedIn } = useStorage();
  return (
    <>
      <Navbar />
      {isLoggedIn && (
        <>
          <Meetings />
        </>
      )}
      <Footer />
    </>
  );
};
