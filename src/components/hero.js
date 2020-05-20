import React from "react"
import styled from "styled-components"
import RichText from "./richText"

const HeroWrap = styled.section`
  background: url('${props => props.image}');
  background-size: cover;
  background-repeat: no-repeat;
  height: 85vh;
  display: flex;
  align-items: center;
  text-align: center;
  h1{
    font-size: 5.3rem;
  }
  .hero_title {
    margin: 0 auto;
    max-width: 960px;
  }
  p {
    color: #03dac5;
    font-weight: bold;
  }
  img:hover{
    opacity: 0.8;
  }
`

const Hero = ({ title, description, image, logo }) => {
  console.log(image);
  return (
    <HeroWrap image={image}>
      <div className="hero_title">
        <RichText render={title} />
        <p>{description}</p>
        <a className="hero_logo" href="https://github.com/riku0329/" target="_blank" rel="noreferrer noopener">
          <img src={logo} alt="logo"/>
        </a>
      </div>
    </HeroWrap>
  )
}

export default Hero
