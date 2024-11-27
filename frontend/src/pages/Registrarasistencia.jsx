import React from "react";


const RegistrarAsistencia = () => {
  return (
    <div className="registrar-asistencia">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-left"></div>
        <div className="navbar-center">
          <h1 className="navbar-title">Gestión de Asistencia Garita</h1>
        </div>
        <div className="navbar-right">
          <i className="fas fa-user-circle user-icon"></i>
          <span className="navbar-user">Nombre empleado</span>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="main-content">
        <p className="instruction-text">
          Para registrar la asistencia del trabajador se requiere escanear el código QR del Carnet de identidad
        </p>
        <div className="form-section">
          <div className="form-container">
            <label htmlFor="rut">RUT</label>
            <input type="text" id="rut" placeholder="Ingrese el RUT" />
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" placeholder="Ingrese el Nombre" />
            <button className="submit-button">Boton</button>
          </div>
          <div className="qr-section">
            <img
              src={logo}
              alt="Carnet con código QR"
              className="qr-image"
            />
          </div>
          <div className="scanner-box"></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>Copyright © 2024 Zargo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default RegistrarAsistencia;
