import React, { useState } from 'react';
import '../style/navtabs.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NavTabs({ currentPage, handlePageChange }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav className='nav nav-tabs bg-dark sticky-top'>

      <div className='col-12 navDiv d-md-none'>
        <button className='nav-link sandwichBox' onClick={toggleMenu}>
          
          <FontAwesomeIcon
                  icon={faNavicon}

                />
        </button>
      </div>


      <div className={`col-12 navDiv ${showMenu ? 'd-flex flex-column ' : 'd-none'} d-md-flex justify-content-end pe-5`}>
        <Link
          to="/My-React-Portfolio"
  
          id='nav-link'
        >
          Home
        </Link>
        <Link
          to="/projects"
          
          id='nav-link'
        >
          Projects
        </Link>
        <Link
          to="/resume"
      
          id='nav-link'
        >
          Resume
        </Link>
        <Link
          to="/contact"

          id='nav-link'
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavTabs;

