import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//import { logout } from '../../slices/UserSlice';
import { AppDispatch } from '../../Store';
//import { clearReimbursements } from '../../slices/ReimbursementSlice';

//import defaultImage from '../../deafultpic.jpg';

//import './Navbar.css';
import { RootState } from '../../Store';

import './Navbar.css';

export const Navbar: React.FC = () => {

    const dispatch:AppDispatch = useDispatch();

    /*const handleLogout = () => {
        dispatch(logout());
        dispatch(clearPosts());
    }*/

    const user = useSelector((state:RootState) => state.user.user);

    return(
        <nav className="navbar">
            <ul className='nav-menu'>
                <li className="nav-item">
                    <Link to={"/employeeHome"} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/userProfile"} className="nav-link">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/pendingPage"} className="nav-link">Pending Requests</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/resolvedPage"} className="nav-link">Resolved Requests</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/createPage"} className="nav-link">Resolved Requests</Link>
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
*/
}