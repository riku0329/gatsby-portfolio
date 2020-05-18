import React from "react"
import styled from "styled-components"
import RichText from "./richText"
import BlogBlock from "./blogBlock"

const BlogGridWrapper = styled.section`
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
  > div {
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

const BlogGrid = ({ title, blogGrids }) => {
  return (
    <BlogGridWrapper>
      <RichText render={title} />
      <div>
        {blogGrids.map((blogGrid, i) => {
          return (
            <BlogBlock
              key={i}
              date={blogGrid.blog_date}
              image={blogGrid.blog_grid_image.url}
              title={blogGrid.blog_grid_title}
              destination={`/${blogGrid.blog_link._meta.uid}`}
            />
          )
        })}
      </div>
    </BlogGridWrapper>
  )
}

export default BlogGrid
