import React from "react"
import styled from "styled-components"
import RichText from "./richText"

import ArticleBlock from "./articleBlock"

const ArticleBody = styled.div`
  margin-top: 5rem;
  border-bottom: 2px solid #c0c0c0c0;
  .article-title {
    border-left: 4px solid #03dac5;
    padding-left: 8px;
  }
`

const ArticleGrid = ({ title, description, articles }) => {
  return (
    <ArticleBody>
      <div className="article-title">
        <RichText render={title} />
      </div>
      <p>{description}</p>
      {articles.map((article, i) => {
        return (
          <ArticleBlock
            key={i}
            title={article.sub_title}
            description={article.sub_description}
          />
        )
      })}
    </ArticleBody>
  )
}

export default ArticleGrid
