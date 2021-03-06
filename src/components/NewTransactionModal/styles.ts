import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--textTitle);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    background: #e7e9ee;
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--textBody);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    background: var(--green);
    color: var(--shape);
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
  }
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const RadioBox = styled.button<RadioBoxProps>`
  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : "transparent"};
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    color: var(--textTitle);
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
  }
`;
