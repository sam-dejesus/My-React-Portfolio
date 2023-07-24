import React, { useState } from 'react';
import '../style/navtabs.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";

function NavTabs({ currentPage, handlePageChange }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className='nav nav-tabs bg-dark sticky-top'>
      {/* Sandwich menu for smaller screens */}
      <div className='col-12 navDiv d-md-none'>
        <button className='nav-link' onClick={toggleMenu}>
          {/* Add your sandwich menu icon here, e.g., three horizontal lines */}
          <FontAwesomeIcon
                  icon={faNavicon}

                />
        </button>
      </div>

      {/* Regular navigation links for larger screens */}
      <div className={`col-12 navDiv ${showMenu ? 'd-block' : 'd-none'} d-md-flex justify-content-end`}>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          id='nav-link'
        >
          Home
        </a>
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          id='nav-link'
        >
          Projects
        </a>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          id='nav-link'
        >
          Resume
        </a>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          id='nav-link'
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default NavTabs;

