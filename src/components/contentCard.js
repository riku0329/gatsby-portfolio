import React from "react"
import styled from "styled-components"
import RichText from "./richText"
import { Link } from "gatsby"

const CardItem = styled.div`
  background: #fff;
  display: flex;
  width: 30%;
  height: 400px;
  margin: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

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

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    opacity: 0.8;
  }
  .blog-image {
    max-width: 100%;
    height: 200px;
    margin: 0;
  }

  img {
    width: 100%;
    height: 200px;
    margin: 0;
  }

  .card_item-text {

    padding: 20px;
    p {
      color: #696969;
      border-bottom: 1px solid #696969;
    }
    h3 {
      margin-top: 8px;
      color: #404040;
    }
  }
`

const ContentCard = ({ destination, title, date, image, link }) => {
  return (
    <>
      {destination ? (
        <CardItem>
          <Link to={destination}>
            <div className="card-image">
              <img src={image} alt="blog" />
            </div>
            <div className="card_item-text">
              <p>{date}</p>
              <RichText render={title} />
            </div>
          </Link>
        </CardItem>
      ) : (
          <CardItem>
            <a href={link} target="_blank" rel="noreferrer noopener">
            <div className="card-image">
              <img src={image} alt="project" />
            </div>
            <div className="card_item-text">
              <p>{date}</p>
              <RichText render={title} />
              </div>
            </a>
        </CardItem>
      )}
    </>
  )
}

export default ContentCard;
