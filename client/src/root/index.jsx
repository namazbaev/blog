// import { Header } from "../components";
import { lazy, Suspense } from 'react';
import { publicRoute } from "../utils/json";
import { Container } from '../pages/Blog/Blog.style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Header = lazy(() => import('../components/Header/Header'));
const Root = () => {
  return (
    <Suspense fallback={<h5>Loading...</h5>}>
      <Container>
        <BrowserRouter>
          <Header />
          <Routes>
            {publicRoute.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Routes>
        </BrowserRouter>
      </Container>
    </Suspense>
  );
}
export default Root;
