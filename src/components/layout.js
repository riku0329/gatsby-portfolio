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
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 66px;
  padding: 0 16px;
  box-sizing: border-box;
  box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
  background: #24252a;
  position: fixed;
  width: 100%;
`

const NaviLinks = styled.div`
  display: flex;
`

const NaviLink = styled.div`
  a {
    padding: 0 16px;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
  }
`

const Button = styled.button`
  padding: 5px 25px;
  background: #03dac5;
  border: none;
  border-radius: 20px;
  color: #24252a;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover {
    background: #03dac5;
    opacity: 0.8;
  }
`
const Branding = styled.div`
  a {
    font-weight: bold;
    font-size: 18px;
    color: #efeff4;
    text-decoration: none;
  }
`
const Main = styled.main`
  text-align: center;
`

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <StaticQuery
          query={`${navigationQuery}`}
          render={data => {
            console.log(data)
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
                            <Button>{link.label}</Button>
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
      </Header>
      <Main>{children}</Main>
      <footer>
        © {new Date().getFullYear()}, Riku Oya.All rights reserved.
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
