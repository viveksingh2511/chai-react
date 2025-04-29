import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light shadow" style={{ width: '240px', height: '100vh' }}>
      <a href="/Dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <i className="bi bi-book fs-3 me-2"></i>
        <span className="fs-5 fw-semibold">Library</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/Dashboard" className="nav-link" end>
            <i className="bi bi-house-door me-2"></i>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/books" className="nav-link">
            <i className="bi bi-book-half me-2"></i>
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-book" className="nav-link">
            <i className="bi bi-plus-square me-2"></i>
            Add Book
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className="nav-link">
            <i className="bi bi-people me-2"></i>
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
