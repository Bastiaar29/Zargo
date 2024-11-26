import React from "react";
import "../styles/RRHH.css";
import logo from '../assets/logo.jpeg'
import "@fortawesome/fontawesome-free/css/all.min.css";


const RecursosHumanos = () => {
  return (
    <div className="recursos-humanos">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-left">
          <button className="menu-button">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="navbar-center">
          <h1 className="navbar-title">recursos humanos</h1>
        </div>
        <div className="navbar-right">
          <i className="fas fa-user-circle user-icon"></i>
          <span className="navbar-user">Nombre empleado</span>
        </div>
      </header>

      {/* Menú lateral */}
      <div className="sidebar">
        <ul className="sidebar-menu">
          <li>
            <i className="fas fa-home"></i> Inicio
          </li>
          <li>
            <i className="fas fa-chart-bar"></i> Gráficos
          </li>
          <li>
            <i className="fas fa-folder"></i> Documentos
          </li>
          <li>
            <i className="fas fa-calendar-alt"></i> Calendario
          </li>
          <li>
            <i className="fas fa-file-alt"></i> Reportes
          </li>
          <li>
            <i className="fas fa-bell"></i> Notificaciones
          </li>
          <li>
            <i className="fas fa-cog"></i> Configuración
          </li>
        </ul>
      </div>

      {/* Contenido principal */}
      <div className="main-content">
        {/* Barra de búsqueda */}
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Búsqueda"
          />
          <button className="filter-button">
            <i className="fas fa-filter"></i> Filtrar
          </button>
        </div>

        {/* Tabla */}
        <div className="data-table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>RUT</th>
                <th>Hora entrada/salida</th>
                <th>Estado</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="status-dot"></span> 3</td>
                <td>Michael</td>
                <td>1234568.9</td>
                <td>8:00 am/18:00 pm</td>
                <td>Inactivo</td>
                <td><button className="options-button">Opciones</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <img src="https://via.placeholder.com/100x40" alt="Logo Zargo" className="footer-logo" />
        </div>
        <div className="footer-center">
          <p>Copyright © 2024 Zargo. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <i className="fas fa-map-marker-alt location-icon"></i>
          <div className="footer-address">
            <p>Panamericana Norte</p>
            <p>Km. 800</p>
            <p>Copiapó</p>
            <p>Región de Atacama</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RecursosHumanos;