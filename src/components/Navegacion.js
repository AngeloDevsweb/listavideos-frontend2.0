import { Link } from "react-router-dom";
import React from 'react'

const Navegacion = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/" >
                ListVid
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">

            
                <li className="nav-item">
                
                <Link className="nav-link"  to="/"> 
                    LISTA
                </Link>
                  
                </li>

                <li className="nav-item">
                
                <Link className="nav-link" to="/CrearLista"> 
                    CREATE LISTA
                </Link>
                  
                </li>

                

                
                
                
              </ul>
            </div>
          </div>
        </nav>
        </div>
    )
}

export default Navegacion
