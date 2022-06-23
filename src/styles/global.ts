import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E52E4D;
    --green: #33CC95;
    --blue: #5429CC;

    --blueLight: #6933ff;

    --textTitle: #363f5f;
    --textBody: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  //font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15 px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14 px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .reactModalOverlay {
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    
  }

  .reactModalContent {
    background: var(--background);
    width: 100%;
    max-width: 576px;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;

  }
  
  .reactModalClose {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
