import React, { ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar/Navbar';
import { RootState, AppDispatch } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { getUserDetails } from '../../slices/UserSlice';
import { useParams } from 'react-router-dom';

export const UserProfile:React.FC = () => {

    const profile = useSelector((state:RootState) => state.user);

    const dispatch: AppDispatch = useDispatch();

    const { id } = useParams();

    useEffect(()=> {
        console.log("Get the information about user: ", id);
        if(id && !profile.currentProfile){
            dispatch(getUserDetails(id));
        }
        console.log("Current App State", profile);
    },[profile]);

    return (
        <div>
            <Navbar />
            <h1>Profile of {profile.currentProfile?.first} {profile.currentProfile?.last}</h1>
            <h2>Email : {profile.currentProfile?.email}</h2>
            <h2>Username : {profile.currentProfile?.username}</h2>
            <h2>Role : {
            
            profile.currentProfile?.role == 1 ? "Employee" : "Manager"
            
            
            }</h2>
        </div>
    )

}