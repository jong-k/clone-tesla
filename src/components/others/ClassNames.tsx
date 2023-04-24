import styled from "styled-components";

interface PropType {
  classNames: "hi" | "bye";
}

const ClassNames = ({ classNames }: PropType) => {
  return (
    <Wrapper>
      <div className={classNames}></div>
      <div className={classNames}></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hi {
    width: 5rem;
    height: 0.25rem;
    background: #645cff;
    margin: 0 auto;
  }
  .bye {
    width: 7rem;
    height: 0.5rem;
    background: #8938ff;
    margin: 0 auto;
  }
`;

export default ClassNames;
