import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;