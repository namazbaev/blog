// import { Header } from "../components";
import { lazy, Suspense } from 'react';
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import { useSelector } from 'react-redux';
import { Container } from '../pages/Blog/Blog.style';
import { navbarRoute, publicRoute } from "../utils/json";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Header = lazy(() => import('../components/Header/Header'));
const Root = () => {
  const user = useSelector(state => state.user.isLogged);
  return (
    <Suspense fallback={<h5>Loading...</h5>}>
      <Container>
        <BrowserRouter>
          <Header />
          <Routes>
            <>
              <Route element={<Header />}>
                {navbarRoute.map(({ id, path, Element }) => (
                  <Route key={id} path={path} element={<Element />} />
                ))}
              </Route>
              {!user && publicRoute.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))}</>

          </Routes>
        </BrowserRouter>
      </Container>
    </Suspense>
  );
}
export default Root;
