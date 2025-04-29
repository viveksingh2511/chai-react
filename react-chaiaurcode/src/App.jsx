import React from 'react';
import Header from "./assets/Header";
import Sidebar from "./assets/Sidebar";
import { Routes, Route } from 'react-router-dom';
import Dashboard from './assets/pages/Dashboard';
import Books from './assets/pages/Books';
import AddBook from './assets/pages/AddBook';
import Users from './assets/pages/Users';

function App() {
  return (
    <>
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/books" element={<Books />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
