import React from 'react';
import NavLink from '../../atmos/NavLink/NavLink';

const NavBar = () => (
  <nav className="nav-bar">
    <ul>
      <NavLink to="/home" text="Inicio" />
      <NavLink to="/carreras" text="Carreras" />
    </ul>
  </nav>
)
export default NavBar;
