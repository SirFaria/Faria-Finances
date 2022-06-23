import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  margin: 0 auto;
  padding: 2rem 1rem 10rem;
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: #fff;
    background: var(--blueLight);
    font-size: 1rem;
    border: 0;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
