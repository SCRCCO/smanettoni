import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    // Effettua la validazione dei campi di input
    if (!formData.email) {
      validationErrors.email = 'Inserisci un indirizzo email valido';
    }

    if (!formData.password) {
      validationErrors.password = 'Inserisci una password valida';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Se la validazione è passata, esegui il codice per il login
      // Ad esempio, puoi effettuare una chiamata API al server per autenticare l'utente

      // Esegui il login qui...
      // Supponiamo che l'utente abbia effettuato l'accesso con successo

      // Chiama la funzione onLogin per impostare isLoggedIn a true e reindirizzare l'utente alla pagina Home
      onLogin();
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Accedi</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit" className="login-button">Accedi</button>
      </form>
      <div className="login-options">
        <button className="register-button">Registrati</button>
        <div className="login-social">
          <button className="google-button">Accedi con Google</button>
          <button className="facebook-button">Accedi con Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
