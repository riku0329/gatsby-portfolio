import React from "react"
import styled from "styled-components"
import RichText from "./richText"

const HeroWrapper = styled.section`
  height: calc(100vh - 66px);
  background: #24252a;
  display: flex;
  align-items: center;
  text-align: center;
  color: #efeff4;
  div {
    margin: 0 auto;
    max-width: 800px;
  }
  p {
    color: #03dac5;
  }
`

const Hero = ({ title, description }) => {
  return (
    <HeroWrapper>
      <div>
        <RichText render={title} />
        <p>{description}</p>
      </div>
    </HeroWrapper>
  )
}

export default Hero
