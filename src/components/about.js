import React from "react"
import styled from "styled-components"
import RichText from "./richText"
import { SectionTitle } from "./sectionTitleStyled"

const AboutWrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
  margin-bottom: 200px;
  text-align: center;
  .about-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 70px;
    @media (max-width: 768px){
      flex-direction: column;
    }
  }
  .about-image {
  }
  img {
    height: 200px;
    max-width: 200px;
    border-radius: 10px;
  }
`

const About = ({ title, description, image }) => {
  return (
    <AboutWrapper>
      <SectionTitle>{title}</SectionTitle>
      <div className="about-content">
        <div className="about-image">
          <img src={image} alt="about-me" />
        </div>
        {description}
      </div>
    </AboutWrapper>
  )
}

export default About
