import styled from "styled-components"

export const ContentSection = styled.section`
  width: 100%;
  max-width: 960px;
  margin: 0 auto 150px auto;
  margin-top: 70px;
  h1 {
    border-left: 3px solid #03dac5;
    padding-left: 10px;
  }
  .centent_list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    &::after {
      content: "";
      display: block;
      height: 0;
      width: 33%;
      margin: 20px;
    }
  }

  .content_link{
    text-decoration: none;
    color: #888;
    span{
      margin-left: 4px;
      transition: .5s;
    }
    :hover{
      color: #03dac5
    }
    :hover span{
      margin-left: 13px;
      color: #03dac5
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 70px auto 0;
    .centent_list {
      justify-content: center;
    }
  }
`
