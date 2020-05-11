import React from "react"

import Hero from "./hero"
import About from "./about"
import CallToActionGrid from "./callToActionGrid"
import SkillList from "./skillList"
import ArticleGrid from "./articleGrid";
import BlogGrid from "./blogGrid"

const SliceZone = ({ body }) => {
  return (
    <div>
      {body.map((bodyContent, i) => {
        console.log(bodyContent)
        if (bodyContent.type === "hero") {
          return (
            <Hero
              key={i}
              title={bodyContent.primary.hero_title}
              description={bodyContent.primary.hero_description}
            />
          )
        } else if (bodyContent.type === "about") {
          return (
            <About
              key={i}
              aboutTitle={bodyContent.primary.about_title}
              title={bodyContent.primary.section_title}
              description={bodyContent.primary.about_description}
              image={bodyContent.primary.about_image.url}
            />
          )
        } else if (bodyContent.type === "call_to_aciton_grid") {
          return (
            <CallToActionGrid
              key={i}
              callToActions={bodyContent.fields}
              title={bodyContent.primary.section_title}
            />
          )
        } else if (bodyContent.type === "blog_grid") {
          return (
            <BlogGrid
              key={i}
              blogGrids={bodyContent.fields}
              title={bodyContent.primary.section_title}
            />
          )
        }

        else if (bodyContent.type === "skils_list") {
          return (
            <SkillList
              key={i}
              skills={bodyContent.fields}
              title={bodyContent.primary.section_title}
            />
          )
        } else if (bodyContent.type === "article") {
          return (
            <ArticleGrid
              key={i}
              articles={bodyContent.fields}
              title={bodyContent.primary.section_title}
              description={bodyContent.primary.section_description}
            />
          )
        }

        else {
          return null
        }
      })}
    </div>
  )
}

export default SliceZone
