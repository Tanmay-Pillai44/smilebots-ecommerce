import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ProductPage from './components/ProductPage/ProductPage';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
