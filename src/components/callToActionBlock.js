import React from "react"
import styled from "styled-components"
import RichText from "./richText"

const CallToActionBlockWrapper = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 400px;
  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin: 20px 0;
    width: 60%;
  }

  @media (max-width: 500px) {
    width: 90%;
  }

  :hover{
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    opacity: 0.8;
  }

  img {
    margin: 0;
  }

  .call-toaction-content {
    display: flex;
    flex-direction: column;
    margin: 8px;
    p {
      color: #696969;
      margin: 8px;
      padding-bottom: 12px;
      border-bottom: 1px solid #696969;
    }
    h4 {
      color: #404040;
    }
  }
`

const CallToActionBlock = ({ title, date, featuredImage, link }) => {
  return (
    <CallToActionBlockWrapper>
      <a href={link} target="_blank" rel="noreferrer noopener">
        <div className="featured-image-wrapper">
          <img src={featuredImage} alt="project" />
        </div>
        <div className="call-toaction-content">
          <p>作成日{date}</p>
          <RichText render={title} />
        </div>
      </a>
    </CallToActionBlockWrapper>
  )
}

export default CallToActionBlock
