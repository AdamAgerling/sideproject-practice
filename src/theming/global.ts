import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: none;
  font-size: 16px;
  font-family: 'sans-serif';
}
html, body, #__next{
height: 100%;
background-color: #ccc9 ;
}
button {
  font-size: 1rem;
}
input {
  font-size: 1rem;
}

h1{
  font-size: 6rem;
  @media screen and( max-width: 540px){
    font-size: 5rem;
  }
}
h2{
  font-size: 4rem;
  @media screen and( max-width: 540px){
    font-size: 3rem;
  }
}
h3{
  font-size: 3rem;
  @media screen and( max-width: 540px){
    font-size: 2.5rem;
  }
}
h4{
  font-size: 2.5rem;
  @media screen and( max-width: 540px){
    font-size: 2rem;
  }
}
h5{
  font-size: 2rem;
  @media screen and( max-width: 540px){
    font-size: 1.5rem;
  }
}
h6{
  font-size: 1.5rem;
  @media screen and( max-width: 540px){
    font-size: 1.8rem;
  }
}


`
