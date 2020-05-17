import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RichText from "../components/richText"
import SliceZone from "../components/sliceZone"

export const query = graphql`
  query Blogquery($id: String) {
    prismic {
      allBlogs(id: $id) {
        edges {
          node {
            blog_date
            blog_description
            blog_image
            blog_title
            _meta {
              uid
              type
              id
            }
            body {
              ... on PRISMIC_BlogBodyArticle {
                type
                label
                fields {
                  sub_description
                  sub_title
                }
                primary {
                  section_description
                  section_title
                }
              }
            }
          }
        }
      }
    }
  }
`

const BlogWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const ArticleWrapper = styled.article`
  margin: 10rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .article-header {
    border-bottom: 2px solid #c0c0c0c0;
  }
  p{
    font-size: 16px
  }
  @media (max-width: 768px){
    width: 90%;
    margin:0 auto;
    p{
      font-size: 10px;
    }
  }
`

const Blog = props => {
  const title = props.data.prismic.allBlogs.edges[0].node.blog_title
  const description = props.data.prismic.allBlogs.edges[0].node.blog_description
  const date = props.data.prismic.allBlogs.edges[0].node.blog_date
  const img = props.data.prismic.allBlogs.edges[0].node.blog_image.url
  return (
    <Layout>
      <SEO title={title[0].text} description={description} />
      <BlogWrapper>
        <ArticleWrapper>
          <header className="article-header">
            <RichText render={title} />
            <p>{date}</p>
            <div>
              <img src={img} alt="blog-hero" />
            </div>
            <p>{description}</p>
          </header>
          <SliceZone body={props.data.prismic.allBlogs.edges[0].node.body} />
        </ArticleWrapper>
      </BlogWrapper>
    </Layout>
  )
}

export default Blog
