import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {BiShow} from 'react-icons/bi'
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
import InputAdornment from '@mui/material/InputAdornment'
import { TextField } from "@mui/material";
import { Constant } from "../../constants/index";
const { Fonts, Colors } = Constant;

export const UserNameDialog = ({ dialogOpen, dialogClose, funcDemo }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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
              <TextField
                label="First Name"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextField
                label="Last Name"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
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
                onClick={() => {
                  if (firstName === "" || lastName === "") {
                    toast.error("All Fields Required!", {
                      position: "top-center",
                      autoClose: 3000,
                    });
                  } else {
                    funcDemo(firstName, lastName);
                    toast.success("Username Successfully Updated", {
                      position: "top-center",
                      autoClose: 3000,
                    });
                    setFirstName("");
                    setLastName("");
                    setTimeout(() => {
                      dialogClose();
                    }, 3000);
                  }
                }}
              >
                Save
              </Button>
              <Button onClick={dialogClose}>Cancel</Button>
            </div>
          </DialogContent>
        </div>
        <ToastContainer />
      </Section>
    </Dialog>
  );
};

// Password Dialog

export const PasswordDialog = ({
  passDialogOpen,
  passDialogClose,
  funcDemo,
}) => {
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [oldPass, setOldPass] = useState("");
  const [oldPassword, setOldPassword] = useState("Sawar@12345678");

  
  return (
    <Dialog open={passDialogOpen} fullScreen>
      <Section>
        <div className="content">
          <DialogTitle color={Colors.primaryColor}>
            Update Your Password
          </DialogTitle>
          <DialogContent>
            <div style={{ marginBottom: "1rem", marginTop: "1rem" }}>
              <TextField label="Old Password" fullWidth 
              value={oldPass}
              onChange={(e) => setOldPass(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextField label="New Password" fullWidth value={password} 
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button style={{borderRadius: '50px', fontSize: '1.5rem'}}><BiShow/></Button>
                  </InputAdornment>
                ),
              }}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              />
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <TextField
                label="Confirm Password"
                fullWidth
                value={conPassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button style={{borderRadius: '50px', fontSize: '1.5rem'}}><BiShow/></Button>
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => {
                  setConPassword(e.target.value)
                }}
              />
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
                onClick={()=> {
                  if(password === '' || conPassword === '' || oldPassword === '') {
                    toast.error("All Fields Required!", {
                      position: "top-center",
                      autoClose: 3000,
                    });
                  }else if(oldPassword !== oldPass) {
                    toast.error("Old Password Not Matched!", {
                      position: "top-center",
                      autoClose: 3000,
                    });
                  }else if (password !== conPassword) {
                    toast.error("Password Not Matched", {
                      position: "top-center",
                      autoClose: 3000,
                    });
                  }else{
                    funcDemo(password);
                    toast.success("Password Successfully Updated", {
                      position: "top-center",
                      autoClose: 3000,
                    })
                    setPassword('')
                    setConPassword('')
                    setOldPass('')
                    setTimeout(() => {
                      passDialogClose()
                    }, 3000)
                  }
                }}
              >
                Save
              </Button>
              <Button onClick={passDialogClose}>Cancel</Button>
            </div>
            <ToastContainer />
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
