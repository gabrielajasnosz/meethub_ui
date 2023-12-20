import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getMeetings, MeetingEntry } from "../../services/MeetingService";
import { MeetingList } from "./MeetingList";
import AddIcon from '@mui/icons-material/Add';
import { NewMeetingDialog } from "./NewMeetingDialog";

export const MeetingComponent = () => {

    const [meetings, setMeetingList] = useState<MeetingEntry[]>([]);
    const [isCreateMeetingDialogOpen, setCreateMeetingDialogOpen] = useState<boolean>(false);
    const [forceRerender, setForceRerender] = useState<boolean>(false);

    const handleOpenDialog = () => {
        setCreateMeetingDialogOpen(true);
    };

    const handleCloseDialog = () => {
        getMeetings()
            .then((r) => {
                console.log(r)
                setMeetingList(r)
            })
            .finally(() => {
                setCreateMeetingDialogOpen(false);
                setForceRerender((prev) => !prev)
            })
    };

    useEffect(() => {
        getMeetings()
            .then((r) => {
                setMeetingList(r)
                console.log(r);
            })
    }, [forceRerender]);

    const futureAndCurrentDates = (date: string) => new Date(date) >= new Date();
    const pastDates = (date: string) => new Date(date) < new Date();

    return (
        <Grid container style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "5%", paddingBottom: "5%", height: "100vh" }}>
            <Grid item xs={12} container spacing={8} justifyContent="center" alignItems="center">
                <Grid item xs={12} container>
                    <Grid item xs={6}>
                        <Typography sx={{ fontSize: 30, fontWeight: 'bold', color: '#1976D2', textDecoration: 'underline', textUnderlineOffset: '10px' }} align="left">
                            Nadchodzące spotkania &nbsp;&nbsp;&nbsp;
                        </Typography>
                    </Grid>
                    <Grid item xs={6} container justifyContent="right" alignItems="right">
                        <Button
                            size="large"
                            startIcon={<AddIcon style={{ strokeWidth: '20' }} />}
                            variant="outlined"
                            sx={{ textTransform: 'none' }}
                            style={{ borderWidth: "2px", fontSize: '15px', fontWeight: "bold" }}
                            onClick={handleOpenDialog}>
                            Nowe spotkanie
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} container spacing={8} justifyContent="center" alignItems="center" style={{ paddingTop: "0%" }}>
                    <MeetingList meetings={meetings} dateComparison={futureAndCurrentDates} sortFunction={(a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()} />
                </Grid>
            </Grid>
            <Grid item xs={12} container spacing={8} justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: 30, fontWeight: 'bold', color: '#1976D2', textDecoration: 'underline', textUnderlineOffset: '10px' }} align="left">
                        Ostatnie spotkania &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    </Typography>
                </Grid>
                <Grid item xs={12} container spacing={8} justifyContent="center" alignItems="center" style={{ paddingTop: "0%" }}>
                    <MeetingList meetings={meetings} dateComparison={pastDates} sortFunction={(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()} />
                </Grid>
            </Grid>
            <NewMeetingDialog open={isCreateMeetingDialogOpen} onClose={handleCloseDialog} />
        </Grid>
    )
}



