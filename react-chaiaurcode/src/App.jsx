import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from "./assets/Header";
import Sidebar from "./assets/Sidebar";
import Dashboard from './assets/pages/Dashboard';
import Books from './assets/pages/Books';
import AddBook from './assets/pages/AddBook';
import Login from './assets/pages/login';

function App() {
  const location = useLocation();

  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && <Header />}
      <div className="d-flex" style={{ height: '90.8vh', overflow: 'hidden' }}>
        {!isLoginPage && <Sidebar />}
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/books" element={<Books />} />
            <Route path="/add-book" element={<AddBook />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
