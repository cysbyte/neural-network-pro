import React from 'react'
import styled from 'styled-components'

const Hero = () => {

  const Wrapper = styled.section`
    position: relative; 
    z-index: 1; 
    width: 100%;
    height: auto;
    padding: 6rem 13rem;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(17, 17, 17, 0.4) 0%, rgba(1, 169, 196, 0.4) 100%);
        z-index: -1; 
        opacity: 0.7; 
        pointer-events: none; 
      }

      h1 {
        font-family: Inter;
        font-size: 44px;
        font-weight: 600;
        line-height: 53.25px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: white;
      }
      p {
        font-family: Inter;
        font-size: 24px;
        font-weight: 300;
        line-height: 29.05px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: #FFFFFFCC;
        margin: 1rem 0rem;
      }
      


    `
  return (
    <Wrapper>
        <h1>Simple and Secure Staking</h1>
        <p>Join now to enjoy the highest returns available act early for greater benefits!</p>
    </Wrapper>
  )
}

export default Hero