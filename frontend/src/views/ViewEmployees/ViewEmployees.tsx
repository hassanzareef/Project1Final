import React, { useState, ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../UserProfile/UserProfile';
import { viewAllUsers } from '../../slices/UserSlice';
import { IUser } from '../../interfaces/IUser';
import { UserList } from '../../components/UserList/UserList';
import { MNavbar } from '../../components/Navbar/MNavbar';
import '../../Table.css';
//import './ManagerHome.css';
export const ViewEmployees: React.FC = () => {

    const userInfo = useSelector((state:RootState) => state.user);

    const navigator = useNavigate();
    const dispatch:AppDispatch = useDispatch();

    useEffect(() => {
        //If the user is not logged in, push them to the login page
        if(!userInfo.user){
            console.log("Navigating to login because not logged in");
            navigator("/login");
        } else if(!userInfo.allUsers) {
            dispatch(viewAllUsers());
        }
        console.log("Userstate: ", userInfo);
    }, [userInfo.allUsers]);

    return(
        <>
            <MNavbar />
            <div className="manager-page">
                <table className='table-class'>
                    <tbody>
                        <tr className='table-row-head'>
                            <th className='table-head'>User Id</th>
                            <th className='table-head'>Username</th>
                            <th className='table-head'>Full Name</th>
                        </tr>
                        {userInfo.allUsers ? userInfo.allUsers.map((users:IUser) => {
                        return <tr className='table-row'><UserList {...users} key={users.userId} /></tr>
                        }) :
                        <></>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )

}