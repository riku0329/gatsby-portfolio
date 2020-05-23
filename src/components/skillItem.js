import React from "react"
import styled from "styled-components"
import RichText from "./richText"

const SkillItemWrapper = styled.div`
  width: 40%;
  margin: 50px 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.8);
  text-align: center;
  padding: 40px;
  h3{
    text-align: center;
    margin: 10px 0;
  }
  .skill-item-description {
    color: #c3ccdb;
    font-weight: bold;
  }

  @media (max-width: 768px){
    width: 90%;
  }

`

const SkillItem = ({ title, description, icon }) => {
  return (
    <SkillItemWrapper>
      <img src={icon} alt="skill-icon"/>
        <RichText render={title} />
      <div className="skill-item-description">
        <RichText render={description} />
      </div>
    </SkillItemWrapper>
  )
}

export default SkillItem
