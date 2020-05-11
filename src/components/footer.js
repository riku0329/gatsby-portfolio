import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const FooterWrapper = styled.footer`
  height: 20vh;
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
  a {
    text-decoration: none;
    color: #efeff4;
    :hover {
      color: #03dac5;
    }
  }
`
const Button = styled.button`
  background: #24252a;
  color: #efeff4;
  border: none;
  border-radius: 5px;
  &:hover {
    transition: 0.3s;
    background: #03dac5;
    color: #24252a;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <Link to="/contact-me">
          <Button>Contact</Button>
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
