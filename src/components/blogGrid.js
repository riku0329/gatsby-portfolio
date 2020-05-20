import React from "react"
import RichText from "./richText"
import ContentCard from "./contentCard"
import { ContentSection } from "./content.style"

const BlogGrid = ({ title, blogGrids }) => {
  return (
    <ContentSection>
      <RichText render={title} />
      <p>最新記事一覧ほとんどメモの代わりです。</p>
      <div className="centent_list">
        {blogGrids.map((blogGrid, i) => {
          return (
            <ContentCard
              key={i}
              date={blogGrid.blog_date}
              image={blogGrid.blog_grid_image.url}
              title={blogGrid.blog_grid_title}
              destination={`/${blogGrid.blog_link._meta.uid}`}
            />
          )
        })}
      </div>
    </ContentSection>
  )
}

export default BlogGrid
