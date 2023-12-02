import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import MENU from "../assets/icons8-cardápio-50.png";
import X from "../assets/icons8-x-64.png";

const Header = styled.header`
  width: 100%;
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
  border-bottom: 1px solid #23dafb30;
  `;

const Content = styled.div`
  max-width: 1366px;
  width: 100%;
  margin: 0 auto;
  padding: 0 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media screen and (max-width: 768px) {
    padding: 0 32px;
  }
  @media screen and (max-width: 480px) {
    padding: 0 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: fit-content;

  ul {
    display: flex;
    gap: 20px;
    flex-direction: row;
    list-style: none;
    position: relative;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: fit-content;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Linke = styled(NavLink)`
  color: #23dafb;
  text-decoration:none;
  margin: 0 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #fff;
    scale: 1.1;
  }
  &.active {
    filter: drop-shadow(0 0 5px #23dafb);
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-decoration:none;
  margin: 0 10px;
`;

const Mobile = styled.button`
  display: none;
  @media screen and (max-width: 768px) {
    
    display: block;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const animacao = keyframes`
  from {
    display: none;
    height: 0;
  }
  to {
    display: flex;
    height: fit-content;
  }
`;

const Menu = styled.nav`
  display: none;
  animation: ${animacao} 0.5s ease-in-out;
  @media screen and (max-width: 768px) {
    display: ${({ aberto }) => (aberto == "aberto" ? "flex" : "none")};
    background-color: #282c34;
    padding: 20px;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      gap: 20px;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
    }
  }
`;

const Index = () => {
  const [menu, setMenu] = useState('fechado');

  useEffect(() => {
    const esconderMenu = () => {
      if (window.innerWidth > 768 && menu) {
        setMenu('fechado');
      }
    };

    window.addEventListener("resize", esconderMenu);
    return () => window.removeEventListener("resize", esconderMenu);
  }
  );

  const alteraMenu = () => {
    menu == 'aberto'
      ? setMenu('fechado')
      : setMenu('aberto');
  }

  return (
    <>
      <Header>
        <Content>
          <Logo>&lt;Argel/&gt;</Logo>
          <Mobile onClick={alteraMenu}>
            <img src={menu == 'aberto' ? X : MENU} alt="" />
          </Mobile>
          <Nav>
            <ul>
              <li><Linke to="/">Home</Linke></li>
              <li><Linke to="/about">Sobre</Linke></li>
              <li><Linke to="/projetos">Projetos</Linke></li>
            </ul>
          </Nav>
        </Content>

      </Header>
      {menu &&
        <Menu aberto={menu}>

          <ul>
            <li><Linke to="/">Home</Linke></li>
            <li><Linke to="/about">Sobre</Linke></li>
            <li><Linke to="/projetos">Projetos</Linke></li>
          </ul>
        </Menu>
      }

    </>
  );
};

export default Index;