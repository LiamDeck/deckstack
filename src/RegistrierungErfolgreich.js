import React from 'react';
import { Link } from 'react-router-dom';
import './RegistrierungErfolgreich.css';

const RegistrierungErfolgreich = () => {
  return (
    <div className="registrierung-erfolgreich-wrapper">
      <div className="success-card">
        {/* Erfolgssymbol */}
        <div className="success-icon">
          <svg 
            width="80" 
            height="80" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="#4CAF50" 
              strokeWidth="2"
            />
            <path 
              d="M8 12L11 15L16 9" 
              stroke="#4CAF50" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Hauptüberschrift */}
        <h1 className="success-title">Registrierung erfolgreich!</h1>
        
        {/* Bestätigungstext */}
        <p className="success-message">
          Deine Registrierung wurde erfolgreich bestätigt. 
          Willkommen in unserer Community!
        </p>
        
        <p className="success-info">
          Du kannst dich jetzt mit deinen Anmeldedaten einloggen 
          und alle Features nutzen.
        </p>

        {/* Buttons */}
        <div className="button-group">
          <Link to="/" className="btn btn-primary">
            Zur Startseite
          </Link>
          <Link to="/login" className="btn btn-secondary">
            Zum Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrierungErfolgreich;
