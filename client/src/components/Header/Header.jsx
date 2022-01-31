import { Link } from 'react-router-dom';
import { Container, Content, Nav, NavListWrap, NavList, User } from './Header.style'
const Header = () => {
    return (
        <Container>
            <Content>
                {/* <Logo>
                    <a href="/home">
                        <img src="/images/home-logo.svg" alt="home-logo" />
                    </a>
                </Logo> */}
                <Nav>
                    <NavListWrap>
                        <NavList>
                            <Link to='/'><span>Home</span></Link>
                        </NavList>
                        <NavList>
                            <Link to='/article'><span>blogs</span></Link>
                        </NavList>
                        <NavList>
                            <Link to='/tags'><span>Tags</span></Link>
                        </NavList>
                        <NavList>
                            <a><span>business</span></a>
                        </NavList>
                        <NavList>
                            <a><span>tech</span></a>
                        </NavList>
                        <NavList>
                            <a><span>culture</span></a>
                        </NavList>
                        <NavList>
                            <a><span>sport</span></a>
                        </NavList>
                        <NavList>
                            <a><span>tourism</span></a>
                        </NavList>
                        <User>
                            <a>
                                {/* {user && user.photoURL ? <img src={user.photoURL} alt="nav-user" /> : <img src="/images/user.svg" alt="nav-user" />} */}
                                <span>Me
                                    {/* <img src="/images/down-icon.svg" alt="nav-down" /> */}
                                </span>
                            </a>
                        </User>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

export default Header