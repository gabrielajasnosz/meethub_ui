import React from "react";
import { useParams } from "react-router-dom";


export const MeetingDetails = () => {
  const { meetingId } = useParams();
  return (
    <div>
      {meetingId}
    </div>
  )
}