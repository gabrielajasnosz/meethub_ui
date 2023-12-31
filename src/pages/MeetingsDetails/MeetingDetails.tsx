import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMeetingDetails } from "../../services/MeetingService";
import { MeetingDetailsType } from "./types";
import "./MeetingDetails.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";


export const MeetingDetails = () => {
  const { meetingId } = useParams();
  const [details, setDetails] = useState<MeetingDetailsType | null>(null);

  useEffect(() => {
    if(meetingId) {
      getMeetingDetails(meetingId!).then((details) => setDetails(details));
    }
  }, [meetingId])

  return (
    <>
      <Navbar />
      <div className={'meeting-details'}>
        {details?.title}
      </div>
      <Footer />
    </>
  )
}