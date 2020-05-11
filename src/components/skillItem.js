import React from "react"
import styled from "styled-components"
import RichText from "./richText"

const SkillItemWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  margin: 50px 10px;
  padding: 0 5px;
  .skill-item-description {
    color: #c3ccdb;
    font-weight: bold;
  }
`

const SkillItem = ({ title, description }) => {
  return (
    <SkillItemWrapper>
      <div>
        <RichText render={title} />
      </div>
      <div className="skill-item-description">
        <RichText render={description} />
      </div>
    </SkillItemWrapper>
  )
}

export default SkillItem
