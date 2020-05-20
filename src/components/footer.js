import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterWrapper = styled.footer`
  padding: 60px 0;
  background: #121212;
  color: #545557;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  div {
    display: flex;
    flex-direction: column;
  }
  .footer_contact {
    display: block;
    text-align: center;
    background: #24252a;
    color: #efeff4;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    &:hover {
      transition: 0.3s;
      background: #03dac5;
      color: #24252a;
    }
  }
  a {
    text-decoration: none;
    text-align: center;
    margin: 8px 0;
    color: #efeff4;
    :hover {
      color: #03dac5;
    }
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <Link to="/contact-me" className="footer_contact">
          Contact
        </Link>
        <a
          href="https://github.com/riku0329/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Git hub
        </a>
        <p>
          © {new Date().getFullYear()}, Riku Oya.
          {` `}
        </p>
      </div>
    </FooterWrapper>
  )
}

export default Footer
