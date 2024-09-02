import React from 'react';
import { formatearNumero } from '../helpers/format';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const total = 25000;
    const token  = true;
    

    return (
    <div>

        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">

            <Link to="/" className="navbar-brand text-light">

            <i className="fa-solid fa-pizza-slice"></i> Pizzeria Mamma Mia!</Link>

            <button className="navbar-toggler text-warning" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">

                <li className="nav-item">
                    <Link to="/Perfil" className="btn btn-outline-warning" role="button">Perfil</Link>
                </li>
                
                <li className="nav-item">
                    <Link to="/Login" className="btn btn-outline-warning" role="button">Ingresar</Link>
                </li>
                
                <li className="nav-item">
                    <Link to="/Register" className="btn btn-outline-warning">Registrarse</Link>
                </li>

            </ul>

            <div className="d-flex">
                <Link to="/Cart" className="btn btn-outline-warning">
                <i className="fa-solid fa-cart-shopping"></i>
                 Total: ${formatearNumero(total)}</Link>
            </div>
           </div>
        </div>
        </nav>  
    </div>
  );
};

export default Navbar;