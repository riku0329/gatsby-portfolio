import React from "react"
import styled from "styled-components"
import RichText from "./richText"
import BlogBlock from "./blogBlock"
import ContentCard from "./contentCard"

const ContentWrap = styled.section`
  width: 100%;
  max-width: 800px;
  margin: 0 auto 150px auto;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
  h1 {
    border-left: 3px solid #03dac5;
    padding-left: 10px;
  }
  .centent_list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    &::after {
      content: "";
      display: block;
      height: 0;
      width: 40%;
      margin: 20px;
    }
  }
`

const Content = ({ title, blogGrids }) => {
  return (
    <ContentWrap>
      <RichText render={title} />
      <div className="centent_list">
        {blogGrids.map((blogGrid, i) => {
          return (
            <ContentCard
              key={i}
              date={date}
              image={image}
              title={title}
              destination={destination}
            />
          )
        })}
      </div>
    </ContentWrap>
  )
}

export default BlogGrid
