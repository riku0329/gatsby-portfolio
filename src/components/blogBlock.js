import React from "react"
import styled from "styled-components"
import RichText from "./richText"
import { Link } from "gatsby"

const BlogBlockWrapper = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 350px;
  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin: 20px 0;
    width: 90%;
  }

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    opacity: 0.8;
  }

  img {
    width: 100%;
    height: 200px;
    margin: 0;
  }

  .blog-block-content {
    display: flex;
    flex-direction: column;
    margin: 8px;
    p {
      color: #696969;
      padding-bottom: 12px;
      border-bottom: 1px solid #696969;
    }
    h4 {
      color: #404040;
    }
  }
`

const BlogBlock = ({ destination, title, date, image }) => {
  return (
    <BlogBlockWrapper>
      <Link to={destination}>
        <div>
          <img src={image} alt="blogs" />
        </div>
        <div className="blog-block-content">
          <p>{date}</p>
          <RichText render={title} />
        </div>
      </Link>
    </BlogBlockWrapper>
  )
}

export default BlogBlock
