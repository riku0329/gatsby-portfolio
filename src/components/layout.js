/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

import "./layout.css"
import Footer from "./footer"

const navigationQuery = graphql`
  {
    prismic {
      allNavigations {
        edges {
          node {
            navigation_links {
              link {
                ... on PRISMIC_Project {
                  _linkType
                  _meta {
                    uid
                  }
                }
                ... on PRISMIC_Contact_me {
                  _linkType
                  _meta {
                    uid
                  }
                }
              }
              label
            }
            branding
          }
        }
      }
    }
  }
`

const Header = styled.header`
  height: 70px;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
  background: #24252a;
  position: fixed;
  padding: 0;
  top: 0;
  transition: 0.5s;
  width: 100%;
  z-index: 10;
  border-bottom: 2px solid #03dac5;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 960px;
    margin: 0 auto;
    height: 100%;
    @media (max-width: 768px) {
      justify-content: space-around;
    }
  }
`

const NaviLinks = styled.ul`
  list-style-type: none;
  text-align: center;
  margin: 0;
`

const NaviLink = styled.li`
  display: inline-block;
  margin: 0 8px;
  a {
    text-decoration: none;
    color: #efeff4;
    padding-bottom: 3px;
  }
  a::after {
    content: "";
    width: 0;
    transition: all 0.5s ease;
    border-bottom: 2px solid #03dac5;
    display: block;
  }
  a:hover::after {
    width: 100%;
    border-bottom: 2px solid #03dac5;
  }
`
const Branding = styled.div`
  a {
    font-family: 'Squada One', cursive;
    font-weight: bold;
    font-size: 2em;
    color: #efeff4;
    text-decoration: none;
  }
  a::after {
    content: "";
    width: 0;
    transition: all 0.5s ease;
    border-bottom: 2px solid #03dac5;
    display: block;
  }
  a:hover::after {
    width: 100%;
    border-bottom: 2px solid #03dac5;
  }
`
const Main = styled.main`
`

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <div>
          <StaticQuery
            query={`${navigationQuery}`}
            render={data => {
              return (
                <>
                  <Branding>
                    <Link to="/">
                      {data.prismic.allNavigations.edges[0].node.branding}
                    </Link>
                  </Branding>
                  <NaviLinks>
                    {data.prismic.allNavigations.edges[0].node.navigation_links.map(
                      link => {
                        return (
                          <NaviLink key={link.link._meta.uid}>
                            <Link to={`/${link.link._meta.uid}`}>
                              {link.label}
                            </Link>
                          </NaviLink>
                        )
                      }
                    )}
                  </NaviLinks>
                </>
              )
            }}
          />
        </div>
      </Header>
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
