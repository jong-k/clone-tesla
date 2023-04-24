import styled from "styled-components";

interface StyledTitleType {
  color: string;
}

const StyledTitle = styled.h1<StyledTitleType>`
  text-align: center;
  text-transform: capitalize;
  color: ${({ special }) => (special ? "tomato" : "blue")};
`;

export default StyledTitle;
