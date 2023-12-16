import { Dialog, IconButton, DialogContent, TextField, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { createMeeting, CreateMeetingRequest } from "../../services/MeetingService";
import CloseIcon from '@mui/icons-material/Close';

interface NewMeetingDialogProps {
    open: boolean;
    onClose: () => void;
}

export const NewMeetingDialog: React.FC<NewMeetingDialogProps> = ({ open, onClose }) => {

    const [formData, setFormData] = useState<CreateMeetingRequest>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSave = () => {
        const meetingData: CreateMeetingRequest = { ...formData };
        createMeeting(meetingData);
        setFormData({});
        onClose();
    };

    const clearAndCloseDialog = () => {
        setFormData({});
        onClose();
    }


    return (
        <Dialog open={open} onClose={clearAndCloseDialog} maxWidth="sm" fullWidth >
            <IconButton
                edge="end"
                color="inherit"
                onClick={clearAndCloseDialog}
                aria-label="close"
                size="large"
                sx={{ position: 'absolute', right: 20, top: 8 }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent sx={{ display: "flex", justifyContent: "center" }}>
                <Grid container xs={12} spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4A6072' }}>
                            Dodaj wydarzenie
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                label="Tytuł"
                                name="title"
                                fullWidth
                                margin="normal"
                                value={formData.title}
                                onChange={handleChange}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                required
                                label="Data"
                                name="date"
                                type="date"
                                fullWidth
                                margin="normal"
                                value={formData.date}
                                onChange={handleChange}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                label="Adres"
                                name="address"
                                fullWidth
                                margin="normal"
                                value={formData.address}
                                onChange={handleChange}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={6}>

                        </Grid>
                    </Grid>
                    <Grid item container xs={12} justifyContent="center" alignItems="center">
                        <Button onClick={handleSave} variant="contained" color="primary" fullWidth>
                            Dodaj
                        </Button>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    )
}
