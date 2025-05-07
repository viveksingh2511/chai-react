import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const handlelogout = () =>{
    navigate('/');
  }

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  return (
    <>
      <nav className="navbar navbar-light bg-light shadow-sm px-3">
        <div className="container-fluid relative">
          <a className="navbar-brand" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            📚 Library Panel
          </a>
          <form className="d-flex" ref={profileRef}>
            <button onClick={toggleVisibility} type="button" style={{ fontSize: '2rem', color: '#555' }}>
              <FaUserCircle />
            </button>
            {isVisible && (
              <div className='progile-detail rounded p-2 position-absolute bg-white shadow text-center' style={{ right: 0, top: '100%' }}>
                <div className='d-flex justify-content-center' style={{ fontSize: '4rem', color: '#555' }}>
                  <FaUserCircle />
                </div>
                <p className='text-center fw-bold mb-0'>Demo</p>
                <button onClick={handlelogout} className='btn btn-primary mt-4' type='button'>Sign Out</button>
              </div>
            )}
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;
