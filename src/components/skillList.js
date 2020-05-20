import React from "react"
import styled from "styled-components"
import RichText from "./richText"
import SkillItem from "./skillItem"

const SkillListWrapper = styled.section`
  background: #24252a;
  padding-top: 100px;
  color: #efeff4;
  > div {
    max-width: 960px;
    margin: 0 auto;

    h1 {
      color: #efeff4;
      border-left: 3px solid #03dac5;
      padding-left: 10px;
    }

    .skill_list-wrap {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      color: #03dac5;
    }

    @media (max-width: 768px) {
      width: 90%;
      margin: 70px auto 0;

      .skill_list-wrap {
        flex-direction: column;
      }
    }
  }
`

const SkillList = ({ title, skills }) => {
  return (
    <SkillListWrapper>
      <div>
        <RichText render={title} />
        <p>未経験ですが学ぶモチベーションと成長スピードはあります！</p>
        <div className="skill_list-wrap">
          {skills.map((skill, i) => {
            return (
              <SkillItem
                key={i}
                title={skill.skill_list_title}
                description={skill.skill_list_description}
                icon={skill.skill_icon.url}
              />
            )
          })}
        </div>
      </div>
    </SkillListWrapper>
  )
}

export default SkillList
