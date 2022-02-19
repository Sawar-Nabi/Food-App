import React, { useState } from "react";
import styled, { css } from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { CgGenderMale } from "react-icons/cg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineLanguage } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import CommonNav from "../CommonNav";
import {
  AddressDialog,
  EmailDialog,
  Gender,
  Language,
  PhoneDialog,
  UserNameDialog,
} from "./ProfileDialog";
import { PasswordDialog } from "./ProfileDialog";
import { Constant } from "../../constants/index";
const { Fonts, Colors } = Constant;

const Profile = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [passDialogOpen, setPassDialogOpen] = useState(false);
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [phoneDialogOpen, setPhoneDialogOpen] = useState(false);
  const [addressDialogOpen, setAddressDialogOpen] = useState(false);
  const [langDialogOpen, setLangDialogOpen] = useState(false);
  const [genderDialogOpen, setGenderDialogOpen] = useState(false);

  const dialogClose = () => setDialogOpen(false);
  const passDialogClose = () => setPassDialogOpen(false);
  const emailDialogClose = () => setEmailDialogOpen(false);
  const phoneDialogClose = () => setPhoneDialogOpen(false);
  const addressDialogClose = () => setAddressDialogOpen(false);
  const langDialogClose = () => setLangDialogOpen(false);
  const genderDialogClose = () => setGenderDialogOpen(false);
  return (
    <Card>
      <div className="nav_container">
        <CommonNav
          fucn={() => console.log()}
          icon="Save"
          color_right_icon={Colors.secondaryColor}
        />
      </div>
      <div className="profile_content_wrapper">
        <div className="profile_image_wrapper">
          <div>
            <img
              src="https://media.istockphoto.com/photos/smiling-south-asian-bearded-male-picture-id464565934?b=1&k=20&m=464565934&s=170667a&w=0&h=Axjxc7SS9veSjL3eBU2DAAmGpwSHl2A9O--6N67_yrg="
              alt=""
            />
          </div>
        </div>

        <div className="profile_tabs_wrapper">
          <div className="tabs_wrapper">
            <CardProfile
              leftIcon={<AiOutlineUser />}
              title="Sawar Nabi"
              right_icon={
                <MdModeEditOutline onClick={() => setDialogOpen(true)} />
              }
            />
            <CardProfile
              leftIcon={<RiLockPasswordLine />}
              title="Password"
              right_icon={
                <IoIosArrowForward onClick={() => setPassDialogOpen(true)} />
              }
            />
            <CardProfile
              leftIcon={<MdOutlineMailOutline />}
              title="sawarnabi2018@gmail.com"
              right_icon={
                <IoIosArrowForward onClick={() => setEmailDialogOpen(true)} />
              }
            />
            <CardProfile
              leftIcon={<BsTelephone />}
              title="9622656564"
              right_icon={
                <IoIosArrowForward onClick={() => setPhoneDialogOpen(true)} />
              }
            />
            <CardProfile
              leftIcon={<HiOutlineLocationMarker />}
              title="Kremshore Budgam 191111"
              right_icon={
                <IoIosArrowForward onClick={() => setAddressDialogOpen(true)} />
              }
            />
            <CardProfile
              leftIcon={<MdOutlineLanguage />}
              title="Kashmiri"
              right_icon={
                <IoIosArrowForward onClick={() => setLangDialogOpen(true)} />
              }
            />
            <CardProfile
              leftIcon={<CgGenderMale />}
              title="Male"
              right_icon={
                <IoIosArrowForward onClick={() => setGenderDialogOpen(true)} />
              }
            />
            <UserNameDialog dialogOpen={dialogOpen} dialogClose={dialogClose} />
            <PasswordDialog
              passDialogOpen={passDialogOpen}
              passDialogClose={passDialogClose}
            />
            <EmailDialog
              emailDialogOpen={emailDialogOpen}
              emailDialogClose={emailDialogClose}
            />
            <PhoneDialog
              phoneDialogOpen={phoneDialogOpen}
              phoneDialogClose={phoneDialogClose}
            />
            <AddressDialog
              addressDialogOpen={addressDialogOpen}
              addressDialogClose={addressDialogClose}
            />
            <Language
              langDialogOpen={langDialogOpen}
              langDialogClose={langDialogClose}
            />
            <Gender
              genderDialogOpen={genderDialogOpen}
              genderDialogClose={genderDialogClose}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

const CardProfile = ({ leftIcon, title, right_icon }) => {
  return (
    <ProfileCard className="user_name">
      <span>{leftIcon}</span>
      <span>{title}</span>
      <span style={{ cursor: "pointer" }}>{right_icon}</span>
    </ProfileCard>
  );
};

export default Profile;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid #e6e6e6;
  padding: 1rem 0;
  gap: 1.5rem;
  /* font-size: 1rem; */
  &:last-child {
    border: none;
  }
  color: #aaa;
  span {
    display: flex;
    align-items: center;
    svg {
      font-size: 1.2rem;
    }
    &:nth-child(2) {
      flex: 1;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    border-bottom: 0.1rem solid #e6e6e6;
    padding: 1rem 0;
    gap: 0.6rem;
    font-size: 0.8rem;
    &:last-child {
      border: none;
    }
    color: #aaa;
    span {
      display: flex;
      align-items: center;
      svg {
        font-size: 0.7rem;
      }
      &:nth-child(2) {
        flex: 1;
      }
    }
  }
`;

const Card = styled.div`
  font-family: ${Fonts.primaryFont};
  .profile_content_wrapper {
    padding: 1rem 3rem 6rem 3rem;
    /* background-color: red; */

    .profile_image_wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        max-width: 10rem;
        height: 10rem;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: inherit;
        }
      }
    }

    .profile_tabs_wrapper {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      padding-top: 3rem;
      .tabs_wrapper {
        padding: 0 1rem;
        width: 60%;
        height: auto;
        box-shadow: 0 0.1rem 1rem #e6e6e6;
        border-radius: 0.6rem;
        /* background-color: red; */
      }
    }
  }

  @media (max-width: 768px) {
    .profile_content_wrapper {
      padding: 1rem 1rem 6rem 1rem;
      /* background-color: red; */

      .profile_image_wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          max-width: 10rem;
          height: 10rem;
          border-radius: 50%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: inherit;
          }
        }
      }

      .profile_tabs_wrapper {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        padding-top: 3rem;
        .tabs_wrapper {
          padding: 0 1rem;
          width: 100%;
          height: auto;
          box-shadow: 0 0.1rem 1rem #e6e6e6;
          border-radius: 0.6rem;
          /* background-color: red; */
        }
      }
    }
  }
`;
