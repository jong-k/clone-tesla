import styled, { css } from "styled-components";

interface ButtonProps {
  secondary?: boolean;
  large?: boolean;
}

export const Button = styled.button<ButtonProps>`
  color: white;
  background: ${(p) =>
    p.secondary === true ? p.theme.colors.secondary : p.theme.colors.primary};
  font-weight: bold;
  ${(p) =>
    p.large === true
      ? css`
          padding: 16px;
          border-radius: 5px;
          font-size: 1em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1.5em;
        `};
  border-radius: 4px;
  box-shadow: none;
  font-size: 1em;
  border: none;
  width: 100%;
  display: block;
  cursor: pointer;
  white-space: nowrap;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;
