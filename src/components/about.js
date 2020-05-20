import React from "react"
import styled from "styled-components"
import RichText from "./richText"

const AboutSection = styled.section`
  padding: 70px 0;
  background: #f7f7f7;
  .about_wrap {
    max-width: 960px;
    margin: 0 auto;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  h1 {
    border-left: 3px solid #03dac5;
    padding-left: 10px;
  }

  h2 {
    text-align: center;
    @media (max-width: 768px) {
      padding: 8px;
    }
  }

  .about-content {
    display: flex;
    justify-content: center;
    margin-top: 70px;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
  .about-image {
    max-width: 150px;
    width: 100%;
    margin-right: 50px;
    img{
      border-radius: 50%;

    }
  }
  .about-description-wrapper {
    text-align: left;
  }
`

const About = ({ title, description, image, aboutTitle }) => {
  return (
    <AboutSection>
      <div className="about_wrap">
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
      </div>
    </AboutSection>
  )
}

export default About
