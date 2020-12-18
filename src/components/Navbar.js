import React from 'react';
import { Link } from 'react-router-dom';
import { getToken, removeUserSession, setUserSession } from '../Utils/Common';

const Navbar = () => {
  var isLogged = false


      return (
        <div className="Navbar">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                <Link to={"/"} style={{ textDecoration: 'none', color: 'white' }}>
                APPLI
                </Link>
                <button className="navbar-toggler" type="button" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    { isLogged 
                        ?<Link to={"/logout"} style={{ textDecoration: 'none', color: 'white'}}>
                        LOGOUT
                        </Link>
                        : <Link to={"/login"} style={{ textDecoration: 'none', color: 'white' }}>
                        LOGIN
                        </Link>
                    }
                </button>
                </div>
            </nav>
        </div>
      );
    }
  
  
  export default Navbar;