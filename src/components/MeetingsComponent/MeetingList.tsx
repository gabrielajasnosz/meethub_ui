import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { format, parseISO } from "date-fns";
import pl from "date-fns/locale/pl";
import { MeetingEntry } from "../../services/MeetingService";

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
    <>
      {filteredMeetings.map((element: MeetingEntry) => {
        return (
          <Grid key={element.id} item xs={3}>
            <Card sx={{ minWidth: 275, boxShadow: "0 3px 6px #00000029" }}>
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
                    locale: pl,
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
                  sx={{ textTransform: "none", width: "65%" }}
                  style={{ borderWidth: "2px", fontSize: "14px" }}
                >
                  Zobacz więcej
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </>
  );
};
