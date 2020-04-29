import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Link } from "gatsby"


const ContactSuccessWrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a{
    text-decoration: none;
  }
`


const ContactSuccess = () => {
  return (
    <Layout>
      <ContactSuccessWrapper>
        <h3>
          メッセージが送信されました。折り返しご連絡いたします。
        </h3>
        <Link to="/">トップに戻る</Link>
      </ContactSuccessWrapper>
    </Layout>
  )
}

export default ContactSuccess
