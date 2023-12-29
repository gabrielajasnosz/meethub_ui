import {
  Dialog,
  IconButton,
  DialogContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  createMeeting,
  CreateMeetingRequest,
} from "../../../services/MeetingService";
import CloseIcon from "@mui/icons-material/Close";
import { Toast, ToastValues } from "../../../components/Toast/Toast";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import moment from "moment";
import "./NewMeetingDialog.scss"

interface NewMeetingDialogProps {
  open: boolean;
  onClose: () => void;
}

export const NewMeetingDialog: React.FC<NewMeetingDialogProps> = ({
  open,
  onClose,
}) => {
  const [toast, setToast] = useState<ToastValues>({
    toastOpened: false,
  });
  const [formData, setFormData] = useState<CreateMeetingRequest>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onDateChange = (value: { $d: any; } | null, context: any) => {
    setFormData((prevData) => ({ ...prevData, date : moment(value?.$d).format('yyyy-MM-DD') }));
  };

  const handleSave = () => {
    const meetingData: CreateMeetingRequest = { ...formData };
    createMeeting(meetingData).then(() => {
      setToast({
        toastOpened: true,
        severity: "success",
        message: "Meeting successfuly created.",
      });
    })
      .catch(() => {
        setToast({
          toastOpened: true,
          severity: "error",
          message: "Error. Please try again later.",
        });
      });
    setFormData({});
    onClose();
  };

  const clearAndCloseDialog = () => {
    setFormData({});
    onClose();
  };

  return (
    <Dialog open={open} onClose={clearAndCloseDialog}>
      <IconButton
        edge="end"
        color="inherit"
        onClick={clearAndCloseDialog}
        aria-label="close"
        size="large"
        sx={{ position: "absolute", right: 20, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent className={'new-meeting-dialog'}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#4A6072" }}
            >
              Add meeting
            </Typography>
        <div className={'new-meeting-dialog__row'}>
          <TextField
            sx={{ width: "250px"}}
            required
            label="Name"
            name="title"
            helperText={'Name of your event'}
            margin="normal"
            value={formData.title}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disablePast
              label="Date"
              name="date"
              slotProps={{
                textField: {
                  helperText: 'Meeting\'s date',
                },
              }}
              onChange={onDateChange}
              sx={{ width: '250px'}}
            />
          </LocalizationProvider>
        </div>
              <TextField
                required
                label="Adres"
                name="address"
                fullWidth
                margin="normal"
                helperText={'Meeting\'s address'}
                value={formData.address}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
        <div className={'new-meeting-dialog__row'}>
          <Button onClick={clearAndCloseDialog} color="primary" fullWidth>
            Close
          </Button>
          <Button
            onClick={handleSave}
            variant="contained"
            color="primary"
            fullWidth
          >
            Add
          </Button>
        </div>
      </DialogContent>
      <Toast
        toastOpened={toast.toastOpened}
        setToastOpened={(value) => setToast({ ...toast, toastOpened: value })}
        severity={toast.severity}
        message={toast.message}
      />
    </Dialog>
  );
};
