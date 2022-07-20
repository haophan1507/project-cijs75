import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import ListProduct from './pages/ListProduct';
import DetailProduct from './pages/DetailProduct';

function App() {
  return (
    <Routes>
      {/* <Route element={<PrivateRoute />}> */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product/:id" element={<DetailProduct />} />
      {/* </Route> */}

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
