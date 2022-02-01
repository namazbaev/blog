import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid (rgba(0, 0, 0, 0.08));
  top: 0;
  left: 0;
  padding: 0;
  width: 100vw;
  z-index: 100;
  position: fixed;
  box-shadow: 0px 12px 8px -16px #111;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 5px;
  min-height: 100%;
  max-width: 1128px;
`
const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`
const Nav = styled.nav`
  margin: 0 auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    width: 100%;
    display: none;
  }
`
const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  padding: 0;
  list-style-type: none;
  .active {
    span:after {
      content: '';
      transform: scaleX(1);
      border-bottom: 1.5px solid var(--white, #fff);
      bottom: -5px;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`
const NavList = styled.div`
  display: flex;
  align-items: center;
`
const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;
  margin: 0 25px;
  color: ${({ active }) => (active ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.6)")};
`
const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
`

export { Container, Content, Logo, Nav, NavListWrap, NavList, Link, User }