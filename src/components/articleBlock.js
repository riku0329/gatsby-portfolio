import React from "react"
import RichText from "./richText"

const ArticleBlock = ({ title, description }) => {
  return (
    <div>
      <RichText render={title} />
      <RichText render={description} />
    </div>
  )
}

export default ArticleBlock
