import { useContext, useState } from "react";
import styled, { ThemeContext } from "styled-components";
import { NavLink } from "react-router-dom";
import Toggle from "./Toggle";

interface MenuProps {
  open: boolean;
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, toggleTheme } = useContext(ThemeContext); // theme provider 에서 전달한 context 사용

  return (
    <HeaderWrapper>
      <MobileMenuIcon
        onClick={() => {
          setMenuOpen((prev) => !prev);
        }}
      >
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <Toggle isActive={id === "dark"} onToggle={toggleTheme} />
      </Menu>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(
    to right,
    ${(p) => p.theme.colors.primary},
    ${(p) => p.theme.colors.secondary}
  );
  border-bottom: 3px solid ${(p) => p.theme.colors.secondary};
`;

const Menu = styled.nav<MenuProps>`
  display: ${(p) => (p.open ? "block" : "none")};
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  border-bottom: 3px solid ${(p) => p.theme.colors.secondary};
  background: white;

  & .active {
    font-weight: bold;
  }

  @media (min-width: ${(p) => p.theme.breakPoint}) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
  }
`;

// 스타일 오버라이딩
const StyledLink = styled(NavLink)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  padding: 5px;
  width: 30px;
  min-width: 30px;

  > div {
    height: 3px;
    width: 100%;
    background: black;
    margin: 5px 0;
    border-radius: 5px;
  }

  @media (min-width: ${(p) => p.theme.breakPoint}) {
    display: none;
  }
`;

export default Header;
