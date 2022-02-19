import React from "react";
import styled from "styled-components";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { TextField } from "@mui/material";
import { Constant } from "../../constants/index";
const { Fonts, Colors } = Constant;

export const UserNameDialog = ({ dialogOpen, dialogClose }) => {
  return (
    // Username Dialog
    <Dialog open={dialogOpen} fullScreen>
      <Section>
        <div className="content">
          <DialogTitle color={Colors.primaryColor}>
            Update Your Name
          </DialogTitle>
          <DialogContent>
            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
              <TextField label="First Name" fullWidth />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextField label="Last Name" fullWidth />
            </div>
            <div
              style={{
                marginBottom: "0.5rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                style={{ background: Colors.primaryColor }}
              >
                Save
              </Button>
              <Button onClick={dialogClose}>Cancel</Button>
            </div>
          </DialogContent>
        </div>
      </Section>
    </Dialog>
  );
};

// Password Dialog

export const PasswordDialog = ({ passDialogOpen, passDialogClose }) => {
  return (
    <Dialog open={passDialogOpen} fullScreen>
      <Section>
        <div className="content">
          <DialogTitle color={Colors.primaryColor}>
            Update Your Password
          </DialogTitle>
          <DialogContent>
            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
              <TextField label="Old Password" fullWidth />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextField label="New Password" fullWidth />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextField label="Confirm Password" fullWidth />
            </div>
            <div
              style={{
                marginBottom: "0.5rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                style={{ background: Colors.primaryColor }}
              >
                Save
              </Button>
              <Button onClick={passDialogClose}>Cancel</Button>
            </div>
          </DialogContent>
        </div>
      </Section>
    </Dialog>
  );
};

// Email Dialog

export const EmailDialog = ({ emailDialogOpen, emailDialogClose }) => {
  return (
    <Dialog open={emailDialogOpen} fullScreen>
      <Section>
        <div className="content">
          <DialogTitle color={Colors.primaryColor}>
            Update Your Email
          </DialogTitle>
          <DialogContent>
            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
              <TextField label="Email" fullWidth />
            </div>
            <div
              style={{
                marginBottom: "0.5rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                style={{ background: Colors.primaryColor }}
              >
                Save
              </Button>
              <Button onClick={emailDialogClose}>Cancel</Button>
            </div>
          </DialogContent>
        </div>
      </Section>
    </Dialog>
  );
};

// Phone Dialog

export const PhoneDialog = ({ phoneDialogOpen, phoneDialogClose }) => {
  return (
    <Dialog open={phoneDialogOpen} fullScreen>
      <Section>
        <div className="content">
          <DialogTitle color={Colors.primaryColor}>
            Update Your Phone
          </DialogTitle>
          <DialogContent>
            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
              <TextField label="Phone No." fullWidth type="number" />
            </div>
            <div
              style={{
                marginBottom: "0.5rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                style={{ background: Colors.primaryColor }}
              >
                Save
              </Button>
              <Button onClick={phoneDialogClose}>Cancel</Button>
            </div>
          </DialogContent>
        </div>
      </Section>
    </Dialog>
  );
};

// Address Dialog

export const AddressDialog = ({ addressDialogOpen, addressDialogClose }) => {
  return (
    <Dialog open={addressDialogOpen} fullScreen>
      <Section>
        <div className="content">
          <DialogTitle color={Colors.primaryColor}>
            Update Your Address
          </DialogTitle>
          <DialogContent>
            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
              <TextField label="Address" fullWidth />
            </div>
            <div
              style={{
                marginBottom: "0.5rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                style={{ background: Colors.primaryColor }}
              >
                Save
              </Button>
              <Button onClick={addressDialogClose}>Cancel</Button>
            </div>
          </DialogContent>
        </div>
      </Section>
    </Dialog>
  );
};

// Language Dialog

export const Language = ({ langDialogOpen, langDialogClose }) => {
  return (
    <Dialog open={langDialogOpen} fullScreen>
      <Section>
        <div className="content">
          <DialogTitle color={Colors.primaryColor}>
            Update Your Language
          </DialogTitle>
          <DialogContent>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select>
                <MenuItem value={15}>Kashmiri</MenuItem>
                <MenuItem value={20}>English</MenuItem>
                <MenuItem value={30}>Urdu</MenuItem>
              </Select>
            </FormControl>
            <div
              style={{
                marginTop: "2rem",
                display: "flex",
                gap: "1rem",
                justifyContent: "flex-end",
              }}
            >
              <Button
                variant="contained"
                style={{ background: Colors.primaryColor }}
              >
                Save
              </Button>
              <Button onClick={langDialogClose}>Cancel</Button>
            </div>
          </DialogContent>
        </div>
      </Section>
    </Dialog>
  );
};

// Gender Dialog

export const Gender = ({ genderDialogOpen, genderDialogClose }) => {
    return (
      <Dialog open={genderDialogOpen} fullScreen>
        <Section>
          <div className="content">
            <DialogTitle color={Colors.primaryColor}>
              Update Your Gender
            </DialogTitle>
            <DialogContent>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select>
                  <MenuItem value={15}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                  <MenuItem value={30}>Other</MenuItem>
                </Select>
              </FormControl>
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="contained"
                  style={{ background: Colors.primaryColor }}
                >
                  Save
                </Button>
                <Button onClick={genderDialogClose}>Cancel</Button>
              </div>
            </DialogContent>
          </div>
        </Section>
      </Dialog>
    );
  };

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .content {
    width: 50%;
    /* background-color: red; */
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .content {
      width: 100%;
    }
  }
`;
