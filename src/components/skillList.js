import React from "react"
import styled from "styled-components"
import { SectionTitle } from "./sectionTitleStyled"
import SkillItem from "./skillItem"

const SkillListWrapper = styled.section`
  background: #24252a;
  padding-top: 100px;
  color: #efeff4;
  height: 100vh;
  @media (max-width: 768px){
    height: 100%;
  }
  > div {
    display: flex;
    color: #03dac5;
    max-width: 800px;
    margin: 0 auto;
    @media (max-width: 768px){
      flex-direction: column;
    }
  }
`

const SkillList = ({ title, skills }) => {
  return (
    <SkillListWrapper>
      <SectionTitle dark>{title}</SectionTitle>
      <div>
        {skills.map((skill, i) => {
          console.log(skill)
          return (
            <SkillItem
              key={i}
              title={skill.skill_list_title}
              description={skill.skill_list_description}
            />
          )
        })}
      </div>
    </SkillListWrapper>
  )
}

export default SkillList