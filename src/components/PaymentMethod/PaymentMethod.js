import React from "react";
import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
import { Constant } from "../../constants";
import PayPal from "./PayPal";
import { Link } from "react-router-dom";
import cardIcon from "../../media/credit-card.png"
import bitcoinIcon from "../../media/bitcoin-logo.png"
import paypalIcon from "../../media/paypal.png"


const { Fonts,  Flex,  ButtonP } = Constant;

const PaymentMethod = () => {
  return (
    <Section>
      <div className="paymentMethodHead">
        <Link to="/">
          <IoChevronBack />
        </Link>
        <span>add a payment method</span>
      </div>
      <div className="MethodPara">
        <p>choose payment method to add</p>
      </div>
      <div className="paymentSelectionDiv">
        <PayPal hfor="paypal" cardname="payment" title="paypal" img={paypalIcon} />
        <PayPal hfor="creditcard" cardname="payment"  title="credit card" img={cardIcon}/>
        <PayPal hfor="bitcoin" cardname="payment"  title="bitcoin" img={bitcoinIcon}/>
      </div>
      <div className="next_button_div">
        <button>next</button>
      </div>
    </Section>
  );
};
export default PaymentMethod;
const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 1rem 5rem;
  text-transform: capitalize;
  font-family: ${Fonts.primaryFont};
  .paymentMethodHead {
    padding: 0  1rem;
    ${Flex};
    span,a {
      padding: 1rem ;
      font-size: 1.6rem;
      font-weight: 600;
      justify-content: center;
      ${Flex};
      /* background-color: red; */

    }
      span{
        flex: 1;
      }
      a{
        cursor: pointer;
        color: #000;
       
      }
    }
  
  .MethodPara{
    ${Flex};
    padding: 2rem 1rem;
    font-size: 1.2rem;
    /* background-color: red; */

  }
  .paymentSelectionDiv{
    padding: 1rem;
    min-height: 25rem;

  }
  .next_button_div{
    ${Flex};
    width: 100%;
    justify-content: center;
    button{
      ${ButtonP};
      font-size: 1.3rem;
      padding:1rem 15rem;
    }
  }
  @media (max-width: 767px){
   
  padding: 1rem 1rem;
  .paymentMethodHead {
    padding: 0  .5rem;
    span,a {
      padding: .5rem ;
      font-size: 1.2rem;

    }
      
    }
  
  .MethodPara{
    padding: 1.5rem 1rem;
    font-size: 1rem;
    /* background-color: red; */

  }
  .paymentSelectionDiv{
    padding: .5rem 0;
    min-height: 22rem;

  }
  .next_button_div{
    width: 100%;
    justify-content: center;
    button{
      width: inherit;
      ${ButtonP};
      font-size: 1.1rem;
    }
  }
  }
  @media (max-width: 355px){
    padding: .4rem;
  .paymentMethodHead {
    padding: .1rem;
    span,a {
      padding: 0 .3rem ;
      font-size: .9rem;
    }
    }
  
  .MethodPara{
    padding: 1rem .5rem;
    font-size: .7rem;

  }
  .paymentSelectionDiv{
    padding: .1rem 0;
    min-height: 20rem;

  }
  .next_button_div{
    padding: 0 .1rem;
    button{
    }
  }
  

  }
`;
