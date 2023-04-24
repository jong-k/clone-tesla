import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 30px;
  height: 30px;
  border: 1.5px solid #f8049c;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 10px auto;
  animation: ${rotation} 1s linear infinite;
`;
