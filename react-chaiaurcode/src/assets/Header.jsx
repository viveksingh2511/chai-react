import React from 'react';

const Header = () => (
  <nav className="navbar navbar-light bg-light shadow-sm px-3">
    <div className="container-fluid">
      <a className="navbar-brand" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        📚 Library Panel
      </a>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search books..."
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
);

export default Header;
