import './App.css';
import { Routes, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import ProductsView from './views/ProductsView';


function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<ProductsView/>} />
      </Routes>
    </Container>
  );
}
export default App;
