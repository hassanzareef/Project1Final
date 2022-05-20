import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../slices/UserSlice';
import { AppDispatch } from '../../Store';
import { clearPending } from './../../slices/PendingSlice';
import { clearResolved } from './../../slices/ResolvedSlice';

//import defaultImage from '../../deafultpic.jpg';

//import './Navbar.css';
import { RootState } from '../../Store';

import './Navbar.css';

export const Navbar: React.FC = () => {

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
                    <Link to={"/employeeHome"} onClick={handleNavigate} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/userProfile"} onClick={handleNavigate} className="nav-link">Profile</Link>
                </li>
                
                <li className="nav-item">
                    <Link to={"/createPage"} onClick={handleNavigate} className="nav-link">Create Requests</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/loginPage"} onClick={handleLogout} className="nav-link">Logout</Link>
                </li>
            </ul>
        </nav>
    )
/*

<li className="nav-item">
                    <Link to={`/user/${user?.userId}`} className="nav-link">Profile</Link>
                </li>

<li className="logout">
                    <Link to={"/login"} className="nav-link">
                        <button className="logout-btn" onClick={handleLogout}>Logout</button>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/pendingPage"} className="nav-link">Pending Requests</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/resolvedPage"} className="nav-link">Resolved Requests</Link>
                </li>
*/
}