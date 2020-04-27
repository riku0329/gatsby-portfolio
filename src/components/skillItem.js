import React from "react"
import styled from "styled-components"
import RichText from "./richText"

const SkillItemWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  margin: 50px 10px;
  padding: 0 5px;
  position: relative;
  transition: .5s;
  .skill-item-description {
    color: #c3ccdb;
    font-weight: bold;
  }
  &:hover {
    transform: translateY(-1rem) scale(1);
    border: solid 1px #03dac5;
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
