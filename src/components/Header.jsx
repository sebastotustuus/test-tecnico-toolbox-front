import React from 'react';
import useTransform from '../hooks/useTransform';

const Header = () => {
  const [handleChange, handleFetch] = useTransform();
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid" style={{ justifyContent: 'center' }}>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Ingresa un texto a convertir"
            aria-label="Search"
            {...handleChange}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={handleFetch}
          >
            CONVERTIR
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
