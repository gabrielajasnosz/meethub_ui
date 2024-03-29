import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMeetingDetails } from "../../services/MeetingService";
import { GeneralReceiptInfo, MeetingDetailsType } from "./types";
import "./MeetingDetails.scss";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Typography } from "@mui/material";
import moment from "moment";
import { Members } from "./Members/Members";
import { Settlements } from "./Settlements/Settlements";
import { Receipts } from "./Receipts/Receipts";
import { getReceipts } from "../../services/ReceiptService";

export const MeetingDetails = () => {
  const { meetingId } = useParams();
  const [details, setDetails] = useState<MeetingDetailsType | null>(null);
  const [receipts, setReceipts] = useState<GeneralReceiptInfo[]>([]);

  console.log(details?.settling);

  const getData = () => {
    getMeetingDetails(meetingId!).then((details) => setDetails(details));
    getReceipts(meetingId!).then((receipts) => {
      setReceipts(receipts)
    });
  }

  useEffect(() => {
    if (meetingId) {
      getData();
    }
  }, [meetingId]);

  return (
    <>
      <Navbar />
      <div className={"meeting-details"}>
        <div className={"meeting-details__header"}>
          <Typography
            variant={"h5"}
            sx={{ fontWeight: "bold", color: "#1976D2" }}
          >
            {details?.title}
          </Typography>
          <Typography variant={"subtitle2"} sx={{ color: "#4A6072" }}>
            {moment(details?.date).format("DD MMMM YYYY")}
          </Typography>
        </div>
        <Receipts meetingMembers={details?.members || []} receipts={receipts} reloadData={getData} />
        <div className={"meeting-details__members_and_settlements"}>
          <Members reloadData={getData} members={details?.members.filter((user) => !user.isOwner) || []} />
          <Settlements settlements={details?.settling || []} />
        </div>
      </div>
      <Footer />
    </>
  );
};
