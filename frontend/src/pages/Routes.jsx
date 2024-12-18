import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import Register from './Register';
import RecursosHumanos from "./RecursosHumanos";
import RegistrarAsistencia from './Registrarasistencia';


function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/recursos-humanos" element={<RecursosHumanos />} />
        <Route path="/rasistencia" element={<RegistrarAsistencia />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
