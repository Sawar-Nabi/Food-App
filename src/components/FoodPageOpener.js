import React from "react";
import styled from "styled-components";
import { IconName } from "react-icons/md";
import bannerinside from "../media/bannerinside.jpg";

const OpenMenu = () => {
  return (
    <Section>
      <div className="open_banner">
        <div className="banner_Header"></div>
      </div>
    </Section>
  );
};

export default OpenMenu;

const Section = styled.section`
    width: 100vw;
    height: 100vh;
    .open_banner {
      width: 100%;
      height: 30rem;
      background-image: url(${bannerinside});
      background-repeat: no-repeat;
      background-size: cover;
      .banner_Header {
        width: 100%;
        height: 5rem;
        /* background-color: yellow; */
      }
    }
`;
