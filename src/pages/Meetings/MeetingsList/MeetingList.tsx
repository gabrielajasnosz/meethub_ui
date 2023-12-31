import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { format, parseISO } from "date-fns";
import enGB from "date-fns/locale/en-GB";
import { MeetingEntry } from "../../../services/MeetingService";
import "./MeetingList.scss"

interface MeetingListProps {
  meetings: MeetingEntry[];
  dateComparison: (date: string) => boolean;
  sortFunction: (a: MeetingEntry, b: MeetingEntry) => number;
}

export const MeetingList = (meetingListProp: MeetingListProps) => {
  const { meetings, dateComparison, sortFunction } = meetingListProp;

  const filteredMeetings = meetings
    .filter((element: MeetingEntry) => dateComparison(element.date))
    .sort(sortFunction)
    .slice(0, 4);

  return (
    <div className={'meeting-list'}>
      {filteredMeetings.map((element: MeetingEntry) => {
        return (
            <Card sx={{ minWidth: 275, boxShadow: "0 3px 6px #00000029", padding: '10px' }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 20, fontWeight: "bold", color: "#1976D2" }}
                  color="text.secondary"
                  gutterBottom
                  align="center"
                >
                  {format(parseISO(element.date!), "dd")}
                </Typography>
                <Typography
                  sx={{ fontSize: 20, fontWeight: "bold", color: "#1976D2" }}
                  color="text.secondary"
                  gutterBottom
                  align="center"
                >
                  {format(parseISO(element.date!), "MMMM", {
                    locale: enGB,
                  })}
                </Typography>
                <Typography
                  sx={{ fontSize: 17, fontWeight: "bold", color: "#4A6072" }}
                  component="div"
                  align="center"
                >
                  {element.title}
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  align="center"
                >
                  {element.address}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "center" }}>
                <Button
                  size="medium"
                  variant="outlined"
                  href={`/meeting/${element.id}`}
                  sx={{ textTransform: "none", width: "65%" }}
                  style={{ borderWidth: "2px", fontSize: "14px" }}
                >
                  See more
                </Button>
              </CardActions>
            </Card>
        );
      })}
    </div>
  );
};
