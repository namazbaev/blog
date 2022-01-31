import styled from 'styled-components'

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
const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    display: flex;
    cursor: pointer;
    align-items: center;
    text-transform: uppercase;
    flex-direction: column;
    justify-content: center;
    background: transparent;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`
const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: #fff;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
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
  &:hover {
    ${SignOut} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`
const Try = styled.li`
  display: flex;
  align-items: center;
  a {
    display: flex;
    cursor: pointer;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background: transparent;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    min-height: 42px;
    max-width: 100px;
    text-align: center;
    text-decoration: none;
    span {
      color: #5d3b09;
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover {
    text-decoration: underline;
  }
`

export { Container, Content, Logo, Nav, NavListWrap, NavList, User, Work, Try, SignOut }