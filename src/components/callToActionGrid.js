import React from "react"
import styled from "styled-components"
import RichText from "./richText"
import CallToActionBlock from "./callToActionBlock"
import { Link } from "gatsby"

const CallToActionGridWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto 150px auto;
  display: flex;
  flex-direction: column;


  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
  .call-toaction-link {
    width: 90px;
    text-decoration: none;
    color: #696969;
    padding-bottom: 3px;
  }

  h1{
    border-left: 3px solid #03dac5;
    padding-left: 10px;
  }

  .call-toaction-link::after {
    content: "";
    width: 0;
    transition: all 0.5s ease;
    border-bottom: 2px solid #696969;
    display: block;
  }
  .call-toaction-link:hover::after {
    width: 100%;
    border-bottom: 2px solid #696969;
  }

  .call-toaction-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      margin: 0;
    }
  }
`

const CallToActionGrid = ({ title, callToActions }) => {
  return (
    <CallToActionGridWrapper>
      <RichText render={title} />
      <div className="call-toaction-container">
        {callToActions.map((callToAction, i) => {
          return (
            <CallToActionBlock
              key={i}
              title={callToAction.call_to_action_title}
              date={callToAction.call_to_action_date}
              link={callToAction.call_to_action_link.url}
              featuredImage={callToAction.featured_image.url}
            />
          )
        })}
      </div>
          <Link className="call-toaction-link" to="/project">もっと見る</Link>
    </CallToActionGridWrapper>
  )
}

export default CallToActionGrid
