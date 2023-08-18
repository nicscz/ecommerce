import { styled } from "styled-components";

export const Body = styled.body`
  font-family: 'Roboto', sans-serif;
  align-items: center;
  width: 100%;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  margin-bottom: 70px;

  > head h1 {
    color: white;
    background-color: black; 
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`