import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h3>List of Credit Cards</h3>
      <hr />
      <div>
        <NavLink data-testid="home-link" to="/"  exact>
          Card List
        </NavLink>
        <NavLink data-testid="add-link" to="/add" >
          Add Credit Card
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
