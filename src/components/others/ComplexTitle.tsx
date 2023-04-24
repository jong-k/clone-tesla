import styled from "styled-components";
import ClassNames from "./ClassNames.tsx";

interface PropType {
  title: string;
}

const ComplexTitle = ({ title }: PropType) => {
  return (
    <>
      <Wrapper>
        <h1>{title}</h1>
        <div></div>
        <div className="underline"></div>
      </Wrapper>
      <ClassNames classNames="hi" />
      <ClassNames classNames="bye" />
      <ClassNames classNames="hi" />
    </>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }

  div {
    width: 5px;
    height: 5px;
    background: tomato;
    margin: 0 auto;
  }

  .underline {
    width: 5rem;
    height: 0.25rem;
    background: #645cff;
    margin: 0 auto;
  }
`;

export default ComplexTitle;
