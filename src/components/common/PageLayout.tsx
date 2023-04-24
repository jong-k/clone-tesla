import styled from "styled-components";
import Header from "./Header.tsx";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

const Content = styled.main`
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
`;

export default PageLayout;
