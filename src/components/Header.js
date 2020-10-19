import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'


const Header=()=>
{

    return(<>

        <nav className="navbar navbar-expand-lg bg-l justify-content-end" >

            <ul className="navbar-nav p-2 m-2 ">

                <li className="nav-item">
                    <Link to="/Home" className="nav-link text-white active "> Home </Link>
                </li>
                <li className="nav-item">
                    <Link to="/About" className="nav-link text-white "> About </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Service" className="nav-link text-white "> Service </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contact" className="nav-link text-white "> Contact </Link>
                </li>

                <li className="nav-item dropdown ">
                    <Link id="navbar dropdown "  data-toggle="dropdown"
                    className="dropdown-toggle nav-link text-white " to="/login" > Account </Link>

                    <div className="dropdown-menu" >
                        <Link className="nav-link text-black active" to="/registration" 
                        style={{ fontSize:"26px"}}> Registration </Link>
                        <Link className="nav-link text-black active" to="/login" 
                        style={{ fontSize:"26px"}}> Log In </Link>  
                        <Link className="nav-link text-black active" to="/user" 
                        style={{ fontSize:"26px"}} > RestapiData </Link>
                    </div>
                </li>
                
            </ul>

        </nav>

    </>)

}


export default Header