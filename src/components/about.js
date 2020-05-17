import React from "react"
import styled from "styled-components"
import RichText from "./richText"

const AboutWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 50px;
  margin-bottom: 100px;
  border-bottom: 2px solid #c0c0c0c0;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }

  h1 {
    border-left: 3px solid #03dac5;
    padding-left: 10px;
  }

  h2 {
    margin: 80px 0;
    @media (max-width: 768px) {
      font-size: 18px;
      padding: 10px;
      margin-bottom: 0;
    }
  }
  .about-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .about-image {
    margin-right: 16px;
    width: 400px;
    @media (max-width: 768px) {
      width: 100px;
      margin: 20px 0;
    }
  }
  img {
    margin: 0;
    border-radius: 50%;
  }
  .about-description-wrapper {
    text-align: left;
  }
`

const About = ({ title, description, image, aboutTitle }) => {
  return (
    <AboutWrapper>
      <RichText render={title} />
      <RichText render={aboutTitle} />
      <div className="about-content">
        <div className="about-image">
          <img src={image} alt="about-me" />
        </div>
        <div className="about-description-wrapper">
          <RichText render={description} />
        </div>
      </div>
    </AboutWrapper>
  )
}

export default About
