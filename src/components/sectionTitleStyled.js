import styled from "styled-components"

export const SectionTitle = styled.p`
  position: relative;
  font-weight: bold;
  font-size: 50px;
  border-bottom: 2em;
  display: inline-block;
  padding-bottom: 10px;

  ::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -15px; /*線の上下位置*/
    display: inline-block;
    width: 60px; /*線の長さ*/
    height: 5px; /*線の太さ*/
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%); /*位置調整*/
  background-color: ${p => p.dark ? "#efeff4" : "#24252a"}; /*線の色*/
  }
`
