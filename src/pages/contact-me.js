import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"

import { SectionTitle } from "../components/sectionTitleStyled"

export const query = graphql`
  {
    prismic {
      allContact_mes {
        edges {
          node {
            form_description
            form_title1
            form_fields {
              field_name
              field_type
              required
            }
          }
        }
      }
    }
  }
`

const ContactMeWrapper = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding-top: 100px;
  height: 97vh;
  div {
    text-align: center;
  }

  p {
    padding-top: 20px;
  }
`

const Form = styled.form`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  input {
    margin-bottom: 10px;
    border-radius: 4px;
    height: 40px;
    border: 1px solid #efeff4;
    width: 100%;
    outline: none;
  }
  textarea {
    margin-bottom: 10px;
    border-radius: 4px;
    height: 100px;
    border: 1px solid #efeff4;
    width: 100%;
    resize: none;
    outline: none;
  }
`

const Button = styled.button`
  background: #efeff4;
  color: #24252a;
  cursor: pointer;
  padding: 4px 8px;
  box-shadow: none;
  border-radius: 4px;

  &:hover {
    background: #03dac5;
    transition: 1.5s;
  }
`

const ContactMe = props => {
  console.log(props)
  return (
    <Layout>
      <SEO title="Contact" />
      <ContactMeWrapper>
        <div>
          <SectionTitle>
            {props.data.prismic.allContact_mes.edges[0].node.form_title1}
          </SectionTitle>
          <p>
            {props.data.prismic.allContact_mes.edges[0].node.form_description}
          </p>
        </div>
        <Form
          name="contact-me"
          method="POST"
          data-netlify="true"
          action="/contact-success"
        >
          <input type="hidden" name="form-name" value="contact-me" />
          {props.data.prismic.allContact_mes.edges[0].node.form_fields.map(
            (field, i) => {
              console.log(field)
              if (field.field_type === "textarea") {
                return (
                  <div key={i}>
                    <textarea
                      name={field.field_name}
                      required={field.required === "Yes"}
                      placeholder={field.field_name}
                    />
                  </div>
                )
              } else {
                return (
                  <div key={i}>
                    <input
                      name={field.field_name}
                      placeholder={field.field_name}
                      required={field.required === "Yes"}
                      type={field.field_type}
                    />
                  </div>
                )
              }
            }
          )}
          <Button type="submit">送信</Button>
        </Form>
      </ContactMeWrapper>
    </Layout>
  )
}

export default ContactMe
