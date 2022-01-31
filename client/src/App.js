import { Footer, Header } from "./components";
import { Container } from './components/Blog/Blog.style';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './utils/json'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          {routes.map(({ path, element }) => <Route key={path} path={path} element={element} />)}
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}
export default App;
