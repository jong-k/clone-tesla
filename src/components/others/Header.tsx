import BasicTitle from "./BasicTitle.styled.ts";
import { DefaultButton, HipsterButton } from "./Button.styled.ts";
import styled from "styled-components";

interface activeType {
  active: boolean;
}

const Header = () => {
  return (
    <CustomContainer active>
      <BasicTitle>styled components</BasicTitle>
      <BasicTitle>styled components</BasicTitle>
      <DefaultButton>Click me</DefaultButton>
      <HipsterButton>Click me</HipsterButton>
    </CustomContainer>
  );
};

const CustomContainer = styled.div<activeType>`
  background: ${(props) => {
    return props.theme.color.main;
  }};

  color: ${(props) => {
    if (props.active) {
      return "white";
    }
    return "#eee";
  }};
`;

export default Header;
