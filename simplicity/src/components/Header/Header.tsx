import React, { FC, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

type HeaderProps = {}

const Header: FC<HeaderProps> = () => {
  const [show, setToggleAbout] = useState(false)

  return (
    <header>
      <div className={`about bg-dark ${show ? 'show' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">
                Add some information about the album below, the author, or any
                other background context. Make it a few sentences long so folks
                can pick up some informative tidbits. Then, link them off to
                some social networking sites or contact information.
              </p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Menu</h4>
              <nav>
                <ul className="list-unstyled">
                  <li>
                    <NavLink
                      to="/"
                      activeClassName="active"
                      className="text-white"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bookmarks" className="text-white">
                      Bookmarks
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
              className="mr-2"
            >
              <path d="M6 22v-16h16v7.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-10.386h-20v20h10.189c3.163 0 9.811-7.223 9.811-9.614zm-10 1.614h-5v-1h5v1zm5-4h-10v1h10v-1zm0-3h-10v1h10v-1zm3-6h-19v19h-1v-20h20v1zm-2-2h-19v19h-1v-20h20v1z" />
            </svg>
            <strong>Simplicity</strong>
          </Link>
          <div className="bookmarks text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#fff"
            >
              <path d="M17 6v13.583l-3-2.634-3 2.634v-13.583h6zm2-2h-10v20l5-4.39 5 4.39v-20zm-2-2h-10v19h1v-18h9v-1zm-2-2h-10v19h1v-18h9v-1z" />
            </svg>
            <span>3</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setToggleAbout(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
