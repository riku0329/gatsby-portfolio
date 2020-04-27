import React from "react"
import styled from "styled-components"
import { SectionTitle } from "./sectionTitleStyled"
import CallToActionBlock from "./callToActionBlock"

const CallToActionGridWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
`

const CallToActionGrid = ({ title, callToActions }) => {
  return (
    <CallToActionGridWrapper>
      <SectionTitle>{title}</SectionTitle>
      {callToActions.map((callToAction, i) => {
        return (
          <CallToActionBlock
            key={i}
            title={callToAction.call_to_action_title}
            content={callToAction.content}
            featuredImage={callToAction.featured_image.url}
          />
        )
      })}
    </CallToActionGridWrapper>
  )
}

export default CallToActionGrid
