import React, { ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar/Navbar';
import { MNavbar } from '../../components/Navbar/MNavbar';
import { RootState, AppDispatch } from '../../Store';
import { useNavigate } from 'react-router-dom';
//import { getUserDetails } from '../../slices/UserSlice';

export const UserProfile:React.FC = () => {

    const profile = useSelector((state:RootState) => state.user);

    const dispatch: AppDispatch = useDispatch();

    const navigator = useNavigate();

    useEffect(()=> {
        if(!profile.user){
            console.log("Navigating to login because not logged in");
            navigator("/login");
        }
        console.log("Current App State", profile);
    },[profile]);

    const goToEditProfile = (event:React.MouseEvent<HTMLButtonElement>) => {
        navigator('/editProfile');
    };

    return (
        <div>
            {profile.user?.role == 1 ? <Navbar /> : <MNavbar /> }
            <h1>Profile of {profile.user?.first} {profile.user?.last}</h1>
            <h2>Email : {profile.user?.email}</h2>
            <h2>Username : {profile.user?.username}</h2>
            <h2>Role : {
            
            profile.user?.role == 1 ? "Employee" : "Manager"
            
            }</h2>
            <br></br>
            <button className="edit-profile-btn" onClick={goToEditProfile}>Edit</button>
        </div>
    )
}