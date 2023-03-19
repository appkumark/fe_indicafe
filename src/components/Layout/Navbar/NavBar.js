import React from 'react'
import { faBars, faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Navbar.css'
import logo from '../../../assets/images/dosa.jpg'

const NavBar = () => {
  const renderNavbar = () => (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src={logo} alt="Logo..." className="logo" />
          <label
            style={{
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            ind<span className='logo-label'>iC</span>af&egrave;
          </label>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Browse
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Sign In
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Register
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/">
                Cart
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <div className="input-group">
              <input
                class="form-control"
                type="text"
                placeholder="Search ..."
                aria-label="Search"
                size="40"
              />
              <div className="input-group-append">
                <button
                  class="btn btn-outline-success"
                  type="submit"
                  style={{
                    background: 'var(--primary-green)',
                    color: 'var(--primary-white',
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>
  )
  return <>{renderNavbar()}</>
}

export default NavBar
