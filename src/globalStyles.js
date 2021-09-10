import styled, { createGlobalStyle } from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
 } 

 :root {
    --roboto-font: 'Roboto', sans-serif;
    --righteous-font: 'Righteous';
    --cabin-font: 'Cabin', sans-serif;
    --pink-color: #f72585;
    --purple-color: #5736be;
    --blue-color: #395AFF;
    --dark-color: #010606;
  }

  body {
    overflow-x: hidden;
  }
  
  body::-webkit-scrollbar {
    width: 0.25rem;
  }
  
  body::-webkit-scrollbar-track {
    background: #1e1e24;
  }
  
  body::-webkit-scrollbar-thumb {
    background: #6649b8;
  }

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#c90d0d' : '#010606')};
    white-space: nowrap;
    padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#9f0909' : 'var(--purple-color)')};
    }

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`;

export default GlobalStyle;
