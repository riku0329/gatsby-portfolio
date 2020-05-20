import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
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
  margin-top: 100px;
  .home_path:after {
    content: "ブログ";
  }
  .home_path {
    a {
      font-weight: bold;
      color: #03dac5;
    }
    span {
      margin: 0 10px 0 10px;
    }
  }
`

const ArticleWrapper = styled.article`
  margin: 10rem 0;
  .article-header {
    border-bottom: 1px solid #c0c0c0c0;
    padding-bottom: 20px;
  }
  p{
    font-size: 16px
  }
  @media (max-width: 768px){
    width: 90%;
    margin:10rem auto;
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
        <div>
          <p className="home_path">
            <Link to="/">ホーム</Link>
            <span>></span>
          </p>
        </div>
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
