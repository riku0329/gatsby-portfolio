import styled from "styled-components"

export const SectionTitle = styled.div`
  position: relative;
  font-weight: bold;
  border-bottom: 2em;
  display: inline-block;
  padding-bottom: 10px;

  ::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -1px;
    display: inline-block;
    width: 60px;
    height: 5px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: ${p => (p.dark ? "#efeff4" : "#24252a")};
  }
`
