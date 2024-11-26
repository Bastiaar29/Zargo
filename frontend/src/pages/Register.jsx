import '../styles/Register.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    password1: '',
    password2: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Para redirigir al login después del registro

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar contraseñas
    if (formData.password1 !== formData.password2) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      // Enviar datos al backend Django
      const response = await fetch('http://localhost:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password1,
        }),
      });

      if (response.ok) {
        // Redirigir al login después del registro exitoso
        navigate('/login');
      } else {
        const data = await response.json();
        setError(data.error || 'Error al registrar');
      }
    } catch (err) {
      setError('Error de conexión con el servidor');
    }
  };

  return (
    <main className="container">
      <div className="row">
        <div className="col-md-4 offset-md-4 mt-5">
          <form onSubmit={handleSubmit} className="card card-body">
            <h1 className="text-center">Registro</h1>
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
              <label htmlFor="username">Nombre:</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                placeholder="Ingrese su nombre"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password1">Contraseña:</label>
              <input
                type="password"
                name="password1"
                id="password1"
                className="form-control"
                placeholder="Ingrese una contraseña"
                value={formData.password1}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password2">Confirmar Contraseña:</label>
              <input
                type="password"
                name="password2"
                id="password2"
                className="form-control"
                placeholder="Confirme su contraseña"
                value={formData.password2}
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-primary">Registrarse</button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Register;
