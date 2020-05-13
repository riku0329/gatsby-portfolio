import React from "react"
import styled from "styled-components"
import RichText from "./richText"
import BlogBlock from "./blogBlock"

const BlogGridWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto 150px auto;
  h1 {
    border-left: 3px solid #03dac5;
    padding-left: 10px;
  }
  >div{
    display: flex;
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
