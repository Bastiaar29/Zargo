import "../styles/App.css";
import React from 'react';
import logo from '../assets/logo.jpeg'; // Asegúrate de que la ruta sea correcta

const App = () => {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">Zargo integral</div>
        <div className="navbar-menu">
          <a href="#inicio" className="navbar-item">Inicio</a>
          <a href="#contacto" className="navbar-item">Contacto</a>
          <a href="#productos" className="navbar-item">Productos</a>
          <button className="navbar-login">login</button>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="main-content">
        {/* Aquí puedes agregar contenido adicional */}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <img src={logo} alt="Logo Zargo" className="footer-logo" />
          <br />
          <p>Copyright © 2024 Zargo. All rights reserved.</p>
        </div>
        <div className="footer-center">
        <div className="footer-info">
            <p><span className="icon">📍</span> Panamericana norte Km 800<br />Copiapó<br />Región de Atacama</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-info">
            <p><span className="icon">✉️</span> zargo@gmail.com</p>
          </div>
          <div className="footer-info">
            <p><span className="icon">📞</span>+56 52 123-456-789</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
