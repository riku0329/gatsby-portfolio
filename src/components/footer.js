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
  a{
    text-decoration: none;
  }
`
const Button = styled.button`
  background: #24252a;
  color: #efeff4;
  border: none;
  border-radius: 5px;
  &:hover{
    transition: .3s;
    background: #03dac5;
  }
`

const Footer = () => {
  return (
    <FooterWrapper>
      <div>
        <Link to="/contact-me"><Button>Contact</Button></Link>
        <p>
          © {new Date().getFullYear()}, Riku Oya.
          {` `}
        </p>
      </div>
    </FooterWrapper>
  )
}

export default Footer
