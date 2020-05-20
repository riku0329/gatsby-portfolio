import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SliceZone from "../components/sliceZone"

export const query = graphql`
  {
    prismic {
      allHomepages {
        edges {
          node {
            body {
              ... on PRISMIC_HomepageBodyHero {
                type
                primary {
                  hero_title
                  hero_description
                  hero_image
                  hero_logo
                }
              }
              ... on PRISMIC_HomepageBodyAbout {
                type
                primary {
                  about_title
                  about_description
                  about_image
                  section_title
                }
              }
              ... on PRISMIC_HomepageBodyCall_to_aciton_grid {
                type
                primary {
                  section_title
                }
                fields {
                  call_to_action_title
                  call_to_action_date
                  featured_image
                  call_to_action_link {
                    ... on PRISMIC__ExternalLink {
                      _linkType
                      url
                    }
                  }
                }
              }
              ... on PRISMIC_HomepageBodyBlog_grid {
                type
                fields {
                  blog_date
                  blog_grid_image
                  blog_link {
                    ... on PRISMIC_Blog {
                      _meta {
                        uid
                      }
                      _linkType
                    }
                  }
                  blog_grid_title
                }
                primary {
                  section_title
                }
              }
              ... on PRISMIC_HomepageBodySkils_list {
                type
                primary {
                  section_title
                }
                fields {
                  skill_list_description
                  skill_list_title
                  skill_icon
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" description="ポートフォリオ" />
      <SliceZone body={props.data.prismic.allHomepages.edges[0].node.body} />
    </Layout>
  )
}

export default IndexPage
