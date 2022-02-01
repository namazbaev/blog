import http from '../../services/http';
import { useState, useEffect } from 'react';
import { navbarRoute } from '../../utils/json';
import { Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getUser, login, logout } from '../../redux/actions/authAction'
import { Container, Content, Nav, Link, NavListWrap, NavList } from './Header.style'
const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const token = localStorage.getItem('token')
    const user = useSelector(state => state.user);
    const isLogged = useSelector(state => state.user.isLogged);
    const [active, setActive] = useState(location.pathname);
    const userMe = () => {
        http.get('/user/me').then((res) => {
            dispatch(getUser({
                data: res.data,
                isLogged: true
            }))
        })
    }
    const signOut = () => {
        dispatch(logout())
        localStorage.clear()
    }
    useEffect(() => {
        if (token) {
            userMe()
        }
    }, []);
    return (
        <>
            <Container>
                <Content>
                    <Nav>
                        <NavListWrap>
                            {navbarRoute.map(({ id, path, title }) =>
                                <NavList key={id}><Link onClick={() => setActive(path)} active={active === path} to={path}>{title}</Link></NavList>)}
                            <NavList key={55}><Link onClick={signOut} to='/login'>{user?.isLogged ? "Logout" : 'Login'}</Link></NavList>
                        </NavListWrap>
                    </Nav>
                </Content>
            </Container>
            <Outlet />
        </>
    )
}
export default Header