import React from 'react'
import CommonNav from '../CommonNav'
import styled from "styled-components";
import { Constant } from "../../constants";
import { IoNotificationsOutline } from "react-icons/io5";


const { Colors, Flex, CardListStyle, Fonts, ButtonP } = Constant;

const UserProfile = () => {
  return (
    <Section>
    
        <CommonNav title="Muneeb bhat" pagelink="/" icon={<IoNotificationsOutline /> }color="#fff" iconColor="#fff"/>
        <div className="Primary_background"></div>
        <div className="userDetail">
            <div className="userImage">
              <img src="" alt="" />
            </div>
          <div className="UserName">
            <p>Muneeb bhat</p>
            <p>1254663@Gmail.com</p>
          </div>
        </div>

    </Section>
  )
}

export default UserProfile
const Section = styled.section`
padding: 1rem 3rem;
background-color: green;
.Primary_background{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
    height: 25rem;
    border-radius: 0% 0% 50% 50% / 0% 0% 15% 15%;
    background-color: ${Colors.primaryColor};
}
.userDetail{
  padding: 3rem ;
.UserName{
  p{
  }
}
}


` 