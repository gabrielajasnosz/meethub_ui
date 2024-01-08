import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getMeetings, MeetingEntry } from "../../services/MeetingService";
import { MeetingList } from "./MeetingsList/MeetingList";
import { NewMeetingDialog } from "./NewMeetingsDialog/NewMeetingDialog";
import { ButtonWithIcon } from "../../components/ButtonWithIcon/ButtonWithIcon";
import "./Meetings.scss";
import { useStorage } from "../../hooks/useStorage";

export const Meetings = () => {
  const [meetings, setMeetingList] = useState<MeetingEntry[]>([]);
  const [isCreateMeetingDialogOpen, setCreateMeetingDialogOpen] =
    useState<boolean>(false);
  const [forceRerender, setForceRerender] = useState<boolean>(false);
  const { getUserName } = useStorage();

  const handleOpenDialog = () => {
    setCreateMeetingDialogOpen(true);
  };

  const handleCloseDialog = () => {
    getMeetings()
      .then((r) => {
        setMeetingList(r);
      })
      .finally(() => {
        setCreateMeetingDialogOpen(false);
        setForceRerender((prev) => !prev);
      });
  };

  useEffect(() => {
    getMeetings().then((r) => {
      setMeetingList(r);
    });
  }, [forceRerender]);

  const futureAndCurrentDates = (date: string) => new Date(date) >= new Date();
  const pastDates = (date: string) => new Date(date) < new Date();

  return (
    <div className={"meetings"}>
      <Typography
        variant={"h4"}
        sx={{ fontWeight: "bold", padding: "0 140px", color: "#4A6072" }}
      >
        Hello {getUserName()}!
      </Typography>
      <div className={"meetings__section"}>
        <div className={"meetings__row"}>
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#1976D2",
              textDecoration: "underline",
              textUnderlineOffset: "10px",
            }}
            align="left"
          >
            Upcoming meetings &nbsp;&nbsp;&nbsp;
          </Typography>
          <ButtonWithIcon
            label={"New meeting"}
            onClick={handleOpenDialog}
            backgroundColor={"#f9f9f9"}
          />
        </div>
        <MeetingList
          meetings={meetings}
          dateComparison={futureAndCurrentDates}
          sortFunction={(a, b) =>
            new Date(a.date).getTime() - new Date(b.date).getTime()
          }
        />
      </div>
      <div className={"meetings__section"}>
        <Typography
          sx={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#1976D2",
            textDecoration: "underline",
            textUnderlineOffset: "10px",
            marginBottom: "50px",
          }}
          align="left"
        >
          Last meetings &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
        </Typography>
        <MeetingList
          meetings={meetings}
          dateComparison={pastDates}
          sortFunction={(a, b) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
          }
        />
      </div>
      <NewMeetingDialog
        open={isCreateMeetingDialogOpen}
        onClose={handleCloseDialog}
        onSubmit={setForceRerender}
      />
    </div>
  );
};
