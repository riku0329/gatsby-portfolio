import React from "react"
import styled from "styled-components"
import RichText from "./richText"

const CallToActionBlockWrapper = styled.div`
  background: white;
  padding: 20px;
  margin: 50px 0;
  border-radius: 3px;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
  .call-toaction-content {
    display: flex;
    @media (max-width: 768px){
      flex-direction: column;
    }
    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
  .featured-image-wrapper {
    padding: 10px;
    margin: auto 10px;
  }
  img {
    max-width: 500px;
    @media (max-width: 768px) {
    max-width: 300px;
  }
  }
`

const CallToActionBlock = ({ title, content, featuredImage }) => {
  return (
    <CallToActionBlockWrapper>
      <div className="call-toaction-content">
        <div>
          <RichText render={title} />
          <RichText render={content} />
        </div>
        <div className="featured-image-wrapper">
          <img src={featuredImage} alt="project" />
        </div>
      </div>
    </CallToActionBlockWrapper>
  )
}

export default CallToActionBlock
