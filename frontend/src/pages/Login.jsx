import '../styles/Login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importar useNavigate

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Inicializar useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simular el envío de datos al backend
      const response = await fetch('/signin/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Redirigir al usuario a la página de inicio después del login exitoso
        navigate('/inicio');
      } else {
        const data = await response.json();
        setError(data.error || 'Error al iniciar sesión');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
    }
  };

  return (
    <main className="container">
      <div className="row">
        <section className="col-md-4 offset-md-4 mt-5">
          <form onSubmit={handleSubmit} className="card card-body">
            <h1 className="text-center">Inicio de Sesión</h1>
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
              <label htmlFor="username">Nombre:</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                placeholder="Ingrese su nombre"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn btn-primary">Iniciar Sesión</button>

            <p>
              <Link to="/register" className="text-decoration-none">
                Regístrate aquí
              </Link>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Login;
