import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../slices/UserSlice';
import { AppDispatch } from '../../Store';
import { clearPending } from './../../slices/PendingSlice';
import { clearResolved } from './../../slices/ResolvedSlice';

//import defaultImage from '../../deafultpic.jpg';


import { RootState } from '../../Store';

import './Navbar.css';

export const MNavbar: React.FC = () => {

    const dispatch:AppDispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearPending());
        dispatch(clearResolved());
    }

    const handleNavigate = () => {
            console.log("entering navigate");
        dispatch(clearPending());
        dispatch(clearResolved());
    }

    const user = useSelector((state:RootState) => state.user.user);

    return(
        <nav className="navbar">
            <ul className='nav-menu'>
                <li className="nav-item">
                    <Link to={"/managerHome"} onClick={handleNavigate} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/allResolved"} onClick={handleNavigate} className="nav-link">Resolved Requests</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/allPending"} onClick={handleNavigate} className="nav-link">Pending Requests</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/viewEmployees"} onClick={handleNavigate} className="nav-link">View Employees</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/loginPage"} onClick={handleLogout} className="nav-link">Logout</Link>
                </li>
            </ul>
        </nav>
    )
}