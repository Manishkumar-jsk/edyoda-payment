import React from 'react'
import "./navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid navbar-items">
            <a className="navbar-brand logo" href="#"><img src="/images/EDYODA.png" alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Courses <span className='arrow-down'><img src='/images/arrow-down.png'></img></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Programs <span className='arrow-down'><img src='/images/arrow-down.png'></img></span></a>
                    </li>  
                </ul>
                <div className='navbar-right'>
                    <div className='navbar-search'>
                        <img src="/images/search.png"></img>
                    </div>
                    <div className='navbar-login'>
                        <p>Log in</p>
                    </div>
                    <button className="btn-join" type="submit">JOIN NOW</button>
                </div>
            </div>
        </div>
    </nav>
  )
}
